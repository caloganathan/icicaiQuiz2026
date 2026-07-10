/* =============================================================================
   ICAI Indonesia Chapter — Chartered Accountants' Day Quiz 2026
   Interactive quiz engine (vanilla JS, no build step)

   HOW IT PLAYS
   The host projects one shared screen. For each question the participant's
   choice is entered — by clicking an option card or pressing its letter —
   which locks the answer, scores it, and reveals the result:
     • Correct  -> "You are RIGHT!"  (chosen card glows gold, points awarded)
     • Wrong    -> "Not quite…"      (chosen card marked ✗, correct card glows)
   A running score (points weighted by difficulty) and a streak are shown, and
   a final rank is given on the closing screen.

   CONTROLS
     A / B / C / D  or  1–4   -> lock in the participant's answer & score it
     Space / Enter            -> reveal the answer WITHOUT scoring (host shows it)
     ->  (Right)              -> next question
     <-  (Left)               -> previous question
     R                        -> restart (resets the score)
     M                        -> mute / unmute sound
     Click an option          -> same as pressing its letter
   ============================================================================= */

(function () {
  "use strict";

  var questions = (typeof QUIZ_QUESTIONS !== "undefined") ? QUIZ_QUESTIONS : [];
  var LETTERS = ["A", "B", "C", "D"];

  // Points by difficulty — gives harder questions higher stakes.
  var POINTS = { easy: 1, medium: 2, hard: 3 };
  function pointsFor(q) { return POINTS[q.difficulty] || 1; }
  var MAX_POINTS = questions.reduce(function (s, q) { return s + pointsFor(q); }, 0);

  // Per-question result: null (untouched) | { chosen, correct, scored, points }
  var results = questions.map(function () { return null; });

  var state = {
    phase: "splash",   // "splash" | "question" | "closing"
    index: 0,
    locked: false,     // has the current question been answered/revealed?
    muted: false
  };

  // ---- Element refs -------------------------------------------------------
  var el = {
    splash:     document.getElementById("screen-splash"),
    question:   document.getElementById("screen-question"),
    closing:    document.getElementById("screen-closing"),
    category:   document.getElementById("q-category"),
    difficulty: document.getElementById("q-difficulty"),
    scoreChip:  document.getElementById("q-score"),
    streakChip: document.getElementById("q-streak"),
    counter:    document.getElementById("q-counter"),
    text:       document.getElementById("q-text"),
    options:    document.getElementById("q-options"),
    feedback:   document.getElementById("q-feedback"),
    verdict:    document.getElementById("q-verdict"),
    verdictText:document.getElementById("q-verdict-text"),
    explText:   document.getElementById("q-explanation-text"),
    source:     document.getElementById("q-source"),
    progress:   document.getElementById("progress"),
    progressFill:document.getElementById("progress-fill"),
    soundInd:   document.getElementById("sound-indicator"),
    soundIcon:  document.getElementById("sound-icon"),
    closingRank:document.getElementById("closing-rank"),
    closingScore:document.getElementById("closing-score"),
    closingMax: document.getElementById("closing-max"),
    closingDetail:document.getElementById("closing-detail")
  };

  // ---- Derived score ------------------------------------------------------
  function totalScore() {
    return results.reduce(function (s, r) {
      return s + (r && r.correct ? r.points : 0);
    }, 0);
  }
  function numCorrect() {
    return results.reduce(function (n, r) { return n + (r && r.correct ? 1 : 0); }, 0);
  }
  // Current streak = trailing run of correct answers up to the current question.
  // A wrong answer resets it; an untouched / reveal-only question doesn't break it.
  function currentStreak() {
    var run = 0;
    for (var j = 0; j <= state.index && j < results.length; j++) {
      var r = results[j];
      if (r && r.correct) run++;
      else if (r && r.scored && !r.correct) run = 0;
    }
    return run;
  }

  // ---- Sound (Web Audio; no external files) -------------------------------
  var audioCtx = null;
  function ensureAudio() {
    if (state.muted) return null;
    try {
      if (!audioCtx) {
        var Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return null;
        audioCtx = new Ctx();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    } catch (e) { return null; }
  }
  function tone(freqs, dur, type) {
    var ctx = ensureAudio();
    if (!ctx) return;
    var t0 = ctx.currentTime;
    freqs.forEach(function (f, i) {
      var osc = ctx.createOscillator();
      var g = ctx.createGain();
      osc.type = type || "sine";
      osc.frequency.value = f;
      var start = t0 + i * 0.09;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(g); g.connect(ctx.destination);
      osc.start(start); osc.stop(start + dur + 0.02);
    });
  }
  function soundCorrect() { tone([659.25, 987.77], 0.28, "sine"); }        // E5 -> B5 chime
  function soundWrong()   { tone([196.00, 155.56], 0.32, "sawtooth"); }    // low descending buzz
  function soundReveal()  { tone([440.0], 0.16, "triangle"); }             // neutral blip
  function updateSoundIndicator() {
    el.soundIcon.textContent = state.muted ? "♪̶" : "♪";
    el.soundInd.classList.toggle("is-muted", state.muted);
    el.soundInd.classList.add("is-flash");
    setTimeout(function () { el.soundInd.classList.remove("is-flash"); }, 900);
  }

  // ---- Screen switching ---------------------------------------------------
  function showScreen(next) {
    [el.splash, el.question, el.closing].forEach(function (s) { s.classList.remove("is-active"); });
    next.classList.add("is-active");
  }

  function refreshHud() {
    el.scoreChip.textContent = "Score " + totalScore();
    var streak = currentStreak();
    if (streak >= 2) {
      el.streakChip.hidden = false;
      el.streakChip.textContent = "🔥 " + streak;
    } else {
      el.streakChip.hidden = true;
    }
  }

  function setProgress() {
    var visible = state.phase === "question";
    el.progress.classList.toggle("is-visible", visible);
    el.progress.setAttribute("aria-hidden", visible ? "false" : "true");
    if (visible) {
      el.progressFill.style.width = (((state.index + 1) / questions.length) * 100) + "%";
    }
  }

  // ---- Rendering a question ----------------------------------------------
  function renderQuestion() {
    var q = questions[state.index];
    if (!q) return;

    el.category.textContent = q.category || ("Book " + q.book);
    var diff = q.difficulty || "medium";
    el.difficulty.textContent = diff.charAt(0).toUpperCase() + diff.slice(1)
      + " · " + pointsFor(q) + (pointsFor(q) === 1 ? " pt" : " pts");
    el.difficulty.className = "q-difficulty q-difficulty--" + diff;
    el.counter.textContent = "Question " + (state.index + 1) + " of " + questions.length;
    el.text.textContent = q.question;

    el.options.innerHTML = "";
    q.options.forEach(function (opt, i) {
      var li = document.createElement("li");
      li.className = "option";
      li.setAttribute("data-index", String(i));
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");

      var letter = document.createElement("span");
      letter.className = "option__letter";
      letter.textContent = LETTERS[i];

      var txt = document.createElement("span");
      txt.className = "option__text";
      txt.textContent = opt;

      var mark = document.createElement("span");
      mark.className = "option__mark";

      li.appendChild(letter);
      li.appendChild(txt);
      li.appendChild(mark);
      li.addEventListener("click", function (e) {
        e.stopPropagation();
        chooseAnswer(i);
      });
      el.options.appendChild(li);
    });

    // Reset feedback UI
    el.feedback.hidden = true;
    el.verdictText.textContent = "";
    el.explText.textContent = "";
    el.source.textContent = "";
    state.locked = false;

    // If this question was already answered/revealed, restore that state.
    var prior = results[state.index];
    if (prior) {
      applyReveal(prior.chosen, prior.scored);
    }

    refreshHud();
    setProgress();
  }

  // ---- Reveal helper (used for scored picks, host reveals, and restore) ----
  function applyReveal(chosenIndex, scored) {
    var q = questions[state.index];
    var cards = el.options.querySelectorAll(".option");
    cards.forEach(function (card) {
      var i = parseInt(card.getAttribute("data-index"), 10);
      card.classList.remove("is-correct", "is-incorrect", "is-chosen-wrong");
      var mark = card.querySelector(".option__mark");
      if (mark) mark.textContent = "";

      if (i === q.answerIndex) {
        card.classList.add("is-correct");
        if (mark) mark.textContent = "✓";
      } else if (i === chosenIndex) {
        card.classList.add("is-chosen-wrong");
        if (mark) mark.textContent = "✗";
      } else {
        card.classList.add("is-incorrect");
      }
    });

    // Verdict banner
    el.verdict.classList.remove("verdict--right", "verdict--wrong", "verdict--neutral");
    if (chosenIndex == null) {
      el.verdict.classList.add("verdict--neutral");
      el.verdictText.textContent = "Answer: " + LETTERS[q.answerIndex];
    } else if (chosenIndex === q.answerIndex) {
      el.verdict.classList.add("verdict--right");
      el.verdictText.textContent = "You are RIGHT!  +" + pointsFor(q) +
        (pointsFor(q) === 1 ? " point" : " points");
    } else {
      el.verdict.classList.add("verdict--wrong");
      el.verdictText.textContent = "Not quite — the answer is " + LETTERS[q.answerIndex];
    }

    el.explText.textContent = q.explanation || "";
    el.source.textContent = q.source ? ("Source: " + q.source) : "";
    el.feedback.hidden = false;
    state.locked = true;
  }

  // ---- Participant picks an option (scored) -------------------------------
  function chooseAnswer(i) {
    if (state.phase !== "question" || state.locked) return;
    var q = questions[state.index];
    var correct = (i === q.answerIndex);

    results[state.index] = {
      chosen: i,
      correct: correct,
      scored: true,
      points: pointsFor(q)
    };

    applyReveal(i, true);
    refreshHud();

    // Feedback flash + sound
    var body = document.querySelector(".q-body");
    body.classList.remove("flash-right", "flash-wrong");
    void body.offsetWidth; // reflow to restart animation
    body.classList.add(correct ? "flash-right" : "flash-wrong");
    if (correct) soundCorrect(); else soundWrong();
  }

  // ---- Host reveals answer without scoring --------------------------------
  function revealUnscored() {
    if (state.phase !== "question" || state.locked) return;
    // Record as revealed-only so revisits restore it, but it earns nothing.
    results[state.index] = { chosen: null, correct: false, scored: false, points: 0 };
    applyReveal(null, false);
    refreshHud();
    soundReveal();
  }

  // ---- Navigation ---------------------------------------------------------
  function goToQuestion(index) {
    state.phase = "question";
    state.index = Math.max(0, Math.min(index, questions.length - 1));
    renderQuestion();
    showScreen(el.question);
  }

  function goToClosing() {
    state.phase = "closing";
    setProgress();
    renderClosing();
    showScreen(el.closing);
  }

  function next() {
    if (state.phase === "splash") { goToQuestion(0); return; }
    if (state.phase === "question") {
      if (state.index < questions.length - 1) goToQuestion(state.index + 1);
      else goToClosing();
    }
  }

  function prev() {
    if (state.phase === "question") {
      if (state.index > 0) goToQuestion(state.index - 1);
      else { state.phase = "splash"; setProgress(); showScreen(el.splash); }
      return;
    }
    if (state.phase === "closing") goToQuestion(questions.length - 1);
  }

  function restart() {
    for (var i = 0; i < results.length; i++) results[i] = null;
    state.phase = "splash";
    state.index = 0;
    state.locked = false;
    refreshHud();
    setProgress();
    showScreen(el.splash);
  }

  // ---- Closing screen -----------------------------------------------------
  function rankFor(pct) {
    if (pct >= 0.9)  return "Grandmaster of the Ledger";
    if (pct >= 0.75) return "Senior Partner";
    if (pct >= 0.6)  return "Chartered Achiever";
    if (pct >= 0.4)  return "Rising Associate";
    if (pct > 0)     return "Articled Trainee";
    return "Thanks for playing";
  }
  function renderClosing() {
    var score = totalScore();
    var pct = MAX_POINTS ? score / MAX_POINTS : 0;
    el.closingScore.textContent = String(score);
    el.closingMax.textContent = String(MAX_POINTS);
    el.closingRank.textContent = rankFor(pct);
    el.closingDetail.textContent = numCorrect() + " of " + questions.length +
      " answered correctly  ·  " + Math.round(pct * 100) + "%";
  }

  // ---- Input handling -----------------------------------------------------
  function onKey(e) {
    var k = e.key;

    // Letter / number selection (A-D or 1-4)
    var letterIdx = LETTERS.indexOf(k.toUpperCase());
    var numIdx = (k >= "1" && k <= "4") ? (parseInt(k, 10) - 1) : -1;
    var pick = letterIdx !== -1 ? letterIdx : numIdx;
    if (pick !== -1 && state.phase === "question") {
      e.preventDefault();
      chooseAnswer(pick);
      return;
    }

    switch (k) {
      case " ":
      case "Spacebar":
      case "Enter":
        e.preventDefault();
        if (state.phase === "splash") next();
        else if (state.phase === "question") {
          if (!state.locked) revealUnscored(); else next();
        } else restart();
        break;
      case "ArrowRight": e.preventDefault(); next(); break;
      case "ArrowLeft":  e.preventDefault(); prev(); break;
      case "r": case "R": e.preventDefault(); restart(); break;
      case "m": case "M":
        e.preventDefault();
        state.muted = !state.muted;
        updateSoundIndicator();
        break;
    }
  }

  // Click on empty stage space (not on an option) acts as reveal/advance.
  function onStageClick() {
    if (state.phase === "splash") next();
    else if (state.phase === "question") {
      if (!state.locked) revealUnscored(); else next();
    } else restart();
  }

  // ---- Boot ---------------------------------------------------------------
  function init() {
    if (!questions.length) {
      el.text.textContent = "No questions loaded — check assets/js/questions-data.js";
      showScreen(el.question);
      return;
    }
    document.addEventListener("keydown", onKey);
    // Stage-level click (options stopPropagation, so this only fires on blank areas)
    document.addEventListener("click", onStageClick);
    el.soundInd.setAttribute("aria-hidden", "false");
    restart();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
