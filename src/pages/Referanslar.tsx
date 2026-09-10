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

      {/* Empty State - Projects will be added later */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground font-serif">
              Projelerimiz yakında burada listelenecektir.
            </p>
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
