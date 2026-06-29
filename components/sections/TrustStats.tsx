"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  {
    value: 40,
    suffix: "+",
    label: "Projects\nCompleted"
  },
  {
    value: 98,
    suffix: "%",
    label: "Client\nSatisfaction"
  },
  {
    value: 5,
    suffix: "+",
    label: "Years\nExperience"
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support\nAvailable"
  }
];

export default function TrustStats() {
  return (
    <section className="w-full bg-white border-t border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                <span className="block text-[32px] sm:text-[40px] md:text-[64px] font-bold tracking-tighter text-[#1A1A1A] group-hover:text-[var(--color-accent)] transition-colors duration-300 ease-out leading-none mb-1 md:mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-[#666666] group-hover:text-[#1A1A1A] transition-colors duration-300 ease-out whitespace-pre-line leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
