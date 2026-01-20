import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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

  // Tekrarlanan Dropdown Link Stili (Desktop için Link bileşeni kullanıldı)
  const DropdownItem = ({
    href,
    text
  }: {
    href: string;
    text: string;
  }) => <Link to={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">
      {text}
    </Link>;

  // Sosyal Medya İkon Bileşeni (Dış linkler olduğu için <a> kalmalı)
  const SocialIcon = ({
    href,
    children,
    label
  }: {
    href: string;
    children: React.ReactNode;
    label: string;
  }) => <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300">
      {children}
    </a>;
  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  // Mobilde linke tıklayınca menüyü kapatan fonksiyon
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return;
};
export default Header;