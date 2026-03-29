import { Service } from "@/types";

export const SERVICES_DATA: Service[] = [
  {
    id: "svc_web_app",
    slug: "web-application-development",

    meta: {
      title: "Web Application Development | Scalable & Secure Solutions",
      description:
        "We build high-performance, scalable web applications using modern technologies tailored to your business goals.",
      keywords: [
        "web app development",
        "custom web apps",
        "SaaS development",
        "Next.js development",
      ],
      canonical_url: "/services/web-application-development",
    },

    hero: {
      title: "Web Application Development",
      subtitle:
        "Scalable, secure, and high-performing web apps built for growth.",
      badge: "Service",
      background_image: "/images/services/web-hero.jpg",
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "Web Application", url: "" },
      ],
    },

    overview: {
      title: "Web Application Development",
      description:
        "We build modern web applications with robust architecture, seamless UX, and high scalability using cutting-edge technologies.",

      tags: ["SaaS", "Dashboard", "API Integration", "Scalable Architecture"],

      cta: {
        label: "Start Your Project",
        url: "/contact",
      },

      media: [
        {
          type: "image",
          url: "/images/services/web1.jpg",
          alt: "dashboard ui",
          order: 1,
        },
        {
          type: "image",
          url: "/images/services/web2.jpg",
          alt: "web app interface",
          order: 2,
        },
      ],

      layout: { type: "split", media_position: "right" },
    },

    content: [
      {
        type: "text_block",
        title: "What We Build",
        content:
          "Custom dashboards, SaaS platforms, CRM systems, and enterprise-grade applications tailored to your needs.",
      },
      {
        type: "list_block",
        title: "What You Get",
        items: [
          "Custom scalable architecture",
          "Modern UI/UX",
          "API integrations",
          "Performance optimization",
        ],
      },
    ],

    process: {
      title: "Our Process",
      steps: [
        {
          step: 1,
          title: "Discovery",
          description: "Understanding your business goals",
          icon: "search",
        },
        {
          step: 2,
          title: "Architecture",
          description: "Designing scalable system",
          icon: "layers",
        },
        {
          step: 3,
          title: "Development",
          description: "Agile development cycles",
          icon: "code",
        },
        {
          step: 4,
          title: "Launch",
          description: "Deployment & scaling",
          icon: "rocket",
        },
      ],
    },

    features: [
      {
        title: "Scalable Systems",
        description: "Built for growth",
        icon: "trending-up",
      },
      {
        title: "Secure Codebase",
        description: "Industry best practices",
        icon: "shield",
      },
    ],

    cta: {
      title: "Build your next big product",
      description: "Let’s turn your idea into a scalable web app.",
      primary: { label: "Get Started", url: "/contact" },
      secondary: { label: "View Portfolio", url: "/projects" },
    },

    contact: {
      title: "Need a Web App?",
      phone: "+880XXXXXXXXXX",
      email: "hello@youragency.com",
      cta: { label: "Contact Now", url: "/contact" },
    },

    status: "published",
    created_at: "2026-03-29",
    updated_at: "2026-03-29",
  },

  {
    id: "svc_mobile_app",
    slug: "mobile-app-development",

    meta: {
      title: "Mobile App Development | iOS & Android Apps",
      description:
        "We build high-quality mobile apps for iOS and Android with seamless performance and user experience.",
      keywords: [
        "mobile app development",
        "android app",
        "ios app",
        "react native",
      ],
      canonical_url: "/services/mobile-app-development",
    },

    hero: {
      title: "Mobile App Development",
      subtitle: "Engaging mobile experiences that users love.",
      badge: "Service",
      background_image: "/images/services/mobile-hero.jpg",
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "Mobile Apps", url: "" },
      ],
    },

    overview: {
      title: "Mobile App Development",
      description:
        "We design and develop high-performance mobile applications for startups and enterprises.",

      tags: ["iOS", "Android", "React Native", "Flutter"],

      cta: { label: "Build Your App", url: "/contact" },

      media: [
        {
          type: "image",
          url: "/images/services/mobile1.jpg",
          alt: "mobile ui",
          order: 1,
        },
        {
          type: "image",
          url: "/images/services/mobile2.jpg",
          alt: "app screens",
          order: 2,
        },
      ],

      layout: { type: "split", media_position: "right" },
    },

    content: [
      {
        type: "list_block",
        title: "Capabilities",
        items: [
          "Cross-platform apps",
          "Native performance",
          "App Store deployment",
          "Push notifications",
        ],
      },
    ],

    process: {
      title: "Development Process",
      steps: [
        {
          step: 1,
          title: "UX Planning",
          description: "User-centered design",
          icon: "user",
        },
        {
          step: 2,
          title: "Development",
          description: "Agile sprints",
          icon: "code",
        },
        {
          step: 3,
          title: "Testing",
          description: "QA & performance",
          icon: "check",
        },
      ],
    },

    features: [
      {
        title: "Cross Platform",
        description: "Single codebase",
        icon: "smartphone",
      },
    ],

    cta: {
      title: "Launch your mobile app",
      description: "We help you go from idea to app store.",
      primary: { label: "Start Now", url: "/contact" },
      secondary: { label: "See Apps", url: "/projects" },
    },

    contact: {
      title: "Need an App?",
      phone: "+880XXXXXXXXXX",
      email: "hello@youragency.com",
      cta: { label: "Contact Now", url: "/contact" },
    },

    status: "published",
    created_at: "2026-03-29",
    updated_at: "2026-03-29",
  },

  {
    id: "svc_design",
    slug: "ui-ux-design",

    meta: {
      title: "UI/UX & Creative Design Services",
      description:
        "We craft visually stunning and user-friendly designs that elevate your brand.",
      keywords: ["ui ux design", "product design", "branding", "figma design"],
      canonical_url: "/services/ui-ux-design",
    },

    hero: {
      title: "UI/UX & Creative Design",
      subtitle: "Designs that convert and engage.",
      badge: "Service",
      background_image: "/images/services/design-hero.jpg",
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "Design", url: "" },
      ],
    },

    overview: {
      title: "Design Services",
      description:
        "We create intuitive and visually appealing designs for digital products.",

      tags: ["UI Design", "UX Research", "Branding"],

      cta: { label: "Start Designing", url: "/contact" },

      media: [
        {
          type: "image",
          url: "/images/services/design1.jpg",
          alt: "design ui",
          order: 1,
        },
      ],

      layout: { type: "split", media_position: "right" },
    },

    content: [
      {
        type: "list_block",
        title: "What We Design",
        items: [
          "Web & Mobile UI",
          "Design Systems",
          "Brand Identity",
          "Prototypes",
        ],
      },
    ],

    process: {
      title: "Design Process",
      steps: [
        {
          step: 1,
          title: "Research",
          description: "User insights",
          icon: "search",
        },
        {
          step: 2,
          title: "Wireframe",
          description: "Structure flows",
          icon: "layout",
        },
        {
          step: 3,
          title: "UI Design",
          description: "Visual design",
          icon: "pen-tool",
        },
      ],
    },

    features: [
      {
        title: "User-Centered",
        description: "Focus on usability",
        icon: "users",
      },
    ],

    cta: {
      title: "Design your product",
      description: "We make your product visually outstanding.",
      primary: { label: "Get Design", url: "/contact" },
      secondary: { label: "View Work", url: "/projects" },
    },

    contact: {
      title: "Need Design?",
      phone: "+880XXXXXXXXXX",
      email: "hello@youragency.com",
      cta: { label: "Contact Now", url: "/contact" },
    },

    status: "published",
    created_at: "2026-03-29",
    updated_at: "2026-03-29",
  },

  {
    id: "svc_seo",
    slug: "seo-optimization",

    meta: {
      title: "SEO & Digital Growth Services",
      description:
        "Boost your online visibility and rankings with our data-driven SEO strategies.",
      keywords: [
        "seo services",
        "technical seo",
        "on page seo",
        "digital marketing",
      ],
      canonical_url: "/services/seo-optimization",
    },

    hero: {
      title: "SEO & Optimization",
      subtitle: "Drive traffic, leads, and growth.",
      badge: "Service",
      background_image: "/images/services/seo-hero.jpg",
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "SEO", url: "" },
      ],
    },

    overview: {
      title: "SEO Services",
      description:
        "We help your business rank higher and attract qualified traffic.",

      tags: ["Technical SEO", "On-page SEO", "Link Building"],

      cta: { label: "Boost Rankings", url: "/contact" },

      media: [
        {
          type: "image",
          url: "/images/services/seo1.jpg",
          alt: "seo analytics",
          order: 1,
        },
      ],

      layout: { type: "split", media_position: "right" },
    },

    content: [
      {
        type: "list_block",
        title: "What We Do",
        items: [
          "Keyword research",
          "Technical SEO",
          "Content optimization",
          "Analytics & tracking",
        ],
      },
    ],

    process: {
      title: "SEO Process",
      steps: [
        {
          step: 1,
          title: "Audit",
          description: "Website analysis",
          icon: "search",
        },
        {
          step: 2,
          title: "Optimization",
          description: "Fix & improve",
          icon: "tool",
        },
        {
          step: 3,
          title: "Growth",
          description: "Rank & scale",
          icon: "trending-up",
        },
      ],
    },

    features: [
      { title: "Data-Driven", description: "Real metrics", icon: "bar-chart" },
    ],

    cta: {
      title: "Grow your traffic",
      description: "Let’s rank your business on Google.",
      primary: { label: "Start SEO", url: "/contact" },
      secondary: { label: "View Case Studies", url: "/projects" },
    },

    contact: {
      title: "Need SEO Help?",
      phone: "+880XXXXXXXXXX",
      email: "hello@youragency.com",
      cta: { label: "Contact Now", url: "/contact" },
    },

    status: "published",
    created_at: "2026-03-29",
    updated_at: "2026-03-29",
  },
];
