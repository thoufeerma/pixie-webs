"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      y: 0,
      transition: {
        type: "tween",
        ease: [0.25, 1, 0.5, 1], // premium ease
        duration: 0.8,
      },
    },
    hidden: {
      y: "110%",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden inline-block w-full">
          <motion.div variants={child} className="inline-block whitespace-pre-wrap">
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
