/* =============================================================================
   ICAI Indonesia Chapter — Chartered Accountants' Day Quiz 2026
   Presenter-driven quiz engine (vanilla JS, no build step)

   Host controls:
     Space / Enter  -> reveal the answer on the current question
     ->  (Right)    -> advance to next question (or to closing after Q30)
     <-  (Left)     -> go back to previous question
     R              -> restart from the splash screen
     Click anywhere -> reveal (fallback for non-keyboard control)
   ============================================================================= */

(function () {
  "use strict";

  var questions = (typeof QUIZ_QUESTIONS !== "undefined") ? QUIZ_QUESTIONS : [];
  var LETTERS = ["A", "B", "C", "D"];

  // App phases: "splash" -> "question" -> "closing"
  var state = {
    phase: "splash",
    index: 0,        // current question index (0-based)
    revealed: false  // has the current question's answer been shown?
  };

  // ---- Element refs -------------------------------------------------------
  var el = {
    splash:      document.getElementById("screen-splash"),
    question:    document.getElementById("screen-question"),
    closing:     document.getElementById("screen-closing"),
    category:    document.getElementById("q-category"),
    counter:     document.getElementById("q-counter"),
    text:        document.getElementById("q-text"),
    options:     document.getElementById("q-options"),
    explanation: document.getElementById("q-explanation"),
    explText:    document.getElementById("q-explanation-text"),
    source:      document.getElementById("q-source"),
    progress:    document.getElementById("progress"),
    progressFill:document.getElementById("progress-fill")
  };

  // ---- Screen switching ---------------------------------------------------
  function showScreen(next) {
    [el.splash, el.question, el.closing].forEach(function (s) {
      s.classList.remove("is-active");
    });
    next.classList.add("is-active");
  }

  function setProgress() {
    var visible = state.phase === "question";
    el.progress.classList.toggle("is-visible", visible);
    el.progress.setAttribute("aria-hidden", visible ? "false" : "true");
    if (visible) {
      var pct = ((state.index + 1) / questions.length) * 100;
      el.progressFill.style.width = pct + "%";
    }
  }

  // ---- Rendering a question ----------------------------------------------
  function renderQuestion() {
    var q = questions[state.index];
    if (!q) { return; }

    el.category.textContent = q.category || ("Book " + q.book);
    el.counter.textContent = "Question " + (state.index + 1) + " of " + questions.length;
    el.text.textContent = q.question;

    // Build option cards fresh each time
    el.options.innerHTML = "";
    q.options.forEach(function (opt, i) {
      var li = document.createElement("li");
      li.className = "option";
      li.setAttribute("data-index", String(i));

      var letter = document.createElement("span");
      letter.className = "option__letter";
      letter.textContent = LETTERS[i];

      var txt = document.createElement("span");
      txt.className = "option__text";
      txt.textContent = opt;

      li.appendChild(letter);
      li.appendChild(txt);
      el.options.appendChild(li);
    });

    // Reset reveal UI
    state.revealed = false;
    el.explanation.hidden = true;
    el.explText.textContent = "";
    el.source.textContent = "";

    setProgress();
  }

  // ---- Reveal the answer --------------------------------------------------
  function revealAnswer() {
    if (state.phase !== "question" || state.revealed) { return; }
    var q = questions[state.index];
    if (!q) { return; }

    var cards = el.options.querySelectorAll(".option");
    cards.forEach(function (card) {
      var i = parseInt(card.getAttribute("data-index"), 10);
      if (i === q.answerIndex) {
        card.classList.add("is-correct");
      } else {
        card.classList.add("is-incorrect");
      }
    });

    el.explText.textContent = q.explanation || "";
    el.source.textContent = q.source ? ("Source: " + q.source) : "";
    el.explanation.hidden = false;

    state.revealed = true;
  }

  // ---- Navigation ---------------------------------------------------------
  function goToQuestion(index) {
    state.phase = "question";
    state.index = Math.max(0, Math.min(index, questions.length - 1));
    renderQuestion();
    showScreen(el.question);
  }

  function next() {
    if (state.phase === "splash") { goToQuestion(0); return; }
    if (state.phase === "question") {
      if (state.index < questions.length - 1) {
        goToQuestion(state.index + 1);
      } else {
        state.phase = "closing";
        setProgress();
        showScreen(el.closing);
      }
      return;
    }
    // On closing, right arrow does nothing further.
  }

  function prev() {
    if (state.phase === "question") {
      if (state.index > 0) {
        goToQuestion(state.index - 1);
      } else {
        // Back from Q1 returns to splash
        state.phase = "splash";
        setProgress();
        showScreen(el.splash);
      }
      return;
    }
    if (state.phase === "closing") {
      // Back into the last question for review
      goToQuestion(questions.length - 1);
    }
  }

  function restart() {
    state.phase = "splash";
    state.index = 0;
    state.revealed = false;
    setProgress();
    showScreen(el.splash);
  }

  // ---- Input handling -----------------------------------------------------
  function onKey(e) {
    switch (e.key) {
      case " ":
      case "Spacebar":
      case "Enter":
        e.preventDefault();
        if (state.phase === "splash") { next(); }
        else if (state.phase === "question") {
          // First press reveals; if already revealed, advance.
          if (!state.revealed) { revealAnswer(); } else { next(); }
        } else { restart(); }
        break;

      case "ArrowRight":
        e.preventDefault();
        next();
        break;

      case "ArrowLeft":
        e.preventDefault();
        prev();
        break;

      case "r":
      case "R":
        e.preventDefault();
        restart();
        break;
    }
  }

  // Click-anywhere fallback (mirrors Space behaviour)
  function onClick() {
    if (state.phase === "splash") { next(); }
    else if (state.phase === "question") {
      if (!state.revealed) { revealAnswer(); } else { next(); }
    } else { restart(); }
  }

  // ---- Boot ---------------------------------------------------------------
  function init() {
    if (!questions.length) {
      el.text.textContent = "No questions loaded — check assets/js/questions-data.js";
      showScreen(el.question);
      return;
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    restart();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
