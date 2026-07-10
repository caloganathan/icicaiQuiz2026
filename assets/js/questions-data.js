/* =============================================================================
   ICAI Indonesia Chapter — Chartered Accountants' Day Quiz 2026
   Question bank (30 questions)
   -----------------------------------------------------------------------------
   SOURCE POLICY
   Per the project brief, every question must be traceable to one of the four
   "Coffee Shop Guide to Doing Business in Indonesia" manuscripts:
       Book 1 — Doing Business in Indonesia
       Book 2 — Taxes in Indonesia
       Book 3 — Hiring in Indonesia
       Book 4 — M&A / Exit
   Weighting (per brief): Book 1 = 6, Book 2 = 9, Book 3 = 6, Book 4 = 9  (=30)

   ANSWER-KEY DISTRIBUTION
   Correct answers are deliberately spread across the four positions so no
   pattern emerges on stage:  A ×7, B ×8, C ×7, D ×8, with no two consecutive
   questions sharing the same correct letter.

   IMPORTANT — VERIFICATION NOTICE
   The four .docx manuscripts were NOT present in the build environment, so the
   questions below could not be cross-checked line-by-line against the source
   text. They were drafted from well-established, stable Indonesian regulatory
   facts that these guides cover, and each carries a `source` pointer to the
   book/chapter the organiser should confirm against.

   Every question has a `verify` flag:
     verify: "fact"   -> stable definitional/structural fact; confirm chapter ref
     verify: "figure" -> contains a rate/threshold/amount that MUST be checked
                         against the manuscript (and against the law as at the
                         event date) before going live — these move over time.

   HOW TO EDIT
   Each object: { id, book, category, difficulty, question, options[4],
                  answerIndex (0=A, 1=B, 2=C, 3=D), explanation, source, verify }
   Points by difficulty: easy = 1, medium = 2, hard = 3 (set in quiz-engine.js).
   Swap wording/figures freely to match the manuscripts — no code changes needed.
   ============================================================================= */

