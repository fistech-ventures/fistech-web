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
    value: "+880 1609 302239",
    href: "https://wa.me/+8801609302239",
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
