import { MapPin, Phone, Instagram, MessageCircle, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Contact Bar */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="font-semibold text-destructive uppercase tracking-wide mb-1">
                ADRES
              </h4>
              <p className="text-foreground">
                Abbasağa Mah. Yıldız Cd. No:13
                <br />
                34353 Beşiktaş - İSTANBUL
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <Phone className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="font-semibold text-destructive uppercase tracking-wide mb-1">
                TELEFON
              </h4>
              <a href="tel:+902122365743" className="text-foreground hover:text-accent transition-colors">
                (0212) 236 57 43
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-destructive uppercase tracking-wide mb-2">
              SOSYAL MEDYA
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-accent hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1 md:border-r border-border md:pr-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                KUZEY YAPI
              </h2>
              <p className="text-muted-foreground">
                Mekanik Tesisat Ve İç Tasarımda Güvenilir Çözüm Ortağınız
              </p>
            </div>

            {/* Kurumsal */}
            <div>
              <h4 className="font-semibold text-foreground uppercase tracking-wide underline underline-offset-4 mb-4">
                KURUMSAL
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projelerimiz
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div>
              <h4 className="font-semibold text-foreground uppercase tracking-wide mb-4">
                HİZMETLERİMİZ
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Mekanik Tesisat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Doğalgaz Sistemleri
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Mimari Tasarım & Dekorasyon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Çalışma Saatleri */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Hafta İçi:</span>
                  <br />
                  08:00-18:00
                </p>
                <p>
                  <span className="font-medium text-foreground">Hafta Sonu:</span>
                  <br />
                  Cumartesi
                  <br />
                  09:00-18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Kişisel Verilerin Korunması
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Çerez Politikaları
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Gizlilik Ayarları
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Başa dönün</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
