import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-primary-foreground tracking-wide">
              KUZEY YAPI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
            >
              Ana Sayfa
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
                Kurumsal
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Hakkımızda
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Projelerimiz
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
                Faaliyet Alanlarımız
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Mekanik Tesisat
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Doğalgaz Sistemleri
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Mimari Tasarım & Dekorasyon
                </a>
              </div>
            </div>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#contact"
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
            >
              İletişim
            </a>
            <a
              href="#blog"
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
            >
              Blog
            </a>
            <button className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Search className="w-5 h-5" />
              <span className="font-medium">Arama</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-primary-foreground font-medium">
                Ana Sayfa
              </a>
              <a href="#" className="text-primary-foreground font-medium">
                Kurumsal
              </a>
              <a href="#" className="text-primary-foreground font-medium">
                Faaliyet Alanlarımız
              </a>
              <a href="#contact" className="text-primary-foreground font-medium">
                İletişim
              </a>
              <a href="#blog" className="text-primary-foreground font-medium">
                Blog
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
