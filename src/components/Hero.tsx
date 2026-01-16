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
      {/* Desktop: Split Screen Layout */}
      <div className="hidden md:flex w-full">
        {/* Left Image - Industrial */}
        <div className="w-1/2 relative overflow-hidden group">
          <img src={heroIndustrial} alt="Endüstriyel Mekanik Tesisat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/85 via-slate-dark/70 to-slate-dark/50" />
          
          {/* Left CTA */}
          <div className="absolute bottom-12 left-8 right-8 z-20">
            
          </div>
        </div>

        {/* Right Image - Kitchen */}
        <div className="w-1/2 relative overflow-hidden group">
          <img src={heroKitchen} alt="Modern Mutfak Tasarımı" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-dark/85 via-slate-dark/70 to-slate-dark/50" />
          
          {/* Right CTA */}
          <div className="absolute bottom-12 left-8 right-8 z-20 text-right">
            
          </div>
        </div>
      </div>

      {/* Mobile: Fullscreen with Fade Animation */}
      <div className="flex md:hidden w-full relative min-h-screen">
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

      {/* Center Content Overlay - Glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4 animate-slide-up pointer-events-auto">
          
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