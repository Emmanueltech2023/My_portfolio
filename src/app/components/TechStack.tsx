"use client";
import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind", 
  "Framer Motion", "Node.js", "PostgreSQL", "Prisma"
];

export default function TechStack() {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* The "Glass" Overlay - This creates the blur on the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

      <div className="flex whitespace-nowrap border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-8">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-3xl md:text-5xl font-black text-white/20 hover:text-neon transition-all duration-500 hover:scale-110 cursor-none select-none">
                {tech}
              </span>
              {/* This is a "Mad" separator dot */}
              <div className="w-2 h-2 rounded-full bg-neon/40 blur-[2px]" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}