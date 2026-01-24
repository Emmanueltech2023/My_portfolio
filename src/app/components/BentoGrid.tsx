"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck, Zap } from "lucide-react";

const projects = [
  {
    title: "AI Matrix",
    description: "Neural network visualization tool.",
    className: "md:col-span-2 md:row-span-2",
    icon: <Zap className="text-neon" />,
    gradient: "from-neon/20 to-transparent",
  },
  {
    title: "SecureVault",
    description: "End-to-end encrypted storage.",
    className: "md:col-span-1 md:row-span-1",
    icon: <ShieldCheck className="text-purple-500" />,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Github Stats",
    description: "Live commit tracker.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Github className="text-white/50" />,
    gradient: "from-white/10 to-transparent",
  },
];

export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-obsidian p-8 flex flex-col justify-between ${item.className}`}
          >
            {/* The Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>

            <div className="relative z-10 flex justify-end">
              <ExternalLink size={18} className="text-white/30 group-hover:text-neon transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}