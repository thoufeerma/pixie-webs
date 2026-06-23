import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import TrustStats from "@/components/sections/TrustStats";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[var(--color-background)]">
      <Hero />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <Services />
      <TrustStats />
      <Process />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Contact />
    </main>
  );
}
