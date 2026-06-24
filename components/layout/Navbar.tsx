"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import FullscreenMenu from "./FullscreenMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Transform values based on scroll
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
  const navY = useTransform(scrollY, [0, 100], [0, 20]);
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(247, 247, 245, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 10px 30px -10px rgba(0,0,0,0.05)"]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        style={{
          backgroundColor: navBg,
          boxShadow: navShadow,
          width: navWidth,
        }}
        className="fixed top-0 left-0 right-0 mx-auto z-[100] flex items-center justify-between px-6 md:px-8 py-2 md:py-3 rounded-full border border-[var(--color-border)] backdrop-blur-xl max-w-7xl"
      >
        <Link href="/" className="z-10 flex items-center">
          <img src="/logo.png" alt="PIXIE WEBS" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Centered Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { title: "Home", href: "/" },
            { title: "Why Us", href: "#why-us" },
            { title: "Services", href: "#services" },
            { title: "Process", href: "#process" },
            { title: "Testimonials", href: "#testimonials" }
          ].map((item) => (
            <Link key={item.title} href={item.href} className="text-sm font-medium text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] premium-transition">
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4 z-10">
          <Link href="#contact" className="hidden md:block px-6 py-3 rounded-full bg-[var(--color-foreground)] text-white text-sm font-medium hover-scale premium-transition whitespace-nowrap">
            Start a Project
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-3 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-white premium-transition flex items-center justify-center group lg:hidden"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 premium-transition" />
          </button>
        </div>
      </motion.header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
