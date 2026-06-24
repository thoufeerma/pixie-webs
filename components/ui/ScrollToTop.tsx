"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const lenis = useLenis();

  // Premium smoothed progress for the SVG ring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show after scrolling 20%
    if (latest > 0.2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    if (lenis) {
      // 800-1200ms with premium easing
      lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // SVG metrics
  const size = 60;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [circumference, 0]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] flex items-center rounded-full bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.3)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:bg-[rgba(255,255,255,0.85)] hover:border-[rgba(255,255,255,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.2)] transition-all duration-300 group p-1.5 md:p-2"
          aria-label="Scroll to top"
        >
          {/* Glass Progress Ring Container */}
          <div className="relative flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] shrink-0 rounded-full bg-white/40 shadow-inner group-hover:bg-white/60 transition-colors duration-300">
            
            {/* SVG Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox={`0 0 ${size} ${size}`}>
              {/* Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth={strokeWidth}
              />
              {/* Progress */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
                className="transition-colors duration-300 group-hover:stroke-[#8b5cf6]" 
              />
            </svg>

            {/* Centered Arrow */}
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-[#1a1a1a] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]" strokeWidth={2} />
          </div>

          {/* Dynamic Text Container */}
          {/* Default Width is 0 (Perfect Circle), Hover Width accommodates padding + text */}
          <div className="relative flex items-center h-[24px] overflow-hidden transition-[width] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] w-0 md:group-hover:w-[104px]">
            {/* Action Text (Hover) */}
            <span className="absolute left-3 text-[14px] md:text-[15px] font-medium text-[var(--color-accent)] whitespace-nowrap opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Back to Top
            </span>
          </div>

        </motion.button>
      )}
    </AnimatePresence>
  );
}
