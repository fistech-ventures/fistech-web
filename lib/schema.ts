import { metaData, socialLinks } from "@/data/constant";
import { ICaseStudy, IFAQ, IProject, ISolution } from "@/types";

const SOCIAL_PROFILES = socialLinks.map((item) => item.path);
const LOGO_URL = `${metaData.SITE_URL}/logo-p.png`;

function resolveUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("//")) return `https:${path}`;
  try {
    return new URL(path, metaData.SITE_URL).toString();
  } catch {
    return `${metaData.SITE_URL}${path}`;
  }
}

export function toJsonLd(schema: object): string {
  return JSON.stringify(schema);
}

export function generateOrganisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: metaData.SITE_NAME,
    url: metaData.SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 200,
      height: 60,
    },
    image: LOGO_URL,
    slogan: metaData.SITE_TAGLINE,
    description: metaData.SITE_DESCRIPTION,
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: metaData.CONTACT_PHONE,
      email: metaData.CONTACT_EMAIL,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
      url: `${metaData.SITE_URL}/contact`,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Web Development",
      "App Development",
      "UI/UX Design",
      "Graphics Design",
      "Digital Marketing",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Search Engine Marketing",
      "Google Ads",
      "Meta Ads",
      "3D Product Modeling",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: metaData.SITE_NAME,
    url: metaData.SITE_URL,
    description: metaData.SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: metaData.SITE_NAME,
      url: metaData.SITE_URL,
    },
  };
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: resolveUrl(item.href),
    })),
  };
}

export function generateProjectSchema(project: IProject) {
  const overviewSection = project.sections.find(
    (s) => s.shortSummary || s.fullDescription,
  );
  const description =
    overviewSection?.shortSummary ||
    overviewSection?.fullDescription ||
    `${project.title} — delivered for ${project.client} in ${project.location}.`;

  const heroImage =
    project.heroImage || project.gallery?.[0] || metaData.FALLBACK_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${metaData.SITE_URL}/projects/${project.slug}`,
    description,
    image: resolveUrl(heroImage),
    dateCreated: project.date,
    locationCreated: project.location,
    client: {
      "@type": "Organization",
      name: project.client,
    },
    creator: {
      "@type": "Organization",
      name: metaData.SITE_NAME,
      url: metaData.SITE_URL,
    },
    genre: project.categories,
    ...(project.websiteUrl && { sameAs: project.websiteUrl }),
  };
}

export function generateSolutionSchema(solution: ISolution) {
  const description =
    solution.hero?.description || solution.shortDescription || solution.title;
  const image =
    solution.hero?.coverImage ||
    solution.images?.[0] ||
    metaData.FALLBACK_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    url: `${metaData.SITE_URL}/solutions/${solution.slug}`,
    description,
    image: resolveUrl(image),
    keywords: solution.keywords?.join(", "),
    provider: {
      "@type": "Organization",
      name: metaData.SITE_NAME,
      url: metaData.SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: solution.title,
  };
}

export function generateCaseStudySchema(caseStudy: ICaseStudy) {
  const image = caseStudy.hero?.mainImage || metaData.FALLBACK_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.hero.headline,
    description:
      caseStudy.metadata.seoDescription ||
      caseStudy.hero.subHeadline ||
      caseStudy.problem.summary,
    image: resolveUrl(image),
    url: `${metaData.SITE_URL}/case-studies/${caseStudy.slug}`,
    datePublished: caseStudy.metadata.publishDate,
    author: caseStudy.author
      ? {
          "@type": "Person",
          name: caseStudy.author.name,
          ...(caseStudy.author.role && { jobTitle: caseStudy.author.role }),
        }
      : {
          "@type": "Organization",
          name: metaData.SITE_NAME,
          url: metaData.SITE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: metaData.SITE_NAME,
      url: metaData.SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${metaData.SITE_URL}/case-studies/${caseStudy.slug}`,
    },
    ...(caseStudy.metadata.category && {
      articleSection: caseStudy.metadata.category,
    }),
  };
}

export function generateFaqSchema(faqs: IFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${metaData.SITE_NAME}`,
    url: `${metaData.SITE_URL}/contact`,
    description: `Get in touch with ${metaData.SITE_NAME} for IT services worldwide.`,
    mainEntity: {
      "@type": "Organization",
      name: metaData.SITE_NAME,
      url: metaData.SITE_URL,
      logo: LOGO_URL,
      sameAs: SOCIAL_PROFILES,
    },
  };
}
