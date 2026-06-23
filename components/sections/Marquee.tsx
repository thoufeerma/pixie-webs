"use client";

import { motion } from "framer-motion";

const items = [
  "PREMIUM WEBSITES",
  "MODERN DESIGN",
  "NEXT.JS",
  "SEO",
  "BRANDING",
  "WEB DEVELOPMENT"
];

export default function Marquee() {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-[var(--color-background)] border-y border-[var(--color-border)]">
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate the items array multiple times to ensure seamless infinite scroll */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--color-foreground)] px-8">
                    {item}
                  </span>
                  <span className="text-2xl text-[var(--color-accent)]">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
