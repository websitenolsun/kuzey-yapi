import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            <div className="w-10 h-10 border-2 border-accent flex items-center justify-center">
              <span className="text-accent font-display font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-primary-foreground tracking-[0.1em]">
                KUZEY YAPI
              </h1>
              <p className="text-xs text-primary-foreground/60 font-serif tracking-wider">
                Mühendislik & Tasarım
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-accent font-display font-medium text-sm uppercase tracking-wider transition-colors"
            >
              Ana Sayfa
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-accent font-display font-medium text-sm uppercase tracking-wider transition-colors">
                Kurumsal
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-sm shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-3 text-sm font-display text-foreground hover:bg-muted hover:text-accent transition-colors">
                  Hakkımızda
                </a>
                <a href="#" className="block px-4 py-3 text-sm font-display text-foreground hover:bg-muted hover:text-accent transition-colors">
                  Projelerimiz
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-accent font-display font-medium text-sm uppercase tracking-wider transition-colors">
                Faaliyet Alanları
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-sm shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-3 text-sm font-display text-foreground hover:bg-muted hover:text-accent transition-colors">
                  Mekanik Tesisat
                </a>
                <a href="#" className="block px-4 py-3 text-sm font-display text-foreground hover:bg-muted hover:text-accent transition-colors">
                  Doğalgaz Sistemleri
                </a>
                <a href="#" className="block px-4 py-3 text-sm font-display text-foreground hover:bg-muted hover:text-accent transition-colors">
                  Mimari Tasarım
                </a>
              </div>
            </div>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#contact"
              className="text-primary-foreground/80 hover:text-accent font-display font-medium text-sm uppercase tracking-wider transition-colors"
            >
              İletişim
            </a>
            <a
              href="#blog"
              className="text-primary-foreground/80 hover:text-accent font-display font-medium text-sm uppercase tracking-wider transition-colors"
            >
              Blog
            </a>
            <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group">
              <Search className="w-4 h-4" />
            </button>
            {/* CTA Button */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-accent text-accent-foreground font-display font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
            >
              Teklif Al
            </a>
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
              <a href="#" className="text-primary-foreground font-display font-medium uppercase tracking-wider text-sm">
                Ana Sayfa
              </a>
              <a href="#" className="text-primary-foreground font-display font-medium uppercase tracking-wider text-sm">
                Kurumsal
              </a>
              <a href="#" className="text-primary-foreground font-display font-medium uppercase tracking-wider text-sm">
                Faaliyet Alanları
              </a>
              <a href="#contact" className="text-primary-foreground font-display font-medium uppercase tracking-wider text-sm">
                İletişim
              </a>
              <a href="#blog" className="text-primary-foreground font-display font-medium uppercase tracking-wider text-sm">
                Blog
              </a>
              <a
                href="#contact"
                className="inline-block mt-2 px-5 py-3 bg-accent text-accent-foreground font-display font-semibold text-xs uppercase tracking-wider rounded-sm text-center"
              >
                Teklif Al
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;