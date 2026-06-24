"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "PIXIE WEBS delivered a website that perfectly reflects the energy and professionalism of our fight club. The entire process was smooth, communication was excellent, and the final result gives our members and new visitors a strong first impression. We're extremely happy with the outcome.",
    author: "ROGUENINJA FC",
    role: "Client"
  },
  {
    quote: "Our new website captures the warmth and authenticity of Kerala exactly how we envisioned it. PIXIE WEBS understood our brand from day one and transformed our ideas into a beautiful, user-friendly experience that truly represents who we are.",
    author: "Kerala Mist",
    role: "Client"
  },
  {
    quote: "Working with PIXIE WEBS was an exceptional experience. They translated our philosophy of craftsmanship and individuality into a refined digital presence that feels elegant, modern, and premium. Every detail was handled with precision and care.",
    author: "ONDEZYN",
    role: "Client"
  },
  {
    quote: "PIXIE WEBS created a professional website that reflects the scale and credibility of our logistics operations. They understood our industry, organized complex information into a clear structure, and delivered a modern platform that strengthens our digital presence and builds client confidence.",
    author: "Sri Sai Shipping Agencies",
    role: "Client"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth / 2;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-40 bg-[#F7F7F5] overflow-hidden w-full">
      
      {/* Background Typography */}
      <div className="absolute top-[10%] md:top-1/4 left-1/2 -translate-x-1/2 font-black text-[150px] md:text-[250px] lg:text-[300px] leading-none text-black/[0.04] tracking-tighter pointer-events-none whitespace-nowrap z-0 select-none">
        REVIEWS
      </div>

      {/* Subtle Radial Glow */}
      <div className="radial-glow bg-[var(--color-accent)] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bottom-[10%] left-[-10%]" />

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 relative z-10">
        <div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="text-[36px] md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
          >
            Testimonials.
          </motion.h3>
        </div>
        
        <div className="flex gap-3 md:gap-4 mt-8 md:mt-0">
          <button 
            suppressHydrationWarning
            onClick={() => scroll('left')}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[var(--color-border)] bg-white flex items-center justify-center hover:bg-[var(--color-foreground)] hover:text-white hover-lift premium-transition group"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 group-hover:-translate-x-1 premium-transition" />
          </button>
          <button 
            suppressHydrationWarning
            onClick={() => scroll('right')}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[var(--color-border)] bg-white flex items-center justify-center hover:bg-[var(--color-foreground)] hover:text-white hover-lift premium-transition group"
          >
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 premium-transition" />
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-12 md:pb-24 pt-4 md:pt-12 gap-4 md:gap-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
              className={`w-[85vw] sm:w-[90vw] md:w-[380px] shrink-0 snap-center p-6 md:p-12 bg-white rounded-2xl md:rounded-[2rem] border border-[#EAEAEA] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between ${
                i % 2 !== 0 ? 'md:-translate-y-12' : 'md:translate-y-12'
              }`}
            >
              <div className="mb-6 md:mb-10 relative">
                <span className="absolute -top-3 -left-2 md:-top-4 md:-left-3 text-5xl md:text-7xl text-[var(--color-accent)] opacity-20 font-serif leading-none">"</span>
                <p className="text-[14px] sm:text-[15px] md:text-xl leading-[1.5] md:leading-[1.6] tracking-tight font-medium relative z-10">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] font-medium text-base md:text-lg shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[13px] md:text-lg leading-tight">{testimonial.author}</p>
                  <p className="text-[var(--color-muted)] text-[10px] md:text-sm uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