const QUIZ_QUESTIONS = [

  /* ========================= BOOK 1 — DOING BUSINESS (6) ==================== */
  {
    id: 1,
    book: 1,
    category: "Book 1 · Market Entry",
    difficulty: "easy",
    question: "Foreign investors entering Indonesia typically incorporate a “PT PMA”. What does “PMA” stand for?",
    options: [
      "Perusahaan Milik Asing (foreign-owned firm)",
      "Pajak Modal Asing (foreign capital tax)",
      "Penanaman Modal Asing (foreign investment)",
      "Perizinan Modal Asing (foreign capital permit)"
    ],
    answerIndex: 2, // C
    explanation: "A PT PMA — Perseroan Terbatas Penanaman Modal Asing — is the limited-liability company vehicle for foreign direct investment in Indonesia.",
    source: "Book 1 — Doing Business, Ch. on entity setup / PT PMA",
    verify: "fact"
  },
  {
    id: 2,
    book: 1,
    category: "Book 1 · Licensing",
    difficulty: "easy",
    question: "Since 2018, most Indonesian business licences have been issued through a single online portal. What is that system called?",
    options: [
      "SPT — Surat Pemberitahuan Tahunan",
      "OSS — Online Single Submission",
      "NIB — Nomor Induk Berusaha",
      "The DGT e-filing portal"
    ],
    answerIndex: 1, // B
    explanation: "The Online Single Submission (OSS) system, administered under BKPM / the Ministry of Investment, is Indonesia’s risk-based licensing gateway for businesses.",
    source: "Book 1 — Doing Business, Ch. on OSS / BKPM licensing",
    verify: "fact"
  },
  {
    id: 3,
    book: 1,
    category: "Book 1 · Licensing",
    difficulty: "medium",
    question: "The OSS system issues every registered business an NIB. What is an NIB?",
    options: [
      "The Business Identification Number (Nomor Induk Berusaha)",
      "The company’s tax residency certificate",
      "The foreign-worker permit reference",
      "The annual VAT return number"
    ],
    answerIndex: 0, // A
    explanation: "The Nomor Induk Berusaha (NIB) is the single business identity number issued via OSS; it also serves as the import identification and company registration number.",
    source: "Book 1 — Doing Business, Ch. on OSS / NIB",
    verify: "fact"
  },
  {
    id: 4,
    book: 1,
    category: "Book 1 · Business Classification",
    difficulty: "medium",
    question: "When registering a company, its founders must select one or more KBLI codes. What does a KBLI code classify?",
    options: [
      "The company’s share-capital tier",
      "The tax office the company reports to",
      "The province of incorporation",
      "The company’s line(s) of business activity"
    ],
    answerIndex: 3, // D
    explanation: "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) is Indonesia’s standard classification of business activities — it drives licensing requirements and foreign-ownership limits.",
    source: "Book 1 — Doing Business, Ch. on KBLI / business classification",
    verify: "fact"
  },
  {
    id: 5,
    book: 1,
    category: "Book 1 · Foreign Ownership",
    difficulty: "hard",
    question: "In 2021, Indonesia overhauled its rules on foreign ownership by sector. What replaced the old “Negative Investment List” (DNI)?",
    options: [
      "The Omnibus Tax List",
      "The Positive Investment List (Priority Investment List)",
      "The Coretax registry",
      "The KBLI Freedom Schedule"
    ],
    answerIndex: 1, // B
    explanation: "Presidential Regulation 10/2021 (as amended) replaced the restrictive Negative Investment List with a largely open Positive / Priority Investment List, opening most sectors to foreign investment with defined exceptions.",
    source: "Book 1 — Doing Business, Ch. on foreign ownership / Positive Investment List",
    verify: "fact"
  },
  {
    id: 6,
    book: 1,
    category: "Book 1 · Capital Requirements",
    difficulty: "hard",
    // TODO: verify against Book 1 — the >IDR 10 billion investment-plan threshold
    // (BKPM Reg. 4/2021, excluding land & buildings, per 5-digit KBLI per project
    // location) is standard but has exceptions; confirm the exact wording/number
    // used in the manuscript before the live event.
    question: "As a general rule, what is the minimum total investment plan required of a PT PMA (excluding land and buildings)?",
    options: [
      "More than IDR 10 billion per line of business, per project location",
      "Exactly IDR 1 billion, nationwide",
      "More than IDR 100 billion in all cases",
      "There is no minimum for any sector"
    ],
    answerIndex: 0, // A
    explanation: "The standard BKPM benchmark is a total investment plan of more than IDR 10 billion (excluding land and buildings) per five-digit KBLI code, per project location — subject to sector-specific exceptions. VERIFY the exact figure and wording in the manuscript.",
    source: "Book 1 — Doing Business, Ch. on minimum capital / investment plan",
    verify: "figure"
  },

  /* ============================== BOOK 2 — TAXES (9) ======================== */
  {
    id: 7,
    book: 2,
    category: "Book 2 · Tax Administration",
    difficulty: "medium",
    question: "From January 2025, Indonesia’s Directorate General of Taxes rolled out a new integrated tax administration platform. What is it called?",
    options: [
      "e-Faktur Plus",
      "OSS-Pajak",
      "Coretax",
      "SPT Online"
    ],
    answerIndex: 2, // C
    explanation: "Coretax is the DGT’s new core tax administration system, consolidating registration, returns, payments and taxpayer accounts in a single platform.",
    source: "Book 2 — Taxes, Ch. on Coretax / tax administration",
    verify: "fact"
  },
  {
    id: 8,
    book: 2,
    category: "Book 2 · Corporate Income Tax",
    difficulty: "medium",
    // TODO: verify — the headline CIT rate has been 22% since FY2022; confirm the
    // manuscript quotes 22% and note any small-taxpayer facilities it mentions.
    question: "What is the standard headline corporate income tax (CIT) rate in Indonesia?",
    options: [
      "17%",
      "30%",
      "10%",
      "22%"
    ],
    answerIndex: 3, // D
    explanation: "Indonesia’s standard corporate income tax rate is 22%. Certain listed companies and small taxpayers enjoy reduced rates or facilities. VERIFY the rate as at the event date.",
    source: "Book 2 — Taxes, Ch. on corporate income tax",
    verify: "figure"
  },
  {
    id: 9,
    book: 2,
    category: "Book 2 · Tax Administration",
    difficulty: "easy",
    question: "Which authority administers national taxes in Indonesia?",
    options: [
      "BKPM — the Ministry of Investment",
      "The Directorate General of Taxes (DJP / DGT)",
      "Bank Indonesia",
      "OJK — the Financial Services Authority"
    ],
    answerIndex: 1, // B
    explanation: "The Directorate General of Taxes (Direktorat Jenderal Pajak, DJP/DGT), under the Ministry of Finance, administers Indonesia’s national taxes.",
    source: "Book 2 — Taxes, Ch. on tax administration",
    verify: "fact"
  },
  {
    id: 10,
    book: 2,
    category: "Book 2 · Registration",
    difficulty: "easy",
    question: "Every taxpayer in Indonesia must hold an NPWP. What is it?",
    options: [
      "A Taxpayer Identification Number",
      "A VAT invoice serial number",
      "A customs bond",
      "A social-security membership card"
    ],
    answerIndex: 0, // A
    explanation: "The NPWP (Nomor Pokok Wajib Pajak) is the Indonesian Taxpayer Identification Number for individuals and entities.",
    source: "Book 2 — Taxes, Ch. on registration / NPWP",
    verify: "fact"
  },
  {
    id: 11,
    book: 2,
    category: "Book 2 · Withholding Tax",
    difficulty: "hard",
    // TODO: verify — Article 26 default WHT is 20% on payments to non-residents,
    // reducible under an applicable tax treaty; confirm figure in the manuscript.
    question: "Article 26 (PPh 26) withholding tax applies to payments made to non-residents. What is the default rate, before any treaty relief?",
    options: [
      "10%",
      "2%",
      "0%",
      "20%"
    ],
    answerIndex: 3, // D
    explanation: "PPh 26 imposes a default 20% withholding tax on Indonesian-sourced dividends, interest, royalties and service fees paid to non-residents — often reduced under an applicable tax treaty. VERIFY the figure.",
    source: "Book 2 — Taxes, Ch. on withholding tax / PPh 26",
    verify: "figure"
  },
  {
    id: 12,
    book: 2,
    category: "Book 2 · Transfer Pricing",
    difficulty: "medium",
    question: "Indonesia follows the OECD’s three-tiered transfer-pricing documentation model. Which three documents make up that model?",
    options: [
      "Balance Sheet, P&L, and Cash-Flow Statement",
      "SPT, e-Faktur, and NIB",
      "Master File, Local File, and Country-by-Country Report",
      "Master File, VAT Ledger, and Payroll Register"
    ],
    answerIndex: 2, // C
    explanation: "Qualifying taxpayers must prepare a Master File and a Local File, and — above certain thresholds — a Country-by-Country Report (CbCR), in line with BEPS Action 13.",
    source: "Book 2 — Taxes, Ch. on transfer pricing documentation",
    verify: "fact"
  },
  {
    id: 13,
    book: 2,
    category: "Book 2 · International Tax / BEPS",
    difficulty: "easy",
    question: "In international tax, what does the acronym “BEPS” stand for?",
    options: [
      "Base Erosion and Profit Shifting",
      "Business Entity Payment System",
      "Bilateral Export Preference Scheme",
      "Basic Employee Provident Savings"
    ],
    answerIndex: 0, // A
    explanation: "BEPS — Base Erosion and Profit Shifting — is the OECD/G20 project targeting strategies that shift profits to low- or no-tax jurisdictions; Indonesia has adopted several BEPS measures.",
    source: "Book 2 — Taxes, Ch. on BEPS / international tax",
    verify: "fact"
  },
  {
    id: 14,
    book: 2,
    category: "Book 2 · Tax Treaties (DTAA)",
    difficulty: "medium",
    question: "What is the main benefit an Indonesian tax treaty (DTAA) offers a cross-border investor from a treaty partner such as India or Singapore?",
    options: [
      "Exemption from all Indonesian corporate income tax",
      "Relief from double taxation and reduced withholding rates on cross-border income",
      "Automatic Indonesian citizenship for directors",
      "A waiver of the requirement to hold an NPWP"
    ],
    answerIndex: 1, // B
    explanation: "A Double Taxation Avoidance Agreement allocates taxing rights between the two countries and typically reduces withholding tax on dividends, interest and royalties — subject to beneficial-ownership and anti-abuse tests.",
    source: "Book 2 — Taxes, Ch. on tax treaties / DTAA",
    verify: "fact"
  },
  {
    id: 15,
    book: 2,
    category: "Book 2 · Value Added Tax",
    difficulty: "easy",
    question: "In Indonesia, “PPN” is the local name for which tax?",
    options: [
      "Corporate Income Tax",
      "Property Transfer Tax",
      "Payroll Withholding Tax",
      "Value Added Tax (Pajak Pertambahan Nilai)"
    ],
    answerIndex: 3, // D
    explanation: "PPN (Pajak Pertambahan Nilai) is Indonesia’s Value Added Tax on supplies of taxable goods and services. (Confirm the current standard rate against the manuscript and the law in force on the event date.)",
    source: "Book 2 — Taxes, Ch. on VAT / PPN",
    verify: "fact"
  },

  /* ============================= BOOK 3 — HIRING (6) ======================== */
  {
    id: 16,
    book: 3,
    category: "Book 3 · Employment Contracts",
    difficulty: "medium",
    question: "Indonesian labour law distinguishes between PKWT and PKWTT employment agreements. What is the difference?",
    options: [
      "PKWT is for foreign employees; PKWTT is for Indonesian nationals",
      "PKWT is full-time; PKWTT is part-time",
      "PKWT is a fixed-term contract; PKWTT is an indefinite (permanent) contract",
      "PKWT is unpaid probation; PKWTT is paid probation"
    ],
    answerIndex: 2, // C
    explanation: "A PKWT (Perjanjian Kerja Waktu Tertentu) is a fixed-term employment agreement; a PKWTT (…Waktu Tidak Tertentu) is an indefinite, permanent one.",
    source: "Book 3 — Hiring, Ch. on employment contracts (PKWT/PKWTT)",
    verify: "fact"
  },
  {
    id: 17,
    book: 3,
    category: "Book 3 · Social Security",
    difficulty: "easy",
    question: "Indonesia’s mandatory social-security system, BPJS, is delivered through which two programmes?",
    options: [
      "BPJS Kesehatan (health) and BPJS Ketenagakerjaan (employment social security)",
      "BPJS Pajak (tax) and BPJS Dagang (trade)",
      "BPJS Asing (foreign) and BPJS Lokal (local)",
      "BPJS Pensiun (pension) and BPJS Properti (property)"
    ],
    answerIndex: 0, // A
    explanation: "Employers must enrol staff in BPJS Kesehatan (national health insurance) and BPJS Ketenagakerjaan (employment social security — old-age, pension, work-accident and death benefits).",
    source: "Book 3 — Hiring, Ch. on BPJS / social security",
    verify: "fact"
  },
  {
    id: 18,
    book: 3,
    category: "Book 3 · Payroll Tax",
    difficulty: "medium",
    question: "PPh 21 is a monthly withholding tax. Which type of income does it apply to?",
    options: [
      "Dividends paid to shareholders",
      "Employment income (salaries, wages and related payments)",
      "Imported goods at customs",
      "Sales of land and buildings"
    ],
    answerIndex: 1, // B
    explanation: "PPh 21 is the monthly withholding tax on employment and personal-services income; employers withhold it and remit it on the employee’s behalf.",
    source: "Book 3 — Hiring, Ch. on payroll tax / PPh 21",
    verify: "fact"
  },
  {
    id: 19,
    book: 3,
    category: "Book 3 · Foreign Workers",
    difficulty: "hard",
    question: "Before employing an expatriate, a company must first obtain an approved RPTKA. What is the RPTKA?",
    options: [
      "A residence-tax pre-payment receipt",
      "A repatriation guarantee bond",
      "A regional minimum-wage certificate",
      "The Foreign Manpower Utilisation Plan (Rencana Penggunaan Tenaga Kerja Asing)"
    ],
    answerIndex: 3, // D
    explanation: "The RPTKA — the Foreign Manpower Utilisation Plan approved by the Ministry of Manpower — is the gateway document for employing foreign workers; work and stay permits are issued on the back of it.",
    source: "Book 3 — Hiring, Ch. on foreign workers / RPTKA",
    verify: "fact"
  },
  {
    id: 20,
    book: 3,
    category: "Book 3 · Foreign Workers",
    difficulty: "hard",
    // TODO: verify against Book 3 — the foreign-worker compensation levy (DKPTKA /
    // formerly DPKK) is commonly USD 100 per foreign worker per month, but there
    // are exemptions and category-based variations; confirm the figure/wording.
    question: "Employers of foreign workers must generally pay a manpower compensation levy (DKPTKA, formerly DPKK). How much is it?",
    options: [
      "USD 1,000 as a one-off payment per company",
      "IDR 50,000 per worker per year",
      "USD 100 per foreign worker per month",
      "There is no such levy"
    ],
    answerIndex: 2, // C
    explanation: "The foreign-worker compensation levy is typically USD 100 per foreign worker per month, with certain exemptions. VERIFY the current figure and exemptions in the manuscript.",
    source: "Book 3 — Hiring, Ch. on foreign workers / DKPTKA levy",
    verify: "figure"
  },
  {
    id: 21,
    book: 3,
    category: "Book 3 · Termination",
    difficulty: "medium",
    question: "When a permanent employee is terminated, Indonesian law provides statutory entitlements. What is the core severance component called?",
    options: [
      "Uang muka (down payment)",
      "Uang pesangon (severance pay)",
      "Uang lembur (overtime pay)",
      "Uang makan (meal allowance)"
    ],
    answerIndex: 1, // B
    explanation: "Statutory termination entitlements centre on uang pesangon (severance pay), usually alongside uang penghargaan masa kerja (long-service pay) and compensation of rights, calculated by length of service under PP 35/2021.",
    source: "Book 3 — Hiring, Ch. on termination / severance",
    verify: "fact"
  },

  /* ============================ BOOK 4 — M&A / EXIT (9) ===================== */
  {
    id: 22,
    book: 4,
    category: "Book 4 · Deal Structuring",
    difficulty: "easy",
    question: "M&A transactions are generally structured in one of two ways. Which pair describes them?",
    options: [
      "A share purchase or an asset purchase",
      "A lease or a franchise",
      "A merger or a bankruptcy",
      "A dividend or a buyback"
    ],
    answerIndex: 0, // A
    explanation: "A buyer acquires either the target’s shares (taking the company together with its liabilities) or selected assets and business (leaving most liabilities behind) — each with a different tax and risk profile.",
    source: "Book 4 — M&A / Exit, Ch. on deal structuring (share vs asset)",
    verify: "fact"
  },
  {
    id: 23,
    book: 4,
    category: "Book 4 · Deal Process",
    difficulty: "easy",
    question: "What is the primary purpose of due diligence in an acquisition?",
    options: [
      "To register the buyer for VAT",
      "To set the employees’ minimum wage",
      "To obtain a work permit for the CEO",
      "To investigate the target’s legal, financial and tax position before committing"
    ],
    answerIndex: 3, // D
    explanation: "Due diligence lets the buyer verify the target’s financials, contracts, tax exposure, litigation and compliance — informing the price, the deal structure, and the warranties and indemnities to be negotiated.",
    source: "Book 4 — M&A / Exit, Ch. on due diligence",
    verify: "fact"
  },
  {
    id: 24,
    book: 4,
    category: "Book 4 · Deal Documents",
    difficulty: "easy",
    question: "In a share deal, the central transaction document is usually the “SPA”. What is an SPA?",
    options: [
      "A Standard Payroll Arrangement",
      "A Shareholder Proxy Authorisation",
      "A Sale and Purchase Agreement",
      "A Statutory Provident Account"
    ],
    answerIndex: 2, // C
    explanation: "The Sale and Purchase Agreement (SPA) sets out the price, conditions precedent, warranties, indemnities and completion mechanics of the deal.",
    source: "Book 4 — M&A / Exit, Ch. on transaction documents / SPA",
    verify: "fact"
  },
  {
    id: 25,
    book: 4,
    category: "Book 4 · Exit Routes",
    difficulty: "medium",
    question: "Which of the following is a common exit route for an investor in a private company?",
    options: [
      "Filing an annual VAT return",
      "A trade sale to a strategic buyer",
      "Renewing the office lease",
      "Applying for an RPTKA"
    ],
    answerIndex: 1, // B
    explanation: "Typical exit routes include a trade (strategic) sale, a secondary sale to another financial investor, an IPO, or a management or share buyback — each with different valuation and tax outcomes.",
    source: "Book 4 — M&A / Exit, Ch. on exit routes",
    verify: "fact"
  },
  {
    id: 26,
    book: 4,
    category: "Book 4 · Deal Protection",
    difficulty: "medium",
    question: "Why do buyers negotiate representations and warranties (backed by indemnities) in an SPA?",
    options: [
      "To increase the target’s minimum wage",
      "To register the shares on the stock exchange",
      "To exempt the deal from tax",
      "To allocate risk and give the buyer recourse if the target’s disclosed position proves untrue"
    ],
    answerIndex: 3, // D
    explanation: "Representations and warranties are contractual statements about the target; if they prove untrue, the warranty and indemnity regime gives the buyer a financial remedy — shifting identified risks back to the seller.",
    source: "Book 4 — M&A / Exit, Ch. on warranties & indemnities",
    verify: "fact"
  },
  {
    id: 27,
    book: 4,
    category: "Book 4 · Deal Protection",
    difficulty: "medium",
    question: "At completion, part of the purchase price is sometimes held back in escrow. Why?",
    options: [
      "To secure the buyer’s recourse for post-completion warranty or indemnity claims",
      "To pay the target’s monthly payroll",
      "To fund the seller’s next acquisition",
      "To satisfy the minimum-capital rule for a PT PMA"
    ],
    answerIndex: 0, // A
    explanation: "An escrow or holdback keeps part of the consideration with a third party for a set period, giving the buyer a ready source of recovery if warranty or indemnity claims arise after closing.",
    source: "Book 4 — M&A / Exit, Ch. on completion mechanics / escrow",
    verify: "fact"
  },
  {
    id: 28,
    book: 4,
    category: "Book 4 · Transfer Taxation",
    difficulty: "hard",
    // TODO: verify against Book 4 — sale of LISTED Indonesian shares on the IDX
    // attracts a final tax of 0.1% of gross proceeds (plus an extra 0.5% for
    // founder shares at IPO). Confirm the exact figures/wording in the manuscript.
    question: "When shares listed on the Indonesia Stock Exchange are sold, a final income tax is charged at what rate?",
    options: [
      "22% of the capital gain",
      "10% flat",
      "0.1% of the gross transaction value",
      "No tax applies to listed shares"
    ],
    answerIndex: 2, // C
    explanation: "Sales of exchange-listed Indonesian shares attract a final tax of 0.1% of gross proceeds (plus an additional 0.5% on founder shares at IPO). Transfers of unlisted shares are taxed differently. VERIFY the figures.",
    source: "Book 4 — M&A / Exit, Ch. on taxation of share transfers",
    verify: "figure"
  },
  {
    id: 29,
    book: 4,
    category: "Book 4 · Cross-border Exit",
    difficulty: "hard",
    // TODO: verify against Book 4 — the ~5%/deemed-basis special withholding on a
    // NON-RESIDENT's sale of unlisted Indonesian shares (subject to treaty relief
    // and beneficial-ownership tests) is the general position; confirm wording.
    question: "A non-resident selling shares in an unlisted Indonesian company may face Indonesian tax on the transfer. What most reliably determines whether that tax is reduced or relieved?",
    options: [
      "Whether the buyer is older than the seller",
      "Whether an applicable tax treaty applies and the seller meets its beneficial-ownership and anti-abuse conditions",
      "Whether the deal closes on a public holiday",
      "Whether the target has an office lease"
    ],
    answerIndex: 1, // B
    explanation: "Indonesia can tax a non-resident’s disposal of unlisted Indonesian shares (a special deemed-basis withholding applies), but an applicable treaty may reduce or relieve it — provided the beneficial-ownership and anti-avoidance tests are met. VERIFY the specifics.",
    source: "Book 4 — M&A / Exit, Ch. on cross-border exit / treaty relief",
    verify: "figure"
  },
  {
    id: 30,
    book: 4,
    category: "Book 4 · Cross-border Structuring",
    difficulty: "hard",
    question: "Cross-border investors often hold Indonesian investments through an intermediate holding company (for example, in Singapore). Which anti-avoidance test must such a company pass before Indonesia grants treaty benefits?",
    options: [
      "A minimum office floor-area test",
      "A test of how many employees hold NPWPs",
      "A requirement that the holding company be at least 50 years old",
      "A beneficial-ownership / economic-substance test (the company must not be a mere conduit)"
    ],
    answerIndex: 3, // D
    explanation: "Treaty relief is denied to conduit arrangements: the recipient must be the beneficial owner, with genuine substance and business purpose — not an entity interposed mainly to capture treaty rates. VERIFY the exact test described in the manuscript.",
    source: "Book 4 — M&A / Exit, Ch. on holding structures / beneficial ownership",
    verify: "fact"
  }
];

// Expose for both module and plain-script (file://) usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
