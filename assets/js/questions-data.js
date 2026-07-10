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

   IMPORTANT — VERIFICATION NOTICE
   The four .docx manuscripts were NOT present in the build environment, so the
   questions below could not be cross-checked line-by-line against the source
   text. They were drafted from well-established, stable Indonesian regulatory
   facts that these guides cover, and each carries a `source` pointer to the
   book/chapter the organizer should confirm against.

   Every question has a `verify` flag:
     verify: "fact"  -> stable definitional/structural fact; confirm chapter ref
     verify: "figure"-> contains a rate/threshold/amount that MUST be checked
                        against the manuscript (and against the law as at the
                        event date) before going live — these move over time.

   HOW TO EDIT
   Each object: { id, book, category, difficulty, question, options[4],
                  answerIndex (0=A..3=D), explanation, source, verify }
   Swap wording/figures freely to match the manuscripts — no code changes needed.
   ============================================================================= */

const QUIZ_QUESTIONS = [

  /* ========================= BOOK 1 — DOING BUSINESS (6) ==================== */
  {
    id: 1,
    book: 1,
    category: "Book 1 · Market Entry",
    difficulty: "easy",
    question: "A foreign investor setting up a wholly- or partly-owned company in Indonesia incorporates as a “PT PMA.” What does PMA stand for?",
    options: [
      "Penanaman Modal Asing (foreign investment)",
      "Perusahaan Milik Asing (foreign-owned firm)",
      "Pajak Modal Asing (foreign capital tax)",
      "Perizinan Modal Asing (foreign capital permit)"
    ],
    answerIndex: 0,
    explanation: "A PT PMA — Perseroan Terbatas Penanaman Modal Asing — is the limited-liability company vehicle used for foreign direct investment in Indonesia.",
    source: "Book 1 — Doing Business, Ch. on entity setup / PT PMA",
    verify: "fact"
  },
  {
    id: 2,
    book: 1,
    category: "Book 1 · Licensing",
    difficulty: "medium",
    question: "Since 2018, most Indonesian business licences are issued through a single online portal. What is that system called?",
    options: [
      "OSS — Online Single Submission",
      "SPT — Surat Pemberitahuan Tahunan",
      "NIB — Nomor Induk Berusaha",
      "DGT — Directorate General of Taxes portal"
    ],
    answerIndex: 0,
    explanation: "The Online Single Submission (OSS) system, administered under BKPM/the Ministry of Investment, is the risk-based licensing gateway for businesses in Indonesia.",
    source: "Book 1 — Doing Business, Ch. on OSS / BKPM licensing",
    verify: "fact"
  },
  {
    id: 3,
    book: 1,
    category: "Book 1 · Licensing",
    difficulty: "medium",
    question: "The OSS system issues an NIB to every registered business. What is an NIB?",
    options: [
      "The Business Identification Number (Nomor Induk Berusaha)",
      "The company’s tax residency certificate",
      "The foreign worker permit reference",
      "The annual VAT return number"
    ],
    answerIndex: 0,
    explanation: "The Nomor Induk Berusaha (NIB) is the single business identity number issued via OSS; it also serves as import identification and company registration in one.",
    source: "Book 1 — Doing Business, Ch. on OSS / NIB",
    verify: "fact"
  },
  {
    id: 4,
    book: 1,
    category: "Book 1 · Business Classification",
    difficulty: "medium",
    question: "When registering, a company must select its KBLI code(s). What does the KBLI classify?",
    options: [
      "The company’s line(s) of business activity",
      "The company’s share-capital tier",
      "The tax office the company reports to",
      "The province of incorporation"
    ],
    answerIndex: 0,
    explanation: "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) is Indonesia’s standard industrial classification of business activities — it drives licensing, ownership limits and requirements.",
    source: "Book 1 — Doing Business, Ch. on KBLI / business classification",
    verify: "fact"
  },
  {
    id: 5,
    book: 1,
    category: "Book 1 · Foreign Ownership",
    difficulty: "hard",
    question: "In 2021 Indonesia reformed how it regulates foreign ownership by sector. The old “Negative Investment List” (DNI) was replaced by what?",
    options: [
      "The Positive Investment List (Priority Investment List)",
      "The Omnibus Tax List",
      "The Coretax registry",
      "The KBLI Freedom Schedule"
    ],
    answerIndex: 0,
    explanation: "Under Presidential Regulation 10/2021 (as amended), the restrictive Negative Investment List was replaced by a largely open “Positive/Priority Investment List,” opening most sectors to foreign investment with defined exceptions.",
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
    question: "As a general rule, what minimum total investment plan is expected of a PT PMA (excluding land and buildings)?",
    options: [
      "More than IDR 10 billion per line of business, per location",
      "Exactly IDR 1 billion, nationwide",
      "More than IDR 100 billion in all cases",
      "There is no minimum for any sector"
    ],
    answerIndex: 0,
    explanation: "The standard BKPM benchmark is a total investment plan exceeding IDR 10 billion (excluding land and buildings) per 5-digit KBLI per project location, subject to sector-specific exceptions. VERIFY the exact figure/wording in the manuscript.",
    source: "Book 1 — Doing Business, Ch. on minimum capital / investment plan",
    verify: "figure"
  },

  /* ============================== BOOK 2 — TAXES (9) ======================== */
  {
    id: 7,
    book: 2,
    category: "Book 2 · Tax Administration",
    difficulty: "medium",
    question: "Indonesia’s Directorate General of Taxes rolled out a new integrated tax administration platform from January 2025. What is it called?",
    options: [
      "Coretax",
      "e-Faktur Plus",
      "OSS-Pajak",
      "SPT Online"
    ],
    answerIndex: 0,
    explanation: "Coretax is the DGT’s new core tax administration system, consolidating registration, returns, payments and taxpayer accounts into one platform.",
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
      "22%",
      "17%",
      "30%",
      "10%"
    ],
    answerIndex: 0,
    explanation: "Indonesia’s standard corporate income tax rate is 22%. Certain listed companies and small taxpayers can access reduced rates/facilities. VERIFY the rate as at the event date.",
    source: "Book 2 — Taxes, Ch. on corporate income tax",
    verify: "figure"
  },
  {
    id: 9,
    book: 2,
    category: "Book 2 · Tax Administration",
    difficulty: "easy",
    question: "Which authority administers taxes in Indonesia?",
    options: [
      "The Directorate General of Taxes (DJP / DGT)",
      "BKPM — the Investment Ministry",
      "Bank Indonesia",
      "The OJK — Financial Services Authority"
    ],
    answerIndex: 0,
    explanation: "The Directorate General of Taxes (Direktorat Jenderal Pajak, DJP/DGT), within the Ministry of Finance, administers national taxes.",
    source: "Book 2 — Taxes, Ch. on tax administration",
    verify: "fact"
  },
  {
    id: 10,
    book: 2,
    category: "Book 2 · Registration",
    difficulty: "easy",
    question: "An NPWP is required for taxpayers in Indonesia. What is it?",
    options: [
      "A Taxpayer Identification Number",
      "A VAT invoice serial",
      "A customs bond",
      "A social-security membership card"
    ],
    answerIndex: 0,
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
    question: "Article 26 (PPh 26) withholding tax applies to payments to non-residents. What is the default (non-treaty) rate?",
    options: [
      "20%",
      "10%",
      "2%",
      "0%"
    ],
    answerIndex: 0,
    explanation: "PPh 26 imposes a default 20% withholding on Indonesian-sourced dividends, interest, royalties and service fees paid to non-residents — often reduced by an applicable double-tax treaty. VERIFY the figure.",
    source: "Book 2 — Taxes, Ch. on withholding tax / PPh 26",
    verify: "figure"
  },
  {
    id: 12,
    book: 2,
    category: "Book 2 · Transfer Pricing",
    difficulty: "hard",
    question: "Indonesia follows the OECD three-tiered transfer-pricing documentation model. Which set of documents is that?",
    options: [
      "Master File, Local File, and Country-by-Country Report",
      "Balance Sheet, P&L, and Cash-Flow Statement",
      "SPT, e-Faktur, and NIB",
      "Master File, VAT Ledger, and Payroll Register"
    ],
    answerIndex: 0,
    explanation: "Qualifying taxpayers must prepare a Master File and Local File, and (above thresholds) a Country-by-Country Report (CbCR), reflecting the arm’s-length principle under BEPS Action 13.",
    source: "Book 2 — Taxes, Ch. on transfer pricing documentation",
    verify: "fact"
  },
  {
    id: 13,
    book: 2,
    category: "Book 2 · International Tax / BEPS",
    difficulty: "medium",
    question: "In international tax discussions the acronym “BEPS” refers to what?",
    options: [
      "Base Erosion and Profit Shifting",
      "Business Entity Payment System",
      "Bilateral Export Preference Scheme",
      "Basic Employee Provident Savings"
    ],
    answerIndex: 0,
    explanation: "BEPS — Base Erosion and Profit Shifting — is the OECD/G20 project addressing strategies that shift profits to low- or no-tax locations; Indonesia has adopted several BEPS measures.",
    source: "Book 2 — Taxes, Ch. on BEPS / international tax",
    verify: "fact"
  },
  {
    id: 14,
    book: 2,
    category: "Book 2 · Tax Treaties (DTAA)",
    difficulty: "medium",
    question: "What is the main benefit an Indonesia tax treaty (DTAA) offers a cross-border investor from a treaty country such as India or Singapore?",
    options: [
      "Relief from double taxation and reduced withholding rates on cross-border income",
      "Exemption from all Indonesian corporate income tax",
      "Automatic Indonesian citizenship for directors",
      "A waiver of the requirement to hold an NPWP"
    ],
    answerIndex: 0,
    explanation: "A Double Taxation Avoidance Agreement allocates taxing rights and typically reduces withholding on dividends, interest and royalties, relieving the same income from being taxed twice — subject to beneficial-ownership and anti-abuse tests.",
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
      "Value Added Tax (Pajak Pertambahan Nilai)",
      "Corporate Income Tax",
      "Property Transfer Tax",
      "Payroll Withholding Tax"
    ],
    answerIndex: 0,
    explanation: "PPN (Pajak Pertambahan Nilai) is Indonesia’s Value Added Tax on the supply of taxable goods and services. (Confirm the current standard rate against the manuscript and the law in force on the event date.)",
    source: "Book 2 — Taxes, Ch. on VAT / PPN",
    verify: "fact"
  },

  /* ============================= BOOK 3 — HIRING (6) ======================== */
  {
    id: 16,
    book: 3,
    category: "Book 3 · Employment Contracts",
    difficulty: "medium",
    question: "Indonesian labour law distinguishes PKWT from PKWTT contracts. What is the difference?",
    options: [
      "PKWT is a fixed-term contract; PKWTT is an indefinite/permanent contract",
      "PKWT is for foreigners; PKWTT is for locals",
      "PKWT is full-time; PKWTT is part-time",
      "PKWT is unpaid probation; PKWTT is paid probation"
    ],
    answerIndex: 0,
    explanation: "A PKWT (Perjanjian Kerja Waktu Tertentu) is a definite/fixed-term employment agreement; a PKWTT (…Waktu Tidak Tertentu) is an indefinite, permanent agreement.",
    source: "Book 3 — Hiring, Ch. on employment contracts (PKWT/PKWTT)",
    verify: "fact"
  },
  {
    id: 17,
    book: 3,
    category: "Book 3 · Social Security",
    difficulty: "medium",
    question: "Indonesia’s mandatory social-security scheme, BPJS, is split into which two programs?",
    options: [
      "BPJS Kesehatan (health) and BPJS Ketenagakerjaan (employment)",
      "BPJS Pajak (tax) and BPJS Dagang (trade)",
      "BPJS Asing (foreign) and BPJS Lokal (local)",
      "BPJS Pensiun (pension) and BPJS Properti (property)"
    ],
    answerIndex: 0,
    explanation: "Employers must enrol staff in BPJS Kesehatan (national health insurance) and BPJS Ketenagakerjaan (employment social security — covering old-age, pension, work-accident and death benefits).",
    source: "Book 3 — Hiring, Ch. on BPJS / social security",
    verify: "fact"
  },
  {
    id: 18,
    book: 3,
    category: "Book 3 · Payroll Tax",
    difficulty: "medium",
    question: "“PPh 21” governs the withholding of tax on what?",
    options: [
      "Employment income (salaries, wages and related payments)",
      "Company dividends to shareholders",
      "Imported goods at customs",
      "Land and building sales"
    ],
    answerIndex: 0,
    explanation: "PPh 21 is the monthly withholding tax on employment and personal-service income; employers withhold and remit it on behalf of employees.",
    source: "Book 3 — Hiring, Ch. on payroll tax / PPh 21",
    verify: "fact"
  },
  {
    id: 19,
    book: 3,
    category: "Book 3 · Foreign Workers",
    difficulty: "hard",
    question: "Before a company can employ an expatriate, it must have an approved RPTKA. What is the RPTKA?",
    options: [
      "The Foreign Manpower Utilisation Plan (Rencana Penggunaan Tenaga Kerja Asing)",
      "A residence-tax pre-payment receipt",
      "A repatriation guarantee bond",
      "A regional minimum-wage certificate"
    ],
    answerIndex: 0,
    explanation: "The RPTKA is the Foreign Manpower Utilisation Plan approved by the Ministry of Manpower — the gateway document for employing foreign workers, on which the work/stay permits are then based.",
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
    question: "Employers of foreign workers generally must pay a manpower compensation levy (DKPTKA/DPKK). What is the usual amount?",
    options: [
      "USD 100 per foreign worker per month",
      "USD 1,000 one-off per company",
      "IDR 50,000 per worker per year",
      "There is no such levy"
    ],
    answerIndex: 0,
    explanation: "The foreign-worker compensation fund is typically levied at USD 100 per foreign worker per month, with certain exemptions. VERIFY the current figure and exemptions in the manuscript.",
    source: "Book 3 — Hiring, Ch. on foreign workers / DKPTKA levy",
    verify: "figure"
  },
  {
    id: 21,
    book: 3,
    category: "Book 3 · Termination",
    difficulty: "medium",
    question: "On termination of a permanent employee, Indonesian law provides for statutory severance. What is the core severance component called?",
    options: [
      "Uang pesangon (severance pay)",
      "Uang muka (down payment)",
      "Uang lembur (overtime pay)",
      "Uang makan (meal allowance)"
    ],
    answerIndex: 0,
    explanation: "Statutory termination entitlements center on uang pesangon (severance pay), typically alongside uang penghargaan masa kerja (long-service pay) and compensation of rights — calculated by length of service under PP 35/2021.",
    source: "Book 3 — Hiring, Ch. on termination / severance",
    verify: "fact"
  },

  /* ============================ BOOK 4 — M&A / EXIT (9) ===================== */
  {
    id: 22,
    book: 4,
    category: "Book 4 · Deal Structuring",
    difficulty: "medium",
    question: "M&A transactions are generally structured in one of two ways. Which pair describes them?",
    options: [
      "A share purchase or an asset purchase",
      "A lease or a franchise",
      "A merger or a bankruptcy",
      "A dividend or a buyback"
    ],
    answerIndex: 0,
    explanation: "Buyers typically acquire either the target’s shares (taking the company with its liabilities) or selected assets and business (leaving most liabilities behind) — each with different tax and risk profiles.",
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
      "To investigate the target’s legal, financial and tax position before committing",
      "To register the buyer for VAT",
      "To set the employees’ minimum wage",
      "To obtain a work permit for the CEO"
    ],
    answerIndex: 0,
    explanation: "Due diligence lets the buyer verify the target’s financials, contracts, tax exposure, litigation and compliance — informing price, deal structure and the warranties/indemnities negotiated.",
    source: "Book 4 — M&A / Exit, Ch. on due diligence",
    verify: "fact"
  },
  {
    id: 24,
    book: 4,
    category: "Book 4 · Deal Documents",
    difficulty: "easy",
    question: "In a share deal, the central transaction contract is usually the “SPA.” What is an SPA?",
    options: [
      "A Sale and Purchase Agreement",
      "A Standard Payroll Arrangement",
      "A Shareholder Proxy Authorisation",
      "A Statutory Provident Account"
    ],
    answerIndex: 0,
    explanation: "The Sale and Purchase Agreement (SPA) sets the price, conditions precedent, warranties, indemnities and completion mechanics of the deal.",
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
      "A trade sale to a strategic buyer",
      "Filing an annual VAT return",
      "Renewing the office lease",
      "Applying for an RPTKA"
    ],
    answerIndex: 0,
    explanation: "Typical exit routes include a trade (strategic) sale, a secondary sale to another financial investor, an IPO, or a management/share buyback — each with different valuation and tax outcomes.",
    source: "Book 4 — M&A / Exit, Ch. on exit routes",
    verify: "fact"
  },
  {
    id: 26,
    book: 4,
    category: "Book 4 · Deal Protection",
    difficulty: "medium",
    question: "Why do buyers commonly negotiate representations and warranties (with indemnities) in an SPA?",
    options: [
      "To allocate risk and obtain recourse if the target’s disclosed position proves untrue",
      "To increase the target’s minimum wage",
      "To register the shares on the stock exchange",
      "To exempt the deal from tax"
    ],
    answerIndex: 0,
    explanation: "Reps and warranties are contractual statements about the target; if they prove false, the indemnity/warranty regime gives the buyer a financial remedy — shifting identified risks back to the seller.",
    source: "Book 4 — M&A / Exit, Ch. on warranties & indemnities",
    verify: "fact"
  },
  {
    id: 27,
    book: 4,
    category: "Book 4 · Deal Protection",
    difficulty: "medium",
    question: "Part of the purchase price is sometimes held back in escrow at completion. Why?",
    options: [
      "To secure the buyer’s recourse for post-completion warranty or indemnity claims",
      "To pay the target’s monthly payroll",
      "To fund the seller’s next acquisition",
      "To satisfy the minimum-capital rule for a PT PMA"
    ],
    answerIndex: 0,
    explanation: "An escrow/holdback retains a portion of consideration with a third party for a set period, giving the buyer a ready source of recovery if warranty or indemnity claims arise after closing.",
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
    question: "When shares listed on the Indonesia Stock Exchange are sold, a final income tax is levied at what rate of the transaction value?",
    options: [
      "0.1% of the gross transaction value",
      "22% of the capital gain",
      "10% flat",
      "No tax applies to listed shares"
    ],
    answerIndex: 0,
    explanation: "Sales of exchange-listed Indonesian shares are subject to a final tax of 0.1% of gross proceeds (with an additional 0.5% on founder shares at IPO). Unlisted-share transfers are taxed differently. VERIFY the figures.",
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
      "Whether an applicable tax treaty applies and the seller meets its beneficial-ownership/anti-abuse conditions",
      "Whether the buyer is older than the seller",
      "Whether the deal closes on a public holiday",
      "Whether the target has an office lease"
    ],
    answerIndex: 0,
    explanation: "Indonesia can tax a non-resident’s disposal of unlisted Indonesian shares (a special/deemed-basis withholding applies), but an applicable treaty may reduce or relieve it — provided beneficial-ownership and anti-avoidance tests are met. VERIFY specifics.",
    source: "Book 4 — M&A / Exit, Ch. on cross-border exit / treaty relief",
    verify: "figure"
  },
  {
    id: 30,
    book: 4,
    category: "Book 4 · Cross-border Structuring",
    difficulty: "hard",
    question: "Cross-border investors sometimes hold their Indonesian investment through an intermediate holding company (e.g. in Singapore). What is the main anti-avoidance test Indonesia applies before granting treaty benefits to such a holding company?",
    options: [
      "A beneficial-ownership / economic-substance test (the holding company must not be a mere conduit)",
      "A minimum office floor-area test",
      "A test of how many employees hold NPWPs",
      "A requirement that the holding company be older than 50 years"
    ],
    answerIndex: 0,
    explanation: "Treaty relief is denied to conduit arrangements: the recipient must be the beneficial owner with genuine substance and business purpose, not an entity interposed mainly to access treaty rates. VERIFY the exact test described in the manuscript.",
    source: "Book 4 — M&A / Exit, Ch. on holding structures / beneficial ownership",
    verify: "fact"
  }
];

// Expose for both module and plain-script (file://) usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
