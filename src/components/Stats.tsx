import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Building2, CheckCircle, Settings } from "lucide-react";

interface StatData {
  icon: React.ElementType;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatData[] = [
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
    decimals: 1,
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

const AnimatedNumber = ({ 
  value, 
  decimals = 0, 
  duration = 2500, 
  isVisible 
}: { 
  value: number; 
  decimals?: number; 
  duration?: number; 
  isVisible: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easing: easeOutExpo for natural deceleration
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    const current = eased * value;
    setDisplayValue(current);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [value, duration]);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animate]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toString();

  return <>{formattedValue}</>;
};

const StatItem = ({ stat, index, isVisible }: { stat: StatData; index: number; isVisible: boolean }) => {
  const Icon = stat.icon;

  return (
    <div
      className="text-center group"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4 group-hover:border-accent/60 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <div className="flex items-baseline justify-center">
        <span className="text-4xl md:text-5xl font-bold text-accent tabular-nums">
          {stat.prefix}
          <AnimatedNumber 
            value={stat.numericValue} 
            decimals={stat.decimals} 
            isVisible={isVisible}
            duration={2500}
          />
          {stat.suffix}
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
      { threshold: 0.2 }
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
