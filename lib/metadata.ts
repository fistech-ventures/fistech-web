import { ICaseStudy, IProject, ISolution } from "@/types";
import { Metadata } from "next";

const SITE_NAME = "Fistech Ventures";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fistech.org";
const FALLBACK_IMAGE = "/logo-p.png";
const SITE_TAGLINE = "Your Vision. Our Expertise. Global Impact.";
const SITE_DESCRIPTION =
  "Fistech Ventures is a global IT agency specializing in Web & App Development, Graphics, UI/UX, SEO, Digital Marketing and 3D Modeling for clients worldwide.";

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 160;

interface MetadataOptions {
  path?: string;
  noIndex?: boolean;
}

function sanitize(
  value: string | undefined,
  fallback: string,
  maxLength: number,
): string {
  const cleaned = (value ?? "").replace(/\s+/g, " ").trim();
  const base = cleaned || fallback;
  if (base.length <= maxLength) return base;
  return `${base.slice(0, maxLength - 1).trimEnd()}…`;
}

function normalisePath(path?: string): string {
  if (!path || path === "/") return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading.endsWith("/") && withLeading !== "/"
    ? withLeading.slice(0, -1)
    : withLeading;
}

function canonicalUrl(path?: string): string {
  const p = normalisePath(path);
  return `${SITE_URL}${p === "/" ? "" : p}`;
}

function resolveImageUrl(image: string | undefined): string {
  const src = (image ?? "").trim();
  if (!src) return `${SITE_URL}${FALLBACK_IMAGE}`;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("//")) return `https:${src}`;
  try {
    return new URL(src, SITE_URL).toString();
  } catch {
    return `${SITE_URL}${FALLBACK_IMAGE}`;
  }
}

function buildRobots(noIndex?: boolean): Metadata["robots"] {
  if (noIndex) {
    return {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    };
  }
  return {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

function sharedPageMeta(
  options?: MetadataOptions,
): Pick<Metadata, "alternates" | "robots"> {
  const path = normalisePath(options?.path);
  return {
    alternates: {
      canonical: canonicalUrl(path),
    },
    robots: buildRobots(options?.noIndex),
  };
}

const baseOpenGraph = {
  siteName: SITE_NAME,
  locale: "en_US",
} as const;

const baseTwitter = {
  card: "summary_large_image" as const,
  site: "@fistechventures",
  creator: "@fistechventures",
} as const;

export function generateHomeMetadata(options?: MetadataOptions): Metadata {
  const title = sanitize(SITE_NAME, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    SITE_DESCRIPTION,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/");

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/", noIndex: options?.noIndex }),
  };
}

export function generateAboutMetadata(options?: MetadataOptions): Metadata {
  const rawTitle = `About Us | ${SITE_NAME}`;
  const rawDescription =
    "Learn who we are, what drives us, and why hundreds of clients worldwide trust Fistech Ventures for their IT needs.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/about");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/about", noIndex: options?.noIndex }),
  };
}

export function generateProjectsMetadata(options?: MetadataOptions): Metadata {
  const rawTitle = `Projects | ${SITE_NAME}`;
  const rawDescription =
    "Explore our portfolio of successful projects across web development, app development, design, and digital marketing delivered for clients worldwide.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/projects");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/projects", noIndex: options?.noIndex }),
  };
}

export function generateProjectMetadata(
  project: IProject,
  options?: MetadataOptions,
): Metadata {
  const overviewSection = project.sections.find(
    (s) => s.shortSummary || s.fullDescription,
  );
  const rawDescription =
    overviewSection?.shortSummary ||
    overviewSection?.fullDescription ||
    `${project.title} — a project delivered for ${project.client} in ${project.location}.`;

  const rawTitle = `${project.title} | ${SITE_NAME}`;
  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );

  const heroImage = project.heroImage || project.gallery?.[0];
  const image = resolveImageUrl(heroImage);
  const path = options?.path ?? `/projects/${project.slug}`;
  const url = canonicalUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: project.categories,
    openGraph: {
      ...baseOpenGraph,
      type: "article",
      url,
      title,
      description,
      publishedTime: project.date,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path, noIndex: options?.noIndex }),
  };
}

