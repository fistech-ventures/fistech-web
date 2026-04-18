import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

export const socialLinks = [
  { Icon: Facebook, path: "https://facebook.com/fistechventures" },
  { Icon: Twitter, path: "https://twitter.com/@fistechventures" },
  { Icon: Linkedin, path: "https://linkedin.com/company/fistechventures" },
  { Icon: Youtube, path: "https://youtube.com/@fistechventures" },
];

export const contactInfo = [
  {
    id: 1,
    title: "WhatsApp Number",
    identifier: "whatsapp",
    value: "+880 1619 778199",
    href: "https://wa.me/+8801619778199",
    icon: Phone,
  },
  {
    id: 2,
    title: "Contact Info",
    identifier: "email",
    value: "info@fistech.org",
    href: "mailto:info@fistech.org",
    icon: Send,
  },
  {
    id: 3,
    title: "Office Location",
    identifier: "location",
    value: "Cha 192, TB Gate, Mohakhali, Dhaka 1212, Bangladesh",
    href: "/contact",
    icon: MapPin,
  },
];

export const metaData = {
  SITE_NAME: "Fistech Ventures",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://fistech.org",
  FALLBACK_IMAGE: "/logo-p.png",
  SITE_TAGLINE: "Your Vision. Our Expertise. Global Impact.",
  SITE_DESCRIPTION:
    "Fistech Ventures is a global IT agency specializing in Web & App Development, Graphics, UI/UX, SEO, Digital Marketing and 3D Modeling for clients worldwide.",
  CONTACT_EMAIL: "info@fistech.org",
  CONTACT_PHONE: "+880 1619 778199",
  MAX_TITLE_LENGTH: 60,
  MAX_DESCRIPTION_LENGTH: 160,
};
