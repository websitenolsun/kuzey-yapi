import React, { useState } from 'react';
import './IcMimari.css';

const IcMimari = () => {
  // 1. Slider için State
  const [sliderPosition, setSliderPosition] = useState(50);

  // 2. SSS (FAQ) Açılır/Kapanır Menü için State
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // 0: İlk soru açık gelsin

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const toggleFaq = (index: number) => {
    // Zaten açıksa kapat, değilse aç
    setActiveFaq(activeFaq === index ? null : index);
  };

  // SSS Verileri
  const faqs = [
    {
      question: "Sadece proje çizimi yapıyor musunuz?",
      answer: "Evet. Eğer kendi uygulama ekibiniz varsa, size sadece teknik ve estetik detayları içeren 'Uygulama Projesi'ni teslim edebilir ve süreç boyunca teknik danışmanlık (süpervizörlük) verebiliriz."
    },
    {
      question: "Bütçeyi nasıl yönetiyorsunuz, sürpriz masraf çıkar mı?",
      answer: "Hayır. 'Value Engineering' yöntemini kullanıyoruz. Tasarım aşamasında bütçenize en uygun ve en kaliteli malzemeleri seçiyor, satın alma listelerini önceden onaylıyoruz. Sözleşme dışı bir istek olmadığı sürece bütçe şaşmaz."
    },
    {
      question: "Tadilat süreci ne kadar sürer?",
      answer: "Bu, projenin kapsamına göre değişir. Ancak 'Süreç' bölümünde belirttiğimiz gibi, işe başlamadan önce size gün-gün işleyen bir 'İş Programı' (Gantt Şeması) sunarız ve buna sadık kalırız."
    }
  ];

  return (
    <div className="ic-mimari-page">
      
      {/* --- BÖLÜM 1: HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
            alt="Modern Minimalist Salon Tasarımı" 
            className="hero-image" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <span className="hero-tagline">Ruhu Olan Mekanlar, Kusursuz Çalışan Sistemler.</span>
          <h1 className="hero-title">
              Estetiğin Bilimle <br />
              <span className="italic-accent">Buluştuğu Nokta.</span>
          </h1>
          <p className="hero-description">
              Biz mekanları sadece süslemiyoruz; ışığı, akustiği ve iklimi yöneterek, 
              içinde yaşamaktan keyif alacağınız "çalışan sanat eserleri" tasarlıyoruz.
          </p>
          <a href="#iletisim" className="cta-button">
              Projeyi Başlat
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </section>

      {/* --- BÖLÜM 2: FELSEFEMİZ --- */}
      <section className="philosophy-section">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="section-title">Neden Farklıyız?</h2>
                <p className="section-subtitle">Bütüncül Tasarım (Design & Build)</p>
            </div>
            <div className="philosophy-grid">
                <div className="philosophy-card">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3>Mimar Gözü</h3>
                    <p className="card-motto">Ferahlık & Sanat</p>
                    <p className="card-desc">Renk paletlerinden doku uyumuna, mekanın ruhunu ve karakterini yansıtan zamansız çizgiler.</p>
                </div>
                <div className="philosophy-card">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3>Mühendis Aklı</h3>
                    <p className="card-motto">Otorite & Güven</p>
                    <p className="card-desc">Görünmeyen konfor. Asma tavanın içine gizlenmiş sessiz havalandırma, doğru hesaplanmış aydınlatma ve kusursuz akustik.</p>
                </div>
                <div className="philosophy-card">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l.88-.88a5 5 0 0 1 7.07 0l2.12 2.12a3 3 0 0 1 0 4.24l-8 8a2 2 0 1 1-2.83-2.83l1.42-1.42"/><path d="m12 12 4-4"/><path d="M8 8v1a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2t2-2Z"/></svg>
                    </div>
                    <h3>Tek Muhatap</h3>
                    <p className="card-motto">Anahtar Teslim</p>
                    <p className="card-desc">Tasarlayan da biziz, uygulayan da. Çatışma yok, bahane yok, tek elden kusursuz çözüm var.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 3: HİZMETLERİMİZ --- */}
      <section className="services-section">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="section-title">Hizmetlerimiz</h2>
                <p className="section-subtitle">Teknik Estetik & Kapsam</p>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-number">01</div>
                    <div className="service-content">
                        <h3>Konsept & Proje Tasarımı</h3>
                        <p className="service-slogan">"Hayallerinizin dijital ikizi."</p>
                        <ul className="service-list">
                            <li>Moodboard ve Stil Danışmanlığı</li>
                            <li>Fotogerçekçi 3D Görselleştirme (Render)</li>
                            <li>Mekanik & Elektrik Entegreli Mimari Planlar</li>
                        </ul>
                    </div>
                    <div className="tech-tag">AutoCAD & 3ds Max</div>
                </div>
                <div className="service-card">
                    <div className="service-number">02</div>
                    <div className="service-content">
                        <h3>Anahtar Teslim Uygulama</h3>
                        <p className="service-slogan">"Kağıt üzerindeki mükemmelliğin sahaya yansıması."</p>
                        <ul className="service-list">
                            <li>İnce Yapı ve Dekorasyon (Boya, Parke)</li>
                            <li>Özel Mobilya Tasarımı ve Üretimi</li>
                            <li>Akıllı Ev Sistemleri Entegrasyonu</li>
                        </ul>
                    </div>
                    <div className="tech-tag">VRF & KNX Systems</div>
                </div>
                <div className="service-card">
                    <div className="service-number">03</div>
                    <div className="service-content">
                        <h3>Renovasyon & Dönüşüm</h3>
                        <p className="service-slogan">"Eskiyi, modernin konforuyla yeniden yaratmak."</p>
                        <ul className="service-list">
                            <li>Mekan Analizi ve Statik Değerlendirme</li>
                            <li>Fonksiyonel Mekan Kurgusu</li>
                            <li>Enerji Verimliliği Odaklı Yenileme</li>
                        </ul>
                    </div>
                    <div className="tech-tag">Laser Scan Survey</div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 4: SÜREÇ --- */}
      <section className="process-section">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
                <p className="section-subtitle">Sıfır Sürpriz, Tam Güven</p>
            </div>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                        <h3>Analiz & Keşif</h3>
                        <p>Sizi dinliyor, mekanı lazer tarayıcılarla ölçümlüyor, teknik altyapıyı (tesisat, elektrik) röntgenler gibi inceliyoruz.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                        <h3>Kurgu & Tasarım</h3>
                        <p>Size özel renk, doku ve malzeme kartelaları hazırlıyor; sürprizlere yer bırakmayan 3D sunumlar yapıyoruz.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                        <h3>Teknik Projelendirme</h3>
                        <p>Estetiğin altına mühendisliği işliyoruz. Klima nerede duracak, priz nereye gelecek; her şey milimetrik hesaplanır.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                        <h3>Uygulama & Teslim</h3>
                        <p>Şantiye şeflerimiz gözetiminde, bütçenize sadık kalarak ve zamanında teslimat garantisiyle anahtarı teslim ediyoruz.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 5: PORTFOLYO / BEFORE-AFTER SLIDER --- */}
      <section className="portfolio-section">
        <div className="container">
            <div className="portfolio-layout">
                <div className="comparison-container">
                    <div className="image-wrapper before">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" alt="İnşaat Hali" />
                        <span className="label-badge label-before">ÖNCESİ</span>
                    </div>
                    <div 
                        className="image-wrapper after" 
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" alt="Tamamlanmış Proje" />
                        <span className="label-badge label-after">SONRASI</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPosition} 
                        onChange={handleSliderChange}
                        className="slider-input" 
                    />
                    <div className="slider-handle-line" style={{ left: `${sliderPosition}%` }}>
                        <div className="slider-handle-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <h2 className="portfolio-title">Dönüşüm Hikayeleri</h2>
                    <div className="project-card">
                        <div className="project-info-row">
                            <span className="info-label">Lokasyon</span>
                            <span className="info-value">Göktürk, İstanbul</span>
                        </div>
                        <div className="project-info-row">
                            <span className="info-label">Konsept</span>
                            <span className="info-value">"Doğal Işık ve Sessiz Konfor"</span>
                        </div>
                        <div className="project-description">
                            <p><strong>Yapılan İş:</strong> Zemin ve duvar renovasyonu, VRF Klima gizleme ve akustik ahşap panel uygulaması.</p>
                            <p className="highlight-result"><strong>Sonuç:</strong> Mekanik altyapı tamamen gizlenerek, %30 daha fazla kullanım alanı ve görsel ferahlık sağlandı.</p>
                        </div>
                        <a href="#detay" className="portfolio-link">Projeyi İncele &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 6: SOSYAL KANIT & SSS (YENİ EKLENDİ) --- */}
      <section className="faq-section" id="iletisim">
        <div className="container">
            
            <div className="faq-layout">
                {/* Sol Taraf: Müşteri Yorumu */}
                <div className="testimonial-col">
                    <div className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p className="testimonial-text">
                            "Tasarımcıların estetik kaygısı ile ustaların teknik gerçekleri arasında kalmaktan korkuyordum. Kuzey Yapı, hem gözüme hitap eden o harika salonu tasarladı hem de yıllardır çözülemeyen ısınma sorunumu çözdü."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">Z</div>
                            <div className="author-info">
                                <span className="author-name">Zeynep Y.</span>
                                <span className="author-title">Ev Sahibi, Sarıyer</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sağ Taraf: Sıkça Sorulan Sorular */}
                <div className="faq-col">
                    <h2 className="faq-title">Merak Edilenler</h2>
                    <div className="accordion">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`accordion-item ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="accordion-header">
                                    <span className="question">{faq.question}</span>
                                    <span className="icon">+</span>
                                </div>
                                <div className="accordion-body">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default IcMimari;