-- Restore the complete public content catalog recovered from the site archive.
-- This migration is safe to run after the two existing schema migrations.

INSERT INTO public.services (slug, title, description, icon_name, display_order)
VALUES
  ('mekanik', 'Mekanik Tesisat', 'Endüstriyel ve konut tipi mekanik sistemlerde uçtan uca mühendislik çözümleri', 'Cog', 1),
  ('mimari', 'Mimari & Dekorasyon', 'Estetikle fonksiyonelliği buluşturan bütüncül mimari ve iç mekan tasarım hizmetleri', 'Building2', 2),
  ('elektrik', 'Elektrik Sistemleri', 'Güvenli ve modern elektrik altyapısı ile akıllı ev çözümleri', 'Zap', 3),
  ('dogalgaz', 'Doğalgaz Sistemleri', 'Yönetmeliklere uygun, güvenli ve verimli doğalgaz proje ve uygulamaları', 'Flame', 4)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name,
  display_order = EXCLUDED.display_order;

CREATE UNIQUE INDEX IF NOT EXISTS idx_company_values_title
  ON public.company_values(title);

INSERT INTO public.company_values (title, description, icon_name, display_order)
VALUES
  ('Kalite', 'Standartlara ve mühendislik esaslarına uygun, uygulanabilir ve sürdürülebilir çözümler üretiriz. Kaliteli malzeme ve uzman işçilikle projelerimizi titizlikle hayata geçiririz.', 'Award', 1),
  ('Zamanında Teslim', 'Zamanın değerinin bilinciyle, kaynak ve iş planlamasını doğru yapar; kalite ve projeden ödün vermeden işlerimizi taahhüt edilen sürede teslim ederiz.', 'Clock', 2),
  ('Uzman Kadro', 'Alanında eğitimli ve deneyimli mühendis, tekniker ve usta kadromuzla her türlü mekanik ve mühendislik ihtiyacına çözüm sunarız.', 'Users', 3),
  ('Güvenilir ve Güvenli Hizmet', 'Tüm uygulamalarımızı iş sağlığı ve güvenliği standartlarına tam uyum çerçevesinde yürütür, güven inşa ederiz.', 'ShieldCheck', 4)
ON CONFLICT (title) DO UPDATE SET
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name,
  display_order = EXCLUDED.display_order;

