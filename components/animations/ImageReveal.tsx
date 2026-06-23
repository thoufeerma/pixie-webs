"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className = "" }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
