import { useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Home, Hotel, Store, Landmark, Phone, MessageCircle } from "lucide-react";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import Footer from "@/components/Footer";
import serviceConcept from "@/assets/service-concept.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

const Referanslar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectCategories = [
    {
      icon: Factory,
      title: "Endüstriyel Tesisler",
      count: "50+",
      description: "Fabrika, üretim tesisi ve endüstriyel yapılarda mekanik tesisat projeleri"
    },
    {
      icon: Building2,
      title: "Ticari Projeler",
      count: "120+",
      description: "İş merkezi, plaza ve ofis binalarında HVAC ve elektrik sistemleri"
    },
    {
      icon: Hotel,
      title: "Otel & Konaklama",
      count: "30+",
      description: "Otel, rezidans ve butik konaklama tesislerinde komple tesisat çözümleri"
    },
    {
      icon: Home,
      title: "Konut Projeleri",
      count: "200+",
      description: "Villa, daire ve site projelerinde iç mimari ve tesisat uygulamaları"
    },
    {
      icon: Store,
      title: "Perakende & AVM",
      count: "45+",
      description: "Mağaza, AVM ve showroom alanlarında özel tasarım çözümleri"
    },
    {
      icon: Landmark,
      title: "Kamu Projeleri",
      count: "25+",
      description: "Okul, hastane ve resmi binalarda standartlara uygun tesisat projeleri"
    }
  ];

  const featuredProjects = [
    {
      image: serviceConcept,
      title: "İstanbul Business Center",
      category: "Ticari Proje",
      description: "40 katlı iş merkezinde komple HVAC ve yangın tesisatı uygulaması",
      services: ["Merkezi Klima", "Yangın Tesisatı", "Havalandırma"]
    },
    {
      image: serviceConstruction,
      title: "Marmara Sanayi Tesisi",
      category: "Endüstriyel",
      description: "25.000 m² üretim alanında endüstriyel havalandırma ve soğutma sistemleri",
      services: ["Endüstriyel Soğutma", "Duman Tahliye", "Isıtma Sistemleri"]
    },
    {
      image: serviceRenovation,
      title: "Beşiktaş Residence",
      category: "Konut",
      description: "Lüks rezidans projesinde iç mimari tasarım ve mekanik tesisat",
      services: ["İç Mimari", "VRF Sistemleri", "Akıllı Ev"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Referanslar"
        description="Kuzey Yapı'nın tamamladığı 470+ başarılı proje. Endüstriyel tesisler, ticari binalar, oteller ve konut projelerinde mekanik tesisat ve iç mimari referanslarımız."
        canonical="/referanslar"
        jsonLd={organizationSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 text-accent font-display text-sm uppercase tracking-widest mb-6">
              Referanslar
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              15 Yılda
              <br />
              <span className="text-accent">470+ Başarılı Proje</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 font-serif leading-relaxed">
              Endüstriyel tesislerden prestijli konut projelerine, 
              her ölçekte güvenilir mühendislik çözümleri sunduk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "470+", label: "Tamamlanan Proje" },
              { value: "15+", label: "Yıllık Deneyim" },
              { value: "50+", label: "Kurumsal Müşteri" },
              { value: "1M+", label: "m² Uygulama Alanı" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-2">
                  {stat.value}
                </p>
                <p className="font-serif text-accent-foreground/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Proje Kategorileri
            </h2>
            <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
              Farklı sektörlerde edindiğimiz deneyim ve uzmanlık alanlarımız
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-sm p-8 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-sm group-hover:bg-accent/20 transition-colors">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-display font-bold text-accent">
                    {category.count}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="font-serif text-muted-foreground">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Öne Çıkan Projeler
            </h2>
            <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
              Kapsamlı mühendislik çözümleri sunduğumuz seçkin projelerimizden bazıları
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-sm border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground font-display text-xs uppercase tracking-wider rounded-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:px-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="font-serif text-muted-foreground text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map(service => (
                      <span
                        key={service}
                        className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent font-display text-xs uppercase tracking-wider rounded-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-primary-foreground/70 font-serif max-w-2xl mx-auto mb-10">
              Deneyimli ekibimiz ve kanıtlanmış çözümlerimizle projenize değer katalım.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+902122365743"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/902122365743?text=Merhaba,%20proje%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yazın
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referanslar;
