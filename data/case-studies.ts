import { ICaseStudy } from "@/types";

// export const CASE_STUDIES: ICaseStudy[] = [
//   {
//     caseStudyId: "CS-FT-001",
//     slug: "cinematic-digital-transformation-braga-experience",
//     metadata: {
//       title:
//         "Digital Transformation: Engineering a High-Velocity Cinematic Ecosystem for Global Brand Authority",
//       seoDescription:
//         "How Fistech engineered a high-performance cinematic web platform using Next.js and MERN to increase conversions, reduce load time, and dominate SEO.",
//       publishDate: "2026-01-09",
//       readingTime: "4 min read",
//       category: "Digital Growth",
//       contentType: "Human Written",
//     },
//     hero: {
//       headline:
//         "Engineering a Cinematic Web Experience Without Compromising Performance",
//       subHeadline:
//         "A conversion-centric media engine that balances cinematic quality with high performance.",
//       mainImage: "/images/home/case-studies.png",
//     },
//     author: { name: "Shafiqul", role: "UX Strategist" },
//     problem: {
//       title: "The Business Challenge: Overcoming the Engagement-Conversion Gap",
//       summary:
//         "Braga Experience faced a critical disconnect between its high-end cinematic portfolio and its digital presence.",
//     },
//     solution: {
//       title: "Fistech Conversion-Centric Media Engine",
//       approach:
//         "We approached this as a system architecture challenge building a conversion-centric media engine.",
//     },
//     sections: [
//       {
//         id: "sec-1",
//         type: "list",
//         title: "Key Challenges",
//         items: ["Brand mismatch", "Heavy media", "Weak lead capture"],
//       },
//       {
//         id: "sec-2",
//         type: "image",
//         url: "/images/home/case-studies.png",
//         alt: "Performance Challenge",
//       },
//       {
//         id: "sec-5",
//         type: "paragraph",
//         content:
//           "A hybrid rendering strategy preloads critical UI while asynchronously loading heavy assets.",
//       },
//     ],
//     metrics: {
//       kpis: [
//         { metric: "Page Load Speed", before: "4.2s", after: "0.8s" },
//         { metric: "Mobile Conversion", before: "Baseline", after: "+22%" },
//       ],
//     },
//   },
//   {
//     caseStudyId: "CS-FT-002",
//     slug: "finpulse-saas-scalability-architecture",
//     metadata: {
//       title: "FinPulse: Scaling a Real-Time Financial Dashboard to 100k+ Users",
//       seoDescription:
//         "Next.js and WebSockets for low-latency financial SaaS platform.",
//       publishDate: "2026-02-15",
//       readingTime: "5 min read",
//       category: "FinTech",
//       contentType: "Human Written",
//     },
//     hero: {
//       headline:
//         "Architecting for Millions: Real-Time Data at Institutional Velocity",
//       subHeadline:
//         "Overcoming latency hurdles in high-frequency financial data visualization.",
//       mainImage: "/images/home/case-studies.png",
//     },
//     author: { name: "Fahim", role: "Lead Solutions Architect" },
//     problem: {
//       title: "The Latency Barrier",
//       summary:
//         "FinPulse struggled with data lag and server overhead as their user base grew.",
//     },
//     solution: {
//       title: "Next.js Edge & Optimized State",
//       approach:
//         "We implemented a TanStack Query and Zustand architecture combined with Next.js Edge functions.",
//     },
//     sections: [
//       {
//         id: "fp-sec-1",
//         type: "list",
//         title: "Technical Hurdles",
//         items: ["Memory leaks", "API costs", "SOC2 compliance"],
//       },
//       {
//         id: "fp-sec-2",
//         type: "image",
//         url: "/images/home/case-studies.png",
//         alt: "Real-time Dashboard Architecture",
//       },
//       {
//         id: "fp-sec-3",
//         type: "paragraph",
//         content:
//           "By shifting from traditional polling to custom WebSockets, we ensured UI fluidity.",
//       },
//     ],
//     metrics: {
//       kpis: [
//         { metric: "Data Latency", before: "1200ms", after: "< 150ms" },
//         { metric: "Uptime", before: "98.2%", after: "99.99%" },
//       ],
//     },
//   },
//   {
//     caseStudyId: "CS-FT-003",
//     slug: "lux-decor-headless-ecommerce-transformation",
//     metadata: {
//       title: "LuxDecor: Boosting AOV by 35% Through Headless Commerce",
//       seoDescription:
//         "Migrating legacy Shopify to Headless Next.js with Sanity CMS.",
//       publishDate: "2026-03-01",
//       readingTime: "6 min read",
//       category: "E-commerce",
//       contentType: "Human Written",
//     },
//     hero: {
//       headline: "Breaking the Template Barrier with Headless Commerce",
//       subHeadline:
//         "Migrating a premium brand to a bespoke, lightning-fast shopping experience.",
//       mainImage: "/images/home/case-studies.png",
//     },
//     author: { name: "Shafiqul", role: "UX Strategist" },
//     problem: {
//       title: "The Customization Paradox",
//       summary:
//         "Growth was throttled by Shopify's liquid templates limiting storytelling UX.",
//     },
//     solution: {
//       title: "Fistech Commerce Engine",
//       approach:
//         "Decoupled frontend using Next.js with Shopify as a headless backend.",
//     },
//     sections: [
//       {
//         id: "lux-sec-1",
//         type: "list",
//         title: "Core Objectives",
//         items: ["Zero Layout Shift", "1-click checkout", "AR previews"],
//       },
//       {
//         id: "lux-sec-2",
//         type: "image",
//         url: "/images/home/case-studies.png",
//         alt: "Headless E-commerce Metrics",
//       },
//     ],
//     metrics: {
//       kpis: [
//         { metric: "Avg. Order Value", before: "$140", after: "$189" },
//         { metric: "Lighthouse Score", before: "42", after: "98" },
//       ],
//     },
//   },
//   {
//     caseStudyId: "CS-FT-004",
//     slug: "streamline-hr-enterprise-automation",
//     metadata: {
//       title:
//         "Streamline HR: Automating Enterprise Workflows with AI Integration",
//       seoDescription:
//         "Custom ERP-lite solution to automate 40% of manual HR operations.",
//       publishDate: "2026-03-25",
//       readingTime: "4 min read",
//       category: "Internal Tools",
//       contentType: "Human Written",
//     },
//     hero: {
//       headline: "From Manual Chaos to Automated Precision",
//       subHeadline:
//         "Custom internal tooling designed to scale enterprise operations.",
//       mainImage: "/images/home/case-studies.png",
//     },
//     author: { name: "Fahim", role: "Full Stack Engineer" },
//     problem: {
//       title: "The Administrative Bottleneck",
//       summary:
//         "Managers were losing 15 hours per week on manual data entry and verification.",
//     },
//     solution: {
//       title: "Bespoke Automation Suite",
//       approach:
//         "Modular internal dashboard using the MERN stack with AI-driven parsing.",
//     },
//     sections: [
//       {
//         id: "sh-sec-1",
//         type: "paragraph",
//         content:
//           "The solution integrated directly with legacy databases via a modern bridge UI.",
//       },
//       {
//         id: "sh-sec-2",
//         type: "image",
//         url: "/images/home/case-studies.png",
//         alt: "Automation Dashboard",
//       },
//     ],
//     metrics: {
//       kpis: [
//         { metric: "Manual Work", before: "40 hrs/wk", after: "4 hrs/wk" },
//         { metric: "Error Rate", before: "12%", after: "< 1%" },
//       ],
//     },
//   },
// ];
export const CASE_STUDIES: ICaseStudy[] = [
  // ─────────────────────────────────────────────
  // CS-FT-001 | Braga Experience
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-001",
    slug: "cinematic-digital-transformation-braga-experience",

    metadata: {
      title: "Engineering a High-Velocity Cinematic Ecosystem", // 50 chars
      seoDescription:
        "How Fistech engineered a cinematic web platform using Next.js and MERN to boost conversions, cut load time, and dominate SEO.", // 126 chars
      publishDate: "2026-03-31",
      readingTime: "6 min read",
      category: "Web Application",
      contentType: "Case Study",
    },

    hero: {
      headline: "Engineering a Cinematic Web Experience Without Compromising Performance",
      subHeadline:
        "A conversion-focused media engine built for speed, SEO, and high-ticket lead generation.",
      mainImage: "/images/projects/lucashbragof.png",
    },

    author: {
      name: "iftykhar Alam",
      role: "UX Strategist",
    },

    problem: {
      title: "The Engagement-Conversion Gap",
      summary:
        "A high-end creative agency struggled with a mismatch between portfolio quality and digital experience, leading to lost leads and diluted brand perception.",
    },

    solution: {
      title: "Fistech Conversion-Centric Media Engine",
      approach:
        "A decoupled MERN + Next.js architecture focused on performance, scalability, and conversion optimization.",
    },

    sections: [
      {
        id: "br-1",
        type: "list",
        title: "Technical Orchestration",
        items: [
          "Next.js SSR & Strategic Hydration — hybrid rendering for instant first paint",
          "Asynchronous Lead-Capture System via Node.js & Express.js middleware",
          "Video SEO & Structured Data using JSON-LD and VideoObject Schema",
        ],
      },
      {
        id: "br-2",
        type: "quote",
        text: "The result is a platform that captures demand, onboards supply, and grows exponentially through data density.",
        author: "Fistech Solutions Architect",
      },
    ],

    metrics: {
      kpis: [
        { metric: "Average Page Load Speed", before: "4.2s", after: "0.8s" },
        { metric: "Mobile Lead Conversion", before: "Fragmented", after: "Seamless (+22% inquiries)" },
        { metric: "SEO Visibility (Video)", before: "Non-indexed", after: "Rich snippets enabled" },
        { metric: "Client Intake Velocity", before: "Manual process", after: "Automated pipeline" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-002 | Lolophysicaltherapy
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-002",
    slug: "digital-transformation-lolophysicaltherapy",

    metadata: {
      title: "Engineering a High-Trust Clinical Platform", // 46 chars
      seoDescription:
        "How Fistech transformed a physiotherapy practice into a scalable digital platform that boosts trust, accessibility, and patient conversion.", // 140 chars
      publishDate: "2026-03-31",
      readingTime: "5 min read",
      category: "Web Application",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming Clinical Expertise into a Scalable Digital Trust Engine",
      subHeadline:
        "A high-performance healthcare platform designed for authority, clarity, and patient conversion.",
      mainImage: "/images/projects/lolophysicaltherapy.webp",
    },

    author: {
      name: "Sahed Rahman",
      role: "UX Strategist",
    },

    problem: {
      title: "The Visibility-to-Trust Friction",
      summary:
        "A disconnect between high-quality clinical services and a fragmented digital presence led to lost patient trust and reduced conversions.",
    },

    solution: {
      title: "Fistech Clinical Authority Engine",
      approach:
        "A Next.js-powered platform built with technical minimalism, optimized information hierarchy, and modular scalability.",
    },

    sections: [
      {
        id: "lp-1",
        type: "list",
        title: "Core Features Delivered",
        items: [
          "Next.js SSR — optimized critical rendering path for fast-loading healthcare content",
          "Component-Based Architecture — reusable modules for services, practitioners, and clinic branches",
          "Responsive Parametric Design — fluid Tailwind CSS system optimized for all devices",
          "Optimized Information Hierarchy — 5-page structured flow guiding patients to inquiry",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Load Velocity", before: "Unoptimized", after: "<1.2s LCP" },
        { metric: "Brand Authority", before: "Word-of-mouth only", after: "Global digital presence" },
        { metric: "Information Accessibility", before: "High friction", after: "100% structured transparency" },
        { metric: "Scalability", before: "Limited", after: "Enterprise-ready" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-003 | Witklip Farm
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-003",
    slug: "agritech-digital-transformation-witklip-farm",

    metadata: {
      title: "Engineering a Precision Agri-Tech Ecosystem", // 47 chars
      seoDescription:
        "How Fistech transformed Witklip Farm into a high-performance agri-tech platform enabling global investment, compliance visibility, and data-driven decisions.", // 157 chars
      publishDate: "2026-03-31",
      readingTime: "6 min read",
      category: "Web Application",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming Agricultural Heritage into a Global Investment Platform",
      subHeadline:
        "A precision-engineered digital ecosystem designed for transparency, scalability, and international trust.",
      mainImage: "/images/projects/witklipfarm.webp",
    },

    author: {
      name: "Fahim Sarker",
      role: "Solutions Architect",
    },

    problem: {
      title: "The Legacy Paradox",
      summary:
        "A high-performing agricultural enterprise lacked a digital presence that reflected its operational scale, compliance, and investment potential.",
    },

    solution: {
      title: "Fistech Precision Agri-Tech Digital Hub",
      approach:
        "A conversion-driven, data-centric platform engineered to function as a digital investment interface rather than a traditional website.",
    },

    sections: [
      {
        id: "wk-1",
        type: "list",
        title: "Core Technical Features",
        items: [
          "Next.js & MERN Performance Architecture — decoupled system for ultra-fast global delivery",
          "Structured Data Visualization — parametric modules for soil suitability and expansion ROI",
          "Compliance-First UI — B-BBEE Level 2 & 125% procurement recognition integrated into UX",
          "SEO-Dominant Infrastructure — agri-tech keyword strategy for global organic visibility",
        ],
      },
      {
        id: "wk-2",
        type: "image",
        url: "/images/projects/witklipfarm-1.webp",
        alt: "Investment Matrix UI",
        caption: "Data-driven UI focusing on transparency and institutional credibility.",
      },
    ],

    metrics: {
      kpis: [
        { metric: "Brand Positioning", before: "Local family farm", after: "Industrial agri-powerhouse" },
        { metric: "Trust Signaling", before: "Implicit / offline", after: "Integrated compliance UI" },
        { metric: "Lead Quality", before: "General inquiries", after: "Data-driven investor leads" },
        { metric: "Site Performance", before: "Unoptimized", after: "Sub-1s interaction time" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-004 | Vivtex (Biopharma)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-004",
    slug: "biopharma-digital-transformation-vivtex",

    metadata: {
      title: "Engineering a $2.1B Biopharmaceutical Platform", // 49 chars
      seoDescription:
        "How Fistech built a high-performance biotech platform for Vivtex, enabling investor trust, scientific scalability, and a $2.1B partnership.", // 140 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "Web Application",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming Scientific Innovation into an Investor-Ready Digital Ecosystem",
      subHeadline:
        "A performance-first architecture designed to bridge complex biology with global capital markets.",
      mainImage: "/images/projects/vivtex-1.webp",
    },

    author: {
      name: "iftykhar Alam",
      role: "Lead Solutions Architect",
    },

    problem: {
      title: "The Credibility Gap",
      summary:
        "A disconnect between cutting-edge biological innovation and a legacy digital presence hindered investor trust and global partnership opportunities.",
    },

    solution: {
      title: "Fistech Performance-First Biotech Platform",
      approach:
        "A decoupled, high-performance architecture designed to unify scientific depth with investor-grade UX and scalability.",
    },

    sections: [
      {
        id: "vt-1",
        type: "list",
        title: "Technical Pillars",
        items: [
          "Hybrid Next.js & MERN Architecture — SSR-enabled scientific repository for full indexing",
          "Asset Optimization & LCP Management — sub-second load via lazy loading and CDN edge caching",
          "Dynamic Data Decoupling — headless CMS enabling real-time updates without redeployment",
          "Monochromatic Innovation UI System — high-contrast design replacing legacy agricultural aesthetics",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Visual Authority", before: "Legacy / agricultural perception", after: "High-end corporate identity" },
        { metric: "Largest Contentful Paint (LCP)", before: ">3.5s", after: "<1.2s" },
        { metric: "Data Accessibility", before: "Static and manual updates", after: "Dynamic scientific repository" },
        { metric: "Investor Readiness", before: "Low perceived value", after: "$2.1B partnership secured" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-005 | Hierro A Medida (Industrial Steel)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-005",
    slug: "industrial-steel-ecommerce-mern-platform",

    metadata: {
      title: "Digitizing Industrial Steel with a MERN Platform", // 51 chars
      seoDescription:
        "How Fistech built a MERN platform to automate industrial steel procurement with real-time pricing, logistics automation, and configurable products.", // 147 chars
      publishDate: "2026-03-31",
      readingTime: "6 min read",
      category: "E-commerce / Industrial Platform",
      contentType: "Case Study",
    },

    hero: {
      headline: "Digitizing Industrial Steel Procurement Through Intelligent Automation",
      subHeadline:
        "A custom MERN-powered platform enabling real-time pricing, logistics automation, and configure-to-order commerce.",
      mainImage: "/images/projects/hierro-a-medida.webp",
    },

    author: {
      name: "Sahed Rahman",
      role: "Solutions Architect",
    },

    problem: {
      title: "The Manual Bottleneck in Steel Procurement",
      summary:
        "Industrial steel procurement relied on manual quotes and complex calculations, creating sales friction and operational delays.",
    },

    solution: {
      title: "The HierroMarket Engine",
      approach:
        "A custom-built MERN platform designed to automate industrial pricing, logistics, and fabrication workflows.",
    },

    sections: [
      {
        id: "hm-1",
        type: "list",
        title: "Key Features Engineered",
        items: [
          "Real-Time Parametric Pricing Engine — dynamic price and weight calculation from user-inputted dimensions",
          "Automated Logistics & Shipping Logic — conditional crane-truck vs parcel delivery based on thresholds",
          "Fabrication Service Integration — CNC cutting and rebar bending modules embedded in checkout",
          "Admin Dashboard — Excel-linked global price updates and order/logistics oversight",
        ],
      },
      {
        id: "hm-2",
        type: "quote",
        text: "A fully custom-built eCommerce website that bridges the gap between complex code and business value.",
        author: "Client Representative",
      },
    ],

    metrics: {
      kpis: [
        { metric: "Sales Process", before: "Manual quoting required", after: "Fully automated online ordering" },
        { metric: "Operational Efficiency", before: "Manual logistics decisions", after: "Automated shipping selection" },
        { metric: "Scalability", before: "Limited product complexity", after: "Thousands of configurable variants" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-006 | Build A Story (EdTech AI)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-006",
    slug: "generative-ai-personalized-edtech-platform",

    metadata: {
      title: "Scaling Emotional Connection via Generative AI", // 48 chars
      seoDescription:
        "How Fistech built a personalized EdTech platform using voice cloning, computer vision, and LLMs to create immersive, high-conversion storytelling.", // 147 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "EdTech / AI Platform",
      contentType: "Case Study",
    },

    hero: {
      headline: "Engineering a Human-Centric AI Storytelling Platform",
      subHeadline:
        "A scalable ecosystem combining voice, vision, and language models to create deeply personalized narratives.",
      mainImage: "/images/projects/build-a-story.webp",
    },

    author: {
      name: "Fahim Sarker",
      role: "Lead Solutions Architect",
    },

    problem: {
      title: "Breaking the Static Personalization Barrier",
      summary:
        "Traditional personalized books lacked emotional depth, relying on basic text replacement instead of true immersive storytelling.",
    },

    solution: {
      title: "Fistech Proprietary Narrative Engine",
      approach:
        "A unified AI ecosystem integrating voice, vision, and language models into a seamless storytelling platform.",
    },

    sections: [
      {
        id: "bs-1",
        type: "list",
        title: "AI Systems Deployed",
        items: [
          "Neural Voice Cloning & TTS Engine — 15-second sample transformed into a persistent digital voice",
          "Parametric Avatar Generation — user photos mapped onto storybook characters via computer vision",
          "Unified AI Orchestration Layer — Node.js backend synchronizing voice, image, and narrative generation",
          "Hybrid Output Engine — automated generation of interactive eBooks and print-ready files",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Product Differentiation", before: "Template-based personalization", after: "Voice + Face AI system" },
        { metric: "User Engagement", before: "Passive reading", after: "Interactive storytelling (+250% interaction rate)" },
        { metric: "Revenue Model", before: "Single digital purchase", after: "Digital + print ecosystem (+65% per-user value)" },
        { metric: "System Scalability", before: "Manual backend processes", after: "Automated AI pipelines (99.9% uptime)" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-007 | Scuba Life
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-007",
    slug: "scuba-life-digital-ecosystem-transformation",

    metadata: {
      title: "Engineering a Global Adventure Platform", // 42 chars
      seoDescription:
        "How Fistech transformed Scuba Life into a scalable digital ecosystem with high-performance architecture, automated funnels, and global booking capability.", // 154 chars
      publishDate: "2026-03-31",
      readingTime: "6 min read",
      category: "Service Platform / Experience Commerce",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming a Lifestyle Brand into a Scalable Global Adventure Platform",
      subHeadline:
        "A high-performance ecosystem unifying education, travel, and commerce into a seamless digital experience.",
      mainImage: "/images/projects/Scubalife.webp",
    },

    author: {
      name: "iftykhar Alam",
      role: "UX Strategist",
    },

    problem: {
      title: "The Fragmentation Friction",
      summary:
        "A fragmented digital presence created confusion, reduced trust, and limited scalability for high-ticket adventure services.",
    },

    solution: {
      title: "Fistech Scalable Service Engine",
      approach:
        "A unified, performance-driven ecosystem designed to centralize content, automate conversions, and enable global scaling.",
    },

    sections: [
      {
        id: "sl-1",
        type: "list",
        title: "Core Architecture Delivered",
        items: [
          "Next.js Performance Architecture — sub-second delivery of high-resolution underwater media via SSR",
          "Tri-Tier Conversion Funnel (Learn | Explore | Equip) — structured journeys reducing cognitive load",
          "Automated Content & Operations Engine — real-time Node.js CMS for courses and global expeditions",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Brand Positioning", before: "Local solo instructor", after: "Global agency authority" },
        { metric: "User Load Speed", before: "Unoptimized", after: "Sub-second LCP (~40% bounce reduction)" },
        { metric: "Sales Process", before: "Manual inquiries", after: "Automated CTA funnel (24/7 lead capture)" },
        { metric: "SEO Visibility", before: "Low presence", after: "Core Web Vitals optimized" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-008 | Sktchlabs (Generative AI Creative)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-008",
    slug: "generative-ai-creative-commerce-platform",

    metadata: {
      title: "Scaling Personalized Media via Generative AI", // 47 chars
      seoDescription:
        "How Fistech engineered a scalable AI creative platform with automated image processing, PDF generation, and global digital fulfillment.", // 136 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "AI SaaS / Creative Commerce",
      contentType: "Case Study",
    },

    hero: {
      headline: "Scaling Creative Personalization Through AI Automation",
      subHeadline:
        "A high-performance generative AI ecosystem enabling real-time sketch transformation and global digital fulfillment.",
      mainImage: "/images/projects/sktch-labs.webp",
    },

    author: {
      name: "Sahed Rahman",
      role: "Lead Solutions Architect",
    },

    problem: {
      title: "Creative Friction in a High-Volume Market",
      summary:
        "Manual conversion of photos into high-quality line art created scalability issues, high costs, and slow turnaround times.",
    },

    solution: {
      title: "Fistech Generative Creative Engine",
      approach:
        "A fully automated AI-powered ecosystem combining edge AI processing, scalable backend infrastructure, and seamless monetization workflows.",
    },

    sections: [
      {
        id: "sk-1",
        type: "list",
        title: "AI Pipeline Stages",
        items: [
          "Edge AI Image Processing (Gemini Nano) — automated photo-to-vector-sketch transformation",
          "Parametric Prompt Engineering UI — interactive density and style controls for output refinement",
          "Automated PDF Orchestration Engine — dynamic generation of print-ready, high-resolution files",
          "Scalable Cloud & Payment Infrastructure — AWS + Stripe handling global transactions and file storage",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Processing Speed", before: "Manual / slow turnaround", after: "<15 seconds automated (+35% cart completion)" },
        { metric: "Operational Cost", before: "Manual design team required", after: "Fully automated pipeline (+60% net margins)" },
        { metric: "Market Reach", before: "Local service", after: "Global SaaS platform (24/7 availability)" },
        { metric: "User Engagement", before: "Single output", after: "Multi-variation testing (+22% conversion)" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-009 | Evpitch (HR-Tech)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-009",
    slug: "video-first-hrtech-recruitment-platform",

    metadata: {
      title: "Engineering a Video-First Recruitment Platform", // 48 chars
      seoDescription:
        "How Fistech built a video-first HR platform using AWS, MERN, and Next.js to transform recruitment through media-driven candidate evaluation.", // 141 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "HR-Tech / SaaS Platform",
      contentType: "Case Study",
    },

    hero: {
      headline: "Reinventing Recruitment Through Video-First Talent Discovery",
      subHeadline:
        "A scalable media ecosystem transforming static resumes into dynamic, high-conversion hiring experiences.",
      mainImage: "/images/projects/evpitch.webp",
    },

    author: {
      name: "Fahim Sarker",
      role: "Lead Solutions Architect",
    },

    problem: {
      title: "The Personality Gap in Recruitment",
      summary:
        "Traditional hiring systems rely on static resumes that fail to communicate soft skills, leading to inefficient hiring and poor candidate matching.",
    },

    solution: {
      title: "Fistech Neural Recruitment Ecosystem",
      approach:
        "A media-first recruitment platform combining video infrastructure, secure architecture, and SEO-driven discovery.",
    },

    sections: [
      {
        id: "ev-1",
        type: "list",
        title: "Platform Architecture",
        items: [
          "Asynchronous Video Processing Pipeline — AWS transcoding into multi-bitrate streams via CloudFront CDN",
          "Tri-Tier Role-Based Architecture — permission-based system for candidates, recruiters, and companies",
          "SEO-Optimized Job Discovery Engine — indexable listings via Next.js SSR for organic visibility",
          "Conversion-Focused UI/UX System — minimalist Tailwind interface accelerating hiring decisions",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Candidate Screening Efficiency", before: "Manual resume review", after: "Instant video evaluation (40% less vetting time)" },
        { metric: "User Engagement", before: "Text-based interaction", after: "Video-first interaction (higher retention)" },
        { metric: "Global Accessibility", before: "Unoptimized delivery", after: "CDN-based streaming (Sub-500ms latency)" },
        { metric: "Brand Positioning", before: "Startup concept", after: "Niche LinkedIn alternative" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-010 | SmsHome (UAE Luxury Services)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-010",
    slug: "luxury-service-platform-uae-digital-transformation",

    metadata: {
      title: "Engineering UAE's Luxury On-Demand Service Platform", // 52 chars
      seoDescription:
        "How Fistech built a high-performance service platform with parametric pricing, mobile-first UX, and real-time lead capture for Dubai's premium market.", // 150 chars
      publishDate: "2026-03-31",
      readingTime: "6 min read",
      category: "Service Platform / Conversion Optimization",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming On-Demand Services into a Luxury Digital Experience",
      subHeadline:
        "A high-performance platform engineered for speed, trust, and premium conversion in the UAE market.",
      mainImage: "/images/projects/sms-home.webp",
    },

    author: {
      name: "iftykhar Alam",
      role: "Solutions Architect",
    },

    problem: {
      title: "The Trust-to-Transaction Gap",
      summary:
        "A mismatch between service complexity, mobile UX friction, and lack of trust signals limited conversions in a high-value market.",
    },

    solution: {
      title: "Fistech Luxury Service Engine",
      approach:
        "A performance-first architecture combining dynamic pricing, mobile-first UX, and trust-driven conversion systems.",
    },

    sections: [
      {
        id: "sm-1",
        type: "list",
        title: "Key Platform Features",
        items: [
          "Parametric Pricing Engine — dynamic real-time pricing based on service type, size, and complexity",
          "Next.js Edge Rendering & AWS CloudFront CDN — luxury visuals delivered at sub-second performance",
          "Direct-Action Conversion Integration — WhatsApp API and click-to-call replacing form-based flows",
          "Reputation-First UI Framework — programmatic injection of testimonials and ratings into user journeys",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Booking Velocity", before: "Manual quoting and delays", after: "Instant pricing and booking flow (35% faster)" },
        { metric: "Mobile Performance", before: "Unoptimized", after: "0.8s load time" },
        { metric: "Lead Conversion", before: "Form-based interaction", after: "WhatsApp/Call integration (50%+ mobile leads)" },
        { metric: "Platform Scalability", before: "Limited infrastructure", after: "Microservices architecture" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-011 | RoyalHouseCheck (Security SaaS)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-011",
    slug: "security-service-saas-digital-transformation",

    metadata: {
      title: "Engineering a Security-as-a-Service Platform", // 47 chars
      seoDescription:
        "How Fistech transformed RoyalHouseCheck into a scalable SaaS platform with real-time reporting, automated scheduling, and subscription-based revenue.", // 150 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "Security SaaS / Service Transformation",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming Private Security into a Scalable SaaS Ecosystem",
      subHeadline:
        "A high-trust digital platform enabling real-time monitoring, automated scheduling, and subscription-based security services.",
      mainImage: "/images/projects/royal-house-check.webp",
    },

    author: {
      name: "Sahed Rahman",
      role: "Lead Solutions Architect",
    },

    problem: {
      title: "The Trust Gap in Private Security",
      summary:
        "Manual operations, lack of transparency, and inefficient scheduling limited scalability and client trust.",
    },

    solution: {
      title: "Fistech Security Transformation Engine",
      approach:
        "A SaaS-ready ecosystem combining real-time data, automated scheduling, and subscription-based monetization.",
    },

    sections: [
      {
        id: "rh-1",
        type: "list",
        title: "Platform Capabilities",
        items: [
          "Synchronous Scheduling Engine — real-time geo-based officer dispatch with conflict resolution",
          "Real-Time Reporting & Data Integrity — time-stamped patrol telemetry pushed to client dashboards",
          "Performance-Optimized UI via Next.js — fast-loading, media-rich interface for mobile clients",
          "Automated Billing & Subscription Logic — tier-based recurring billing with zero admin overhead",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Onboarding Time", before: "24–48 hours", after: "< 2 minutes (98% friction reduction)" },
        { metric: "Client Retention", before: "Variable", after: "98% (stable recurring revenue)" },
        { metric: "Operational Scalability", before: "Admin-limited", after: "Automated system (10x growth potential)" },
        { metric: "Data Visibility", before: "Manual reports", after: "Real-time dashboard (institutional-grade trust)" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CS-FT-012 | Instrufix (Marketplace)
  // ─────────────────────────────────────────────
  {
    caseStudyId: "CS-FT-012",
    slug: "hyperlocal-musical-instrument-repair-marketplace",

    metadata: {
      title: "Architecting a Hyper-Local Instrument Repair Marketplace", // 56 chars
      seoDescription:
        "How Fistech built a scalable two-sided marketplace for musical instrument repair using Next.js, MERN, and SEO-driven architecture.", // 130 chars
      publishDate: "2026-03-31",
      readingTime: "7 min read",
      category: "Marketplace / Local SEO Platform",
      contentType: "Case Study",
    },

    hero: {
      headline: "Transforming a Fragmented Industry into a Scalable Digital Marketplace",
      subHeadline:
        "A high-performance platform connecting musicians with verified repair professionals through SEO-driven discovery.",
      mainImage: "/images/projects/instrufix-1.webp",
    },

    author: {
      name: "Fahim Sarker",
      role: "Solutions Architect",
    },

    problem: {
      title: "Fragmentation in a Niche Service Economy",
      summary:
        "A lack of centralized digital infrastructure created inefficiencies for both service providers and customers.",
    },

    solution: {
      title: "Fistech Marketplace Growth Engine",
      approach:
        "A scalable, SEO-first marketplace architecture combining hyper-local search, dual-user flows, and high-performance infrastructure.",
    },

    sections: [
      {
        id: "if-1",
        type: "list",
        title: "Platform Architecture",
        items: [
          "SEO-Dominant SSR Rendering — pre-rendered Next.js pages for location-based service queries",
          "Dual-Flow Marketplace Logic — separate Node.js workflows for professionals and customers",
          "Parametric Search & Filtering Engine — real-time filtering by instrument, location, and rating",
          "AWS Infrastructure & CI/CD Pipeline — synchronized staging and production environments",
        ],
      },
    ],

    metrics: {
      kpis: [
        { metric: "Search Visibility", before: "Fragmented/local listings", after: "SEO-dominant platform (100% indexable routes)" },
        { metric: "Onboarding Speed", before: "Manual processes", after: "Automated claim system (3x faster listing growth)" },
        { metric: "Platform Performance", before: "Slow directories", after: "Sub-1s latency (improved retention)" },
        { metric: "Scalability", before: "Local limitation", after: "AWS-backed system (global expansion ready)" },
      ],
    },
  },
];