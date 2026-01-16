import { useEffect } from "react";
import { Flame, Gauge, Wrench, FileCheck, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead, { createServiceSchema } from "@/components/SEOHead";

const DogalgazSistemleri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Flame size={40} strokeWidth={1.5} />,
      title: "Doğalgaz Tesisatı",
      desc: "Konut ve işyerleri için güvenli doğalgaz altyapısı kurulumu.",
      detail: "Boru • Bağlantı • Vana • Sayaç"
    },
    {
      id: 2,
      icon: <Gauge size={40} strokeWidth={1.5} />,
      title: "Kombi & Kazan Sistemleri",
      desc: "Yüksek verimli ısıtma sistemleri montajı ve devreye alma.",
      detail: "Kombi • Kazan • Radyatör • Yerden Isıtma"
    },
    {
      id: 3,
      icon: <Wrench size={40} strokeWidth={1.5} />,
      title: "Bakım & Onarım",
      desc: "Periyodik bakım, arıza tespit ve onarım hizmetleri.",
      detail: "Servis • Bakım • Kaçak Tespiti"
    },
    {
      id: 4,
      icon: <FileCheck size={40} strokeWidth={1.5} />,
      title: "Proje & Ruhsat",
      desc: "Doğalgaz projeleri ve ruhsat başvuru süreçleri.",
      detail: "Proje • Ruhsat • Denetim • Onay"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#EAB308]/30 selection:text-white font-sans pb-0">
      <SEOHead
        title="Doğalgaz Sistemleri"
        description="Yönetmeliklere uygun, güvenli ve verimli doğalgaz proje ve uygulamaları. Doğalgaz tesisatı, kombi, kazan sistemleri, bakım ve ruhsat hizmetleri."
        canonical="/hizmetler/dogalgaz"
        jsonLd={createServiceSchema(
          "Doğalgaz Sistemleri",
          "Yönetmeliklere uygun, güvenli ve verimli doğalgaz proje ve uygulamaları",
          "https://kuzey-yapi.lovable.app/hizmetler/dogalgaz"
        )}
      />
      
      {/* --- 1. HERO ALANI --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format" 
             alt="Doğalgaz Sistemleri" 
             className="w-full h-full object-cover opacity-40 grayscale scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Güvenli, Verimli <br />
            <span className="font-medium text-[#EAB308]">Doğalgaz Çözümleri</span>.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Yönetmeliklere uygun, yüksek verimli doğalgaz<br className="hidden md:block"/>
            proje ve uygulama hizmetleri sunuyoruz.
          </motion.p>

          <motion.a 
            href="tel:+905551234567"
            className="group relative inline-flex items-center gap-2 px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all hover:border-[#EAB308]/50 hover:bg-[#EAB308]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-[#EAB308] transition-colors flex items-center gap-2">
              <Phone size={16} />
              Teklif Alın
            </span>
          </motion.a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>


      {/* --- 2. İSTATİSTİK BANDI --- */}
      <section className="py-20 border-b border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "1000+", label: "Doğalgaz Aboneliği" },
              { num: "15+", label: "Yıllık Deneyim" },
              { num: "%100", label: "Ruhsat Onayı" },
              { num: "7/24", label: "Acil Servis" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <span className="text-5xl font-light text-white mb-4 tracking-tighter group-hover:text-gray-300 transition-colors">
                  {stat.num}
                </span>
                <div className="w-12 h-[1px] bg-[#EAB308] opacity-30 mb-4 group-hover:w-24 group-hover:opacity-100 transition-all duration-500"></div>
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- 3. TEKNİK YAKLAŞIM (SPLIT SCREEN) --- */}
      <section className="py-32 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              className="w-full lg:w-1/2 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#EAB308]/20 transition-colors duration-700"></div>
              <div className="relative z-10 h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format" 
                    alt="Doğalgaz Tesisatı" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                     <div className="flex items-center gap-4 text-white/60 font-mono text-xs tracking-widest">
                        <div className="h-px flex-1 bg-white/20"></div>
                        <span>DOĞALGAZ SİSTEMLERİ</span>
                     </div>
                  </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#EAB308] font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-80">
                Uzmanlığımız
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
                Güvenlik & Verimlilik <br />
                <span className="font-normal text-gray-400">Bir Arada.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                Doğalgaz sistemlerinde güvenlik en kritik unsurdur. 
                Yürürlükteki tüm yönetmeliklere uygun, verimli ve ekonomik çözümler sunuyoruz.
              </p>

              <div className="space-y-8">
                {[
                  { title: "01. Proje & Ruhsat", desc: "Gaz dağıtım şirketlerine uygun proje hazırlama ve ruhsat süreci." },
                  { title: "02. Kaliteli Malzeme", desc: "CE ve TSE belgeli, uzun ömürlü boru ve ekipmanlar." },
                  { title: "03. Yetkili Montaj", desc: "Sertifikalı teknisyenler tarafından güvenli kurulum." }
                ].map((item, i) => (
                  <div key={i} className="group pl-6 border-l border-white/10 hover:border-[#EAB308] transition-colors duration-500">
                    <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[#EAB308] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- 4. HİZMET KARTLARI --- */}
      <section className="pt-20 pb-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#EAB308]/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
                <span className="block text-[#EAB308] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
                  Hizmet Alanlarımız
                </span>
                <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                  Doğalgaz <span className="font-semibold text-white">Hizmetleri</span>
                  <span className="text-[#EAB308]">.</span>
                </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                className="group relative bg-[#0a0a0a] p-10 rounded-sm border border-white/5 transition-all duration-500 hover:border-[#EAB308]/30 hover:bg-[#0c0c0c] hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.id * 0.1 }}
              >
                <div className="text-gray-600 mb-8 group-hover:text-[#EAB308] transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#EAB308] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
                <div className="text-xs text-gray-600 font-mono pt-6 border-t border-white/5 group-hover:border-[#EAB308]/20 group-hover:text-[#EAB308]/80 transition-all">
                  {service.detail}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* --- 5. GÜVENLİK VURGUSU --- */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="bg-gradient-to-br from-orange-500/10 to-transparent p-12 rounded-sm border border-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#EAB308] rounded-full flex items-center justify-center">
                  <Flame size={40} className="text-black" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  Güvenliğiniz <span className="text-[#EAB308]">Önceliğimizdir</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Doğalgaz tesisatı ve sistemleri konusunda tüm çalışmalarımız, 
                  ilgili yönetmeliklere ve güvenlik standartlarına tam uyumlu olarak gerçekleştirilir. 
                  Sertifikalı ekibimiz, periyodik bakım ve denetimlerle güvenliğinizi sürekli takip eder.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- 6. CTA --- */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Doğalgaz projeniz için <span className="font-normal border-b border-[#EAB308]/30 pb-1 text-[#EAB308]">bize ulaşın.</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-12 max-w-xl mx-auto">
            Proje hazırlığından montaja, bakımdan acil servise<br/>
            tüm ihtiyaçlarınız için yanınızdayız.
          </p>
          
          <a 
            href="/iletisim"
            className="inline-flex items-center gap-3 bg-[#EAB308] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#dca600] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:scale-105"
          >
            Ücretsiz Keşif Talep Edin
          </a>
        </div>
      </section>

    </div>
  );
};

export default DogalgazSistemleri;