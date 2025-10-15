export const portfolioData = {
  personal: {
    name: "codepraycode",
    title: "Fullstack Software Engineer",
    location: "Lagos, Nigeria",
    email: "preciousbusiness10@gmail.com",
    phone: "+234 8122137834",
    github: "https://github.com/codepraycode",
    linkedin: "https://linkedin.com/in/codepraycode",
    summary:
      "Software Engineer with over 5 years of experience building scalable, high-performance web and backend systems. Adept at leading projects from concept to production, mentoring engineers, and delivering robust, maintainable code. Skilled in TypeScript, JavaScript, and Python, with strong grounding in system design, cloud infrastructure, and DevOps automation.",
  },

  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Developers Mentored", value: "10+" },
    { label: "Performance Improvement", value: "30%" },
  ],

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Rust", "Java", "C++"],
    frameworks: ["Next.js", "React", "Node.js", "Express", "NestJS"],
    databases: ["PostgreSQL", "MongoDB", "SQL"],
    devops: ["Docker", "CI/CD", "AWS", "Vercel", "Digital Ocean", "Test Automation", "Observability"],
    architecture: ["Microservices", "System Design", "WebSockets", "Cloud Infrastructure"],
    algorithms: ["Tries", "Heaps", "Graphs", "Dynamic Programming", "Greedy Algorithms", "BFS/DFS", "Complexity Analysis"],
  },

  experience: [
    {
      company: "PODX",
      industry: "Web3 Teleconferencing",
      role: "Full-Stack Developer",
      period: "Jan 2025 – Present",
      highlights: [
        "Improved video UI rendering latency by 20% through component refactoring.",
        "Refactored authentication flows, reducing bugs by 30% and enhancing system security.",
        "Collaborated across teams to design and deliver scalable, maintainable systems.",
      ],
      tags: ["Web3", "Video Streaming", "TypeScript", "Performance"],
    },
    {
      company: "Nobox Labs",
      industry: "Digital Innovation",
      role: "Lead Engineer",
      period: "Oct 2023 – Nov 2024",
      highlights: [
        "Led development of high-performance Next.js applications with SSR and performance optimization.",
        "Mentored junior developers and promoted best practices, improving overall team efficiency.",
        "Built an internal file upload service, eliminating third-party costs and improving system reliability.",
      ],
      tags: ["Leadership", "Next.js", "System Architecture", "Team Building"],
    },
  ],

  projects: [
    {
      name: "PicSort",
      tagline: "AI-Powered Face Recognition Album Organizer",
      description:
        "An AI-driven photo management system that automatically organizes Google Drive albums by recognized faces. Achieved 92% accuracy using OpenCV and InsightFace.",
      tech: ["Next.js", "Python", "Supabase", "Google Drive API", "OpenCV", "InsightFace", "Flask"],
      metrics: [
        { label: "Recognition Accuracy", value: "92%" },
        { label: "Processing Speed", value: "100+ photos/min" },
      ],
      highlights: [
        "Developed an automated pipeline for face detection, clustering, and ZIP generation.",
        "Integrated Supabase and email notifications for real-time user delivery.",
        "Optimized inference pipeline for performance and scalability.",
      ],
      link: "https://picsort.app",
      github: null,
      featured: true,
    },
    {
      name: "EdgeRouteX",
      tagline: "High-Performance HTTP Router Engine",
      description:
        "A custom-built TypeScript HTTP router leveraging a radix tree (trie) for O(k) route lookup — achieving 2.5x performance over Express.js.",
      tech: ["TypeScript", "Node.js", "Radix Tree", "Benchmarking"],
      metrics: [
        { label: "Performance vs Express.js", value: "2.5x Faster" },
        { label: "Memory Efficiency", value: "40% Less" },
      ],
      highlights: [
        "Built a modular routing and middleware architecture from the ground up.",
        "Developed a benchmarking suite to evaluate performance across frameworks.",
        "Demonstrated expertise in algorithm design and performance engineering.",
      ],
      link: null,
      github: "https://github.com/codepraycode/edgeroutex",
      featured: true,
    },
  ],

  education: {
    institution: "Federal University of Technology, Akure",
    degree: "B.Tech, Software Engineering",
    period: "Expected Nov 2025",
    achievements: [
      {
        title: "1st Place – Nobox Hackathon 2023",
        description: "IoT & Real-Time Data Category",
        icon: "🏆",
      },
    ],
  },
};
