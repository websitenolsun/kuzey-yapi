import { useEffect } from "react";
import { Wind, Droplets, Flame, Cpu, ArrowRight } from "lucide-react";

const MekanikSistemler = () => {
  
  // Sayfa açıldığında en tepeye kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Wind size={40} strokeWidth={1.5} />,
      title: "İklimlendirme",
      desc: "Konforu maksimize eden sessiz ve verimli HVAC çözümleri.",
      detail: "VRF Sistemleri • Chiller • Havalandırma"
    },
    {
      id: 2,
      icon: <Droplets size={40} strokeWidth={1.5} />,
      title: "Sıhhi Tesisat",
      desc: "Yapının damarları. Sürdürülebilir su döngüsü ve atık yönetimi.",
      detail: "Temiz Su • Atık Su • Arıtma"
    },
    {
      id: 3,
      icon: <Flame size={40} strokeWidth={1.5} />,
      title: "Yangın Güvenliği",
      desc: "NFPA standartlarında, riski sıfıra indiren koruma kalkanları.",
      detail: "Sprinkler • Hidrant • Gazlı Söndürme"
    },
    {
      id: 4,
      icon: <Cpu size={40} strokeWidth={1.5} />,
      title: "Otomasyon",
      desc: "Tüm sistemleri tek merkezden yöneten akıllı bina beyni.",
      detail: "BMS • Enerji İzleme • Uzaktan Kontrol"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#EAB308]/30 selection:text-white font-sans pb-0">
      
      {/* --- 1. HERO ALANI: SESSİZ GÜÇ --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Arka Plan (Grayscale & Derinlik) */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format" 
             alt="Minimal Architecture" 
             className="w-full h-full object-cover opacity-50 grayscale scale-105"
           />
           {/* Gradient: Tam siyah değil, 'Lüks Siyah' geçişli */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        {/* İçerik: Merkezde, Minimal ve Özgüvenli */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white">
            Karmaşık Problemlere <br />
            <span className="font-medium text-[#EAB308]">Zarif Mühendislik</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
            Mekanik sistemleri yalnızca çalışır değil, <br className="hidden md:block"/>
            yapının mimarisiyle uyumlu bir sanat eseri gibi tasarlarız.
          </p>

          {/* Buton: Oval, İnce ve Sofistike */}
          <button className="group relative px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all hover:border-[#EAB308]/50 hover:bg-[#EAB308]/10">
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-[#EAB308] transition-colors flex items-center gap-2">
              Projeyi İncele <ArrowRight size={16} />
            </span>
          </button>

        </div>

        {/* Scroll İkonu (Mikro Detay) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>


      {/* --- 2. İSTATİSTİK BANDI: MİMARİ DİSİPLİN --- */}
      <section className="py-20 border-b border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "15+", label: "Yıllık Deneyim" },
              { num: "200+", label: "Tamamlanan Proje" },
              { num: "%30", label: "Enerji Verimliliği" },
              { num: "1.2M", label: "m² Uygulama" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                {/* Sayı: Büyük ve İnce */}
                <span className="text-5xl font-light text-white mb-4 tracking-tighter group-hover:text-gray-300 transition-colors">
                  {stat.num}
                </span>
                
                {/* Ayırıcı Çizgi: Sarı ama çok silik (Altın Tozu) */}
                <div className="w-12 h-[1px] bg-[#EAB308] opacity-30 mb-4 group-hover:w-24 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Etiket: Gri ve Minimal */}
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- 3. TEKNİK YAKLAŞIM (SPLIT SCREEN - REVİZE EDİLDİ) --- */}
      <section className="py-32 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* SOL: Görsel */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#EAB308]/20 transition-colors duration-700"></div>
              <div className="relative z-10 h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format" 
                    alt="Mühendislik Süreci" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                     <div className="flex items-center gap-4 text-white/60 font-mono text-xs tracking-widest">
                        <div className="h-px flex-1 bg-white/20"></div>
                        <span>PROJE NO: 24-01</span>
                     </div>
                  </div>
              </div>
            </div>

            {/* SAĞ: İçerik */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#EAB308] font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-80">
                Metodoloji
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
                Veriye Dayalı <br />
                <span className="font-normal text-gray-400">Analitik Tasarım.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                Sadece cihaz kurulumu yapmıyoruz; yapının mimari verilerini analiz ederek, 
                en düşük enerji tüketimiyle en yüksek konforu sağlayacak algoritmaları kuruyoruz.
              </p>

              <div className="space-y-8">
                {[
                  { title: "01. Keşif & Simülasyon", desc: "Dijital ortamda yük hesapları ve enerji simülasyonları." },
                  { title: "02. Entegre Projelendirme", desc: "BIM tabanlı, çakışmasız mekanik modelleme." },
                  { title: "03. Hassas Uygulama", desc: "Şantiye şefleri gözetiminde milimetrik montaj." }
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

{/* --- 3.5 YENİ EK BÖLÜM: SÜRDÜRÜLEBİLİRLİK (ZIG-ZAG / INTERACTIVE) --- */}
<section className="py-32 bg-[#050505] overflow-hidden border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
      
      {/* SAĞ: Görsel */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#EAB308]/20 transition-colors duration-700"></div>
        <div className="relative z-10 h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format" 
              alt="Sürdürülebilir Enerji" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
               <div className="flex items-center gap-3 text-white/80 font-mono text-xs tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse"></span>
                  <span>SİSTEM DURUMU: AKTİF</span>
               </div>
            </div>
        </div>
      </div>

      {/* SOL: İçerik */}
      <div className="w-full lg:w-1/2">
        <span className="text-[#EAB308] font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-80">
          Sürdürülebilirlik
        </span>
        <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
          Maksimum Verim, <br />
          <span className="font-normal text-gray-400">Minimum Tüketim.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
          Mühendisliğimizin temelinde "tasarruf" yatar. Kurduğumuz sistemler, 
          ilk yatırım maliyetini kısa sürede amorti edecek enerji verimliliği (COP) değerlerine sahiptir.
        </p>

        {/* ÖZELLİK LİSTESİ (HAREKETLİ KISIM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {[
            { 
              title: "Akıllı Yönetim", 
              desc: "Sensörler ve yapay zeka destekli algoritmalarla anlık enerji optimizasyonu." 
            },
            { 
              title: "LEED & BREEAM", 
              desc: "Yeşil bina sertifikasyon süreçlerine tam uyumlu, çevre dostu altyapılar." 
            },
            { 
              title: "Uzun Ömür", 
              desc: "Doğru malzeme seçimi ve korozyon önleyici tekniklerle 50+ yıl sistem ömrü." 
            },
            { 
              title: "Sessiz Konfor", 
              desc: "Akustik izolasyon standartlarıyla, varlığını hissettirmeyen mekanik sistemler." 
            }
          ].map((item, i) => (
            /* 'group' sınıfı sayesinde alt elemanları hover ile kontrol ediyoruz */
            <div key={i} className="relative pl-6 group cursor-default">
              
              {/* Sol Çizgi: Hover'da Sarı Oluyor ve Parlıyor */}
              <div className="absolute left-0 top-1 bottom-0 w-[1px] bg-white/20 group-hover:bg-[#EAB308] group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300 ease-out"></div>
              
              {/* Başlık: Sağa Kayıyor ve Sarı Oluyor */}
              <h4 className="text-white text-lg font-medium mb-2 group-hover:text-[#EAB308] group-hover:translate-x-2 transition-all duration-300 ease-out">
                {item.title}
              </h4>
              
              {/* Açıklama: Hafif Beyazlaşıyor */}
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

   {/* --- 4. SİSTEM BİLEŞENLERİ: ÇİZGİLİ & DENGELİ --- */}
{/* EKLEME: 'border-t border-white/5' sınıfı eklendi. Artık üstte ince bir çizgi var. */}
<section className="pt-20 pb-32 bg-[#050505] border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* BAŞLIK ALANI */}
    <div className="mb-20 relative">
      
      {/* Arka Plan Işıltısı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#EAB308]/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center flex flex-col items-center">
          
          <span className="block text-[#EAB308] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
            Uzmanlık Alanlarımız
          </span>

          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Sistem <span className="font-semibold text-white">Bileşenleri</span>
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


      {/* --- 5. CTA: SOFİSTİKE KAPANIŞ --- */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Projenizi birlikte <span className="font-normal border-b border-[#EAB308]/30 pb-1 text-[#EAB308]">değerlendirelim.</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-12 max-w-xl mx-auto">
            İlk teknik görüşmemiz ve ihtiyaç analizi tamamen ücretsizdir. <br/>
            Mühendislik standartlarınızı yükseltin.
          </p>
          
          <button className="bg-[#EAB308] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#dca600] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:scale-105">
            Mühendislerimizle Görüşün
          </button>

        </div>
      </section>

    </div>
  );
};

export default MekanikSistemler;