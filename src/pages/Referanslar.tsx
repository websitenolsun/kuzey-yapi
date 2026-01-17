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
    { name: "Ortadoğu Enerji" },
    { name: "İstaç" },
    { name: "İstanbul Enerji" },
    { name: "Hotiç" },
    { name: "Lacoste" },
    { name: "Vakko" },
    { name: "Büyükşehir Belediyesi" },
    { name: "Mavi" },
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
    { name: "SOSA Fabrika", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&q=80" },
    { name: "Gürsa Lojistik", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&q=80" },
    { name: "KOI Tokyo Cosmetics", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" },
    { name: "Vakko Mağaza", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop&q=80" },
    { name: "Hotiç Mağaza", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop&q=80" },
    { name: "Mavi Mağaza", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop&q=80" },
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
      <section className="relative pt-28 pb-12 bg-slate-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&h=600&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
              Tamamlanan Projeler
            </h1>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors font-serif">
                Anasayfa
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="hover:text-accent transition-colors font-serif">Referanslar</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-accent font-serif font-medium">Tamamlanan Projeler</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            {/* Tab Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab("tamamlanan")}
                className={`px-5 py-2 font-display text-sm tracking-wide transition-all duration-300 border rounded ${
                  activeTab === "tamamlanan"
                    ? "bg-card border-accent text-accent"
                    : "bg-transparent border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                Tamamlanan Projeler
              </button>
              <span className="hidden md:block w-6 h-px bg-border" />
              <button
                onClick={() => setActiveTab("devam")}
                className={`px-5 py-2 font-display text-sm tracking-wide transition-all duration-300 border rounded ${
                  activeTab === "devam"
                    ? "bg-card border-accent text-accent"
                    : "bg-transparent border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                Devam Eden Projeler
              </button>
            </div>

            {/* Project Count */}
            <p className="text-muted-foreground font-serif text-sm">
              Toplam <span className="font-semibold text-accent">{projectCount}</span>{" "}
              Proje {activeTab === "tamamlanan" ? "Tamamlandı" : "Devam Ediyor"}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded p-5 flex items-center justify-center h-20 hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className="font-display font-semibold text-muted-foreground group-hover:text-accent transition-colors duration-300 text-center text-sm">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-video overflow-hidden rounded cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-primary-foreground font-display font-semibold text-base mb-2">
                    {project.name}
                  </h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-display text-xs uppercase tracking-wide rounded hover:bg-accent/90 transition-colors w-fit">
                    Detayı Gör
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-primary-foreground/70 font-serif max-w-xl mx-auto mb-8 text-sm">
              Deneyimli ekibimiz ve kanıtlanmış çözümlerimizle projenize değer katalım.
            </p>
            
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-display font-semibold text-sm uppercase tracking-wide rounded hover:bg-accent/90 transition-colors"
            >
              İletişime Geçin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referanslar;
