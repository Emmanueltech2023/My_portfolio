"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, Github, Lock, Sparkles, Layers, Cpu } from "lucide-react";
import { projects, Project } from "@/data/projects";

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

// --- Futuristic Cyber Preview for Projects Without Media Yet ---
function CyberMediaPreview({ project }: { project: Project }) {
  const accent = project.accentColor || "#00f2ff";

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-[#070b14] overflow-hidden select-none">
      {/* Dynamic ambient background glow */}
      <div 
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-25 pointer-events-none"
        style={{ backgroundColor: accent }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      {/* Cyber Grid Lines */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accent }} />
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">
            {project.status || "PRODUCTION READY"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/30">
          <Cpu size={12} style={{ color: accent }} />
          <span>SYS.ARCH // v2.6</span>
        </div>
      </div>

      {/* Center Holographic Presentation */}
      <div className="relative z-10 my-auto py-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-3">
          <Sparkles size={11} style={{ color: accent }} />
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/70">
            {project.title}
          </span>
        </div>
        <p className="text-white/90 text-sm md:text-base font-mono font-medium leading-relaxed">
          {project.tagline}
        </p>
        
        {/* Architecture Pill Matrix */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-white/60"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Confidentiality / Status Footnote */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/5 text-[10px] font-mono text-white/40">
        <span className="flex items-center gap-1">
          <Layers size={11} /> {project.tags[0]} ARCHITECTURE
        </span>
        <span className="text-[9px] tracking-wider text-white/30 uppercase">
          PAMMY'S DEV CERTIFIED
        </span>
      </div>
    </div>
  );
}

function ProjectVideo({ src }: { src: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-black/40" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-2 md:p-6 bg-black/40 overflow-hidden">
      <video 
        src={src}
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="metadata"
        suppressHydrationWarning
        className="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  );
}

function ProjectCard({ 
  project, 
  i, 
  progress, 
  total 
}: { 
  project: Project; 
  i: number; 
  progress: MotionValue<number>; 
  total: number 
}) {
  const targetScale = 1 - ((total - i) * 0.035);
  const scale = useTransform(progress, [i * (1 / total), 1], [1, targetScale]);

  return (
    <div className="min-h-[75vh] md:h-screen sticky top-0 flex items-center justify-center py-6 md:py-0">
      <motion.div
        style={{ 
          backgroundColor: project.color,
          scale,
          top: `calc(4vh + ${i * 22}px)` 
        }}
        className="relative h-auto min-h-[520px] md:h-[520px] w-full rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row group shadow-2xl transition-shadow duration-500 hover:shadow-neon/5"
      >
        {/* Media Side (Top on Mobile, Right on Desktop) */}
        <div className="h-[280px] md:h-full md:w-1/2 relative bg-black/50 overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/5 flex items-center justify-center">
          {project.mediaType === "video" && project.mediaSrc ? (
            <ProjectVideo src={project.mediaSrc} />
          ) : project.mediaType === "image" && project.mediaSrc ? (
            <div className="w-full h-full flex items-center justify-center p-3 md:p-6">
              <img 
                src={project.mediaSrc} 
                alt={project.title} 
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          ) : (
            <CyberMediaPreview project={project} />
          )}
        </div>

        {/* Content Side (Bottom on Mobile, Left on Desktop) */}
        <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-between z-10 order-2 md:order-1">
          <div>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="text-[9px] md:text-[10px] font-mono border border-white/15 px-2.5 py-1 rounded-full text-white/60 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 uppercase italic tracking-tight text-white group-hover:text-neon transition-colors">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm font-mono text-cyan-400/80 mb-3 tracking-wide">
              {project.tagline}
            </p>
            <p className="text-gray-300/80 text-xs md:text-sm leading-relaxed font-light line-clamp-4 md:line-clamp-none">
              {project.desc}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
            {project.link ? (
              <Magnetic>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black hover:bg-neon transition-colors px-5 py-3 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-md"
                >
                  VIEW LIVE <ExternalLink size={14} />
                </a>
              </Magnetic>
            ) : (
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/50 px-4 py-2.5 rounded-full font-mono text-[11px] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-neon/80 animate-pulse" />
                {project.status || "ENTERPRISE BUILD"}
              </div>
            )}

            {project.github ? (
              <Magnetic>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-3 border border-white/10 hover:border-white/30 rounded-full text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Github size={18} />
                </a>
              </Magnetic>
            ) : project.isPrivateRepo ? (
              <div 
                title="Private Repository / Client NDA"
                className="flex items-center gap-1.5 px-3 py-2.5 border border-white/5 rounded-full text-white/30 font-mono text-[10px] select-none"
              >
                <Lock size={13} />
                <span>PRIVATE REPO</span>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectStack() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={container} className="relative py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon block mb-2">
          Featured Engineering Works
        </span>
        <h2 className="text-5xl md:text-8xl font-black opacity-15 uppercase tracking-tighter">
          PROJECTS
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            i={i} 
            progress={scrollYProgress} 
            total={projects.length} 
          />
        ))}
      </div>
    </section>
  );
}
