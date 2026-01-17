import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import Footer from "@/components/Footer";

type TabType = "tamamlanan" | "devam";

const Referanslar = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tamamlanan");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Brand logos (placeholder for grayscale effect)
  const brandLogos = [
    { name: "Ortadoğu Enerji", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "İstaç", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "İstanbul Enerji", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "Hotiç", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "Lacoste", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "Vakko", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "Büyükşehir Belediyesi", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
    { name: "Mavi", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
  ];

  // Completed projects
  const completedProjects = [
    { name: "Seymen Enerji Santrali", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80" },
    { name: "Marmara Sanayi Tesisi", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80" },
    { name: "Tuzla Endüstri Parkı", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80" },
    { name: "Beylikdüzü İş Merkezi", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80" },
    { name: "Gebze Lojistik Merkezi", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&q=80" },
    { name: "Kadıköy Plaza", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&q=80" },
    { name: "Ataşehir Residence", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80" },
    { name: "Kozyatağı AVM", image: "https://images.unsplash.com/photo-1519567241046-7f570f8f8e6f?w=600&h=400&fit=crop&q=80" },
    { name: "Pendik Fabrika Kompleksi", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop&q=80" },
  ];

  // Ongoing projects
  const ongoingProjects = [
    { name: "Maslak Tower", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop&q=80" },
    { name: "Levent İş Merkezi", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop&q=80" },
    { name: "Çekmeköy Residence", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop&q=80" },
  ];

  const currentProjects = activeTab === "tamamlanan" ? completedProjects : ongoingProjects;
  const projectCount = activeTab === "tamamlanan" ? 81 : 12;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Referanslar - Tamamlanan Projeler"
        description="Kuzey Yapı'nın tamamladığı 81+ başarılı proje. Endüstriyel tesisler, ticari binalar, oteller ve konut projelerinde mekanik tesisat referanslarımız."
        canonical="/referanslar"
        jsonLd={organizationSchema}
      />

      {/* Hero Section - Compact */}
      <section className="relative pt-32 pb-16 bg-slate-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&h=600&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Tamamlanan Projeler
            </h1>
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">
                Anasayfa
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-300">Referanslar</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            {/* Tab Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab("tamamlanan")}
                className={`px-6 py-2.5 font-display text-sm uppercase tracking-wider transition-all duration-300 border-2 rounded-sm ${
                  activeTab === "tamamlanan"
                    ? "bg-white border-[#D4AF37] text-[#D4AF37]"
                    : "bg-transparent border-gray-300 text-gray-500 hover:border-gray-400"
                }`}
              >
                Tamamlanan Projeler
              </button>
              <span className="hidden md:block w-8 h-px bg-gray-300" />
              <button
                onClick={() => setActiveTab("devam")}
                className={`px-6 py-2.5 font-display text-sm uppercase tracking-wider transition-all duration-300 border-2 rounded-sm ${
                  activeTab === "devam"
                    ? "bg-white border-[#D4AF37] text-[#D4AF37]"
                    : "bg-transparent border-gray-300 text-gray-500 hover:border-gray-400"
                }`}
              >
                Devam Eden Projeler
              </button>
            </div>

            {/* Project Count */}
            <p className="text-gray-500 font-serif">
              Toplam <span className="font-bold text-foreground">{projectCount}</span>{" "}
              Proje {activeTab === "tamamlanan" ? "Tamamlandı" : "Devam Ediyor"}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-sm p-6 flex items-center justify-center h-24 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
              >
                <span className="font-display font-bold text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300 text-center text-sm md:text-base">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-video overflow-hidden rounded-sm cursor-pointer"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-display font-bold text-lg mb-3">
                    {project.name}
                  </h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black font-display text-sm uppercase tracking-wider rounded-sm hover:bg-[#B8943D] transition-colors w-fit">
                    Detayı Gör
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-white/70 font-serif max-w-2xl mx-auto mb-10">
              Deneyimli ekibimiz ve kanıtlanmış çözümlerimizle projenize değer katalım.
            </p>
            
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#B8943D] transition-colors"
            >
              İletişime Geçin
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referanslar;
