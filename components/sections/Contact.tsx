"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const text = `Hello PIXIE WEBS,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919048468404?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const inputClasses = "w-full bg-transparent border-b border-[var(--color-border)] py-4 px-2 text-lg focus:outline-none focus:border-[var(--color-accent)] premium-transition peer";
  const labelClasses = "absolute left-2 top-4 text-[var(--color-muted)] text-lg pointer-events-none premium-transition peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--color-accent)]";

  return (
    <section id="contact" className="relative py-32 overflow-hidden w-full">
      
      {/* Background Typography */}
      <div className="bg-typography">CONTACT</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-6xl md:text-8xl leading-[0.95] tracking-tighter font-medium mb-8"
          >
            Let's Build<br />Something<br />Great.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="text-xl text-[var(--color-muted)] max-w-md"
          >
            We're ready to bring your vision to life. Fill out the form, and we'll connect via WhatsApp instantly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-black/5 border border-[var(--color-border)]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative pt-4">
                <input
                  suppressHydrationWarning
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className={`${labelClasses} ${formData.name ? '-top-3 text-sm' : ''}`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative pt-4">
                <input
                  suppressHydrationWarning
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className={`${labelClasses} ${formData.email ? '-top-3 text-sm' : ''}`}
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative pt-4">
                <input
                  suppressHydrationWarning
                  type="text"
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  onFocus={() => setFocusedField("projectType")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                  placeholder=" "
                />
                <label 
                  htmlFor="projectType" 
                  className={`${labelClasses} ${formData.projectType ? '-top-3 text-sm' : ''}`}
                >
                  Project Type
                </label>
              </div>

              <div className="relative pt-4">
                <input
                  suppressHydrationWarning
                  type="text"
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                  placeholder=" "
                />
                <label 
                  htmlFor="budget" 
                  className={`${labelClasses} ${formData.budget ? '-top-3 text-sm' : ''}`}
                >
                  Estimated Budget
                </label>
              </div>
            </div>

            <div className="relative pt-4">
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses} resize-none`}
                placeholder=" "
              />
              <label 
                htmlFor="message" 
                className={`${labelClasses} ${formData.message ? '-top-3 text-sm' : ''}`}
              >
                Project Details
              </label>
            </div>

            <button 
              suppressHydrationWarning
              type="submit"
              className="mt-4 w-full md:w-auto bg-[var(--color-foreground)] text-white px-10 py-5 rounded-full text-lg font-medium hover-scale premium-transition flex items-center justify-center gap-3 group"
            >
              <span className="relative z-10">Send Inquiry via WhatsApp</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 premium-transition" />
            </button>
            
          </form>
        </motion.div>
      </div>
    </section>
  );
}
