import { useEffect } from "react";
import { Zap, Lightbulb, Home, LayoutGrid, ArrowRight } from "lucide-react";

const ElektrikSistemleri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Zap size={40} strokeWidth={1.5} />,
      title: "Elektrik Tesisatı",
      desc: "Daire içi elektrik altyapısının kurulumu ve yenilenmesi.",
      detail: "Kablo • Priz • Anahtar • Topraklama"
    },
    {
      id: 2,
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Aydınlatma Sistemleri",
      desc: "Fonksiyonel ve dekoratif LED aydınlatma çözümleri.",
      detail: "LED • Spot • Şerit • Dekoratif"
    },
    {
      id: 3,
      icon: <Home size={40} strokeWidth={1.5} />,
      title: "Akıllı Ev Sistemleri",
      desc: "Aydınlatma, perde ve iklimlendirme için akıllı çözümler.",
      detail: "Otomasyon • Sensör • Uzaktan Kontrol"
    },
    {
      id: 4,
      icon: <LayoutGrid size={40} strokeWidth={1.5} />,
      title: "Elektrik Panosu & Güç Dağıtımı",
      desc: "Güvenli pano montajı ve güç dağıtım sistemleri.",
      detail: "Pano • Sigorta • Kaçak Akım • UPS"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#EAB308]/30 selection:text-white font-sans pb-0">
      
      {/* --- 1. HERO ALANI --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Arka Plan */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format" 
             alt="Elektrik Sistemleri" 
             className="w-full h-full object-cover opacity-40 grayscale scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        {/* İçerik */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white">
            Güvenli ve Modern <br />
            <span className="font-medium text-[#EAB308]">Elektrik Çözümleri</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
            Daire içi tesisattan akıllı ev sistemlerine,<br className="hidden md:block"/>
            yaşam alanlarınıza enerji katıyoruz.
          </p>

          <button className="group relative px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all hover:border-[#EAB308]/50 hover:bg-[#EAB308]/10">
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-[#EAB308] transition-colors flex items-center gap-2">
              Teklif Alın <ArrowRight size={16} />
            </span>
          </button>

        </div>

        {/* Scroll İkonu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>


      {/* --- 2. İSTATİSTİK BANDI --- */}
      <section className="py-20 border-b border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "500+", label: "Elektrik Projesi" },
              { num: "50+", label: "Akıllı Ev Kurulumu" },
              { num: "%100", label: "Güvenlik Standardı" },
              { num: "24/7", label: "Teknik Destek" }
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
            
            {/* SOL: Görsel */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#EAB308]/20 transition-colors duration-700"></div>
              <div className="relative z-10 h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format" 
                    alt="Elektrik Panosu" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                     <div className="flex items-center gap-4 text-white/60 font-mono text-xs tracking-widest">
                        <div className="h-px flex-1 bg-white/20"></div>
                        <span>ELEKTRİK SİSTEMLERİ</span>
                     </div>
                  </div>
              </div>
            </div>

            {/* SAĞ: İçerik */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#EAB308] font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-80">
                Yaklaşımımız
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
                Güvenlik Öncelikli <br />
                <span className="font-normal text-gray-400">Modern Tesisatçılık.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                Elektrik sistemlerinde güvenlik her şeyden önce gelir. 
                Yönetmeliklere uygun, kaliteli malzemelerle, estetik ve fonksiyonelliği bir arada sunuyoruz.
              </p>

              <div className="space-y-8">
                {[
                  { title: "01. Keşif & Planlama", desc: "İhtiyaç analizi ve elektrik proje çizimi." },
                  { title: "02. Kaliteli Malzeme", desc: "TSE ve CE belgeli, uzun ömürlü ürünler." },
                  { title: "03. Profesyonel Montaj", desc: "Deneyimli teknisyenler tarafından güvenli kurulum." }
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
            </div>
          </div>
        </div>
      </section>


      {/* --- 4. HİZMET KARTLARI --- */}
      <section className="pt-20 pb-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* BAŞLIK ALANI */}
          <div className="mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#EAB308]/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
                
                <span className="block text-[#EAB308] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
                  Hizmet Alanlarımız
                </span>

                <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                  Elektrik <span className="font-semibold text-white">Hizmetleri</span>
                  <span className="text-[#EAB308]">.</span>
                </h2>

                <div className="mt-6 flex items-center gap-3 opacity-20">
                   <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-white"></div>
                   <div className="w-1 h-1 rounded-full bg-[#EAB308]"></div>
                   <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-white"></div>
                </div>
            </div>
          </div>

          {/* KARTLAR GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-[#0a0a0a] p-10 rounded-sm border border-white/5 transition-all duration-500 hover:border-[#EAB308]/30 hover:bg-[#0c0c0c] hover:-translate-y-1"
              >
                {/* İkon */}
                <div className="text-gray-600 mb-8 group-hover:text-[#EAB308] transition-colors duration-500">
                  {service.icon}
                </div>
                
                {/* Başlık */}
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#EAB308] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Açıklama */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
                
                {/* Detay */}
                <div className="text-xs text-gray-600 font-mono pt-6 border-t border-white/5 group-hover:border-[#EAB308]/20 group-hover:text-[#EAB308]/80 transition-all">
                  {service.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* --- 5. CTA --- */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Elektrik projenizi birlikte <span className="font-normal border-b border-[#EAB308]/30 pb-1 text-[#EAB308]">planlayalım.</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-12 max-w-xl mx-auto">
            Güvenli ve modern elektrik sistemleri için <br/>
            uzman ekibimizle iletişime geçin.
          </p>
          
          <button className="bg-[#EAB308] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#dca600] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:scale-105">
            Ücretsiz Keşif Talep Edin
          </button>

        </div>
      </section>

    </div>
  );
};

export default ElektrikSistemleri;