export function generateSolutionsMetadata(options?: MetadataOptions): Metadata {
  const rawTitle = `Our Solutions | ${SITE_NAME}`;
  const rawDescription =
    "From UI/UX and web development to SEO, paid ads, and 3D modeling — discover the full range of IT solutions Fistech Ventures offers globally.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/solutions");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/solutions", noIndex: options?.noIndex }),
  };
}

export function generateSolutionMetadata(
  solution: ISolution,
  options?: MetadataOptions,
): Metadata {
  const rawTitle = `${solution.title} | ${SITE_NAME}`;
  const rawDescription =
    solution.hero?.description ||
    solution.shortDescription ||
    `${solution.title} services by ${SITE_NAME} — ${SITE_TAGLINE}`;

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );

  const heroImage = solution.hero?.coverImage || solution.images?.[0];
  const image = resolveImageUrl(heroImage);
  const path = options?.path ?? `/solutions/${solution.slug}`;
  const url = canonicalUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: solution.keywords,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path, noIndex: options?.noIndex }),
  };
}

export function generateCaseStudiesMetadata(
  options?: MetadataOptions,
): Metadata {
  const rawTitle = `Case Studies | ${SITE_NAME}`;
  const rawDescription =
    "Real results, real clients. Explore our in-depth case studies to see how Fistech Ventures has driven measurable growth for businesses around the world.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/case-studies");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/case-studies", noIndex: options?.noIndex }),
  };
}

export function generateCaseStudyMetadata(
  caseStudy: ICaseStudy,
  options?: MetadataOptions,
): Metadata {
  const rawTitle = `${caseStudy.metadata.title} | ${SITE_NAME}`;
  const rawDescription = caseStudy.metadata.seoDescription || SITE_TAGLINE;

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(caseStudy.hero?.mainImage);
  const path = options?.path ?? `/case-studies/${caseStudy.slug}`;
  const url = canonicalUrl(path);

  const keywords = [
    caseStudy.metadata.category,
    caseStudy.metadata.contentType,
    "case study",
    SITE_NAME,
  ].filter(Boolean) as string[];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    openGraph: {
      ...baseOpenGraph,
      type: "article",
      url,
      title,
      description,
      publishedTime: caseStudy.metadata.publishDate,
      authors: caseStudy.author?.name ? [caseStudy.author.name] : undefined,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path, noIndex: options?.noIndex }),
  };
}

export function generateContactMetadata(options?: MetadataOptions): Metadata {
  const rawTitle = `Contact Us | ${SITE_NAME}`;
  const rawDescription =
    "Get in touch with Fistech Ventures. Tell us about your project and let's build something great together.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/contact");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/contact", noIndex: options?.noIndex }),
  };
}

export function generateFAQMetadata(options?: MetadataOptions): Metadata {
  const rawTitle = `Frequently Asked Questions | ${SITE_NAME}`;
  const rawDescription =
    "Have questions about our services, pricing, or process? Find answers to the most common questions about Fistech Ventures right here.";

  const title = sanitize(rawTitle, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    rawDescription,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path ?? "/faq");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta({ path: "/faq", noIndex: options?.noIndex }),
  };
}

export function generateFallbackMetadata(options?: MetadataOptions): Metadata {
  const title = sanitize(SITE_NAME, SITE_NAME, MAX_TITLE_LENGTH);
  const description = sanitize(
    SITE_DESCRIPTION,
    SITE_TAGLINE,
    MAX_DESCRIPTION_LENGTH,
  );
  const image = resolveImageUrl(FALLBACK_IMAGE);
  const url = canonicalUrl(options?.path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      ...baseOpenGraph,
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { ...baseTwitter, title, description, images: [image] },
    ...sharedPageMeta(options),
  };
}
