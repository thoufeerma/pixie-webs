"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import FullscreenMenu from "./FullscreenMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const heroThreshold = typeof window !== "undefined" ? window.innerHeight * 0.5 : 300;
      setIsPastHero(latest > heroThreshold);
    });
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 w-full z-[100] flex items-center justify-between px-6 lg:px-12 py-3 lg:py-4 bg-transparent pointer-events-none"
      >
        <motion.div 
          animate={{ opacity: isPastHero ? 0 : 1, y: isPastHero ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className={`z-10 flex items-center ${isPastHero ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <Link href="/">
            <img src="/logo.png" alt="PIXIE WEBS" className="h-10 md:h-14 lg:h-16 w-auto object-contain" />
          </Link>
        </motion.div>

        {/* Navigation Links moved to Side Menu */}


        <div className="flex items-center justify-end gap-3 z-10 pointer-events-auto">
          <Link href="#contact" className="hidden md:block px-5 py-2.5 rounded-full bg-[var(--color-foreground)] text-white text-sm font-medium hover-scale premium-transition whitespace-nowrap">
            Start a Project
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#E5E5E5]/50 hover:bg-[var(--color-foreground)] hover:text-white text-sm font-medium premium-transition flex gap-2.5 items-center justify-center group"
          >
            Menu
            <Menu className="w-4 h-4 group-hover:scale-110 premium-transition" />
          </button>
        </div>
      </motion.header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
