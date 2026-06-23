"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Compass, Map, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const stages = [
  {
    id: "01",
    title: "Discovery",
    icon: Compass,
    description: "Understand business goals, audience, and project requirements before planning the solution."
  },
  {
    id: "02",
    title: "Strategy",
    icon: Map,
    description: "Define the website structure, user experience, content flow, and technical roadmap."
  },
  {
    id: "03",
    title: "Design",
    icon: Palette,
    description: "Create premium UI designs focused on branding, usability, and maximum conversion."
  },
  {
    id: "04",
    title: "Development",
    icon: Code,
    description: "Transform designs into fast, responsive, and scalable websites using modern tech."
  },
  {
    id: "05",
    title: "Testing",
    icon: CheckCircle,
    description: "Test responsiveness, performance, accessibility, SEO, and browser compatibility."
  },
  {
    id: "06",
    title: "Launch",
    icon: Rocket,
    description: "Deploy the website, configure analytics, optimize performance, and provide support."
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this section. 
  // "start start" means progress starts when top of container hits top of viewport.
  // "end end" means progress reaches 1 when bottom of container hits bottom of viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active stage based on scroll percentage
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 0 to 0.999 maps to 0 to 5
    const index = Math.min(5, Math.floor(latest * 6));
    setActiveIndex(index);
  });

  return (
    <section id="process" ref={containerRef} className="relative w-full bg-white md:h-[400vh]">
      
      {/* Sticky Container for Desktop / Normal block for Mobile */}
      <div className="md:sticky md:top-0 w-full md:h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        
        {/* Background Ambience */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <h2 className="text-xs font-bold tracking-widest uppercase text-[var(--color-muted)]">
                OUR PROCESS
              </h2>
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="text-4xl md:text-[52px] font-medium tracking-tight leading-[1.1] text-[#1A1A1A] mb-5"
            >
              Process.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="text-[#666666] text-[15px] md:text-[16px] max-w-[32rem] leading-relaxed"
            >
              Our streamlined design and development workflow minimizes risk and maximizes quality, ensuring predictable, award-winning results.
            </motion.p>
          </div>

          {/* Timeline Wrapper */}
          <div className="w-full pb-4">
            <div className="w-full relative mb-7 px-1 md:px-0">
              
              {/* The Track Wrapper */}
              <div className="absolute top-[28px] md:top-[34px] left-[8%] md:left-[60px] right-[8%] md:right-[60px] h-px bg-[#E8E8E8] z-0" />
              
              {/* The Animated Progress Line */}
              <motion.div 
                className="absolute top-[28px] md:top-[34px] left-[8%] md:left-[60px] right-[8%] md:right-[60px] h-px bg-[var(--color-accent)] z-10 origin-left"
                style={{ scaleX: scrollYProgress }}
              />

              {/* The Stages */}
              <div className="relative z-20 flex justify-between w-full">
                {stages.map((stage, i) => {
                  const isPastOrActive = activeIndex >= i;
                  const isActive = activeIndex === i;
                  
                  return (
                    <div key={stage.id} className="flex flex-col items-center flex-1">
                      <motion.span 
                        animate={{ 
                          color: isPastOrActive ? "var(--color-accent)" : "#A0A0A0",
                          fontWeight: isActive ? 800 : 700 
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-[9px] md:text-[11px] tracking-tighter md:tracking-widest mb-2 md:mb-3"
                      >
                        {stage.id}
                      </motion.span>
                      
                      {/* The Node Dot */}
                      <div className="relative flex items-center justify-center mb-2 md:mb-4 h-4">
                        <motion.div 
                          animate={{ 
                            scale: isPastOrActive ? 1.15 : 1,
                            backgroundColor: isPastOrActive ? "var(--color-accent)" : "#FFFFFF",
                            borderColor: isPastOrActive ? "#FFFFFF" : "#E8E8E8",
                            boxShadow: isPastOrActive ? "0 0 0 3px var(--color-accent), 0 0 15px rgba(138,43,226,0.3)" : "none"
                          }}
                          transition={{ duration: 0.4 }}
                          className="w-2 h-2 md:w-3 md:h-3 rounded-full border-[2px]" 
                        />
                      </div>
                      
                      <motion.span 
                        animate={{ color: isPastOrActive ? "#1A1A1A" : "#A0A0A0" }}
                        transition={{ duration: 0.4 }}
                        className="text-[9px] sm:text-[10px] md:text-[14px] font-semibold text-center leading-tight block"
                      >
                        {stage.title}
                      </motion.span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* 2x3 Grid of Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full">
            {stages.map((stage, i) => {
              const isActive = activeIndex === i;
              
              return (
                <motion.div
                  key={stage.id}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    opacity: isActive ? 1 : 0.65,
                    borderColor: isActive ? "var(--color-accent)" : "#E8E8E8",
                    boxShadow: isActive 
                      ? "0 20px 60px -15px rgba(0,0,0,0.12)" 
                      : "0 10px 40px -15px rgba(0,0,0,0.03)"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative bg-white p-4 md:p-6 rounded-[16px] md:rounded-[24px] border flex flex-col cursor-default h-full"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <motion.div 
                      animate={{ backgroundColor: isActive ? "#F4F0FF" : "#F8F9FA" }}
                      transition={{ duration: 0.4 }}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center shrink-0"
                    >
                      <motion.div
                        animate={{ color: isActive ? "var(--color-accent)" : "#1A1A1A" }}
                        transition={{ duration: 0.4 }}
                      >
                        <stage.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                    <div className="flex flex-col">
                      <motion.span 
                        animate={{ color: isActive ? "var(--color-accent)" : "#A0A0A0" }}
                        transition={{ duration: 0.4 }}
                        className="text-[8px] md:text-[10px] font-bold tracking-widest mb-0.5"
                      >
                        STAGE {stage.id}
                      </motion.span>
                      <h4 className="text-[14px] sm:text-[16px] md:text-[22px] font-medium tracking-tight text-[#1A1A1A] leading-tight">
                        {stage.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-[#666666] text-[12px] sm:text-[13px] md:text-[15px] leading-snug md:leading-relaxed flex-grow line-clamp-3 md:line-clamp-none">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
