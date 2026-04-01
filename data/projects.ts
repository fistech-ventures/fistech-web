import { Project } from "@/types";

export const projects: Project[] = [
  {
    // --- 1. CORE IDENTITY ---
    id: "p1",
    slug: "hierro-a-medida",
    title: "Hierro A Medida",
    categories: ["eCommerce", "MERN Stack", "Industrial SaaS"],
    location: "Spain (Western Market)",
    client: "Pol Salvadore Spoch",
    // FIXED: Using ISO 8601 string for better database/UI compatibility
    date: "2024-03-25",
    websiteUrl: "https://hierroamedida.com/",

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/portfolio1.webp",
    gallery: [
      "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img5.webp",
      "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img6.webp",
      "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img7.webp",
      "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-info-video-area-img.webp",
      "/images/projects/portflio1.webp",
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
          {
            label: "User Experience",
            value: "90% Friction Reduction",
          },
          { label: "Efficiency", value: "20+ Hours Saved/Week" },
          {
            label: "Market Reach",
            value: "Western Europe SEO Dominance",
          },
        ],
      },
    ],
  },
  {
    // --- 1. CORE IDENTITY ---
    id: "p2",
    slug: "custom-coloring-books",
    title: "Sketch Lab",
    categories: ["Generative AI", "SaaS Platform", "MERN Stack"],
    location: "Global (Western Focus)",
    client: "Confidential (Entertainment/Educational)",
    date: "2026-03-29",
    websiteUrl: "https://sktchlabs.com/", // Mapping based on initial analysis

    // --- 2. MEDIA ASSETS ---
    heroImage: "/images/projects/portfolio1.webp",
    gallery: [
      "/images/projects/portfolio1.webp",
      "/images/projects/portfolio1.webp",
      "/images/projects/portfolio1.webp",
      "/images/projects/portfolio1.webp",
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
];
