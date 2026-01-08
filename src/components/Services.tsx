import blueprintHvac from "@/assets/blueprint-hvac.jpg";
import luxuryLiving from "@/assets/luxury-living.jpg";

const Services = () => {
  return (
    <section className="py-0">
      {/* Mechanical Installation Section */}
      <div className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blueprintHvac})` }}
        />
        <div className="absolute inset-0 bg-slate-medium/95" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Endüstriyel Ve Modern
                <br />
                Mekanik Tesisat
              </h2>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Isıtma, soğutma ve havalandırma (HVAC) sistemlerinde yenilikçi çözümler; 
                  yüksek verimlilik odaklı mühendislik yaklaşımıyla endüstriyel tesislerinize 
                  değer katıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior Design Section */}
      <div className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-slate-medium" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold leading-tight mb-6 italic">
                Yaşam Alanlarına
                <br />
                Estetik Dokunuş
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Işığın ve sadeliğin uyumuyla, hayalinizdeki atmosferi gerçeğe taşıyoruz.
              </p>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-2xl">
              <img
                src={luxuryLiving}
                alt="Lüks Yaşam Alanı"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
