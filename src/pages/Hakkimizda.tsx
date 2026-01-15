import { useEffect } from "react";
import { Building2, Users, Award, Target } from "lucide-react";
import { motion } from "framer-motion";

const Hakkimizda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#D4AF37]/30 selection:text-white font-sans">
      
      {/* HERO ALANI */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
            Kurumsal
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
            Hakkımızda
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* ANA İÇERİK */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol: Görsel */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 border border-white/5 rounded-sm group-hover:border-[#D4AF37]/20 transition-colors duration-700"></div>
              <div className="relative h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format" 
                  alt="Kuzey Yapı Merkez" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center font-bold text-black rounded-sm">
                      K
                    </div>
                    <div>
                      <span className="text-white font-semibold block">KUZEY YAPI</span>
                      <span className="text-gray-400 text-sm">2011'den beri</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sağ: İçerik */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Hikayemiz
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-tight">
                Mühendislik Tecrübesi,<br />
                <span className="font-medium text-[#D4AF37]">Estetik Arayış.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Kuzey Yapı, 2011 yılından bu yana mühendislik tecrübesini yapı sektöründeki 
                estetik arayışıyla birleştiriyor.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-12">
                Asıl uzmanlık alanımız olan Mekanik Tesisat ve Doğal Gaz Sistemleri başta olmak üzere; 
                mimari tasarım ve dekorasyon süreçlerinde entegre, güvenli ve yüksek verimli çözümler sunuyoruz.
              </p>

              {/* İstatistikler */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { num: "2011", label: "Kuruluş Yılı" },
                  { num: "200+", label: "Tamamlanan Proje" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37]/30 pl-6">
                    <span className="text-3xl font-light text-white block mb-2">{stat.num}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEĞERLER */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Temel Değerlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Bizi Biz Yapan <span className="font-medium text-[#D4AF37]">İlkeler</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Building2 size={32} />, title: "Sağlam Yapı", desc: "Her projede en yüksek kalite standartları." },
              { icon: <Users size={32} />, title: "Uzman Kadro", desc: "Deneyimli mühendis ve tekniker ekibi." },
              { icon: <Award size={32} />, title: "Kalite Odaklı", desc: "Sürdürülebilir ve uygulanabilir çözümler." },
              { icon: <Target size={32} />, title: "Müşteri Memnuniyeti", desc: "Her aşamada şeffaf iletişim." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="group bg-[#0a0a0a] p-8 rounded-sm border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-gray-600 mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Projeleriniz için <span className="text-[#D4AF37]">yanınızdayız.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Mekanik sistemlerden mimari tasarıma, tüm ihtiyaçlarınız için bize ulaşın.
          </p>
          <a 
            href="/iletisim"
            className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
