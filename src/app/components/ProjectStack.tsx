"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// --- Functional Magnetic Component ---
const Magnetic = ({ children }: { children: React.ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

const projects = [
  {
    title: "TRAILER'S _VERSE",
    desc: "A cinematic gateway leveraging the YouTube API to explore and stream high-definition movie previews.",
    tags: ["React", "YouTube API", "CSS", "Framer Motion"],
    color: "#0f172a",
    video: "./trailers-verse.mp4", 
    isVideo: true,
    link: "https://movie-beige-zeta.vercel.app/",
    github: "https://github.com/your-username/trailers-verse"
  },
  {
    title: "GASTRO-OS V1",
    desc: "A contactless digital menu solution optimized for high-speed performance and mobile-first restaurant experiences.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#1e293b",
    video: "./menu-v1.mp4",
    isVideo: true,
    link: "https://www.westgatesquare.com.ng/",
    github: "#"
  },
  {
    title: "GASTRO-OS PRO",
    desc: "Advanced hospitality ecosystem featuring integrated administrative tools and dynamic menu management.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    color: "#020617",
    video: "./menu-v2.mp4",
    isVideo: true,
    link: "https://westgate-hotel.vercel.app/",
    github: "#"
  },
  {
    title: "CORE-EXAM",
    desc: "A mission-critical CBT engine engineered for high-concurrency standardized testing and real-time result analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#1e293b",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    isVideo: false,
    link: "#",
    github: "#"
  },
  {
    title: "PULSE CHAT",
    desc: "Real-Time Chat Application with advanced messaging features.",
    tags: ["React", "Socket.io", "Express"],
    color: "#0f172a",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    isVideo: false,
    link: "#",
    github: "#"
  },
  {
    title: "Real Estate Platform",
    desc: "Modern property listing and management system.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    color: "#020617",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    isVideo: false,
    link: "#",
    github: "#"
  }
];

function ProjectCard({ project, i, progress, total }: { project: any, i: number, progress: MotionValue<number>, total: number }) {
  const targetScale = 1 - ((total - i) * 0.05);
  const scale = useTransform(progress, [i * (1 / total), 1], [1, targetScale]);

  return (
    // On mobile, we reduce the height from h-screen to something more flexible
    <div className="min-h-[70vh] md:h-screen sticky top-0 flex items-center justify-center py-10 md:py-0">
      <motion.div
        style={{ 
          backgroundColor: project.color,
          scale,
          // We reduce the stack offset on mobile so cards don't disappear off the top
          top: `calc(-2vh + ${i * 20}px)` 
        }}
        className="relative h-auto min-h-[500px] md:h-[500px] w-full rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row group shadow-2xl"
      >
        {/* Media Side (Moves to Top on Mobile) */}
        <div className="h-[250px] md:h-full md:w-1/2 relative bg-black/40 overflow-hidden order-1 md:order-2">
          {project.isVideo ? (
            <video 
              src={project.video}
              autoPlay loop muted playsInline 
              className="object-cover w-full h-full opacity-60 md:opacity-50 grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full opacity-60 md:opacity-50 grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700" 
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 to-transparent" />
        </div>

        {/* Content Side (Moves to Bottom on Mobile) */}
        <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-between z-10 order-2 md:order-1">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-[9px] md:text-[10px] font-mono border border-white/20 px-2 py-1 rounded-full text-white/50">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl md:text-5xl font-bold mb-3 uppercase italic tracking-tighter">{project.title}</h3>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light line-clamp-3 md:line-clamp-none">
              {project.desc}
            </p>
          </div>
          
          <div className="flex gap-3 mt-6 md:mt-0">
            <Magnetic>
              <a 
                href={project.link} 
                target="_blank" 
                className="flex items-center gap-2 bg-white text-black px-5 py-3 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm"
              >
               VIEW LIVE <ExternalLink size={14} />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href={project.github} 
                target="_blank" 
                className="p-3 border border-white/10 rounded-full text-white"
              >
                <Github size={18} />
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    // ADD THE ID HERE
    <section id="projects" ref={container} className="relative py-20 px-4">
      <h2 className="text-6xl md:text-8xl font-black text-center mb-10 md:mb-20 opacity-10 uppercase">WORK</h2>
      <div className="max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} progress={scrollYProgress} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
