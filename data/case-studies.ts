import { CaseStudy } from "@/types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    caseStudyId: "CS-FT-001",
    slug: "cinematic-digital-transformation-braga-experience",
    metadata: {
      title:
        "Digital Transformation: Engineering a High-Velocity Cinematic Ecosystem",
      seoDescription:
        "How Fistech engineered a high-performance cinematic web platform...",
      publishDate: "2026-03-31",
      readingTime: "6 min read",
    },
    hero: {
      headline:
        "Engineering a Cinematic Web Experience Without Compromising Performance",
      subHeadline: "A conversion-focused media engine built for speed and SEO.",
      mainImage: "/images/home/case-studies.png",
    },
    problem: {
      title: "The Engagement-Conversion Gap",
      summary:
        "A high-end creative agency struggled with mismatch between portfolio and UX.",
    },
    solution: {
      title: "Fistech Conversion-Centric Media Engine",
      approach:
        "A decoupled MERN + Next.js architecture focused on performance.",
    },
    metrics: {
      kpis: [
        {
          metric: "Page Load Speed",
          before: "4.2s",
          after: "0.8s",
        },
      ],
    },
  },
];
