"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, Rocket, ArrowDown } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  
  const midX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const midY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  
  const frontX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const frontY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4"
  ];

  return (
    <section 
      className="relative min-h-[100vh] w-full pt-32 pb-8 overflow-hidden flex flex-col justify-between bg-[#F8F9FA]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Faint Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Oversized Background Text */}
        <motion.div 
          style={{ x: bgX, y: bgY }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0"
        >
          <span className="text-[25vw] font-bold text-[#E5E5E5] tracking-tighter leading-none select-none opacity-50 block whitespace-nowrap">
            PIXIE
          </span>
        </motion.div>

        {/* Purple Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9D71FD]/20 blur-[150px] rounded-full z-0" />
        <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-[#9D71FD]/20 blur-[150px] rounded-full z-0" />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-12 relative flex flex-col lg:flex-row items-center z-10">
        
        {/* LEFT COMPOSITION: Content */}
        <div className="w-full min-w-0 max-w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-40 mt-10 lg:mt-0">
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="text-[12vw] sm:text-[10vw] lg:text-[7rem] leading-[0.95] tracking-tighter uppercase font-medium text-[#1A1A1A] mb-6 md:mb-8 w-full break-words"
          >
            CRAFTING<br className="lg:hidden" /> DIGITAL<br />EXPERIENCES
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
            className="text-[15px] sm:text-lg md:text-xl text-[#666666] w-full max-w-full lg:max-w-[28rem] leading-relaxed mb-8 md:mb-12 break-words"
          >
            We build premium websites that combine creativity, performance, and strategy to help brands grow and stand out.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mb-10 w-full lg:w-auto"
          >
            <Link href="#contact" className="w-full sm:w-auto flex items-center justify-center group relative overflow-hidden bg-[#111111] text-white px-8 py-4 rounded-full text-[15px] md:text-sm font-medium hover-scale premium-transition gap-3 shadow-lg shrink-0">
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 premium-transition" />
            </Link>
            <Link href="#testimonials" className="w-full sm:w-auto flex items-center justify-center group bg-transparent text-[#111111] border border-[#E5E5E5] px-8 py-4 rounded-full text-[15px] md:text-sm font-medium hover:border-[#111111] premium-transition gap-3 shrink-0">
              <span>View Our Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 premium-transition" />
            </Link>
          </motion.div>

        </div>

        {/* RIGHT COMPOSITION: Visuals & Cards */}
        <div className="hidden lg:flex w-full lg:w-[55%] h-[50vh] lg:h-[65vh] relative z-20 mt-10 lg:mt-0 items-center justify-center pointer-events-none lg:pointer-events-auto">
          
          {/* Abstract Purple 3D Ring Placeholder (Using CSS gradients for demo, ideally an image) */}
          <motion.div
            style={{ x: bgX, y: bgY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square z-10"
          >
             <div className="w-full h-full rounded-full border-[60px] md:border-[100px] border-[#9D71FD]/20 mix-blend-multiply blur-[10px]" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }} />
          </motion.div>

          {/* MacBook Mockup */}
          <motion.div
            style={{ x: midX, y: midY }}
            className="absolute w-full md:w-[120%] right-[-5%] md:right-[-10%] top-1/2 -translate-y-1/2 z-20 flex justify-center items-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
              className="w-full flex justify-center"
            >
            <motion.div 
              animate={{ y: ["-10px", "10px"] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="relative w-[90%] md:w-full drop-shadow-2xl flex justify-center"
            >
              <img src="/mac.png" alt="MacBook Mockup" className="w-full h-auto object-contain pointer-events-auto" />
            </motion.div>
            </motion.div>
          </motion.div>



        </div>
      </div>



    </section>
  );
}
