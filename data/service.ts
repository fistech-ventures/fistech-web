import { Service } from "@/types";
import { Box, Layers, Monitor, PenTool } from "lucide-react";

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Branding & Creative Design",
    icon: Layers,
    tags: ["Branding", "Logo design", "Tone of voice"],
    link: "/services/branding",
    description: 
      "We help startups build standout brands with logo design, brand messaging, tone of voice, & positioning strategies.",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800", 
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800"
    ],
  },
  {
    id: 2,
    title: "Web & Product Design",
    icon: Monitor,
    tags: ["UI/ UX Design", "Websites", "SaaS platforms"],
    link: "/services/web-design",
    description: 
      "Crafting high-end, cinematic user interfaces that convert. We specialize in React, Next.js, and complex GSAP animations.",
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
    ],
  },
  {
    id: 3,
    title: "3D Art & Creative Direction",
    icon: PenTool,
    tags: ["3D Art Design", "3D Character", "Blender"],
    link: "/services/3d-art",
    description: 
      "Bringing concepts to life through professional 3D modeling, texturing, and creative direction using Blender and Cinema 4D.",
    images: [
      "https://images.unsplash.com/photo-1614850523296-e8c041de239b?q=80&w=800",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
    ],
  },
  {
    id: 4,
    title: "SaaS Application",
    icon: Box,
    tags: ["SaaS", "Subscription", "SaaS platforms"],
    link: "/services/saas",
    description: 
      "Building scalable, secure, and robust SaaS applications with a focus on modern subscription models and cloud architecture.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
    ],
  },
];