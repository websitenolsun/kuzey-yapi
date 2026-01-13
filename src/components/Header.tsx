import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tekrarlanan Dropdown Link Stili
  const DropdownItem = ({ href, text }: { href: string; text: string }) => (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
    >
      {text}
    </a>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO ALANI */}
        {/* LOGO ALANI - Artık Tıklanabilir ve Anasayfaya Gider */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
          {/* Sarı Kutu */}
          <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center font-bold text-black rounded-sm group-hover:bg-white transition-colors duration-300">
            K
          </div>
          {/* Yazı Alanı */}
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
              KUZEY YAPI
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-300 uppercase">
              Mühendislik & Tasarım
            </span>
          </div>
        </a>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex items-center space-x-8">
          
          {/* 1. PROJELER (GÜNCELLENDİ: Artık Dropdown Menü) */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-white hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none">
              PROJELER
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Projeler Açılır Menüsü */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/projeler" text="Tümü" />
                <DropdownItem href="/projeler/tamamlananlar" text="Tamamlananlar" />
                <DropdownItem href="/projeler/devam-edenler" text="Devam Edenler" />
              </div>
            </div>
          </div>

          {/* 2. UZMANLIKLAR (Dropdown) */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-white hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none">
              UZMANLIKLAR
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/uzmanliklar/mekanik" text="Mekanik Sistemler" />
                <DropdownItem href="/uzmanliklar/ic-mimari" text="İç Mimari & Tasarım" />
                <DropdownItem href="/uzmanliklar/endustriyel" text="Endüstriyel Çözümler" />
              </div>
            </div>
          </div>

          {/* 3. ŞİRKET (Dropdown) */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-white hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none">
              ŞİRKET
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/hakkimizda" text="Hakkımızda" />
                <DropdownItem href="/kariyer" text="Kariyer" />
                <DropdownItem href="/sektorel-bakis" text="Sektörel Bakış" />
              </div>
            </div>
          </div>

          {/* 4. İLETİŞİM */}
          <a
            href="/iletisim"
            className="flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm font-medium tracking-wider uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-sm"
          >
            İLETİŞİM
          </a>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ İÇERİĞİ (GÜNCELLENDİ) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-6">
            
            {/* Mobil Projeler */}
            <div className="space-y-3">
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Projeler</span>
              <a href="/projeler" className="block text-white text-lg font-medium pl-4">Tümü</a>
              <a href="/projeler/tamamlananlar" className="block text-gray-400 pl-4 text-sm">Tamamlananlar</a>
              <a href="/projeler/devam-edenler" className="block text-gray-400 pl-4 text-sm">Devam Edenler</a>
            </div>

            {/* Mobil Uzmanlıklar */}
            <div className="space-y-3">
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Uzmanlıklar</span>
              <a href="/uzmanliklar/mekanik" className="block text-gray-300 pl-4">Mekanik Sistemler</a>
              <a href="/uzmanliklar/ic-mimari" className="block text-gray-300 pl-4">İç Mimari</a>
              <a href="/uzmanliklar/endustriyel" className="block text-gray-300 pl-4">Endüstriyel</a>
            </div>

            {/* Mobil Şirket */}
            <div className="space-y-3">
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Şirket</span>
              <a href="/hakkimizda" className="block text-gray-300 pl-4">Hakkımızda</a>
              <a href="/kariyer" className="block text-gray-300 pl-4">Kariyer</a>
            </div>

            <a href="/iletisim" className="mt-8 block w-full text-center bg-[#D4AF37] text-black py-4 font-bold uppercase tracking-wider rounded-sm">
              Bize Ulaşın
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;