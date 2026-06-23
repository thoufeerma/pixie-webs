"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative large blurred circle in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[var(--color-accent)] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center">
        <h2 className="text-[12vw] md:text-[8vw] lg:text-[7rem] leading-[0.9] tracking-tighter font-medium mb-16 text-[var(--color-foreground)]">
          <SplitText text={"READY TO\nBUILD\nSOMETHING\nPEOPLE\nREMEMBER?"} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
        >
          <button className="group relative overflow-hidden bg-[var(--color-foreground)] text-white px-10 py-5 rounded-full text-lg font-medium hover-lift premium-transition flex items-center gap-3">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 premium-transition" />
            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
