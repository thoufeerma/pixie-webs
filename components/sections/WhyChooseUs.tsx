"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Target, Puzzle, Sparkles, Code2, Gauge, Headset } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    title: "Strategic\nApproach",
    icon: Target,
    heading: "Strategic Approach",
    description: "Every project begins with research, business goals, and measurable outcomes. We build digital experiences that solve problems instead of simply looking attractive.",
    benefits: [
      "Business-first planning",
      "Data-driven decisions",
      "Long-term scalability"
    ]
  },
  {
    title: "Custom\nSolutions",
    icon: Puzzle,
    heading: "Custom Solutions",
    description: "We don't rely on generic templates. Every line of code and every pixel is meticulously crafted to fit your brand's unique identity and technical requirements.",
    benefits: [
      "Bespoke development",
      "Seamless integrations",
      "Scalable architectures"
    ]
  },
  {
    title: "Modern\nDesign",
    icon: Sparkles,
    heading: "Modern Design",
    description: "We draw inspiration from high-end editorial and Awwwards-winning layouts to create immersive, premium visual experiences that elevate your brand perception instantly.",
    benefits: [
      "Award-winning layouts",
      "Micro-interactions",
      "Premium typography"
    ]
  },
  {
    title: "Clean\nCode",
    icon: Code2,
    heading: "Clean Code",
    description: "Our codebases are exceptionally clean, strictly typed, and heavily modular. We prioritize maintainability so your internal team can easily take over and scale.",
    benefits: [
      "Strictly typed logic",
      "Modular components",
      "Modern toolchains"
    ]
  },
  {
    title: "Performance\nFocused",
    icon: Gauge,
    heading: "Performance Focused",
    description: "Speed is a feature. We obsess over Web Vitals, image optimization, and server-side rendering to guarantee your website loads instantly on any connection.",
    benefits: [
      "Sub-second load times",
      "Advanced edge caching",
      "Technical SEO mastery"
    ]
  },
  {
    title: "Reliable\nSupport",
    icon: Headset,
    heading: "Reliable Support",
    description: "Our relationship doesn't end at launch. We provide continuous maintenance, security audits, and proactive feature enhancements to keep you ahead of the curve.",
    benefits: [
      "Proactive monitoring",
      "Priority updates",
      "Ongoing optimization"
    ]
  }
];

