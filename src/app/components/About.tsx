"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 90 },
  { name: "TypeScript / JavaScript", level: 85 },
  { name: "PostgreSQL / MongoDB", level: 82 },
  { name: "UI/UX Implementation", level: 90 },
  { name: "Cloud Infrastructure (AWS/Docker)", level: 80 },
   { name: "Scalable Architecture Design", level: 75 },
];

export default function About() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The "Mad" Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          {/* The background glow that reacts to hover */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-neon to-violet-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
          
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-obsidian">
            <img 
              src="/profilee.jpeg" // Put your photo in the public folder and rename it here
              alt="E" 
              className="object-cover w-full h-full  hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
            {/* The "CEO" Overlay Tag */}
            <div className="absolute bottom-6 left-6 p-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl">
              <p className="text-neon font-mono text-sm">PAMMY'S DEV CEO</p>
              <p className="text-white/50 text-xs">5+ Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Story & Competencies */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">About <span className="text-neon">Me</span></h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a passionate software engineer specializing in full-stack web development. 
              As the founder of <span className="text-white font-bold">PAMMY'S DEV</span>, I lead a dynamic team in creating 
              innovative digital solutions that drive business growth.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Core Competencies</h3>
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-white/70">{skill.name}</span>
                  <span className="text-neon">{skill.level}%</span>
                </div>
                {/* The "Mad" Progress Bar */}
                <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: `${skill.level - 100}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-transparent via-neon to-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
