import { IProject } from "@/types";

export const projects: IProject[] = [
  {
    // --- 1. CORE IDENTITY ---
    id: "p16", // Sequential ID following SmsHome
    slug: "witklip-agri-transformation",
    title: "Witklip Farm",
    categories: [
      "Agri-Tech Architecture",
      "Next.js Ecosystem",
      "Digital Transformation",
    ],
    location: "Graafwater, South Africa (International Export Market)",
    client: "Cohen Van Der Berg",
    date: "2026-03-30",
    websiteUrl: "https://witklipfarm.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/witklipfarm.webp",
    gallery: [
      "/images/projects/witklipfarm-1.webp",
      "/images/projects/witklipfarm-2.webp",
      "/images/projects/witklipfarm-3.webp",
      "/images/projects/witklipfarm-4.webp",
      "/images/projects/witklipfarm-5.webp",
      "/images/projects/witklipfarm-2.webp",
      "/images/projects/witklipfarm-6.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Bridging Heritage and High-Scale Capital",
        shortSummary:
          "Transforming a 160-year agricultural legacy into an investment-ready digital powerhouse through high-fidelity data visualization.",
        fullDescription:
          "To scale Witklip Farm for the global market, we moved beyond traditional web presence to architect a data-driven investment hub. By digitizing 930 hectares of diversified assets—from B-BBEE Level 2 compliance to high-export soil suitability—we bridged the 'Legacy Gap.' The resulting platform speaks the language of modern capital, positioning a century-old farm as a high-performance, precision agriculture leader.",
        servicesProvided: [
          "Agri-Tech Digital Strategy",
          "Next.js High-Performance Frontend",
          "Parametric Data Engineering",
          "Institutional Brand Modernization",
          "SEO-Dominant Infrastructure",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header:
          "The Fistech Engineering Solution: 'Precision Authority Architecture'",
        bodyText:
          "Our objective was to solve for both legacy trust and operational transparency. We engineered a scalable backbone that prioritizes institutional authority and data-driven decision-making.",
        features: [
          {
            title: "Parametric Growth Modules",
            desc: "Engineered custom-logic tables to visualize soil suitability for high-value crops like Rooibos and Cannabis, transforming agronomic stats into actionable ROI data for investors.",
          },
          {
            title: "Next.js SSR & Latency Reduction",
            desc: "Utilized Server-Side Rendering to ensure international partners experience sub-second load times, critical for high-stakes procurement browsing from global financial hubs.",
          },
          {
            title: "Compliance-First UI Framework",
            desc: "Strategically architected the user journey around B-BBEE Level 2 metrics and industry certifications (Potatoes SA, Land Bank) to automate trust-building with government auditors.",
          },
          {
            title: "Scale-Ready Modular Codebase",
            desc: "Implemented a component-based architecture allowing for seamless integration of new industrial crop divisions without core infrastructure downtime.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic ROI & Results",
        bodyText:
          "By 'Productizing' a complex agricultural operation into a frictionless digital interface, we positioned Witklip Farm as a primary digital authority for large-scale export partnerships.",
        stats: [
          { label: "Procurement Status", value: "125% B-BBEE Recognition" },
          { label: "Land Digitization", value: "930 Hectares Validated" },
          { label: "Interaction Speed", value: "< 0.9 Seconds" },
          { label: "Investor Readiness", value: "Optimal Export Suitability" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p15", // Sequential ID following Instrufix
    slug: "smshome-luxury-aggregator",
    title: "SMS Home",
    categories: ["On-Demand SaaS", "Next.js Ecosystem", "AWS Infrastructure"],
    location: "Dubai, UAE (High-Net-Worth Market)",
    client: "SmsHome (Luxury Home Care)",
    date: "2026-03-30",
    websiteUrl: "https://smshome.ae/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/sms-home.webp",
    gallery: [
      "/images/projects/sms-home-1.webp",
      "/images/projects/sms-home-2.webp",
      "/images/projects/sms-home-3.webp",
      "/images/projects/sms-home-4.webp",
      "/images/projects/sms-home-5.webp",
      "/images/projects/sms-home-2.webp",
      "/images/projects/sms-home-6.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Engineering Trust at Scale",
        shortSummary:
          "Digitizing a $2.5M+ job pipeline through a high-fidelity, parametric booking engine designed for elite UAE residents.",
        fullDescription:
          "In the hyper-competitive Dubai home-services sector, the digital storefront must act as a high-fidelity proxy for professional excellence. We architected SmsHome to bridge the 'Trust-to-Transaction' gap, replacing high-friction manual booking with a high-performance, automated service engine. By prioritizing sub-second edge-latency and visual authority, we've enabled the brand to capture high-intent luxury traffic in a mobile-first economy.",
        servicesProvided: [
          "On-Demand SaaS Architecture",
          "Next.js Edge-Rendering",
          "Parametric Logic Engineering",
          "AWS Cloud Infrastructure",
          "Conversion Rate Optimization (CRO)",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Architecture of Authority'",
        bodyText:
          "Our objective was to solve for both operational complexity and consumer friction. We engineered a scalable service backbone where diverse variables are resolved with zero-refresh logic.",
        features: [
          {
            title: "Custom Parametric Pricing Engine",
            desc: "Engineered a dynamic Node.js backend logic that processes variable service attributes (e.g., AC units, pet breeds) in real-time, eliminating 'quote-lag' and reducing the sales cycle.",
          },
          {
            title: "Next.js SSR & Media Optimization",
            desc: "Utilized Server-Side Rendering and advanced image compression to deliver 'Retina-ready' luxury visuals across the UAE with sub-second load times, maximizing SEO dominance.",
          },
          {
            title: "Low-Friction 'Direct-Action' Triggers",
            desc: "Integrated instant WhatsApp and Call synchronization into the UI, aligning with the UAE’s preference for real-time scheduling over traditional, multi-step lead forms.",
          },
          {
            title: "Reputation-First UI Framework",
            desc: "Architected a 'Social Proof Hierarchy' where verified ratings and localized testimonials are programmatically injected into the user journey to solidify immediate brand authority.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic ROI & Results",
        bodyText:
          "By 'Productizing' a complex service manual into a frictionless digital interface, we positioned SmsHome as the primary digital authority for luxury maintenance in the UAE.",
        stats: [
          { label: "Operational Scale", value: "2.5M+ Jobs Digitized" },
          { label: "Mobile Lead Capture", value: "50% Increase" },
          { label: "Avg. Edge Latency", value: "< 0.8 Seconds" },
          { label: "Booking Velocity", value: "35% Reduction in Time-to-Book" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p14", // Sequential ID following RoyalHouseCheck
    slug: "instrufix-hyperlocal-directory",
    title: "Instrufix",
    categories: ["SaaS Architecture", "Marketplace Ecosystem", "Next.js SSR"],
    location: "Spain / Western Europe (Niche Marketplace)",
    client: "Instrufix (Specialized Instrument Repair)",
    date: "2026-03-30",
    websiteUrl: "https://test.instrufix.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/instrufix-1.webp",
    gallery: [
      "/images/projects/instrufix-2.webp",
      "/images/projects/instrufix-3.webp",
      "/images/projects/instrufix-4.webp",
      "/images/projects/instrufix-5.webp",
      "/images/projects/instrufix-6.webp",
      "/images/projects/instrufix-7.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Digitizing the Luthier’s Craft",
        shortSummary:
          "Transforming a fragmented offline repair niche into a high-velocity, SEO-dominant digital marketplace.",
        fullDescription:
          "The musical instrument repair industry suffered from a critical 'Discovery Gap.' We architected Instrufix to bridge the trust gap between elite technicians and musicians, replacing fragmented search results with a high-performance, centralized service hub. By engineering a search-first architecture, we've enabled micro-businesses to capture high-intent local traffic that was previously lost to generic retail giants.",
        servicesProvided: [
          "Marketplace Strategy",
          "Next.js SSR Optimization",
          "Two-Sided Workflow Engineering",
          "AWS Cloud Deployment",
          "Hyper-Local SEO Architecture",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Architecture of Authority'",
        bodyText:
          "Our objective was to solve for both discoverability and trust. We engineered a scalable directory ecosystem where specialized skills are indexed with sub-second latency.",
        features: [
          {
            title: "SSR-Dominant SEO Architecture",
            desc: "Utilized Next.js Server-Side Rendering to ensure 100% indexability for hyper-local 'Service + City' dynamic routes, maximizing organic SERP dominance.",
          },
          {
            title: "Parametric Logic Search Engine",
            desc: "A custom-built filtering backbone that resolves location, instrument family, and shop ratings with zero-refresh state management.",
          },
          {
            title: "Bi-Directional Marketplace Logic",
            desc: "Architected distinct, permissioned workflows for 'Verified Professionals' and 'Customers,' including a low-friction 'Claim My Business' protocol.",
          },
          {
            title: "Safe-Fail Staging Infrastructure",
            desc: "Integrated a robust AWS-backed CI/CD pipeline that synchronizes production data to staging for risk-free iterative scaling.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic ROI & Results",
        bodyText:
          "By 'Productizing' a fragmented service niche, we successfully positioned Instrufix as the primary digital authority for instrument maintenance.",
        stats: [
          { label: "Search Visibility", value: "85% Increase (SEO)" },
          { label: "Filtering Latency", value: "< 1.2 Seconds" },
          { label: "Lead Gen Velocity", value: "3.5x Business Inquiries" },
          { label: "Scaling Potential", value: "Unlimited Geofencing" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p13", // Sequential ID following Graphodio
    slug: "royalhousecheck-security-saas",
    title: "Royal House Check",
    categories: ["Security", "SaaS Architecture", "AWS Infrastructure"],
    location: "North Carolina, USA (Western Market)",
    client: "Leah Harris",
    date: "2026-03-30",
    websiteUrl: "https://royalhousecheck.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/royal-house-check.webp",
    gallery: [
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
      "/images/projects/royal-house-check.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Engineering Absolute Transparency",
        shortSummary:
          "Transforming traditional physical security into a high-velocity digital product through automated dispatch logic and real-time transparency.",
        fullDescription:
          "RoyalHouseCheck faced a critical 'Trust Gap' inherent in the private security industry. To capture high-net-worth Western contracts, they needed to move beyond manual labor toward a technical validation layer. We architected a 'Security-as-a-Service' portal that bridges the gap between digital intent and physical execution, replacing analog contracts with a 2-minute automated onboarding flow and providing homeowners with an unshakeable, data-driven audit trail of their property's safety.",
        servicesProvided: [
          "SaaS Product Strategy",
          "Next.js SSR & Performance Tuning",
          "Node.js Dispatch Logic",
          "AWS Cloud Infrastructure",
          "Parametric Booking Engine",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Architecture of Trust'",
        bodyText:
          "Our objective was to digitize the proof-of-work. We engineered a Decoupled Digital Ecosystem where physical patrols are tracked, validated, and reported with sub-second latency.",
        features: [
          {
            title: "Parametric Scheduling Engine",
            desc: "A custom Node.js backbone that resolves real-time officer capacity against geographic zones, reducing the 'Schedule-to-Visit' window to under 120 seconds.",
          },
          {
            title: "High-Integrity Push Telemetry",
            desc: "Integrated an AWS-powered reporting pipeline that delivers time-stamped photos and AI-detected anomalies to the client dashboard instantly.",
          },
          {
            title: "SSR-Optimized Performance",
            desc: "Leveraging Next.js Server-Side Rendering and Global CDNs to deliver a media-rich, high-trust UI that maintains a 90+ Lighthouse score on mobile devices.",
          },
          {
            title: "Automated Fiscal Onboarding",
            desc: "Engineered a structured tiered-pricing logic with automated recurring billing, allowing the client to scale 10x without increasing administrative headcount.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic ROI & Results",
        bodyText:
          "By 'Productizing' a manual service, we successfully positioned RoyalHouseCheck as a scalable tech-leader in the residential asset protection market.",
        stats: [
          { label: "Onboarding Velocity", value: "< 2 Minutes (Automated)" },
          { label: "Client Retention", value: "98% (Data-Driven Trust)" },
          { label: "Market Reach", value: "Scalable Tiered Revenue" },
          { label: "Admin Overhead", value: "Zero-Touch Scheduling" },
        ],
      },
    ],
  },
  // {
  //   id: "p12",
  //   slug: "graphodio-authority-engine",
  //   title: "Graphodio",
  //   categories: [
  //     "Full-Stack Architecture",
  //     "MERN Ecosystem",
  //     "Global Branding",
  //   ],
  //   location: "Global (Western Market Focus)",
  //   client: "Graphodio (Creative Digital Agency)",
  //   date: "2026-03-30",
  //   websiteUrl: "https://graphodio.com/",

  //   heroImage: "/images/projects/graphodio/hero-prestige.jpg",
  //   gallery: [
  //     "/images/projects/graphodio/performance-first-aesthetic.jpg",
  //     "/images/projects/graphodio/modular-service-navigation.jpg",
  //     "/images/projects/graphodio/technical-validation-layer.jpg",
  //     "/images/projects/graphodio/asset-light-visual-depth.jpg",
  //   ],

  //   sections: [
  //     {
  //       id: "section-vision",
  //       type: "vision",
  //       header: "Architecture of Digital Prestige",
  //       shortSummary:
  //         "Architecting a high-performance digital headquarters that transforms a diverse creative portfolio into a scalable, ROI-driven lead generation machine.",
  //       fullDescription:
  //         "Graphodio required more than a portfolio; they needed a technical validation layer. To capture high-ticket Western contracts, they faced a critical friction point: Perception vs. Performance. We re-engineered their digital presence to bridge the gap between immersive, 'Dark Mode' storytelling and the rigid technical SEO requirements of the global enterprise market. By moving away from legacy freelance aesthetics toward an 'Architect-level' infrastructure, we empowered them to validate their authority to C-suite leads instantly.",
  //       servicesProvided: [
  //         "Digital Transformation Strategy",
  //         "Next.js SSR Optimization",
  //         "MERN Stack Architecture",
  //         "Parametric Motion Logic",
  //         "AWS Edge Orchestration",
  //       ],
  //     },
  //     {
  //       id: "section-solution",
  //       type: "solution",
  //       header: "The Fistech Engineering Solution: 'Architecture for ROI'",
  //       bodyText:
  //         "We moved beyond traditional development to engineer a Decoupled Digital Ecosystem. Our objective was to ensure that a heavy, visual-dominant aesthetic served as a driver for conversion rather than a bottleneck for performance.",
  //       features: [
  //         {
  //           title: "Next.js SSR & Hybrid ISR",
  //           desc: "Implemented Server-Side Rendering and Incremental Static Regeneration to ensure near-zero latency and instant SEO indexing for diverse service verticals.",
  //         },
  //         {
  //           title: "Precision Asset Orchestration",
  //           desc: "Parametric image-loading strategy utilizing next/image and WebP compression to deliver retina-ready clarity without the LCP (Largest Contentful Paint) penalty.",
  //         },
  //         {
  //           title: "Code-Split Motion Logic",
  //           desc: "Utilizing Dynamic Imports for heavy animation libraries (Framer Motion), ensuring a premium interactive feel while maintaining a strictly low Total Blocking Time (TBT).",
  //         },
  //         {
  //           title: "Decoupled MERN Foundation",
  //           desc: "A modular Node.js/Express backend that allows the agency to scale new service verticals and case studies independently without technical debt.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "section-metrics",
  //       type: "metrics",
  //       header: "Strategic ROI & Results",
  //       bodyText:
  //         "By delivering a high-performance digital hub, we successfully positioned Graphodio as a bridge between high-end design and technical execution for the international market.",
  //       stats: [
  //         { label: "SEO Efficiency", value: "96% Optimization Score" },
  //         { label: "User Retention", value: "40% Reduction in Bounce Rate" },
  //         { label: "Lead Quality", value: "High-Trust C-Suite Engagement" },
  //         { label: "Performance", value: "90+ Lighthouse Core Web Vitals" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "p11",
  //   slug: "prime-tv-velocity-engine",
  //   title: "Prime TV",
  //   categories: ["Media & News", "Digital Transformation", "Next.js & Vercel"],
  //   location: "Dhaka, Bangladesh (Global Reach)",
  //   client: "Prime TV (Media Organization)",
  //   date: "2026-03-30",
  //   websiteUrl: "https://prime-tv-web-stg.vercel.app/",

  //   heroImage: "/images/projects/prime-tv/hero-high-velocity.jpg",
  //   gallery: [
  //     "/images/projects/prime-tv/dynamic-grid-architecture.jpg",
  //     "/images/projects/prime-tv/real-time-utility-integration.jpg",
  //     "/images/projects/prime-tv/sorasori-live-portal.jpg",
  //     "/images/projects/prime-tv/mobile-first-news-logic.jpg",
  //   ],

  //   sections: [
  //     {
  //       id: "section-vision",
  //       type: "vision",
  //       header: "Engineering Content Velocity",
  //       shortSummary:
  //         "Architecting a lightning-fast, SEO-dominant news ecosystem that transforms traditional broadcasting into a high-concurrency digital powerhouse.",
  //       fullDescription:
  //         "To dominate the modern news cycle, latency is the enemy. Prime TV faced a critical bottleneck: a legacy infrastructure that struggled to maintain performance during volatile traffic spikes. We re-engineered their digital presence to ensure that breaking stories reach the audience—and the search engines—in milliseconds. By moving from a 'broadcast-only' mindset to a 'web-first' architecture, we empowered them to capture search engine traffic and social media shares effectively, turning digital visibility into a measurable business asset.",
  //       servicesProvided: [
  //         "Digital Transformation Strategy",
  //         "Next.js SEO Architecture",
  //         "Real-time API Orchestration",
  //         "High-Concurrency Live Streaming",
  //         "Mobile-First Performance Engineering",
  //       ],
  //     },
  //     {
  //       id: "section-solution",
  //       type: "solution",
  //       header: "The Fistech Solution: 'Performance-First Architecture'",
  //       bodyText:
  //         "We approached this project as a High-Velocity Media Engine rather than a standard portal. Our objective was to ensure that technical scalability served as the direct foundation for business ROI and market authority.",
  //       features: [
  //         {
  //           title: "SEO-Dominant SSR & ISR",
  //           desc: "Leveraging Next.js Server-Side Rendering and Incremental Static Regeneration to ensure news snippets appear in search results within minutes of publication.",
  //         },
  //         {
  //           title: "Parametric Data Integration",
  //           desc: "Custom hooks to ingest non-blocking API feeds for live gold prices and weather, transforming the site into a high-retention daily utility.",
  //         },
  //         {
  //           title: "Latency-Optimized Video Pipeline",
  //           desc: "Dedicated 'Sorasori' portal with neural media pipelines for immersive live broadcasting without the typical script-heavy overhead.",
  //         },
  //         {
  //           title: "Edge-Deployed Resilience",
  //           desc: "Deployment via Vercel Edge functions to guarantee 99.9% uptime and sub-second delivery during massive global news spikes.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "section-metrics",
  //       type: "metrics",
  //       header: "Strategic ROI & Results",
  //       bodyText:
  //         "By delivering a high-performance digital hub, we successfully transitioned Prime TV into a scalable media ecosystem with a clear focus on speed and audience retention.",
  //       stats: [
  //         {
  //           label: "Performance Optimization",
  //           value: "94+ Lighthouse Core Web Vitals",
  //         },
  //         {
  //           label: "Search Indexing Speed",
  //           value: "Sub-5 Minute Indexing for Breaking News",
  //         },
  //         {
  //           label: "Mobile Growth",
  //           value: "65% Increase in Fluid Breakpoint Reach",
  //         },
  //         {
  //           label: "Content Management ROI",
  //           value: "40% Reduction in Editorial Workflow Overhead",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    // --- 1. CORE IDENTITY ---
    id: "p10",
    slug: "evpitch-neural-narrative",
    title: "Elevator Video Pitch",
    categories: ["HR-Tech", "SaaS Architecture", "Next.js & AWS"],
    location: "Global (Western Market Focus)",
    client: "MD of Evpitch",
    date: "2026-03-30",
    websiteUrl: "https://evpitch.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/evpitch.webp",
    gallery: [
      "/images/projects/evpitch-1.webp",
      "/images/projects/evpitch-2.webp",
      "/images/projects/evpitch-3.webp",
      "/images/projects/evpitch-4.webp",
      "/images/projects/evpitch-5.webp",
      "/images/projects/evpitch-2.webp",
      "/images/projects/evpitch-6.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Engineering Personality into Professional Logic",
        shortSummary:
          "Architecting a high-concurrency video ecosystem to eliminate hiring friction and humanize digital professional networking.",
        fullDescription:
          "EVPITCH approached Fistech to dismantle the limitations of the static PDF resume. In a market where 'culture fit' is a primary ROI driver, paper qualifications create information asymmetry. We architected a 'Neural Narrative' engine where the Elevator Pitch replaces the static profile, allowing for rapid soft-skill assessment and significantly reduced hiring cycles.",
        servicesProvided: [
          "Full-Stack SaaS Architecture",
          "Asynchronous Video Transcoding",
          "Next.js SSR Optimization",
          "AWS Cloud Infrastructure",
          "Multi-Tenant User Logic",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Solution: 'Scalable Media Orchestration'",
        bodyText:
          "We engineered a robust business asset by bridging high-end media handling with secure, relational data isolation. Our solution focuses on sub-second latency and enterprise-grade scalability to meet Western business standards.",
        features: [
          {
            title: "Asynchronous Video Pipeline",
            desc: "Custom AWS S3/CloudFront integration for multi-bitrate streaming, ensuring zero-buffer playback across global networks.",
          },
          {
            title: "Tri-Tier Logic Isolation",
            desc: "Sophisticated permission layers within a Node.js/MongoDB environment to maintain strict integrity between Candidates, Recruiters, and Companies.",
          },
          {
            title: "SEO-Dominant SSR",
            desc: "Next.js Server-Side Rendering of job listings and talent profiles to maximize organic reach and indexing over paid acquisition.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic ROI & Results",
        bodyText:
          "By shifting from a static board to a visual marketplace, we transformed the client's platform into a high-velocity recruitment tool with measurable business outcomes.",
        stats: [
          {
            label: "Vetting Efficiency",
            value: "40% Reduction in Screening Time",
          },
          { label: "Playback Latency", value: "Sub-500ms Global Delivery" },
          { label: "System Uptime", value: "99.9% via AWS WAF & Auto-scaling" },
          {
            label: "Talent Discovery",
            value: "100% Indexing via SSR Architecture",
          },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p9",
    slug: "custom-coloring-books",
    title: "Sktch Labs",
    categories: ["Generative AI", "SaaS Architecture", "MERN Stack"],
    location: "Global (Western Focus)",
    client: "Michael",
    date: "2026-03-29",
    websiteUrl: "https://sktchlabs.com/", // Mapping based on initial analysis

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/sktch-labs.webp",
    gallery: [
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
      "/images/projects/sktch-labs.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "The Vision & Business Challenge",
        shortSummary:
          "Architecting a zero-friction ecosystem to transform personal media into high-margin digital assets.",
        fullDescription:
          "The client entered the personalized media market but faced immediate operational paralysis. Manual conversion of photos into line art was a scaling impossibility. Fistech intervened to architect a 'Data-First' system that captures user intent, manages complex AI states, and bridges the gap between a free trial and a paid, professionally bound PDF.",
        servicesProvided: [
          "AI Solutions Architecture",
          "MERN Stack Engineering",
          "Parametric Prompt Logic",
          "Automated PDF Orchestration",
          "Stripe Revenue Integration",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Solution: 'Precision Engineering'",
        bodyText:
          "We engineered a high-performance business asset using Gemini Nano and Next.js. Our approach moved beyond simple feature building to focus on latency reduction and high-concurrency reliability for a global audience.",
        features: [
          {
            title: "Gemini Nano AI Integration",
            desc: "Custom API wrapper for parametric logic, allowing real-time sketch density toggling.",
          },
          {
            title: "Headless PDF Orchestration",
            desc: "Automated AWS assembly engine for dynamic, print-ready book generation.",
          },
          {
            title: "Auth-Gated Funnel",
            desc: "Identity-First workflow forcing registration to save AI progress, maximizing lead capture.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "The ROI & Results",
        bodyText:
          "Our SEO-dominant architecture and zero-touch fulfillment pipeline transformed the client's bottom line into a passive revenue engine.",
        stats: [
          { label: "SEO Dominance", value: "Google Page 1 Visibility" },
          {
            label: "Conversion Rate",
            value: "40% Increase via Sub-10s Latency",
          },
          { label: "Lead Capture", value: "32% Growth via Auth-Gating" },
          { label: "Operations", value: "100% Automated Fulfillment" },
        ],
      },
    ],
  },
  // {
  //   id: "p8",
  //   slug: "line-it-up-toledo",
  //   title: "Line It Up to Ledo",
  //   categories: ["Service-SaaS", "Conversion-Optimization", "Next.js"],
  //   location: "Tri-State (OH, MI, IN)",
  //   client: "Line It Up Line Striping, LLC",
  //   date: "2026-03-29",
  //   websiteUrl: "https://lineituptoledo.com/",

  //   heroImage: "/images/lineituptoledo-hero.jpg",
  //   gallery: [
  //     "/images/performance-lead-interface.jpg",
  //     "/images/localized-content-silos.jpg",
  //     "/images/high-fidelity-asset-delivery.jpg",
  //   ],

  //   sections: [
  //     {
  //       id: "section-vision",
  //       type: "vision",
  //       header: "Engineering Industrial Authority via Neural-Lead Design",
  //       shortSummary:
  //         "Transforming a legacy industrial brochure into a high-velocity 'Validation Engine' that automates commercial lead qualification.",
  //       fullDescription:
  //         "The industrial service sector often suffers from the 'Legacy Perception Friction.' Fistech intervened to bridge the Trust-Velocity Gap by re-architecting Line It Up's digital infrastructure. We transitioned the client from a 'small local contractor' profile to a high-end regional authority, utilizing Next.js to provide the technical proof required for high-margin commercial contracts.",
  //       servicesProvided: [
  //         "Next.js SSR Optimization",
  //         "Parametric Lead Logic",
  //         "Localized SEO Silos",
  //         "WCAG 2.1 Technical Compliance",
  //         "Headless CMS Integration",
  //       ],
  //     },
  //     {
  //       id: "section-solution",
  //       type: "solution",
  //       header: "The Fistech Engineering Solution: 'Precision Execution'",
  //       bodyText:
  //         "We architected a 'one-stop' digital sales representative designed for technical scalability. Our solution focused on latency reduction and parametric data collection to ensure a premium UX for property managers in the field.",
  //       features: [
  //         {
  //           title: "Next.js SSR & SEO Silos",
  //           desc: "Dynamic, server-side rendered landing pages targeting specific regional municipalities to dominate local SERPs.",
  //         },
  //         {
  //           title: "Parametric Lead Logic",
  //           desc: "Custom React component utilizing conditional logic to pre-qualify commercial project scale and automate data capture.",
  //         },
  //         {
  //           title: "Latency-Optimized Asset Delivery",
  //           desc: "Automated WebP conversion and edge-caching to ensure sub-second load times on low-connectivity job sites.",
  //         },
  //         {
  //           title: "Advanced JSON-LD Schema",
  //           desc: "Hard-coded structured data to programmatically validate business authority and ADA compliance expertise for Google's Knowledge Graph.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "section-metrics",
  //       type: "metrics",
  //       header: "Strategic Results & ROI",
  //       bodyText:
  //         "By replacing static information with a dynamic lead engine, we moved the needle from a passive web presence to an ROI-positive business asset.",
  //       stats: [
  //         {
  //           label: "Lighthouse Performance",
  //           value: "99/100 (Sub-Second Load)",
  //         },
  //         {
  //           label: "Sales Cycle Reduction",
  //           value: "40% via Automated Qualification",
  //         },
  //         { label: "Search Visibility", value: "Tri-State Dominance" },
  //         { label: "Technical Compliance", value: "98% Accessibility Rating" },
  //       ],
  //     },
  //   ],
  // },
  {
    // --- 1. CORE IDENTITY & METADATA ---
    id: "p7",
    slug: "build-a-story-time",
    title: "Build a Story Time",
    categories: ["Generative AI", "EdTech SaaS", "Next.js"],
    location: "Global (Western Focus)",
    client: "Build A Story Time",
    date: "2026-03-29",
    websiteUrl: "https://buildastorytime.com/",

    // --- 2. HIGH-FIDELITY MEDIA ASSETS ---
    heroImage: "/images/projects/build-a-story.webp",
    gallery: [
      "/images/projects/build-a-story-2.webp",
      "/images/projects/build-a-story-3.webp",
      "/images/projects/build-a-story-4.webp",
      "/images/projects/build-a-story-5.webp",
      "/images/projects/build-a-story-6.webp",
      "/images/projects/build-a-story-3.webp",
      "/images/projects/build-a-story-7.webp",
    ],

    // --- 3. ARCHITECTURAL SECTIONS (ANIO THEME COMPATIBLE) ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Engineering Immersive Pedagogy through Parametric AI",
        shortSummary:
          "Architecting an industry-first AI storytelling ecosystem that transforms static content into immersive, voice-cloned legacy media.",
        fullDescription:
          "The personalized publishing industry has long been stifled by 'Static Template Friction.' Fistech intervened to bridge the emotional gap in digital education by weaponizing neural voice synthesis and computer vision. We transitioned the client from a conceptual draft to a high-performance, ROI-positive SaaS platform that bridges the gap between digital interaction and physical fulfillment.",
        servicesProvided: [
          "Neural Voice Synthesis (TTS)",
          "Computer Vision & Face Mapping",
          "Next.js SSR Optimization",
          "Automated PDF Orchestration",
          "Scalable Node.js Architecture",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Precision Execution'",
        bodyText:
          "We architected a 'one-stop' neural storytelling engine designed for technical scalability. Our solution focused on latency reduction and high-concurrency reliability to ensure a premium UX for a global audience.",
        features: [
          {
            title: "Neural Voice Synthesis Integration",
            desc: "Cloning 15-second vocal samples into persistent neural profiles for deep emotional resonance.",
          },
          {
            title: "Parametric Identity Mapping",
            desc: "Backend logic mapping user-uploaded photos onto AI-generated character sets for seamless personalization.",
          },
          {
            title: "Asynchronous SSR Optimization",
            desc: "Next.js architecture ensuring lightning-fast rendering of interactive story previews to minimize bounce rates.",
          },
          {
            title: "Automated Pre-Press Fulfillment",
            desc: "Node.js engine converting dynamic content into print-ready CMYK files, eliminating manual design overhead.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic Results & ROI",
        bodyText:
          "By automating the creative pipeline and introducing industry-first neural features, we transformed a digital concept into a high-margin business asset.",
        stats: [
          { label: "Manual Labor", value: "0% (Fully Automated Pipeline)" },
          { label: "Conversion Lift", value: "45% via AI-Preview ROI" },
          { label: "Revenue Streams", value: "Omnichannel (Digital + Print)" },
          { label: "System Uptime", value: "99.9% API Reliability" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p6", // Incremented ID based on your previous sets
    slug: "lolophysicaltherapy",
    title: "Lolo Physical Therapy",
    categories: ["Healthcare UX", "Next.js", "Technical SEO"],
    location: "USA (Western Market)",
    client: "Madelinemay",
    date: "2026-03-29",
    websiteUrl: "https://www.lolophysicaltherapy.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/lolophysicaltherapy.webp",
    gallery: [
      "/images/projects/lolophysicaltherapy-1.webp",
      "/images/projects/lolophysicaltherapy-2.webp",
      "/images/projects/lolophysicaltherapy-3.webp",
      "/images/projects/lolophysicaltherapy-4.webp",
      "/images/projects/lolophysicaltherapy-5.webp",
      "/images/projects/lolophysicaltherapy-2.webp",
      "/images/projects/lolophysicaltherapy-6.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Architectural Synergy: Clinical Excellence to Digital Asset",
        shortSummary:
          "Engineering a scalable credibility engine designed to bridge the 'Visibility-to-Trust' gap for elite physiotherapy practices.",
        fullDescription:
          "The challenge was to transition a high-touch clinical practice into a high-performance digital asset. Fistech intervened to eliminate the disconnect between patient needs and digital accessibility. We bypassed generic medical templates to build a custom Next.js architecture that prioritizes load velocity, clinical authority, and user retention.",
        servicesProvided: [
          "Next.js Server-Side Rendering (SSR)",
          "Parametric UI/UX Design",
          "Technical SEO Audit & Implementation",
          "Modular Frontend Architecture",
          "Conversion Rate Optimization (CRO)",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Strategic Authority'",
        bodyText:
          "Our solution focused on 'Engineered Simplicity'—removing cognitive load for potential patients while providing a robust, scalable backend for the client's growing practice.",
        features: [
          {
            title: "Optimized SSR Performance",
            desc: "Leveraging Next.js for near-instantaneous load times, ensuring high-intent patients don't abandon the site due to latency.",
          },
          {
            title: "Parametric Fluid Interface",
            desc: "A device-agnostic UI built with Tailwind CSS that adapts perfectly to the 60%+ of healthcare searches originating from mobile.",
          },
          {
            title: "Modular Scaling Logic",
            desc: "A component-based design system allowing for the seamless addition of new associates or clinical locations without technical debt.",
          },
          {
            title: "Information Hierarchy Engine",
            desc: "Strategic content mapping that guides users from service introductions to detailed clinical breakdowns with zero friction.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic Results & Healthcare ROI",
        bodyText:
          "By digitizing the clinical workflow and optimizing for search dominance, we transformed a simple portfolio request into a high-performance lead-generation engine.",
        stats: [
          { label: "Load Velocity", value: "< 1.2s LCP (Industry Leading)" },
          { label: "Information Clarity", value: "100% (Zero Friction)" },
          { label: "Admin Overhead", value: "Reduced via Structured Data" },
          { label: "Infrastructure", value: "Enterprise-Ready Scalability" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p5",
    slug: "hierro-a-medida",
    title: "Hierro A Medida",
    categories: ["eCommerce", "MERN Stack", "Industrial SaaS"],
    location: "Spain (Western Market)",
    client: "Pol Salvadore Spoch",
    // FIXED: Using ISO 8601 string for better database/UI compatibility
    date: "2024-03-25",
    websiteUrl: "https://hierroamedida.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/hierro-a-medida.webp",
    gallery: [
      "/images/projects/hierro-a-medida-1.png",
      "/images/projects/hierro-a-medida-2.png",
      "/images/projects/hierro-a-medida-3.png",
      "/images/projects/hierro-a-medida-4.png",
      "/images/projects/hierro-a-medida-5.png",
      "/images/projects/hierro-a-medida-6.png",
      "/images/projects/hierro-a-medida.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "The Vision & Challenge",
        shortSummary:
          "Digitizing the steel industry with a custom parametric pricing engine.",
        fullDescription:
          "Mr. Pol Salvadore Spoch approached Fistech with a bold vision: to create Spain’s first fully digital iron and steel warehouse. The challenge was twofold: creating a modern, 'Apple-like' UX for heavy industrial products and automating complex physical calculations (weight, density, and cutting precision) that usually require a manual quote.",
        servicesProvided: [
          "Brand Strategy",
          "Custom Parametric Engine",
          "MERN Stack Development",
          "Industrial SEO",
          "Logistics Automation",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Solution: 'Engineered Simplicity'",
        bodyText:
          "We moved beyond standard eCommerce templates to build a custom platform designed for high-concurrency. Typography and hierarchy were tuned to ensure contractors could order materials directly from a construction site with zero friction.",
        features: [
          {
            title: "Parametric Pricing",
            desc: "Custom algorithm calculating real-time pricing/weight in $mm/cm$.",
          },
          {
            title: "Logistics Automation",
            desc: "Smart logic gate for Camión Grúa delivery based on material length ($> 2.5m$).",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "The ROI & Results",
        bodyText:
          "Our SEO-first architecture and automated calculations didn't just look good—they transformed the business bottom line.",
        stats: [
          { label: "User Experience", value: "90% Friction Reduction" },
          { label: "Efficiency", value: "20+ Hours Saved/Week" },
          { label: "Market Reach", value: "Western Europe SEO Dominance" },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY & METADATA ---
    id: "p4",
    slug: "braga-experience-cinematic-engine",
    title: "Braga Experience",
    categories: [
      "Next.js Architecture",
      "Media-Centric SaaS",
      "Performance Engineering",
    ],
    location: "London, UK (Global Brand Authority)",
    client: "Braga Experience",
    date: "2026-03-31",
    websiteUrl: "https://bragaexperience.com/",

    // --- 2. HIGH-FIDELITY MEDIA ASSETS ---
    heroImage: "/images/projects/lucashbragof.png",
    gallery: [
      "/images/projects/lucashbragof-1.png",
      "/images/projects/lucashbragof-2.png",
      "/images/projects/lucashbragof-3.png",
      "/images/projects/lucashbragof-4.png",
      "/images/projects/lucashbragof-5.png",
      "/images/projects/lucashbragof-6.png",
      "/images/projects/lucashbragof-3.png",
    ],

    // --- 3. ARCHITECTURAL SECTIONS (ANIO THEME COMPATIBLE) ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Architecting Visual Authority",
        servicesProvided: [
          "UX Research",
          "UI Design",
          "Frontend Development",
          "Contact Form Integration",
          "Email System by Submitting Form",
        ],
        shortSummary:
          "Eliminating the 'Performance-Quality Paradox' by bridging the gap between cinematic art and sub-second load times.",
        fullDescription:
          "Before Fistech’s intervention, Braga Experience faced a critical friction point: their brand relied on uncompressed, 4K visual assets that their existing infrastructure could not serve without massive latency. We transitioned them from a 'static' gallery to a high-conversion sales engine by weaponizing Next.js SSR and custom Node.js middleware.",
      },
      {
        id: "section-solution",
        type: "solution",
        header:
          "The Fistech Engineering Solution: 'Conversion-Centric Media Engine'",
        bodyText:
          "We approached this project as a decoupled MERN architecture build, prioritizing aesthetic dominance alongside parametric logic for the London creative market.",
        features: [
          {
            title: "Next.js SSR & Strategic Hydration",
            desc: "Implementing a hybrid rendering flow that prioritizes UI stability while asynchronously loading heavy cinematic backgrounds.",
          },
          {
            title: "Parametric Media Logic",
            desc: "Adaptive bitrate streaming and intelligent lazy-loading, allowing 4K previews to load with 30% greater velocity.",
          },
          {
            title: "Node.js High-Velocity Middleware",
            desc: "Architected a custom Express.js backend to power a seamless 'Quote-in-2-Hours' workflow, reducing funnel friction.",
          },
          {
            title: "Video Schema SEO Integration",
            desc: "Injected VideoObject JSON-LD structured data to ensure search engines index visual content as high-value assets.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic Results & ROI",
        bodyText:
          "By automating the lead pipeline and optimizing the asset delivery layer, we delivered quantifiable dominance in a saturated market.",
        stats: [
          {
            label: "Page Load Speed",
            value: "4.2s → 0.8s (35% Bounce Reduction)",
          },
          {
            label: "Mobile Conversion",
            value: "Optimized (22% Increase in Inquiries)",
          },
          {
            label: "SEO Visibility",
            value: "Rich Snippet Optimized (Organic Dominance)",
          },
          {
            label: "Intake Velocity",
            value: "Automated (2-Hour Response Guarantee)",
          },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p3",
    slug: "vivtex-biopharma-ecosystem",
    title: "Vivtex",
    categories: ["HealthTech", "Next.js Architecture", "Investor-Ready UI"],
    location: "USA (MIT Spin-off / Global)",
    client: "Nicole Mendoza",
    date: "2026-03-31",
    websiteUrl: "https://vivtex.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/vivtex.png",
    gallery: [
      "/images/projects/vivtex-1.webp",
      "/images/projects/vivtex-2.webp",
      "/images/projects/vivtex-3.webp",
      "/images/projects/vivtex-4.webp",
      "/images/projects/vivtex-5.webp",
      "/images/projects/vivtex-3.webp",
      "/images/projects/vivtex-6.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header:
          "Architectural Modernization: From Research Lab to Global Authority",
        shortSummary:
          "Engineering a high-velocity digital platform to bridge the gap between complex biotechnology and multi-billion dollar enterprise partnerships.",
        fullDescription:
          "The challenge was to resolve the 'Credibility Gap' between Vivtex's revolutionary research and its legacy digital presence. Fistech architected a high-end, monochromatic ecosystem that replaced 'earthy' tones with 'innovation' aesthetics. We bypassed monolithic constraints to build a decoupled Next.js architecture that prioritizes clinical authority, sub-second latency, and investor-grade reliability.",
        servicesProvided: [
          "Next.js SSR Optimization",
          "Decoupled Data Architecture",
          "Edge-Cached Asset Pipeline",
          "Monochromatic Innovation Palette",
          "Scalable MERN Backend Integration",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Engineering Solution: 'Technical Credibility'",
        bodyText:
          "Our solution focused on 'Authority-First Design'—translating dense robotic organ interfacing technology (GI-ORIS) into a digestible, one-stop visual experience for stakeholders.",
        features: [
          {
            title: "Performance-First SSR",
            desc: "Utilizing Next.js for instant indexing of scientific publications, maximizing organic authority while maintaining elite-tier load speeds.",
          },
          {
            title: "Asset Entropy Management",
            desc: "Advanced lazy-loading and CDN-backed delivery for high-resolution biological imagery, keeping LCP well under the 1.2s threshold.",
          },
          {
            title: "Dynamic Scientific Repository",
            desc: "A modular frontend that separates scientific data from marketing UI, allowing real-time partnership updates without system-wide redeployments.",
          },
          {
            title: "High-Traffic Reliability",
            desc: "Infrastructure engineered to withstand massive PR surges, such as the announcement of their $2.1 Billion deal with Novo Nordisk.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "Strategic Results & Global ROI",
        bodyText:
          "By modernizing the digital presence and optimizing for global performance, we successfully positioned the client as a market-ready leader for international investment.",
        stats: [
          {
            label: "Deal Support",
            value: "$2.1 Billion Partnership Announcement",
          },
          { label: "Load Velocity", value: "< 1.2s LCP (Enterprise Standard)" },
          { label: "Investor Clarity", value: "Simplified GI-ORIS Complexity" },
          { label: "Brand Position", value: "Legacy to Global Innovator" },
        ],
      },
    ],
  },
  // {
  //   id: "p2",
  //   slug: "heritage-modernization-providing-dial-tone",
  //   title: "Providing Dial Tone",
  //   categories: ["AgTech Strategy", "MERN Stack", "Digital Transformation"],
  //   location: "USA / Global",
  //   client: "Legacy Agricultural Enterprise",
  //   date: "2026-03-31",
  //   websiteUrl: "https://providingdialtone.com/",

  //   heroImage: "/images/providing-dial-tone-hero.jpg",
  //   gallery: [
  //     "/images/architectural-authority.jpg",
  //     "/images/performance-engineering.jpg",
  //     "/images/strategic-funneling.jpg",
  //   ],

  //   sections: [
  //     {
  //       id: "section-vision",
  //       type: "vision",
  //       header: "Heritage Modernization: From Nostalgia to Global Investment",
  //       shortSummary:
  //         "Architecting a high-performance bridge between legacy agricultural heritage and modern investment-grade scalability.",
  //       fullDescription:
  //         "The challenge was to resolve the 'Identity Friction' where a 160-year-old enterprise was digitally perceived as a hobbyist blog. Fistech engineered a total pivot, replacing anecdotal storytelling with a high-velocity digital platform. We architected a decoupled Next.js ecosystem that prioritizes commercial authority, ensuring the brand scales for Western investment markets while preserving its historical integrity.",
  //       servicesProvided: [
  //         "Next.js SSR Optimization",
  //         "Decoupled MERN Architecture",
  //         "SEO-Dominant Infrastructure",
  //         "Parametric Lead Capture",
  //         "Component-Based Scalability",
  //       ],
  //     },
  //     {
  //       id: "section-solution",
  //       type: "solution",
  //       header: "The Fistech Engineering Solution: 'Commercial Pivot'",
  //       bodyText:
  //         "Our execution focused on 'Asset Modernization'—transitioning a static digital presence into a dynamic, ROI-driven gateway for international stakeholders.",
  //       features: [
  //         {
  //           title: "Next.js SSR Optimization",
  //           desc: "Accelerated content delivery to sub-second speeds, eliminating bounce rates during high-stakes investor reviews.",
  //         },
  //         {
  //           title: "SEO-Dominant Infrastructure",
  //           desc: "Re-engineered metadata logic to pivot search visibility from personal nostalgia to investment-grade agricultural keywords.",
  //         },
  //         {
  //           title: "Parametric Lead Capture",
  //           desc: "Architected sophisticated database triggers to transform passive site traffic into a structured CRM pipeline for business development.",
  //         },
  //         {
  //           title: "Component-Based Scalability",
  //           desc: "Engineered a modular frontend that allows for rapid scaling of investment modules without incurring technical debt.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "section-metrics",
  //       type: "metrics",
  //       header: "Strategic Results & Business ROI",
  //       bodyText:
  //         "By re-engineering the digital value of the asset, we successfully positioned the enterprise for international capital engagement and commercial growth.",
  //       stats: [
  //         { label: "Load Velocity", value: "< 800ms LCP (Global Edge)" },
  //         { label: "Brand Shift", value: "Hobbyist Blog to Investment Entity" },
  //         { label: "Lead Logic", value: "Automated CRM Integration" },
  //         { label: "Search Authority", value: "Commercial-Grade Indexing" },
  //       ],
  //     },
  //   ],
  // },
  {
    // --- 1. CORE IDENTITY ---
    id: "p1",
    slug: "scuba-life",
    title: "Scuba Life",
    categories: ["Next.js", "MERN Stack", "SaaS Architecture"],
    location: "Southern California (Western Market)",
    client: "Stevenar Littlefield",
    date: "2026-03-31",
    websiteUrl: "https://scubalife.net/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/scubalife-0.webp",
    gallery: [
      "/images/projects/scubalife-11.webp",
      "/images/projects/scubalife-22.webp",
      "/images/projects/scubalife-3.webp",
      "/images/projects/scubalife-4.webp",
      "/images/projects/scubalife-5.webp",
      "/images/projects/scubalife-6.webp",
      "/images/projects/scubalife-7.webp",
    ],

    // --- 3. DYNAMIC SECTIONS ---
    sections: [
      {
        id: "section-vision",
        type: "vision",
        header: "Engineering Authority in High-Risk Markets",
        shortSummary:
          "Architecting a high-performance digital 'Home Base' that transforms complex PADI certifications into a high-conversion lifestyle brand.",
        fullDescription:
          "The client faced 'Information Asymmetry'—critical course data and international itineraries were scattered across legacy portals and social media. Fistech replaced this operational fragmentation with a unified, sub-second digital infrastructure. We replaced the 'local dive guy' image with a global agency authority, ensuring the technical sophistication mirrors the elite standards of professional PADI training.",
        servicesProvided: [
          "Digital Transformation Strategy",
          "Next.js Ecosystem Architecture",
          "MERN Stack Engineering",
          "SEO Dominance Optimization",
          "Tri-Tier Conversion Mapping",
        ],
      },
      {
        id: "section-solution",
        type: "solution",
        header: "The Fistech Solution: 'Architecture for Authority'",
        bodyText:
          "We engineered a high-performance business asset using a decoupled Next.js architecture. Our approach focused on bridging the gap between immersive visual storytelling and uncompromising technical scalability.",
        features: [
          {
            title: "Next.js SSR & Image Optimization",
            desc: "Guaranteed sub-second LCP for 4K underwater media, balancing aesthetic immersion with global SEO dominance.",
          },
          {
            title: "Tri-Tier Parametric Architecture",
            desc: "A logic-based 'Learn-Explore-Equip' funnel that reduces cognitive load and accelerates user journey termination at high-intent CTAs.",
          },
          {
            title: "Component-Based Scalability",
            desc: "Modular frontend design allowing for seamless future e-commerce and automated booking integration without core refactors.",
          },
        ],
      },
      {
        id: "section-metrics",
        type: "metrics",
        header: "The ROI & Strategic Results",
        bodyText:
          "Our SEO-dominant architecture and streamlined conversion pathways transformed the client's digital presence into a 24/7 lead capture engine.",
        stats: [
          { label: "Market Positioning", value: "Global Agency Authority" },
          { label: "Admin Overhead", value: "60% Reduction via Automation" },
          { label: "User Retention", value: "40% Lower Bounce Rate" },
          {
            label: "Sales Pipeline",
            value: "100% Future-Proof Infrastructure",
          },
        ],
      },
    ],
  },
];
