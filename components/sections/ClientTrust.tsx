"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  // Framer Motion 10+ allows passing motion values directly to motion components
  // But for simple text rendering, we need to map the spring value to a rounded string
  // React 18+ can render motion value directly if passed as children to motion.span
  const displayValue = useTransform(springValue, (current) => Math.round(current));

  return (
    <span ref={ref} className="flex">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" }, // Quick hack for 24/7
];

export default function ClientTrust() {
  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      
      {/* Background Typography */}
      <div className="bg-typography">TRUST</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <h4 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-4 text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] premium-transition">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h4>
            <p className="text-[var(--color-muted)] uppercase tracking-widest text-sm font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
