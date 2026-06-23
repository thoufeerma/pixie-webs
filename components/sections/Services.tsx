"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Code2, PenTool, ShoppingBag, Search, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    id: "01",
    title: "Website Design",
    subtitle: "Modern, responsive websites built for performance and conversions.",
    description: "Design modern, responsive websites with a strong focus on user experience, branding, and conversion.",
    bullets: ["Responsive Layouts", "SEO Friendly", "Fast Performance"],
    icon: Monitor,
  },
  {
    id: "02",
    title: "Web Development",
    subtitle: "Fast, scalable, and maintainable web applications.",
    description: "Fast, scalable, and maintainable websites built using modern technologies and clean architecture.",
    bullets: ["Scalable Architecture", "API Integration", "Secure Code"],
    icon: Code2,
  },
  {
    id: "03",
    title: "UI/UX Design",
    subtitle: "Beautiful user experiences focused on usability.",
    description: "Craft intuitive user interfaces that combine aesthetics with usability to create memorable digital experiences.",
    bullets: ["User Research", "Wireframing", "Interactive Prototypes"],
    icon: PenTool,
  },
  {
    id: "04",
    title: "E-Commerce",
    subtitle: "Powerful online stores that drive sales.",
    description: "Build secure online stores with seamless shopping experiences, optimized checkout, and easy product management.",
    bullets: ["Secure Checkout", "Inventory Management", "Payment Gateways"],
    icon: ShoppingBag,
  },
  {
    id: "05",
    title: "SEO Optimization",
    subtitle: "Improve visibility and search rankings.",
    description: "Improve visibility with technical SEO, optimized performance, and search-friendly website architecture.",
    bullets: ["Technical SEO", "Keyword Strategy", "Performance Tuning"],
    icon: Search,
  },
  {
    id: "06",
    title: "Maintenance & Support",
    subtitle: "Reliable updates and ongoing technical support.",
    description: "Ongoing updates, monitoring, backups, and technical support to keep your website secure and performing at its best.",
    bullets: ["24/7 Monitoring", "Security Updates", "Priority Support"],
    icon: ShieldCheck,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="relative py-20 w-full bg-[#FAFAF8] overflow-hidden min-h-[850px] xl:min-h-screen flex items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[10%] w-[800px] h-[800px] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <h2 className="text-xs font-bold tracking-widest uppercase text-[var(--color-muted)]">
              OUR CAPABILITIES
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
            Services.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="text-[#666666] text-[15px] md:text-[16px] max-w-[32rem] leading-relaxed"
          >
            We design and develop premium digital experiences tailored to business growth.
          </motion.p>
        </div>

        {/* Interactive Showcase Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Interactive List */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            {capabilities.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth < 1024) {
                      setActiveIndex(activeIndex === i ? null : i);
                    } else {
                      setActiveIndex(i);
                    }
                  }}
                  onMouseEnter={() => {
                    // Only trigger hover state changes on desktop
                    if (window.innerWidth >= 1024) {
                      setActiveIndex(i);
                    }
                  }}
                  className={`group relative flex flex-col py-4 border-b border-[#E8E8E8] cursor-pointer transition-colors duration-300 ${isActive ? 'border-[var(--color-accent)]' : 'hover:border-[#1A1A1A]'}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <span className={`text-sm font-bold tracking-widest transition-colors duration-300 mt-1 ${isActive ? 'text-[var(--color-accent)]' : 'text-[#A0A0A0] group-hover:text-[#1A1A1A]'}`}>
                        {item.id}
                      </span>
                      <div className="flex flex-col">
                        <h4 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-[var(--color-accent)]' : 'text-[#1A1A1A] group-hover:text-[#1A1A1A]'}`}>
                          {item.title}
                        </h4>
                        <p className={`text-[13px] md:text-sm mt-1 max-w-[280px] line-clamp-2 transition-colors duration-300 ${isActive ? 'text-[#666666]' : 'text-[#A0A0A0] group-hover:text-[#666666]'}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-[var(--color-accent)] text-white scale-100' : 'bg-[#F8F9FA] text-[#1A1A1A] scale-100 lg:scale-0 lg:group-hover:scale-100'}`}>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 lg:rotate-0' : 'rotate-0'}`} />
                    </div>
                  </div>

                  {/* Mobile Expanded Card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="mt-5 bg-white rounded-2xl p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#E8E8E8] relative overflow-hidden">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-accent)]/5 blur-[40px] rounded-full pointer-events-none z-0" />
                          <div className="relative z-10 flex flex-col items-start">
                            <div className="w-12 h-12 rounded-xl bg-[#F4F0FF] flex items-center justify-center mb-4">
                              <item.icon className="w-5 h-5 text-[var(--color-accent)]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-[20px] font-medium tracking-tight text-[#1A1A1A] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[#666666] text-[14px] leading-relaxed mb-4 line-clamp-3">
                              {item.description}
                            </p>
                            <div className="flex flex-col gap-2 w-full">
                              {item.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                  <span className="text-[#1A1A1A] text-[13px] font-medium">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Detail Card (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center h-[400px]">
            <div className="relative w-full h-full max-w-[600px] bg-white rounded-[28px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E8E8E8] overflow-hidden flex flex-col justify-center">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-accent)]/15 blur-[80px] rounded-full pointer-events-none z-0" />

              <AnimatePresence mode="wait">
                {activeIndex !== null && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-start"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-[#F4F0FF] flex items-center justify-center mb-8 shadow-sm">
                      {(() => {
                        const Icon = capabilities[activeIndex].icon;
                        return <Icon className="w-10 h-10 text-[var(--color-accent)]" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <h3 className="text-3xl md:text-[40px] font-medium tracking-tight text-[#1A1A1A] mb-4">
                      {capabilities[activeIndex].title}
                    </h3>
                    <p className="text-[#666666] text-lg leading-relaxed">
                      {capabilities[activeIndex].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
