"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "WHY US", href: "#why-us" },
  { title: "SERVICES", href: "#services" },
  { title: "PROCESS", href: "#process" },
  { title: "TESTIMONIALS", href: "#testimonials" },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[105] bg-black/20 backdrop-blur-sm"
          />

          {/* Sliding Side Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[320px] md:w-[400px] z-[110] bg-white shadow-2xl flex flex-col p-8 md:p-12 border-l border-[#E8E8E8]"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-16">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-[#F4F0FF] hover:bg-[var(--color-foreground)] hover:text-white transition-colors duration-300 group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-500 text-[#1A1A1A] group-hover:text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-start gap-6">
              {navLinks.map((link, i) => (
                <div key={link.title} className="overflow-hidden">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 0.1 + (0.05 * i),
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-3xl md:text-4xl font-medium tracking-tighter text-[var(--color-foreground)] hover:text-[var(--color-accent)] premium-transition inline-block"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            
            {/* Footer details in menu */}
            <div className="mt-auto flex flex-col gap-4 text-sm text-[#666666]">
              <div className="h-[1px] w-full bg-[#E8E8E8] mb-4" />
              <a href="mailto:hello@pixiewebs.com" className="hover:text-[var(--color-accent)] premium-transition">hello@pixiewebs.com</a>
              <div className="flex gap-6 mt-2">
                <a href="#" className="hover:text-[var(--color-foreground)] transition-colors uppercase tracking-widest text-xs font-bold">Instagram</a>
                <a href="#" className="hover:text-[var(--color-foreground)] transition-colors uppercase tracking-widest text-xs font-bold">Twitter</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
