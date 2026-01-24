"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [cursorSize, setCursorSize] = useState(16);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // This adds the "Mad" physics (stiffness and damping)
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorSize]);

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
      }}
      className="fixed top-0 left-0 w-4 h-4 bg-neon rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    />
  );
}