import { Clock, Building2, CheckCircle, Settings } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Yıllık Sektörel Deneyim",
  },
  {
    icon: Building2,
    value: "1.2",
    suffix: "Milyon m²",
    label: "Mekanik Uygulama",
  },
  {
    icon: CheckCircle,
    value: "450+",
    label: "Başarıyla Teslim Edilen Proje",
  },
  {
    icon: Settings,
    value: "100%",
    label: "Mühendislik Hassasiyeti",
  },
];

const Stats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-slate-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
      
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-accent opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-accent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4 group-hover:border-accent/60 transition-colors">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-accent">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-lg text-primary-foreground/80">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm md:text-base text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
