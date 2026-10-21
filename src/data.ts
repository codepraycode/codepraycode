export const site = {
  name: "Precious Olusola",
  handle: "codepraycode",
  role: "AI Software Engineer",
  headline: "I build smart software that solves real problems.",
  headlineEmphasis: "real problems.", // set in italic accent on the page
  intro:
    "I build AI products end to end: the model, and everything around it that makes it dependable, from the API and background workers to the web and mobile apps. I want to be able to take any idea and turn it into a working, intelligent product, on a phone, on the web, on a desktop or on a piece of hardware.",
  location: "Lagos, Nigeria",
  availability: "Open to roles and collaborations",
  email: "preciousbusiness10@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/codepraycode" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/codepraycode/" },
    { label: "X", href: "https://x.com/codepraycode" },
    {
      label: "Résumé",
      href: "https://docs.google.com/document/d/1QptSYKa2e3M7xk-DPDG-5qw2syPmh97HkA31vKJaDCA/edit?usp=sharing",
    },
  ],
};

export type AiSystem = {
  name: string;
  summary: string;
  pipeline: string[];
  notes: string[];
  next?: string;
  stack: string[];
  live?: string;
  code?: string;
  example?: { label: string; code: string };
};

// Each entry describes how the system really works (checked against its source code).
export const aiSystems: AiSystem[] = [
  {
    name: "receipt-ocr-ng",
    summary:
      "Turns a photo of a Nigerian bank or fintech receipt (OPay, PalmPay, Kuda, Moniepoint, GTBank and more) into structured transaction data. Open source on npm, about 1,000 downloads.",
    pipeline: [
      "Receipt image",
      "Vision model on Groq, temperature 0, JSON mode",
      "Normalise enums, coerce numbers",
      "Typed TransactionRecord",
    ],
    notes: [
      "An unreadable field comes back as null, never a misleading 0.",
      "If parsing fails, the raw model output is returned so the caller can debug or retry.",
    ],
    next: "An evaluation set of real receipts to measure field-level accuracy per bank.",
    stack: ["TypeScript", "Groq", "Qwen 3.6"],
    live: "https://www.npmjs.com/package/receipt-ocr-ng",
    code: "https://github.com/codepraycode/dispacc-receipt-ocr",
    example: {
      label: "Output shape (sample values)",
      code: `{
  "amount": 25000,
  "currency": "NGN",
  "platform": "opay",
  "transaction_type": "transfer",
  "status": "successful",
  "recipient_account": "0123456789",
  "reference": "250114010100xxxx",
  "transaction_date": "2025-01-14T10:42:00+01:00",
  "narration": null
}`,
    },
  },
  {
    name: "OracleSage",
    summary:
      "Ask a question about the Bible in plain language and get an answer with chapter-and-verse references. Runs entirely on Cloudflare's edge.",
    pipeline: [
      "Question",
      "Recent conversation from KV",
      "Llama 3.3 70B on Workers AI, citation-first prompt",
      "Answer with references highlighted",
    ],
    notes: ["Keeps conversation context per session, trimmed to the recent turns that matter."],
    next: "Retrieve verses from the Bible text itself, so every citation can be checked instead of trusted.",
    stack: ["Cloudflare Workers AI", "KV", "React"],
    live: "https://cf-ai-oraclesage.pages.dev",
    code: "https://github.com/codepraycode/cf_ai_oraclesage",
  },
  {
    name: "Picsort",
    summary:
      "Sorts a large photo collection by the people in it, so everyone can find every photo they appear in. Co-built.",
    pipeline: [
      "Photos from Google Drive, ZIP or upload",
      "InsightFace face embeddings",
      "HDBSCAN clusters faces into people",
      "FAISS index finds every photo of a person",
    ],
    notes: ["HDBSCAN needs no fixed number of people up front: it finds the groups in the data."],
    stack: ["Python", "InsightFace", "HDBSCAN", "FAISS"],
  },
];

// Where I'm going. Honest about being early: this is direction, not a claim.
export const direction = {
  note: "I haven't built the thing that defines this yet. I'm building toward it in the open.",
  items: [
    {
      title: "AI that holds up in production",
      body: "Agents, retrieval and structured extraction, plus the evaluation work that shows whether an AI feature actually works.",
    },
    {
      title: "Beyond the screen",
      body: "On-device models, embedded systems and hardware, so smart software can live where the problem is.",
    },
    {
      title: "Products people use",
      body: "Whatever the platform, the measure is the same: real users and real problems solved.",
    },
  ],
};

export type Project = {
  name: string;
  area: string;
  summary: string;
  stack: string[];
  live?: string;
  code?: string;
};

// The products that make AI dependable: payments, queues, mobile apps, real users.
export const projects: Project[] = [
  {
    name: "BCDees",
    area: "Fintech",
    summary:
      "Helps Nigerians in the diaspora exchange naira for foreign currency safely. The naira is locked in escrow, the foreign currency moves outside the app, and the naira is released only when the user confirms it arrived. BCDees never holds foreign currency itself.",
    stack: ["Node.js", "Prisma", "PostgreSQL", "BullMQ", "Redis"],
  },
  {
    name: "Hivark",
    area: "Proptech",
    summary:
      "Lets Nigerian tenants save toward yearly rent monthly, and gives landlords and caretakers one place to run their properties. Never holds funds itself.",
    stack: ["Expo", "React Native", "Express", "PostgreSQL"],
  },
  {
    name: "Movio",
    area: "Mobility",
    summary:
      "Real-time GPS tracking and NFC tap-to-pay for FUTA's campus shuttle, keke and cab. Started as my final-year project.",
    stack: ["React", "TypeScript", "GPS", "NFC"],
    live: "https://movioapp.vercel.app",
    code: "https://github.com/codepraycode/movio-page",
  },
  {
    name: "Probify",
    area: "Education",
    summary:
      "Learn probability as a game: twelve modules, streaks and leaderboards for secondary school students.",
    stack: ["Next.js", "MDX", "KaTeX"],
    live: "https://probify.vercel.app",
    code: "https://github.com/codepraycode/probify",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "BCDEEs",
    period: "2023 – Present",
    summary:
      "Built the backend: naira escrow and release, admin tools, and BullMQ workers for transactions, KYC and reconciliation. Integrated Paystack and Veriff.",
  },
  {
    role: "ICT Coordinator & Technical Lead",
    org: "RCF FUTA",
    period: "2022 – Present",
    summary:
      "Lead a small team running the digital systems of a 1,000+ member fellowship: member management, yearbook, library and internal email.",
  },
  {
    role: "Full-Stack & AI Integration Engineer",
    org: "Picsort",
    period: "2024",
    summary:
      "Co-built the face-recognition pipeline and the product around it: Google Drive import, Paystack payments, and faster inference.",
  },
];

export const education = "B.Tech, Software Engineering · Federal University of Technology, Akure";

export const principles = [
  "Find the root cause before fixing anything, and prove the fix works.",
  "Measure AI, don't just demo it: know how often it's right, and what happens when it's wrong.",
  "Design for failure: retries, clean shutdowns, and no surprises where money moves.",
];