WITH catalog(service_slug, slug, title, description, icon_name, display_order) AS (
  VALUES
    ('mekanik', 'isi-pompasi-sistemleri', 'Isı Pompası Sistemleri', 'Merkezi sistem, kombi ve yerden ısıtmada yüksek verimli, enerji tasarruflu ve uzun ömürlü projelendirme ile kurulum hizmetleri sunuyoruz.', 'Thermometer', 1),
    ('mekanik', 'sogutma-&-hvac', 'Soğutma & HVAC', 'Enerji verimliliği yüksek split klima, VRF/VRV ve merkezi soğutma sistemleriyle ideal iklimlendirme konforu sağlıyoruz.', 'Wind', 2),
    ('mekanik', 'havalandirma-sistemleri', 'Havalandırma Sistemleri', 'Endüstriyel tesislerden ofislere kadar taze hava sirkülasyonu ve duman tahliye sistemlerinde sağlıklı, güvenli çözümler sunuyoruz.', 'AirVent', 3),
    ('mekanik', 'sihhi-tesisat', 'Sıhhi Tesisat', 'Temiz su, atık su ve yağmur suyu sistemlerinde modern mühendislik standartlarına uygun altyapı ve kurulum hizmeti veriyoruz.', 'Droplets', 4),
    ('mekanik', 'yangin-tesisati', 'Yangın Tesisatı', 'NFPA standartlarında sprinkler, hidrant ve yangın algılama sistemleriyle yapınızı ve hayatınızı güvence altına alıyoruz.', 'Flame', 5),
    ('mekanik', 'kazan-dairesi-&-isi-merkezleri', 'Kazan Dairesi & Isı Merkezleri', 'Yüksek kapasiteli enerji merkezlerinde yakıt verimliliğini artıran modern kazan teknolojileri ve akıllı kontrol sistemleri kuruyoruz.', 'Factory', 6),
    ('mekanik', 'projelendirme-muhendislik', 'Projelendirme Mühendislik', 'Keşif, kapasite hesabı, uygulama projesi ve teknik koordinasyon adımlarını bütüncül bir mühendislik yaklaşımıyla yönetiyoruz.', 'Pencil', 7),
    ('mekanik', 'bina-otomasyon-sistemleri', 'Bina Otomasyon Sistemleri', 'Mekanik ekipmanları tek merkezden izleyen ve yöneten BMS çözümleriyle konforu ve enerji verimliliğini artırıyoruz.', 'Cog', 8),
    ('mimari', 'mimari-tasarim', 'Mimari Tasarım', 'Estetikle fonksiyonelliği buluşturan, ruhsat ve uygulama projelerini kapsayan bütüncül mimari çözümler sunuyoruz.', 'Pencil', 1),
    ('mimari', 'ic-mekan-tasarimi', 'İç Mekan Tasarımı', 'Kişiye özel konseptler, ergonomik mobilya seçimleri ve modern dekorasyon dokunuşlarıyla yaşam alanlarına değer katıyoruz.', 'Home', 2),
    ('mimari', 'cam-&-aluminyum-sistemleri', 'Cam & Alüminyum Sistemleri', 'Modern cephe sistemleri, alüminyum doğrama ve ısı cam çözümleriyle estetik görünüm ve yüksek yalıtım sağlıyoruz.', 'Layers', 3),
    ('mimari', 'mekansal-planlama', 'Mekansal Planlama', 'Alanın dolaşım, depolama ve kullanım ihtiyaçlarını analiz ederek her metrekareyi verimli ve konforlu hale getiriyoruz.', 'Building2', 4),
    ('mimari', 'mimari-uygulama-&-santiye-yonetimi', 'Mimari Uygulama & Şantiye Yönetimi', 'Onaylı tasarımı iş programı, ekip ve kalite koordinasyonuyla sahada eksiksiz olarak hayata geçiriyoruz.', 'Users', 5),
    ('mimari', 'boya-&-yuzey-isleri', 'Boya & Yüzey İşleri', 'Yüzey hazırlığından son kata kadar doğru malzeme ve titiz işçilikle uzun ömürlü uygulamalar yapıyoruz.', 'Palette', 6),
    ('mimari', 'marangoz-&-ahsap-isleri', 'Marangoz & Ahşap İşleri', 'Mekana özel sabit mobilya, kapı ve ahşap detayları usta işçilik ve hassas ölçülendirmeyle üretiyoruz.', 'Home', 7),
    ('mimari', 'zemin-&-kaplama', 'Zemin & Kaplama', 'Seramik, parke ve dekoratif kaplama uygulamalarında zemine uygun, dayanıklı ve estetik çözümler sunuyoruz.', 'Layers', 8),
    ('mimari', 'anahtar-teslim-dekorasyon', 'Anahtar Teslim Dekorasyon', 'Tasarımdan malzeme tedarikine ve uygulamaya kadar tüm süreci tek elden yöneterek kullanıma hazır teslim ediyoruz.', 'ShieldCheck', 9),
    ('elektrik', 'elektrik-tesisati-(daire-ici)', 'Elektrik Tesisatı (Daire İçi)', 'Daire içi elektrik altyapısını ihtiyaca uygun kapasite, güvenli kablolama ve yönetmeliklere uyumla kuruyor veya yeniliyoruz.', 'Zap', 1),
    ('elektrik', 'aydinlatma-sistemleri', 'Aydınlatma Sistemleri', 'Fonksiyonel ve dekoratif LED aydınlatma çözümleriyle doğru ışık seviyesini ve enerji tasarrufunu birlikte sağlıyoruz.', 'Lightbulb', 2),
    ('elektrik', 'akilli-ev-sistemleri', 'Akıllı Ev Sistemleri', 'Aydınlatma, perde, güvenlik ve iklimlendirmeyi uzaktan yönetilebilir tek bir otomasyon altyapısında birleştiriyoruz.', 'Smartphone', 3),
    ('elektrik', 'elektrik-panosu-&-guc-dagitimi', 'Elektrik Panosu & Güç Dağıtımı', 'Doğru koruma elemanları, dengeli yük dağılımı ve düzenli pano montajıyla güvenli enerji dağıtımı kuruyoruz.', 'LayoutGrid', 4),
    ('elektrik', 'topraklama-sistemleri', 'Topraklama Sistemleri', 'Can ve cihaz güvenliği için ölçüm, projelendirme ve uygulamayı standartlara uygun biçimde gerçekleştiriyoruz.', 'ShieldCheck', 5),
    ('elektrik', 'enerji-verimliligi-&-led-donusum', 'Enerji Verimliliği & LED Dönüşüm', 'Mevcut tüketimi analiz ederek verimli armatür ve kontrol sistemleriyle enerji maliyetlerini düşürüyoruz.', 'Lightbulb', 6),
    ('elektrik', 'revizyon-&-yenileme', 'Revizyon & Yenileme', 'Eski veya yetersiz elektrik tesisatlarını test ederek güncel ihtiyaçlara ve güvenlik standartlarına uygun hale getiriyoruz.', 'Cog', 7),
    ('dogalgaz', 'dogalgaz-tesisati', 'Doğalgaz Tesisatı', 'Konut ve işyerleri için sızdırmazlık ve havalandırma kurallarına uygun, güvenli doğalgaz altyapısı kuruyoruz.', 'Flame', 1),
    ('dogalgaz', 'kombi-&-kazan-sistemleri', 'Kombi & Kazan Sistemleri', 'Yapının ihtiyacına uygun yüksek verimli kombi ve kazan sistemlerinin montajını ve devreye alınmasını yapıyoruz.', 'Factory', 2),
    ('dogalgaz', 'bakim-&-onarim', 'Bakım & Onarım', 'Doğalgaz ekipmanlarında periyodik bakım, arıza tespiti ve güvenli onarım hizmetleri sunuyoruz.', 'Cog', 3),
    ('dogalgaz', 'proje-&-ruhsat', 'Proje & Ruhsat', 'Doğalgaz projesinin hazırlanmasından kurum onayı ve gaz açımına kadar resmi süreçleri takip ediyoruz.', 'Pencil', 4)
)
INSERT INTO public.sub_services (
  service_id,
  slug,
  title,
  description,
  icon_name,
  display_order,
  long_description,
  seo_title,
  seo_description,
  seo_keywords
)
SELECT
  services.id,
  catalog.slug,
  catalog.title,
  catalog.description,
  catalog.icon_name,
  catalog.display_order,
  catalog.description || ' Keşif ve ihtiyaç analizinden uygulama ve devreye almaya kadar tüm adımları uzman ekibimizle planlı, şeffaf ve kalite odaklı biçimde yönetiyoruz.',
  catalog.title || ' | Kuzey Yapı',
  catalog.description,
  ARRAY[catalog.title, catalog.title || ' İstanbul', 'Kuzey Yapı']
FROM catalog
JOIN public.services ON services.slug = catalog.service_slug
ON CONFLICT (slug) DO UPDATE SET
  service_id = EXCLUDED.service_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name,
  display_order = EXCLUDED.display_order,
  long_description = EXCLUDED.long_description,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  seo_keywords = EXCLUDED.seo_keywords;
