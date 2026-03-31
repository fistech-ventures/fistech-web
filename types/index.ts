import { LucideIcon } from "lucide-react";
import { ElementType } from "react";

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectSection {
  id: string;
  type: string;
  header: string;
  shortSummary?: string;
  fullDescription?: string;
  servicesProvided?: string[];
  bodyText?: string;
  features?: ProjectFeature[];
  stats?: ProjectStat[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  location: string;
  client: string;
  date: string;
  websiteUrl: string;
  heroImage: string;
  gallery: string[];
  sections: ProjectSection[];
}

// Testimonials
export interface Testimonial {
  title: string;
  name: string;
  description: string;
  country: string;
  businessLogo: string;
  profileImage?: string;
}

// Services
export interface Service {
  id: string;
  slug: string;
  meta: ServiceMeta;
  hero: ServiceHero;
  overview: ServiceOverview;
  content: ServiceContentItem[];
  process: ServiceProcess;
  features: ServiceFeature[];
  cta: ServiceMainCTA;
  contact: ServiceContact;
  status: "published" | "draft" | "archived";
  created_at: string;
  updated_at: string;
}

export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical_url: string;
}

export interface ServiceHero {
  title: string;
  subtitle: string;
  badge: string;
  background_image: string;
  breadcrumb: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}

export interface ServiceOverview {
  title: string;
  description: string;
  tags: string[];
  cta: {
    label: string;
    url: string;
  };
  media: ServiceMedia[];
  layout: {
    type: "split" | "full" | string;
    media_position: "left" | "right";
  };
}

export interface ServiceMedia {
  type: "image" | "video";
  url: string;
  alt: string;
  order: number;
}

// Discriminated Union for flexible content blocks
export type ServiceContentItem =
  | { type: "text_block"; title: string; content: string }
  | { type: "list_block"; title: string; items: string[] };

export interface ServiceProcess {
  title: string;
  steps: ServiceProcessStep[];
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceMainCTA {
  title: string;
  description: string;
  primary: {
    label: string;
    url: string;
  };
  secondary: {
    label: string;
    url: string;
  };
}

export interface ServiceContact {
  title: string;
  phone: string;
  email: string;
  cta: {
    label: string;
    url: string;
  };
}

export interface CaseStudy {
  caseStudyId: string;
  slug: string;
  metadata: {
    title: string;
    seoDescription: string;
    publishDate: string;
    readingTime: string;
  };
  hero: {
    headline: string;
    subHeadline: string;
    mainImage: string;
  };
  problem: {
    title: string;
    summary: string;
  };
  solution: {
    title: string;
    approach: string;
  };
  metrics: {
    kpis: Array<{
      metric: string;
      before: string;
      after: string;
    }>;
  };
}