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
  id: number;
  title: string;
  icon: LucideIcon | ElementType; 
  tags: string[];
  link: string;
  description?: string; 
  images?: string[];    
}
