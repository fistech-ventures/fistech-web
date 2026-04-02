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
      // Updated to match your public/images/home folder structure
      mainImage: "/images/home/case-studies.png",
    },
    author: {
      name: "Shafiqul",
      role: "UX Strategist",
    },
    problem: {
      title: "The Business Challenge: Overcoming the Engagement-Conversion Gap",
      summary:
        "Braga Experience faced a critical disconnect between its high-end cinematic portfolio and its digital presence. While the agency delivered world-class visuals, the website failed to reflect that quality—resulting in lost leads and weakened brand perception.",
    },
    solution: {
      title: "Fistech Conversion-Centric Media Engine",
      approach:
        "We approached this as a system architecture challenge. The goal was to build a conversion-centric media engine that balances cinematic quality with high performance.",
    },
    sections: [
      {
        id: "sec-1",
        type: "list",
        title: "Key Challenges",
        items: [
          "Mismatch between brand quality and digital experience",
          "Heavy media causing slow load times",
          "Weak lead capture system",
          "Low SEO visibility for video content",
        ],
      },
      {
        id: "sec-2",
        type: "image",
        url: "/images/home/case-studies.png", // Corrected key from 'mainImage' to 'url'
        alt: "Performance vs Quality Challenge",
      },
      {
        id: "sec-3",
        type: "quote",
        text: "The real challenge wasn’t building a website—it was engineering a system that converts inspiration into action instantly.",
        author: "Fistech Engineering Team",
      },
      {
        id: "sec-4",
        type: "heading",
        level: 3,
        text: "Next.js SSR & Strategic Hydration",
      },
      {
        id: "sec-5",
        type: "paragraph",
        content:
          "A hybrid rendering strategy preloads critical UI while asynchronously loading heavy media assets. This ensures fast first paint and improved user retention.",
      },
    ],
    metrics: {
      kpis: [
        { metric: "Page Load Speed", before: "4.2s", after: "0.8s" },
        { metric: "Mobile Conversion", before: "Baseline", after: "+22%" },
        { metric: "Lead Response", before: "Days", after: "< 2 Hours" },
      ],
    },
  },
];
