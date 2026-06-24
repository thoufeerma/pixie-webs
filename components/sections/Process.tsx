"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Map, Palette, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProcessVisualCanvas from "./ProcessVisualCanvas";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stages = [
  {
    id: "01",
    title: "Discovery",
    icon: Compass,
    description: "We dive deep into your business, identifying your core audience, technical constraints, and long-term objectives before writing a single line of code.",
    bullets: [
      "Stakeholder interviews",
      "Competitive analysis",
      "Project roadmapping"
    ]
  },
  {
    id: "02",
    title: "Strategy",
    icon: Map,
    description: "Every pixel needs a purpose. We map out the user journey, define the technical architecture, and structure content to ensure maximum conversion rates.",
    bullets: [
      "User flow mapping",
      "Information architecture",
      "Technical scoping"
    ]
  },
  {
    id: "03",
    title: "Design & Development",
    icon: Palette,
    description: "We blend Awwwards-winning aesthetics with cutting-edge engineering. Our modular codebases and premium interfaces create unforgettable digital experiences.",
    bullets: [
      "High-fidelity prototyping",
      "Modular component libraries",
      "Performant modern stacks"
    ]
  },
  {
    id: "04",
    title: "Launch & Growth",
    icon: Rocket,
    description: "We don't just hand over the keys. We ensure a flawless deployment, set up advanced analytics, and provide ongoing optimization to scale your platform.",
    bullets: [
      "Zero-downtime deployment",
      "Advanced edge caching",
      "Continuous optimization"
    ]
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const time = self.progress * 12.0;
          let newIndex = 0;
          if (time >= 9.5) newIndex = 3;
          else if (time >= 6.0) newIndex = 2;
          else if (time >= 2.5) newIndex = 1;
          
          if (newIndex !== activeIndexRef.current) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        }
      }
    });

    // Cinematic Parallax Setup
    // Cards start off-screen below, scaled down slightly
    gsap.set(".process-card", { yPercent: 100, scale: 0.97, opacity: 0 });
    gsap.set(".process-card .card-content-item", { y: 30, opacity: 0 });
    
    // Card 0 starts visible
    gsap.set(".process-card-0", { yPercent: 0, scale: 1, opacity: 1 });
    gsap.set(".process-card-0 .card-content-item", { y: 0, opacity: 1 });

    const transDur = 2.0; // Longer transition duration for fluidity
    const holdDur = 1.5;

    // A helper function to build the overlapping transition between two cards
    const createTransition = (outIndex: number, inIndex: number, startTime: number) => {
      // Outgoing card slowly moves up and fades slightly
      tl.to(`.process-card-${outIndex}`, { yPercent: -35, scale: 0.97, opacity: 0.3, ease: "power2.inOut", duration: transDur }, startTime);
      tl.to(`.process-card-${outIndex} .card-content-item`, { y: -20, opacity: 0, ease: "power2.inOut", duration: transDur * 0.8, stagger: 0.05 }, startTime);
      
      // Incoming card rises from below and covers it
      tl.to(`.process-card-${inIndex}`, { yPercent: 0, scale: 1, opacity: 1, ease: "power2.inOut", duration: transDur }, startTime);
      tl.to(`.process-card-${inIndex} .card-content-item`, { y: 0, opacity: 1, ease: "power2.out", duration: transDur * 0.8, stagger: 0.1 }, startTime + (transDur * 0.2));
    };

    // Timeline execution
    let t = holdDur; // 1.5
    createTransition(0, 1, t);
    
    t += transDur + holdDur; // 1.5 + 2.0 + 1.5 = 5.0
    createTransition(1, 2, t);
    
    t += transDur + holdDur; // 5.0 + 2.0 + 1.5 = 8.5
    createTransition(2, 3, t);

    // End pause
    t += transDur + holdDur; // 12.0
    tl.to({}, { duration: holdDur }, t);

    // Ensure GSAP recalculates trigger positions exactly once after all layout-shifting assets load
    let refreshed = false;
    const triggerRefresh = () => {
      if (!refreshed) {
        ScrollTrigger.refresh();
        refreshed = true;
      }
    };

    // 1. Wait for custom fonts to load
    if (document.fonts) {
      document.fonts.ready.then(triggerRefresh);
    }

    // 2. Wait for images (like the ones in sections above) to load
    const images = Array.from(document.images);
    let loadedCount = 0;
    const checkImages = () => {
      loadedCount++;
      if (loadedCount >= images.length) triggerRefresh();
    };

    if (images.length === 0) {
      triggerRefresh();
    } else {
      images.forEach(img => {
        if (img.complete) {
          checkImages();
        } else {
          img.addEventListener('load', checkImages, { once: true });
          img.addEventListener('error', checkImages, { once: true });
        }
      });
    }

    // 3. Fallback to full window load
    if (document.readyState === 'complete') {
      triggerRefresh();
    } else {
      window.addEventListener('load', triggerRefresh, { once: true });
    }

  }, { scope: containerRef, dependencies: [] });

  return (
    <section id="process" ref={containerRef} className="relative w-full h-screen bg-[#F8F9FA] overflow-hidden">
      
      <div className="w-full h-full relative flex flex-col md:flex-row bg-[#F8F9FA] z-20">
        
        {/* Background Typography */}
        <div className="absolute top-[40%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[120px] sm:text-[200px] md:text-[300px] lg:text-[450px] leading-none text-black/[0.03] tracking-tighter pointer-events-none whitespace-nowrap z-0 select-none">
          WORKFLOW
        </div>

        {/* LEFT COLUMN: Visual Canvas / Navigation */}
        <div className="w-full h-[45%] md:h-full md:w-[40%] lg:w-[45%] flex flex-col p-6 md:p-12 xl:p-20 pb-12 md:pb-24 xl:pb-32 relative z-10 border-b md:border-b-0 md:border-r border-[#E8E8E8]/50 overflow-visible">
          
          {/* Top Content: Header & Indicator */}
          <div className="mt-2 md:mt-12 xl:mt-20 shrink-0 flex flex-col gap-6 md:gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] mb-4">
                WORKFLOW
              </h2>
              <p className="text-[#666666] text-sm md:text-base max-w-[280px] leading-relaxed">
                We transform ideas into digital experiences through a structured, proven process.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[var(--color-accent)] font-semibold tracking-widest text-lg md:text-2xl">
                0{activeIndex + 1}
              </span>
              <span className="text-[#A0A0A0] text-sm md:text-base font-normal">/</span> 
              <span className="text-[#A0A0A0] text-sm md:text-base font-normal">04</span>
            </div>
          </div>

          {/* 3D Visual Canvas (Spline Orb) */}
          <ProcessVisualCanvas activeIndex={activeIndex} />
          
        </div>

        {/* RIGHT COLUMN: Scrolling Cards */}
        <div className="w-full h-[55%] md:h-full md:w-[60%] lg:w-[55%] relative z-10 flex items-center justify-center p-4 md:p-8 xl:p-12 overflow-hidden perspective-[1000px]">
          
          {/* Subtle radial glow locked behind the active card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--color-accent)]/10 blur-[120px] rounded-full pointer-events-none z-0" />

          {stages.map((stage, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={stage.id} 
                style={{ zIndex: i + 10 }}
                className={`process-card process-card-${i} absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] md:w-[80%] xl:w-[75%] h-[85%] md:h-[75%] xl:h-[70%] rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-5 md:gap-8 group will-change-transform z-10 overflow-hidden transition-colors duration-1000 ease-out ${
                  isActive 
                    ? "bg-[rgba(255,255,255,0.75)] shadow-[0_40px_100px_-10px_rgba(0,0,0,0.08)] border-[rgba(255,255,255,0.35)]" 
                    : "bg-[rgba(255,255,255,0.65)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.03)] border-[rgba(255,255,255,0.25)]"
                } backdrop-blur-[24px] border`}
              >
                
                {/* Premium Glass Top Highlight */}
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none bg-gradient-to-b from-white/40 via-white/5 to-transparent opacity-60 mix-blend-overlay" />

                {/* Subtle purple glow inside the card */}
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-30"}`} />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[var(--color-accent)] font-bold tracking-widest text-[10px] md:text-xs mb-2 md:mb-4 uppercase card-content-item inline-block origin-left">
                    Stage {stage.id}
                  </span>
                  <h4 className="text-3xl md:text-4xl xl:text-[44px] font-medium tracking-tight text-[#1A1A1A] leading-tight card-content-item">
                    {stage.title}
                  </h4>
                </div>
                
                <div className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-2xl bg-[#F4F0FF] flex items-center justify-center shrink-0 card-content-item">
                  <stage.icon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 text-[var(--color-accent)]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#666666] text-sm sm:text-base xl:text-xl leading-relaxed md:leading-relaxed xl:leading-loose max-w-[36rem] relative z-10 card-content-item">
                {stage.description}
              </p>

              <div className="w-full h-px bg-[#E8E8E8] relative z-10 hidden sm:block card-content-item origin-left" />

              {/* Bullets */}
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 relative z-10">
                {stage.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-center gap-4 card-content-item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                    <span className="text-[#1A1A1A] font-medium text-sm md:text-base xl:text-lg">{bullet}</span>
                  </div>
                ))}
              </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
