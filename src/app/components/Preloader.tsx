"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INITIALIZING", "LOADING ASSETS", "DECRYPTING", "PAMMY'S DEV", "WELCOME"];
const chars = "!@#$%^&*()_+{}:<>?/[];,./";

const GlitchText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isActive, setIsActive] = useState(true);

  // 1. Handle Window Resize/Initial Size
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Static dependency array - No more "size change" errors

  // 2. Handle Word Cycling
  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => setIsActive(false), 1000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 1000 : 250);

    return () => clearTimeout(timeout);
  }, [index]); // Order remains constant

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key="loader"
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {dimension.width > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center text-neon text-2xl md:text-5xl font-mono font-bold tracking-tighter z-[100]"
              >
                <div className="mr-4 h-3 w-3 rounded-full bg-neon animate-pulse shadow-[0_0_15px_#ccff00]" />
                <GlitchText text={words[index]} />
              </motion.div>
              
              <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#0a0a0a] pointer-events-none">
                <motion.path
                  initial={{ d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0` }}
                  exit={{ 
                    d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`,
                    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
                  }}
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}