export const site = {
  name: "Precious Olusola",
  handle: "codepraycode",
  headline: "I build smart software that solves real problems.",
  intro:
    "Full-stack engineer in Lagos, heading deeper into AI. I want to be able to take any idea and turn it into a working, intelligent product: on the web, on a phone, on a desktop, or on a piece of hardware. Everything below is the groundwork.",
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

export const projects: Project[] = [
  {
    name: "receipt-ocr-ng",
    area: "AI",
    summary:
      "Reads OPay, PalmPay, Kuda, Moniepoint and bank receipts into structured data with a vision model. Open source on npm, about 1,000 downloads.",
    stack: ["TypeScript", "Groq", "Llama 4 Vision"],
    live: "https://www.npmjs.com/package/receipt-ocr-ng",
    code: "https://github.com/codepraycode/dispacc-receipt-ocr",
  },
  {
    name: "BCDees",
    area: "Fintech",
    summary:
      "Cross-border P2P currency exchange: escrow during trades, multi-currency wallets, identity checks, real-time chat, and background workers for transactions and reconciliation.",
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
    name: "OracleSage",
    area: "AI",
    summary:
      "Ask a question about the Bible in plain language and get a verse-grounded answer. Runs on Cloudflare's edge with conversation memory.",
    stack: ["Workers AI", "Llama 3.3", "React"],
    live: "https://cf-ai-oraclesage.pages.dev",
    code: "https://github.com/codepraycode/cf_ai_oraclesage",
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
      "Built the P2P trading backend: escrow, wallets, admin tools, and BullMQ workers for transactions, KYC and reconciliation. Integrated Paystack and Veriff.",
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
      "Co-built an AI photo organiser: face detection and clustering (InsightFace, HDBSCAN, FAISS), Google Drive import and Paystack payments.",
  },
];

export const education = "B.Tech, Software Engineering · Federal University of Technology, Akure";

export const principles = [
  "Find the root cause before fixing anything, and prove the fix works.",
  "Design for failure: retries, clean shutdowns, and no surprises where money moves.",
  "Keep it simple enough that the next person can pick it up.",
];
