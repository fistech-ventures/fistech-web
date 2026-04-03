import { CaseStudy } from "@/types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    caseStudyId: "CS-FT-001",
    slug: "cinematic-digital-transformation-braga-experience",
    metadata: {
      title:
        "Digital Transformation: Engineering a High-Velocity Cinematic Ecosystem for Global Brand Authority",
      seoDescription:
        "How Fistech engineered a high-performance cinematic web platform using Next.js and MERN to increase conversions, reduce load time, and dominate SEO.",
      publishDate: "2026-01-09",
      readingTime: "4 min read",
      category: "Digital Growth",
      contentType: "Human Written",
    },
    hero: {
      headline:
        "Engineering a Cinematic Web Experience Without Compromising Performance",
      subHeadline:
        "A conversion-centric media engine that balances cinematic quality with high performance.",
      mainImage: "/images/home/case-studies.png",
    },
    author: { name: "Shafiqul", role: "UX Strategist" },
    problem: {
      title: "The Business Challenge: Overcoming the Engagement-Conversion Gap",
      summary:
        "Braga Experience faced a critical disconnect between its high-end cinematic portfolio and its digital presence.",
    },
    solution: {
      title: "Fistech Conversion-Centric Media Engine",
      approach:
        "We approached this as a system architecture challenge building a conversion-centric media engine.",
    },
    sections: [
      {
        id: "sec-1",
        type: "list",
        title: "Key Challenges",
        items: ["Brand mismatch", "Heavy media", "Weak lead capture"],
      },
      {
        id: "sec-2",
        type: "image",
        url: "/images/home/case-studies.png",
        alt: "Performance Challenge",
      },
      {
        id: "sec-5",
        type: "paragraph",
        content:
          "A hybrid rendering strategy preloads critical UI while asynchronously loading heavy assets.",
      },
    ],
    metrics: {
      kpis: [
        { metric: "Page Load Speed", before: "4.2s", after: "0.8s" },
        { metric: "Mobile Conversion", before: "Baseline", after: "+22%" },
      ],
    },
  },
  {
    caseStudyId: "CS-FT-002",
    slug: "finpulse-saas-scalability-architecture",
    metadata: {
      title: "FinPulse: Scaling a Real-Time Financial Dashboard to 100k+ Users",
      seoDescription:
        "Next.js and WebSockets for low-latency financial SaaS platform.",
      publishDate: "2026-02-15",
      readingTime: "5 min read",
      category: "FinTech",
      contentType: "Human Written",
    },
    hero: {
      headline:
        "Architecting for Millions: Real-Time Data at Institutional Velocity",
      subHeadline:
        "Overcoming latency hurdles in high-frequency financial data visualization.",
      mainImage: "/images/home/case-studies.png",
    },
    author: { name: "Fahim", role: "Lead Solutions Architect" },
    problem: {
      title: "The Latency Barrier",
      summary:
        "FinPulse struggled with data lag and server overhead as their user base grew.",
    },
    solution: {
      title: "Next.js Edge & Optimized State",
      approach:
        "We implemented a TanStack Query and Zustand architecture combined with Next.js Edge functions.",
    },
    sections: [
      {
        id: "fp-sec-1",
        type: "list",
        title: "Technical Hurdles",
        items: ["Memory leaks", "API costs", "SOC2 compliance"],
      },
      {
        id: "fp-sec-2",
        type: "image",
        url: "/images/home/case-studies.png",
        alt: "Real-time Dashboard Architecture",
      },
      {
        id: "fp-sec-3",
        type: "paragraph",
        content:
          "By shifting from traditional polling to custom WebSockets, we ensured UI fluidity.",
      },
    ],
    metrics: {
      kpis: [
        { metric: "Data Latency", before: "1200ms", after: "< 150ms" },
        { metric: "Uptime", before: "98.2%", after: "99.99%" },
      ],
    },
  },
  {
    caseStudyId: "CS-FT-003",
    slug: "lux-decor-headless-ecommerce-transformation",
    metadata: {
      title: "LuxDecor: Boosting AOV by 35% Through Headless Commerce",
      seoDescription:
        "Migrating legacy Shopify to Headless Next.js with Sanity CMS.",
      publishDate: "2026-03-01",
      readingTime: "6 min read",
      category: "E-commerce",
      contentType: "Human Written",
    },
    hero: {
      headline: "Breaking the Template Barrier with Headless Commerce",
      subHeadline:
        "Migrating a premium brand to a bespoke, lightning-fast shopping experience.",
      mainImage: "/images/home/case-studies.png",
    },
    author: { name: "Shafiqul", role: "UX Strategist" },
    problem: {
      title: "The Customization Paradox",
      summary:
        "Growth was throttled by Shopify's liquid templates limiting storytelling UX.",
    },
    solution: {
      title: "Fistech Commerce Engine",
      approach:
        "Decoupled frontend using Next.js with Shopify as a headless backend.",
    },
    sections: [
      {
        id: "lux-sec-1",
        type: "list",
        title: "Core Objectives",
        items: ["Zero Layout Shift", "1-click checkout", "AR previews"],
      },
      {
        id: "lux-sec-2",
        type: "image",
        url: "/images/home/case-studies.png",
        alt: "Headless E-commerce Metrics",
      },
    ],
    metrics: {
      kpis: [
        { metric: "Avg. Order Value", before: "$140", after: "$189" },
        { metric: "Lighthouse Score", before: "42", after: "98" },
      ],
    },
  },
  {
    caseStudyId: "CS-FT-004",
    slug: "streamline-hr-enterprise-automation",
    metadata: {
      title:
        "Streamline HR: Automating Enterprise Workflows with AI Integration",
      seoDescription:
        "Custom ERP-lite solution to automate 40% of manual HR operations.",
      publishDate: "2026-03-25",
      readingTime: "4 min read",
      category: "Internal Tools",
      contentType: "Human Written",
    },
    hero: {
      headline: "From Manual Chaos to Automated Precision",
      subHeadline:
        "Custom internal tooling designed to scale enterprise operations.",
      mainImage: "/images/home/case-studies.png",
    },
    author: { name: "Fahim", role: "Full Stack Engineer" },
    problem: {
      title: "The Administrative Bottleneck",
      summary:
        "Managers were losing 15 hours per week on manual data entry and verification.",
    },
    solution: {
      title: "Bespoke Automation Suite",
      approach:
        "Modular internal dashboard using the MERN stack with AI-driven parsing.",
    },
    sections: [
      {
        id: "sh-sec-1",
        type: "paragraph",
        content:
          "The solution integrated directly with legacy databases via a modern bridge UI.",
      },
      {
        id: "sh-sec-2",
        type: "image",
        url: "/images/home/case-studies.png",
        alt: "Automation Dashboard",
      },
    ],
    metrics: {
      kpis: [
        { metric: "Manual Work", before: "40 hrs/wk", after: "4 hrs/wk" },
        { metric: "Error Rate", before: "12%", after: "< 1%" },
      ],
    },
  },
];
