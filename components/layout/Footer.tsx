import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-foreground)] text-white pt-32 pb-12 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[80px] mt-20 z-50 overflow-hidden">
      
      {/* Massive Background Typography */}
      <div className="absolute bottom-[15%] md:bottom-[20%] right-0 pointer-events-none select-none z-0 flex justify-end w-full overflow-hidden">
        <span className="font-black text-[22vw] md:text-[15vw] leading-[0.8] text-white/[0.05] tracking-tighter whitespace-nowrap pr-4 md:pr-8">
          PIXIE WEBS
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh] relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          <div className="md:col-span-6 flex flex-col justify-between">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">
              Let&apos;s create <br/>something extraordinary.
            </h2>
            <a href="mailto:hello@pixiewebs.com" className="text-xl md:text-2xl hover:text-[var(--color-accent)] premium-transition inline-block w-fit group flex items-center gap-2">
              hello@pixiewebs.com
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 premium-transition" />
            </a>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm tracking-widest uppercase text-white/50 font-medium">Navigation</h3>
              <nav className="flex flex-col gap-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Why Us", href: "#why-us" },
                  { name: "Services", href: "#services" },
                  { name: "Process", href: "#process" },
                  { name: "Testimonials", href: "#testimonials" },
                ].map((item) => (
                  <Link key={item.name} href={item.href} className="text-lg hover:text-[var(--color-accent)] hover:translate-x-2 premium-transition w-fit">
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-sm tracking-widest uppercase text-white/50 font-medium">Socials</h3>
              <nav className="flex flex-col gap-4">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/pixiewebs/" },
                  { name: "Twitter", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map((item) => (
                  <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[var(--color-accent)] hover:translate-x-2 premium-transition w-fit flex items-center gap-1 group">
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 premium-transition" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 md:mt-0">
          <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} PIXIE WEBS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white premium-transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-white premium-transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
