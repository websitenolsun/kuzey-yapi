import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
const Hero = () => {
  const [showKitchen, setShowKitchen] = useState(false);

  // Mobile: alternate between images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowKitchen(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex">
      {/* Fullscreen with Fade Animation - Both Desktop and Mobile */}
      <div className="flex w-full relative min-h-screen">
        {/* Base Image - Industrial (always visible) */}
        <div className="absolute inset-0">
          <img src={heroIndustrial} alt="Endüstriyel Mekanik Tesisat" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/75 via-slate-dark/60 to-slate-dark/80" />
        </div>

        {/* Overlay Image - Kitchen (fades in/out) */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${showKitchen ? "opacity-100" : "opacity-0"}`}>
          <img src={heroKitchen} alt="Modern Mutfak Tasarımı" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/75 via-slate-dark/60 to-slate-dark/80" />
        </div>
      </div>

      {/* Left-Aligned Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-6 lg:px-12 animate-slide-up">
          <div className="max-w-5xl">
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-wide leading-relaxed xl:text-7xl" style={{
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.4), 0 4px 40px rgba(0, 0, 0, 0.3)'
          }}>Yapıların Geleceğini Tasarlıyoruz</h1>
            {/* Architectural accent line */}
            <div className="mt-6 h-1 w-24 sm:w-32 md:w-40 bg-accent rounded-full" />
          </div>
        </div>
      </div>

      {/* Image indicators for mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!showKitchen ? 'bg-accent w-6' : 'bg-primary-foreground/40'}`} />
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${showKitchen ? 'bg-accent w-6' : 'bg-primary-foreground/40'}`} />
      </div>

      {/* WhatsApp Button */}
      
    </section>;
};
export default Hero;