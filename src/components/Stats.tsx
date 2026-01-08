import { useState, useEffect, useRef } from "react";
import { Clock, Building2, CheckCircle, Settings } from "lucide-react";

const stats = [
  {
    icon: Clock,
    numericValue: 15,
    suffix: "+",
    label: "Yıllık Sektörel Deneyim",
  },
  {
    icon: Building2,
    numericValue: 1.2,
    suffix: " Milyon m²",
    label: "Mekanik Uygulama",
    isDecimal: true,
  },
  {
    icon: CheckCircle,
    numericValue: 450,
    suffix: "+",
    label: "Başarıyla Teslim Edilen Proje",
  },
  {
    icon: Settings,
    numericValue: 100,
    suffix: "%",
    label: "Mühendislik Hassasiyeti",
  },
];

const useCountUp = (end: number, duration: number = 4000, isDecimal: boolean = false, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * end;
      
      setCount(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isDecimal, shouldStart]);

  return count;
};

const StatItem = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.numericValue, 4000, stat.isDecimal, isVisible);

  return (
    <div
      className="text-center group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4 group-hover:border-accent/60 transition-colors">
        <stat.icon className="w-7 h-7 text-accent" />
      </div>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl md:text-5xl font-bold text-accent">
          {stat.isDecimal ? count.toFixed(1) : count}{stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm md:text-base text-primary-foreground/70">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-slate-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
      
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-accent opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-accent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
