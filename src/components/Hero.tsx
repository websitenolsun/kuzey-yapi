import { useState, useEffect } from "react";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const [showKitchen, setShowKitchen] = useState(false);

  // Mobile: alternate between images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowKitchen((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex">
      {/* Desktop: Split Screen Layout */}
      <div className="hidden md:flex w-full">
        {/* Left Image - Industrial */}
        <div className="w-1/2 relative overflow-hidden group">
          <img
            src={heroIndustrial}
            alt="Endüstriyel Mekanik Tesisat"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/85 via-slate-dark/70 to-slate-dark/50" />
        </div>

        {/* Right Image - Kitchen */}
        <div className="w-1/2 relative overflow-hidden group">
          <img
            src={heroKitchen}
            alt="Modern Mutfak Tasarımı"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-dark/85 via-slate-dark/70 to-slate-dark/50" />
        </div>
      </div>

      {/* Mobile: Fullscreen with Fade Animation */}
      <div className="flex md:hidden w-full relative min-h-screen">
        {/* Base Image - Industrial (always visible) */}
        <div className="absolute inset-0">
          <img
            src={heroIndustrial}
            alt="Endüstriyel Mekanik Tesisat"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/75 via-slate-dark/60 to-slate-dark/80" />
        </div>

        {/* Overlay Image - Kitchen (fades in/out) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            showKitchen ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={heroKitchen}
            alt="Modern Mutfak Tasarımı"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/75 via-slate-dark/60 to-slate-dark/80" />
        </div>
      </div>

      {/* Image indicators for mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!showKitchen ? 'bg-accent w-6' : 'bg-primary-foreground/40'}`} />
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${showKitchen ? 'bg-accent w-6' : 'bg-primary-foreground/40'}`} />
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/902122365743"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;