// SVG Math Helpers
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const createPieSlice = (cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number) => {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, startAngle);
  const endInner = polarToCartesian(cx, cy, rInner, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", rOuter, rOuter, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", startInner.x, startInner.y,
    "A", rInner, rInner, 0, largeArcFlag, 1, endInner.x, endInner.y,
    "Z"
  ].join(" ");
};

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = sections[activeIndex];

  // SVG Config
  const size = 440;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 200;
  const rInner = 68;
  const gapAngle = 2; // total gap is 2 degrees
  const sliceAngle = 360 / sections.length;

  // GSAP animation for scroll pinning and discrete state updates
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => "+=" + (window.innerHeight * 6),
      pin: true,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Map scroll progress strictly to 6 discrete chunks
        // 0% -> 0, 16.66% -> 1, 33.33% -> 2, 50% -> 3, 66.66% -> 4, 83.33% -> 5
        const newIndex = Math.min(5, Math.floor(self.progress * 6));
        if (newIndex !== activeIndexRef.current) {
          activeIndexRef.current = newIndex;
          setActiveIndex(newIndex);
        }
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, { scope: containerRef, dependencies: [] });

  return (
    <section id="why-us" className="relative w-full bg-[#F8F9FA]">
      <div ref={containerRef} className="w-full h-screen overflow-hidden flex items-center justify-center relative bg-[#F8F9FA] z-20">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[var(--color-accent)]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-[40%] right-[5%] w-[800px] h-[800px] bg-[var(--color-accent)]/10 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[180px] md:text-[250px] xl:text-[300px] leading-none text-black/[0.04] tracking-tighter pointer-events-none whitespace-nowrap z-0 select-none">
          WHY US
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center">
          
          {/* HEADER TEXT (Top Left) */}
          <div className="w-full xl:w-[45%] flex flex-col items-center xl:items-start text-center xl:text-left z-20 shrink-0 mb-8 xl:mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="text-4xl md:text-[52px] leading-[1.1] tracking-tight font-medium mb-5 text-[#1A1A1A]"
            >
              More than just<br/>a digital agency.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="text-base text-[#666666] max-w-[28rem] leading-relaxed"
            >
              We build websites that combine strategy, design, and performance.
            </motion.p>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 items-center justify-between w-full">
            
            {/* LEFT COLUMN: Radial Navigation */}
            <div className="w-full xl:w-[45%] flex justify-center xl:justify-start z-20 shrink-0">
              {/* Radial Navigation (SVG) */}
              <div className="relative w-full max-w-[320px] xl:max-w-[440px] aspect-square flex items-center justify-center">
              <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible drop-shadow-sm">
                
                {/* Rotating Wheel Group */}
                <motion.g 
                  animate={{ rotate: activeIndex * sliceAngle }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                >
                  {sections.map((section, i) => {
                    const midAngle = -i * sliceAngle;
                    // Subtract half gap to leave 2 degrees between slices
                    const startAngle = midAngle - (sliceAngle / 2) + (gapAngle / 2);
                    const endAngle = midAngle + (sliceAngle / 2) - (gapAngle / 2);
                    
                    const pathData = createPieSlice(cx, cy, rInner, rOuter, startAngle, endAngle);
                    
                    // Calculate position for text/icon
                    const textRadius = rInner + (rOuter - rInner) / 2;
                    const centerPos = polarToCartesian(cx, cy, textRadius, midAngle);
                    
                    const isActive = activeIndex === i;

                    // Active slice pushes outwards slightly
                    const pushOutDist = isActive ? 12 : 0;
                    const pushOutPos = polarToCartesian(0, 0, pushOutDist, midAngle); 

                    return (
                      <motion.g 
                        key={i}
                        animate={{ 
                          x: pushOutPos.x, 
                          y: pushOutPos.y,
                          opacity: isActive ? 1 : 0.4
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      >
                        {/* The slice background */}
                        <path 
                          d={pathData} 
                          className={`transition-colors duration-500 ${isActive ? 'fill-[#F4F0FF] stroke-[var(--color-accent)] stroke-[2px]' : 'fill-[#FFFFFF] stroke-[#E8E8E8] stroke-[1px]'}`}
                        />
                        
                        {/* The content inside the slice, counter-rotated to stay upright */}
                        <motion.g 
                          animate={{ rotate: -activeIndex * sliceAngle }}
                          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                          style={{ transformOrigin: `${centerPos.x}px ${centerPos.y}px` }}
                        >
                          <foreignObject 
                            x={centerPos.x - 60} 
                            y={centerPos.y - 60} 
                            width="120" 
                            height="120" 
                            className="pointer-events-none"
                          >
                            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-[10px] font-bold tracking-widest transition-colors duration-500 ${isActive ? 'text-[var(--color-accent)]' : 'text-[#A0A0A0]'}`}>
                                  0{i + 1}
                                </span>
                                <motion.div animate={{ scale: isActive ? 1.15 : 1 }} transition={{ duration: 0.45 }}>
                                  <section.icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-[var(--color-accent)]' : 'text-[#1A1A1A]'}`} strokeWidth={1.5} />
                                </motion.div>
                              </div>
                              <span className={`text-xs font-semibold uppercase tracking-wider whitespace-pre-line leading-tight transition-colors duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#666666]'}`}>
                                {section.title}
                              </span>
                            </div>
                          </foreignObject>
                        </motion.g>

                      </motion.g>
                    );
                  })}
                </motion.g>
                
                {/* Static Center Circle & Logo */}
                <circle cx={cx} cy={cy} r={rInner - 4} fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="1" className="shadow-sm relative z-10" />
                <foreignObject x={cx - 30} y={cy - 30} width="60" height="60" className="pointer-events-none z-20 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/logo.png" alt="PIXIE WEBS" className="w-10 h-auto object-contain" />
                  </div>
                </foreignObject>
              </svg>
            </div>

          </div>

          {/* RIGHT COLUMN: Content Card */}
          <div className="w-full xl:w-[55%] flex items-center justify-center z-20 xl:min-h-[480px] relative shrink-0">
            
            {/* Subtle Glow behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-accent)]/15 blur-[100px] rounded-[40px] pointer-events-none z-0" />

            <div className="relative w-full max-w-[450px] xl:max-w-[600px] bg-white rounded-[16px] xl:rounded-[28px] p-4 md:p-8 xl:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E8E8E8] z-10 flex flex-col h-[380px] xl:h-[420px] justify-between overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 xl:gap-5 mb-3 xl:mb-6">
                    <div className="w-8 h-8 xl:w-14 xl:h-14 rounded-md xl:rounded-2xl bg-[#F4F0FF] flex items-center justify-center shrink-0">
                      <activeSection.icon className="w-3.5 h-3.5 xl:w-6 xl:h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[18px] md:text-3xl xl:text-[34px] font-medium tracking-tight text-[#1A1A1A] leading-tight">
                        {activeSection.heading}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[12px] md:text-[14px] xl:text-base text-[#666666] leading-snug xl:leading-relaxed mb-3 xl:mb-6 line-clamp-3">
                    {activeSection.description}
                  </p>

                  <div className="w-full h-px bg-[#E8E8E8] mb-3 xl:mb-6" />

                  {/* Benefits List */}
                  <div className="flex flex-col gap-1.5 xl:gap-4 flex-grow">
                    {activeSection.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        <span className="text-[#1A1A1A] font-medium text-[12px] md:text-[13px] xl:text-[15px]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between border-t border-[#E8E8E8] pt-3 xl:pt-6 mt-auto">
                <span className="text-[10px] md:text-[12px] xl:text-sm font-bold tracking-widest text-[#111111] uppercase">
                  {activeSection.title.replace('\n', ' ')}
                </span>
                <span className="text-[10px] md:text-[12px] xl:text-sm font-bold tracking-widest text-[#111111]">
                  0{activeIndex + 1} <span className="text-[#A0A0A0] mx-1">/</span> 0{sections.length}
                </span>
              </div>

            </div>

          </div>

          </div>

        </div>
      </div>
    </section>
  );
}
