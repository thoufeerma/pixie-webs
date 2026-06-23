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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[110] bg-[var(--color-background)] flex flex-col justify-center items-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-4 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-white transition-colors duration-300 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-6 md:gap-10">
            {navLinks.map((link, i) => (
              <div key={link.title} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.1 * i,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-[12vw] sm:text-6xl md:text-8xl font-medium tracking-tighter text-[var(--color-foreground)] hover:text-[var(--color-accent)] premium-transition inline-block"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
