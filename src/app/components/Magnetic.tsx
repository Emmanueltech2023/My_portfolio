"use client";
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnetic({children}: {children: React.ReactElement}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;

        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate the distance from the center
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Use a multiplier (0.35) so the element doesn't fly off the screen
        // It keeps the "pull" subtle and premium
        setPosition({x: middleX * 0.35, y: middleY * 0.35});
    }

    const reset = () => {
        setPosition({x: 0, y: 0});
    }

    const { x, y } = position;

    return (
        <motion.div
            style={{ 
                position: "relative",
                display: "inline-block", // Ensures it only takes up the space of the button
                zIndex: 50 
            }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x, y }}
            // Changed spring settings for a "heavier," more expensive feel
            transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 20, // Increased damping for a smoother stop
                mass: 0.1 
            }}
        >
            {/* Clone the child to ensure it doesn't have its own pointer issues */}
            {React.cloneElement(children, {
                style: {
                    ...(children as React.ReactElement<any>).props?.style,
                    // This ensures the button itself doesn't block the mouse events
                    transition: "transform 0.2s ease-out" 
                }
            } as React.HTMLAttributes<HTMLElement>)}
        </motion.div>
    )
}