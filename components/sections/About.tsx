"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-sm font-medium tracking-widest uppercase text-[var(--color-muted)] mb-8"
          >
            About PIXIE WEBS
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10">
              We are a premium digital agency specializing in crafting immersive websites and digital experiences. 
              Our focus is on pushing the boundaries of web design with minimal aesthetics, fluid motion, and flawless engineering.
            </p>
            
            <button className="group text-[var(--color-foreground)] font-medium hover-lift premium-transition flex items-center gap-2">
              Our Process
              <span className="block w-0 h-[1px] bg-[var(--color-foreground)] absolute bottom-0 left-0 group-hover:w-full premium-transition" />
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <motion.h3 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tight font-medium"
          >
            We build brands that people remember.
          </motion.h3>
        </div>

      </div>
    </section>
  );
}
