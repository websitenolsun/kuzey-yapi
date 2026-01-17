import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Partner logos (placeholder companies)
const partnerLogos = [
  { name: "Teknik Yapı", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=TEKNIK+YAPI" },
  { name: "İnşaat Pro", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=INSAAT+PRO" },
  { name: "Mühendis Group", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=MUHENDIS+GROUP" },
  { name: "Proje Plus", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=PROJE+PLUS" },
  { name: "Yapı Merkezi", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=YAPI+MERKEZI" },
  { name: "Modern Tesisat", logo: "https://via.placeholder.com/200x80/ffffff/1a1a1a?text=MODERN+TESISAT" },
];

// Projects data with categories
const projects = [
  {
    id: "vadi-istanbul",
    title: "Vadi İstanbul Evleri",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format",
  },
  {
    id: "merkez-plaza",
    title: "Merkez Plaza Yenileme",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format",
  },
  {
    id: "marmara-fabrika",
    title: "Marmara Sanayi Tesisi",
    category: "Endüstriyel",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format",
  },
  {
    id: "besiktas-residence",
    title: "Beşiktaş Premium Residence",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format",
  },
  {
    id: "levent-tower",
    title: "Levent Business Tower",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=2089&auto=format",
  },
  {
    id: "tuzla-uretim",
    title: "Tuzla Üretim Merkezi",
    category: "Endüstriyel",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format",
  },
  {
    id: "nisantasi-konak",
    title: "Nişantaşı Konak",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format",
  },
  {
    id: "maslak-ofis",
    title: "Maslak Ofis Parkı",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format",
  },
  {
    id: "gebze-lojistik",
    title: "Gebze Lojistik Merkezi",
    category: "Endüstriyel",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format",
  },
];

const Referanslar = () => {
  const [activeTab, setActiveTab] = useState("Tümü");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeTab === "Tümü" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Referanslarımız | Kuzey Yapı Mühendislik"
        description="Kuzey Yapı'nın tamamladığı 470+ başarılı proje. Endüstriyel tesisler, ticari binalar, oteller ve konut projelerinde mekanik tesisat ve iç mimari referanslarımız."
        canonical="/referanslar"
        jsonLd={organizationSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Architectural Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Breadcrumb */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/70 hover:text-accent transition-colors font-display text-sm">
                    Ana Sayfa
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-accent font-display text-sm">
                  Referanslarımız
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Referanslarımız
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-serif italic"
          >
            Güven inşa ediyoruz, kalite tasarlıyoruz.
          </motion.p>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trusted Brands Section */}
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
              Çözüm Ortaklarımız
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 flex items-center justify-center h-24 bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Tamamlanan Projeler
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </motion.div>

          {/* Tabs Filter */}
          <Tabs defaultValue="Tümü" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border">
                <TabsTrigger 
                  value="Tümü"
                  className="font-display text-sm uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6"
                >
                  Tümü
                </TabsTrigger>
                <TabsTrigger 
                  value="Konut"
                  className="font-display text-sm uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6"
                >
                  Konut
                </TabsTrigger>
                <TabsTrigger 
                  value="Ticari"
                  className="font-display text-sm uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6"
                >
                  Ticari
                </TabsTrigger>
                <TabsTrigger 
                  value="Endüstriyel"
                  className="font-display text-sm uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6"
                >
                  Endüstriyel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {/* Masonry Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="break-inside-avoid"
                  >
                    <Link to={`/proje-detay/${project.id}`}>
                      <Card className="overflow-hidden border-0 group cursor-pointer">
                        <div className="relative overflow-hidden">
                          {/* Dynamic Heights for Masonry Effect */}
                          <div 
                            className={`relative ${
                              index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-96' : 'h-72'
                            }`}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                              <span className="text-accent font-display text-xs uppercase tracking-widest mb-2">
                                {project.category}
                              </span>
                              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                                {project.title}
                              </h3>
                              <span className="inline-flex items-center gap-2 text-white font-display text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                Detayları İncele
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
