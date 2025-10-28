export const portfolioData = {
  personal: {
    name: "Precious Olusola",
    nickId: "codepraycode",
    title: "Full-Stack Engineer & Technical Lead",
    location: "Lagos, Nigeria",
    email: "preciousbusiness10@gmail.com",
    phone: "+234 8122137834",
    github: "https://github.com/codepraycode",
    linkedin: "https://linkedin.com/in/codepraycode",
    summary:
      "Software engineer with deep experience across the full stack — from scalable web apps to backend infrastructure. Strong in TypeScript, Node.js, Python, and currently advancing into systems programming with Rust. Skilled in architecting maintainable systems, optimizing performance, and leading teams through technical execution. Passionate about building reliable, human-centered software that scales.",
  },

  skills: {
    leadership: [
      "Technical Leadership",
      "System Architecture",
      "Project Planning",
      "Code Review",
      "Mentoring",
      "Team Collaboration",
    ],
    backend: [
      "TypeScript",
      "Node.js",
      "Python",
      "Express",
      "Flask",
      "REST APIs",
      "WebSockets",
      "API Design",
    ],
    frontend: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Optimization",
    ],
    mobile: ["React Native", "Cross-Platform Development"],
    cloud: [
      "AWS",
      "Docker",
      "CI/CD",
      "Vercel",
      "DigitalOcean",
      "Cloudflare",
      "Supabase",
      "RunPod",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Database Design",
      "Query Optimization",
    ],
    ai: [
      "AI Pipeline Integration",
      "Computer Vision",
      "RunPod",
      "Face Detection",
      "Image Processing",
    ],
    architecture: [
      "Microservices",
      "System Design",
      "API Design",
      "Scalable Infrastructure",
      "Performance Optimization",
    ],
    systems: ["Linux System Administration", "Bash Scripting", "Rust (in progress)", "Networking Fundamentals"],
  },

  experience: [
    {
      company: "RCF FUTA",
      industry: "Education / ICT Infrastructure",
      role: "ICT Coordinator & Technical Lead",
      period: "2022 – Present",
      highlights: [
        "Led complete digital transformation for a 1000+ member fellowship",
        "Architected multiple systems including Oracle (member management), FYB Hive (yearbook), and ICT Library (data & resource management)",
        "Designed internal email, database, and reporting infrastructure",
        "Built custom authentication and admin systems using Next.js and PostgreSQL",
        "Mentored developers and managed deployments to production",
      ],
      metrics: [
        { label: "User Base", value: "1000+ members" },
        { label: "Systems", value: "5+ internal apps" },
        { label: "Scope", value: "Full ICT ecosystem" },
      ],
      tags: [
        "Technical Leadership",
        "System Architecture",
        "Next.js",
        "Node.js",
        "Python",
        "Infrastructure",
      ],
    },
    {
      company: "Picsort",
      industry: "AI / Computer Vision",
      role: "Full-Stack & AI Integration Engineer",
      period: "2024",
      highlights: [
        "Co-developed AI-powered photo organization platform using face detection and clustering",
        "Integrated Google Drive APIs for direct folder access and album verification",
        "Developed face recognition pipeline using InsightFace, HDBSCAN, and FAISS",
        "Implemented Paystack payments, promo code logic, and optimized inference performance",
      ],
      metrics: [
        { label: "Image Sources", value: "Google Drive, ZIP, Uploads" },
        { label: "Processing Speed", value: "Optimized face clustering pipeline" },
      ],
      tags: ["Python", "Flask", "Next.js", "TypeScript", "RunPod", "AI Integration"],
    },
    {
      company: "BCDEEs",
      industry: "FinTech / P2P Trading",
      role: "Full-Stack Developer",
      period: "2023 – 2024",
      highlights: [
        "Developed peer-to-peer crypto trading backend supporting multiple currencies",
        "Built secure transaction handling, escrow logic, and real-time order management",
        "Implemented wallet management and admin dashboard for trade oversight",
        "Ensured performance and compliance across financial operations",
      ],
      metrics: [
        { label: "Supported Currencies", value: "NGN, USD, CAD, EUR, GBP" },
        { label: "Core Features", value: "P2P Escrow, Wallets, Admin Panel" },
      ],
      tags: ["FinTech", "Node.js", "React Native", "PostgreSQL", "Prisma"],
    },
  ],

  projects: [
    {
      name: "Dispacc",
      tagline: "Wallet-as-a-Service Platform for Temporary Fund Collection",
      description:
        "An API-first wallet service that lets users create disposable wallets for single-use payments. Wallets automatically close and transfer funds to the creator with complete logs and PDF exports. Designed for integration with other systems.",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Payment APIs",
      ],
      highlights: [
        "Architected wallet lifecycle automation system",
        "Integrated secure payments and transaction logging",
        "Built admin dashboard and analytics reporting",
        "Designed for high reusability and third-party integration",
      ],
      featured: true,
      link: "#"
    },
    {
      name: "Probify",
      tagline: "E-learning Platform for Probability Education",
      description:
        "A gamified platform for teaching probability to students aged 13–16. Includes 12 structured modules, leaderboards, and timed exercises built with a focus on learning progression.",
      tech: ["Next.js", "Tailwind CSS", "MDX", "KaTeX", "MobX", "Auth.js", "Nobox"],
      highlights: [
        "Designed modular e-learning flow with progress tracking",
        "Implemented leaderboard ranking system with real-time updates",
        "Created responsive MDX-based math content renderer",
      ],
      github: "https://github.com/codepraycode/probify",
      featured: true,
      link: "probify.vercel.app"
    },
    {
  name: "RCF FUTA ICT Portal",
  tagline: "Digital Infrastructure Ecosystem for Fellowship Management",
  description:
    "A comprehensive ICT ecosystem built for The Redeemed Christian Fellowship, FUTA Chapter — serving over 1,000 members. The platform powers all internal digital operations, including member databases, email infrastructure, and dashboard. It represents a complete digital transformation effort within the fellowship.",
  tech: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL"
  ],
  highlights: [
    "Spearheaded the ICT transformation for the entire fellowship community",
    "Developed multiple interconnected systems — Oracle (member management), FYB Hive (yearbook), ICT Lib (data management), and internal email system",
    "Architected and maintained centralized databases, authentication, and admin tools",
    "Led a small technical team to ensure system reliability",
    "Integrated custom SSO verification and reusable admin UI components for scalability"
  ],
  link: "https://ict.rcffuta.com",
  featured: true
}
,
    {
    name: "EdgerRouteX",
    tagline: "Edge Computing Advisory Framework for Transportation",
    description:
      "A web-based advisory tool that helps transportation stakeholders explore and plan edge computing implementations through tailored recommendations and roadmaps. The system captures user goals, constraints, and infrastructure details to generate actionable strategies and downloadable roadmaps for deployment.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React",
      "Vercel"
    ],
    highlights: [
      "Developed multi-step advisory form with validation and data persistence",
      "Built recommendation engine mapping goals to tailored edge strategies",
      "Implemented roadmap generator with PDF export and case study integration",
      "Designed domain-driven architecture based on transportation research requirements"
    ],
    github: "https://github.com/codepraycode/edgeroutex",
    link: "https://edgerx.vercel.app/", // (or live link when available)
    featured: true
},
    {
      name: "InternCity",
      tagline: "Mobile Internship Discovery Platform",
      description:
        "A React Native app connecting students to internship opportunities. Built for a client as a final-year project, featuring job listings, applications, and notifications.",
      tech: ["React Native", "TypeScript", "Expo", "SQLite", "Axios"],
      highlights: [
        "Built cross-platform mobile UI for Android",
        "Implemented authentication and API integration",
        "Delivered production-ready app for student internships",
      ],
      github: "https://github.com/codepraycode/interncity",
      link: "#"
    },
  ],

  education: {
    institution: "Federal University of Technology, Akure (FUTA)",
    degree: "B.Tech, Software Engineering",
    period: "Expected 2025",
    achievements: [
      {
        title: "ICT Coordinator – RCF FUTA",
        description:
          "Led digital transformation across fellowship operations and data systems.",
        icon: "💻",
      },
      {
        title: "Full-Stack Innovator",
        description: "Developed and launched multiple independent and client projects.",
        icon: "⚙️",
      },
    ],
  },

  certifications: [
    {
      name: "Rust Systems Programming Certification",
      status: "In Progress",
      description:
        "Expanding into systems programming and high-performance backend development.",
    },
    {
      name: "AWS Cloud Practitioner",
      status: "In Progress",
      description:
        "Building cloud architecture and deployment expertise for scalable systems.",
    },
  ],

  philosophy: [
    "Every system should outlive its creator — durability over flashiness.",
    "Simplicity is not lack of depth; it’s mastery of clarity.",
    "Build to understand — learning happens through creation.",
    "Codebases are living things; maintain them with respect.",
    "Systems programming is the next evolution of software craftsmanship.",
  ],

  learning: [
    "Rust for systems and backend development",
    "Cloud-native architecture & distributed systems",
    "Performance tuning and observability at scale",
    "Systems-level networking and concurrency models",
    "Compiler internals and language design fundamentals",
  ],
};
