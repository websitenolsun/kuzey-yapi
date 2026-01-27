import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import kuzeyLogoFull from "@/assets/kuzey-logo-full.jpg";
import kuzeyLogoHorizontal from "@/assets/kuzey-logo-horizontal.png";

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SocialIcon = ({ href, label, children }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
  >
    {children}
  </a>
);

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  // Pages with white background that need dark navbar
  const darkTextPages = ["/hakkimizda", "/isg-politikamiz", "/kalite-politikamiz"];
  const useDarkText = darkTextPages.includes(location.pathname) && !isScrolled;
  const useFullLogo = darkTextPages.includes(location.pathname) && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (key: string) => {
    setOpenMobileDropdown((prev) => (prev === key ? null : key));
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  // Tekrarlanan Dropdown Link Stili (Desktop için Link bileşeni)
  const DropdownItem = ({ href, text }: { href: string; text: string }) => (
    <Link
      to={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
    >
      {text}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-sm py-4"
          : "bg-black py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO ALANI */}
        <Link
          to="/"
          onClick={handleMobileLinkClick}
          className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
        >
          {/* Logo görseli (güncel kurgundaki değişkenleri gerçekten kullanalım) */}
          <img
            src={useFullLogo ? kuzeyLogoFull : kuzeyLogoHorizontal}
            alt="Kuzey Yapı"
            className="h-10 w-auto object-contain"
          />

          {/* Yazı Alanı */}
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                useDarkText ? "text-gray-900" : "text-white"
              } group-hover:text-[#D4AF37]`}
            >
              KUZEY YAPI
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase ${
                useDarkText ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Mühendislik & Tasarım
            </span>
          </div>
        </Link>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex items-center space-x-8">
          {/* 1. KURUMSAL (Dropdown) */}
          <div className="relative group">
            <button
              className={`flex items-center text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none ${
                useDarkText ? "text-gray-900" : "text-white"
              }`}
              type="button"
            >
              KURUMSAL
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/hakkimizda" text="Hakkımızda" />
                <DropdownItem href="/isg-politikamiz" text="İSG Politikamız" />
                <DropdownItem href="/kalite-politikamiz" text="Kalite Politikamız" />
              </div>
            </div>
          </div>

          {/* 2. HİZMETLERİMİZ (Dropdown) */}
          <div className="relative group">
            <button
              className={`flex items-center text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none ${
                useDarkText ? "text-gray-900" : "text-white"
              }`}
              type="button"
            >
              HİZMETLERİMİZ
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/uzmanliklar/mekanik" text="Mekanik Tesisat" />
                <DropdownItem href="/hizmetler/dogalgaz" text="Doğalgaz Sistemleri" />
                <DropdownItem href="/uzmanliklar/ic-mimari" text="Mimari & Dekorasyon" />
                <DropdownItem href="/hizmetler/elektrik" text="Elektrik Sistemleri" />
              </div>
            </div>
          </div>

          {/* 3. REFERANSLAR */}
          <Link
            to="/referanslar"
            className={`text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase ${
              useDarkText ? "text-gray-900" : "text-white"
            }`}
          >
            REFERANSLAR
          </Link>

          {/* 4. İLETİŞİM */}
          <Link
            to="/iletisim"
            className={`text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase ${
              useDarkText ? "text-gray-900" : "text-white"
            }`}
          >
            İLETİŞİM
          </Link>

          {/* SOSYAL MEDYA İKONLARI */}
          <div
            className={`flex items-center space-x-2 ml-4 pl-4 border-l ${
              useDarkText ? "border-gray-300" : "border-white/20"
            }`}
          >
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=100081296332346&mibextid=rS40aB7S9Ucbxw6v"
              label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/kuzeyyapi.mekanik?igsh=ZTVzY3Fia3I2ajhh"
              label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`hover:text-[#D4AF37] transition-colors ${
              useDarkText ? "text-gray-900" : "text-white"
            }`}
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ İÇERİĞİ */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-6">
            {/* Mobil Kurumsal */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileDropdown("kurumsal")}
                className="flex items-center justify-between w-full text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2"
                type="button"
              >
                Kurumsal
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openMobileDropdown === "kurumsal" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMobileDropdown === "kurumsal" && (
                <div className="space-y-2 pl-4 border-l border-[#D4AF37]/30">
                  <Link
                    to="/hakkimizda"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/isg-politikamiz"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    İSG Politikamız
                  </Link>
                  <Link
                    to="/kalite-politikamiz"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Kalite Politikamız
                  </Link>
                </div>
              )}
            </div>

            {/* Mobil Hizmetlerimiz */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileDropdown("hizmetler")}
                className="flex items-center justify-between w-full text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2"
                type="button"
              >
                Hizmetlerimiz
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openMobileDropdown === "hizmetler" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMobileDropdown === "hizmetler" && (
                <div className="space-y-2 pl-4 border-l border-[#D4AF37]/30">
                  <Link
                    to="/uzmanliklar/mekanik"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Mekanik Tesisat
                  </Link>
                  <Link
                    to="/hizmetler/dogalgaz"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Doğalgaz Sistemleri
                  </Link>
                  <Link
                    to="/uzmanliklar/ic-mimari"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Mimari & Dekorasyon
                  </Link>
                  <Link
                    to="/hizmetler/elektrik"
                    onClick={handleMobileLinkClick}
                    className="block text-gray-300 py-1 hover:text-white transition-colors"
                  >
                    Elektrik Sistemleri
                  </Link>
                </div>
              )}
            </div>

            {/* Mobil Referanslarımız */}
            <Link
              to="/referanslar"
              onClick={handleMobileLinkClick}
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2 hover:text-white transition-colors"
            >
              Referanslarımız
            </Link>

            {/* Mobil İletişim */}
            <Link
              to="/iletisim"
              onClick={handleMobileLinkClick}
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2 hover:text-white transition-colors"
            >
              İletişim
            </Link>

            {/* Mobil Sosyal Medya */}
            <div className="pt-6 mt-4 border-t border-gray-800">
              <span className="text-gray-500 text-xs uppercase tracking-widest mb-4 block">
                Bizi Takip Edin
              </span>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100081296332346&mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/kuzey.yapibuderus?igsh=Ym1xYzZhOTJnd3Jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
