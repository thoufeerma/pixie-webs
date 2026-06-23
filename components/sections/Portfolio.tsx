"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageReveal from "@/components/animations/ImageReveal";

const projects = [
  {
    id: 1,
    title: "Sri Sai Interiors",
    category: "Architecture & Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    layout: "left",
    color: "#ffffff"
  },
  {
    id: 2,
    title: "Luxe Living",
    category: "E-Commerce Experience",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    layout: "right",
    color: "#f0f0f0"
  },
  {
    id: 3,
    title: "Pixel Commerce",
    category: "Branding & Web Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    layout: "full",
    color: "#e8e8e8"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full z-10 pt-32">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-sm font-medium tracking-widest uppercase text-[var(--color-muted)] mb-6"
        >
          Selected Work
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
        >
          Featured Projects
        </motion.h3>
      </div>

      <div className="relative w-full pb-32">
        {projects.map((project, index) => {
          // Calculate a top offset so cards stack slightly below each other, or just 0 to completely cover
          const topOffset = `calc(5vh + ${index * 20}px)`;
          
          return (
            <div
              key={project.id}
              className="sticky flex items-center justify-center w-full min-h-[90vh] mb-24 last:mb-0"
              style={{ top: topOffset }}
            >
              <div 
                className="w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-7xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)] relative flex flex-col group"
                style={{ backgroundColor: project.color }}
              >
                {/* Overlay link */}
                <a href="#" className="absolute inset-0 z-30" aria-label={`View ${project.title}`} />
                
                {/* Content based on layout */}
                {project.layout === "left" && (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-between z-20 bg-white/80 backdrop-blur-sm">
                      <div>
                        <p className="text-[var(--color-muted)] text-sm uppercase tracking-widest mb-4 font-medium">{project.category}</p>
                        <h4 className="text-4xl md:text-6xl tracking-tight font-medium">{project.title}</h4>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center group-hover:bg-[var(--color-foreground)] group-hover:text-white premium-transition mt-8">
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 premium-transition" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                      <ImageReveal className="w-full h-full">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 premium-transition"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                      </ImageReveal>
                    </div>
                  </div>
                )}

                {project.layout === "right" && (
                  <div className="flex flex-col md:flex-row-reverse h-full">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-between z-20 bg-white/80 backdrop-blur-sm">
                      <div>
                        <p className="text-[var(--color-muted)] text-sm uppercase tracking-widest mb-4 font-medium">{project.category}</p>
                        <h4 className="text-4xl md:text-6xl tracking-tight font-medium">{project.title}</h4>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center group-hover:bg-[var(--color-foreground)] group-hover:text-white premium-transition mt-8">
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 premium-transition" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                      <ImageReveal className="w-full h-full">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 premium-transition"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                      </ImageReveal>
                    </div>
                  </div>
                )}

                {project.layout === "full" && (
                  <div className="relative w-full h-full flex flex-col justify-end p-8 md:p-16">
                    <div className="absolute inset-0 z-0">
                      <ImageReveal className="w-full h-full">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 premium-transition"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                      </ImageReveal>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 premium-transition" />
                    </div>
                    
                    <div className="relative z-20 flex justify-between items-end w-full">
                      <div className="text-white">
                        <p className="text-white/80 text-sm uppercase tracking-widest mb-4 font-medium">{project.category}</p>
                        <h4 className="text-4xl md:text-6xl tracking-tight font-medium">{project.title}</h4>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-foreground)] text-white premium-transition">
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 premium-transition" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
