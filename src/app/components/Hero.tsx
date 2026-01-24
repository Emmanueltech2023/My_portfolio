"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const sentences = [
  "Engineering the next generation of the web.",
  "Building high-performance digital experiences.",
  "Turning complex ideas into fast code.",
  "One fast build at a time."
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % sentences.length;
      const fullText = sentences[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at the end
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 1. The "Mad" Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <span className="text-sm font-mono tracking-[0.3em] text-violet-400 uppercase mb-4 block">
          Engineering Excellence
        </span>
        
        <h3 className="text-6xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-none">
          ELLU <br /> <span className="text-white">EMMANUEL</span>
        </h3>

        {/* 2. Typewriter Subtitle Section */}
        <div className="h-20 mb-10 flex items-center justify-center">
          <p className="text-gray-400 text-lg md:text-2xl max-w-xl mx-auto font-mono tracking-tight">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-5 md:h-7 bg-violet-500 ml-1 align-middle"
            />
          </p>
        </div>

        {/* 3. The Functional & Magnetic CTA */}
        <div className="flex gap-6 justify-center">
          <Magnetic>
            <a 
              href="#projects" 
              className="relative group px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 inline-block"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                VIEW PROJECTS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
          </Magnetic>
        </div>
      </motion.div>

      {/* 4. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-xs font-mono tracking-widest uppercase"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}