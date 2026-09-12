export interface Project {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  color: string;
  accentColor?: string;
  mediaType: "video" | "image" | "preview";
  mediaSrc?: string;
  link?: string;
  github?: string;
  isPrivateRepo?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "leapforce-media",
    title: "LEAPFORCE MEDIA",
    tagline: "Digital OOH Advertising & Billboard Inventory Ecosystem",
    desc: "A high-performance digital Out-Of-Home (OOH) advertising platform engineered for managing billboard advertising inventory. Features dynamic location mapping, real-time availability tracking, smart filtering, automated lead notifications, and a comprehensive admin management dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Cloudinary", "Resend", "Tailwind CSS"],
    color: "#081325",
    accentColor: "#00f2ff",
    mediaType: "image",
    mediaSrc: "/leapforce.png",
    link: "https://www.leapforcemedia.com/",
    status: "Enterprise Platform",
    isPrivateRepo: true
  },
  {
    id: "the-magic-store",
    title: "THE MAGIC STORE",
    tagline: "Mobile-First Korean E-Commerce Experience",
    desc: "A mobile-first lifestyle e-commerce solution designed for showcasing and distributing Korean beauty and culture products in Nigeria. Engineered with an interactive catalog, multi-angle product gallery, inventory tracking, and seamless direct-to-WhatsApp order checkout.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary", "ImageKit"],
    color: "#180a29",
    accentColor: "#c084fc",
    mediaType: "image",
    mediaSrc: "/magic-store.png",
    link: "https://themagicstore7.com/",
    status: "E-Commerce",
    isPrivateRepo: true
  },
  {
    id: "ivest",
    title: "IVEST",
    tagline: "Founder-Investor Matchmaking & Deal-Flow Engine",
    desc: "A startup-investor ecosystem connecting innovative founders with venture capital. Provides real-time fundraising analytics, project showcase builders, interactive investor matching, pitch deck tracking, and direct secure communication channels.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "REST APIs"],
    color: "#031c19",
    accentColor: "#34d399",
    mediaType: "image",
    mediaSrc: "/ivest.png",
    link: "https://ivest.vercel.app/",
    status: "FinTech / SaaS",
    isPrivateRepo: true
  },
  {
    id: "elsinal",
    title: "ELSINAL",
    tagline: "Corporate Venture Ecosystem & Tech Academy",
    desc: "A modern corporate digital presence featuring an interactive venture ecosystem overview, corporate services breakdown, customizable enterprise packages, a tech academy training portal, and smooth fluid GSAP animations.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript", "Responsive UI"],
    color: "#141414",
    accentColor: "#fb923c",
    mediaType: "image",
    mediaSrc: "/elsinal.png",
    link: "https://www.elsinal.com/",
    status: "Corporate Web",
    isPrivateRepo: true
  },
  {
    id: "trailers-verse",
    title: "TRAILER'S _VERSE",
    tagline: "Cinematic High-Definition Movie Stream & Preview Hub",
    desc: "A cinematic gateway leveraging the YouTube API to explore and stream high-definition movie previews with fluid Framer Motion choreography and responsive theatrical viewing modes.",
    tags: ["React", "YouTube API", "CSS", "Framer Motion"],
    color: "#0f172a",
    accentColor: "#e11d48",
    mediaType: "video",
    mediaSrc: "/trailers-verse.mp4",
    link: "https://movie-beige-zeta.vercel.app/",
    github: "https://github.com/Emmanueltech2023"
  },
  {
    id: "westgate-arena",
    title: "WESTGATE ARENA",
    tagline: "Enterprise Hospitality & Dynamic Menu Engine",
    desc: "Advanced hospitality ecosystem featuring integrated administrative control panels, instant menu modification, table-side ordering intelligence, and dynamic database-driven pricing for hotels and high-volume dining.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Full Stack"],
    color: "#050d1a",
    accentColor: "#38bdf8",
    mediaType: "video",
    mediaSrc: "/menu-v2.mp4",
    link: "https://westgate-hotel.vercel.app/",
    isPrivateRepo: true
  },
  {
    id: "westgate-square",
    title: "WESTGATE SQUARE",
    tagline: "Ultra-Lightweight Contactless Digital Menu",
    desc: "A contactless digital menu solution built with lightweight vanilla architecture, optimized for instantaneous load speeds, zero mobile friction, and reliable low-bandwidth restaurant operations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Mobile-First"],
    color: "#161e2e",
    accentColor: "#a3e635",
    mediaType: "video",
    mediaSrc: "/menu-v1.mp4",
    link: "https://www.westgatesquare.com.ng/",
    isPrivateRepo: true
  }
];
