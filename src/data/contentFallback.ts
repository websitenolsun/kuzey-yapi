export interface CatalogService {
  id: string;
  slug: string;
  title: string;
}

export interface CatalogSubService {
  id: string;
  service_id: string;
  title: string;
  description: string;
  icon_name: string | null;
  display_order: number;
  slug: string;
  long_description: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string[];
  service_areas: string[];
  faqs: Array<{ question: string; answer: string }>;
  service?: CatalogService;
}

export interface CatalogCompanyValue {
  id: string;
  title: string;
  description: string;
  icon_name: string | null;
  display_order: number;
}

const serviceAreas = [
  "Beşiktaş",
  "Şişli",
  "Sarıyer",
  "Beyoğlu",
  "Kağıthane",
  "Eyüpsultan",
  "Fatih",
  "Üsküdar",
];

export const fallbackServices: Record<string, CatalogService> = {
  mekanik: { id: "fallback-service-mekanik", slug: "mekanik", title: "Mekanik Tesisat" },
  mimari: { id: "fallback-service-mimari", slug: "mimari", title: "Mimari & Dekorasyon" },
  elektrik: { id: "fallback-service-elektrik", slug: "elektrik", title: "Elektrik Sistemleri" },
  dogalgaz: { id: "fallback-service-dogalgaz", slug: "dogalgaz", title: "Doğalgaz Sistemleri" },
};

type ServiceSeed = [slug: string, title: string, description: string, icon: string];

const seeds: Record<string, ServiceSeed[]> = {
  mekanik: [
    ["isi-pompasi-sistemleri", "Isı Pompası Sistemleri", "Merkezi sistem, kombi ve yerden ısıtmada yüksek verimli, enerji tasarruflu ve uzun ömürlü projelendirme ile kurulum hizmetleri sunuyoruz.", "Thermometer"],
    ["sogutma-&-hvac", "Soğutma & HVAC", "Enerji verimliliği yüksek split klima, VRF/VRV ve merkezi soğutma sistemleriyle ideal iklimlendirme konforu sağlıyoruz.", "Wind"],
    ["havalandirma-sistemleri", "Havalandırma Sistemleri", "Endüstriyel tesislerden ofislere kadar taze hava sirkülasyonu ve duman tahliye sistemlerinde sağlıklı, güvenli çözümler sunuyoruz.", "AirVent"],
    ["sihhi-tesisat", "Sıhhi Tesisat", "Temiz su, atık su ve yağmur suyu sistemlerinde modern mühendislik standartlarına uygun altyapı ve kurulum hizmeti veriyoruz.", "Droplets"],
    ["yangin-tesisati", "Yangın Tesisatı", "NFPA standartlarında sprinkler, hidrant ve yangın algılama sistemleriyle yapınızı ve hayatınızı güvence altına alıyoruz.", "Flame"],
    ["kazan-dairesi-&-isi-merkezleri", "Kazan Dairesi & Isı Merkezleri", "Yüksek kapasiteli enerji merkezlerinde yakıt verimliliğini artıran modern kazan teknolojileri ve akıllı kontrol sistemleri kuruyoruz.", "Factory"],
    ["projelendirme-muhendislik", "Projelendirme Mühendislik", "Keşif, kapasite hesabı, uygulama projesi ve teknik koordinasyon adımlarını bütüncül bir mühendislik yaklaşımıyla yönetiyoruz.", "Pencil"],
    ["bina-otomasyon-sistemleri", "Bina Otomasyon Sistemleri", "Mekanik ekipmanları tek merkezden izleyen ve yöneten BMS çözümleriyle konforu ve enerji verimliliğini artırıyoruz.", "Cog"],
  ],
  mimari: [
    ["mimari-tasarim", "Mimari Tasarım", "Estetikle fonksiyonelliği buluşturan, ruhsat ve uygulama projelerini kapsayan bütüncül mimari çözümler sunuyoruz.", "Pencil"],
    ["ic-mekan-tasarimi", "İç Mekan Tasarımı", "Kişiye özel konseptler, ergonomik mobilya seçimleri ve modern dekorasyon dokunuşlarıyla yaşam alanlarına değer katıyoruz.", "Home"],
    ["cam-&-aluminyum-sistemleri", "Cam & Alüminyum Sistemleri", "Modern cephe sistemleri, alüminyum doğrama ve ısı cam çözümleriyle estetik görünüm ve yüksek yalıtım sağlıyoruz.", "Layers"],
    ["mekansal-planlama", "Mekansal Planlama", "Alanın dolaşım, depolama ve kullanım ihtiyaçlarını analiz ederek her metrekareyi verimli ve konforlu hale getiriyoruz.", "Building2"],
    ["mimari-uygulama-&-santiye-yonetimi", "Mimari Uygulama & Şantiye Yönetimi", "Onaylı tasarımı iş programı, ekip ve kalite koordinasyonuyla sahada eksiksiz olarak hayata geçiriyoruz.", "Users"],
    ["boya-&-yuzey-isleri", "Boya & Yüzey İşleri", "Yüzey hazırlığından son kata kadar doğru malzeme ve titiz işçilikle uzun ömürlü uygulamalar yapıyoruz.", "Palette"],
    ["marangoz-&-ahsap-isleri", "Marangoz & Ahşap İşleri", "Mekana özel sabit mobilya, kapı ve ahşap detayları usta işçilik ve hassas ölçülendirmeyle üretiyoruz.", "Home"],
    ["zemin-&-kaplama", "Zemin & Kaplama", "Seramik, parke ve dekoratif kaplama uygulamalarında zemine uygun, dayanıklı ve estetik çözümler sunuyoruz.", "Layers"],
    ["anahtar-teslim-dekorasyon", "Anahtar Teslim Dekorasyon", "Tasarımdan malzeme tedarikine ve uygulamaya kadar tüm süreci tek elden yöneterek kullanıma hazır teslim ediyoruz.", "ShieldCheck"],
  ],
  elektrik: [
    ["elektrik-tesisati-(daire-ici)", "Elektrik Tesisatı (Daire İçi)", "Daire içi elektrik altyapısını ihtiyaca uygun kapasite, güvenli kablolama ve yönetmeliklere uyumla kuruyor veya yeniliyoruz.", "Zap"],
    ["aydinlatma-sistemleri", "Aydınlatma Sistemleri", "Fonksiyonel ve dekoratif LED aydınlatma çözümleriyle doğru ışık seviyesini ve enerji tasarrufunu birlikte sağlıyoruz.", "Lightbulb"],
    ["akilli-ev-sistemleri", "Akıllı Ev Sistemleri", "Aydınlatma, perde, güvenlik ve iklimlendirmeyi uzaktan yönetilebilir tek bir otomasyon altyapısında birleştiriyoruz.", "Smartphone"],
    ["elektrik-panosu-&-guc-dagitimi", "Elektrik Panosu & Güç Dağıtımı", "Doğru koruma elemanları, dengeli yük dağılımı ve düzenli pano montajıyla güvenli enerji dağıtımı kuruyoruz.", "LayoutGrid"],
    ["topraklama-sistemleri", "Topraklama Sistemleri", "Can ve cihaz güvenliği için ölçüm, projelendirme ve uygulamayı standartlara uygun biçimde gerçekleştiriyoruz.", "ShieldCheck"],
    ["enerji-verimliligi-&-led-donusum", "Enerji Verimliliği & LED Dönüşüm", "Mevcut tüketimi analiz ederek verimli armatür ve kontrol sistemleriyle enerji maliyetlerini düşürüyoruz.", "Lightbulb"],
    ["revizyon-&-yenileme", "Revizyon & Yenileme", "Eski veya yetersiz elektrik tesisatlarını test ederek güncel ihtiyaçlara ve güvenlik standartlarına uygun hale getiriyoruz.", "Cog"],
  ],
  dogalgaz: [
    ["dogalgaz-tesisati", "Doğalgaz Tesisatı", "Konut ve işyerleri için sızdırmazlık ve havalandırma kurallarına uygun, güvenli doğalgaz altyapısı kuruyoruz.", "Flame"],
    ["kombi-&-kazan-sistemleri", "Kombi & Kazan Sistemleri", "Yapının ihtiyacına uygun yüksek verimli kombi ve kazan sistemlerinin montajını ve devreye alınmasını yapıyoruz.", "Factory"],
    ["bakim-&-onarim", "Bakım & Onarım", "Doğalgaz ekipmanlarında periyodik bakım, arıza tespiti ve güvenli onarım hizmetleri sunuyoruz.", "Cog"],
    ["proje-&-ruhsat", "Proje & Ruhsat", "Doğalgaz projesinin hazırlanmasından kurum onayı ve gaz açımına kadar resmi süreçleri takip ediyoruz.", "Pencil"],
  ],
};

export const fallbackSubServicesBySlug: Record<string, CatalogSubService[]> =
  Object.fromEntries(
    Object.entries(seeds).map(([serviceSlug, entries]) => {
      const service = fallbackServices[serviceSlug];
      return [
        serviceSlug,
        entries.map(([slug, title, description, icon_name], index) => ({
          id: `fallback-${serviceSlug}-${String(index + 1).padStart(2, "0")}`,
          service_id: service.id,
          title,
          description,
          icon_name,
          display_order: index + 1,
          slug,
          long_description: `${description} Keşif ve ihtiyaç analizinden uygulama ve devreye almaya kadar tüm adımları uzman ekibimizle planlı, şeffaf ve kalite odaklı biçimde yönetiyoruz.`,
          seo_title: `${title} | Kuzey Yapı`,
          seo_description: description,
          seo_keywords: [title, `${title} İstanbul`, "Kuzey Yapı"],
          service_areas: [...serviceAreas],
          faqs: [],
          service,
        })),
      ];
    }),
  );

export const fallbackCompanyValues: CatalogCompanyValue[] = [
  {
    id: "fallback-value-01",
    title: "Kalite",
    description: "Standartlara ve mühendislik esaslarına uygun, uygulanabilir ve sürdürülebilir çözümler üretiriz. Kaliteli malzeme ve uzman işçilikle projelerimizi titizlikle hayata geçiririz.",
    icon_name: "Award",
    display_order: 1,
  },
  {
    id: "fallback-value-02",
    title: "Zamanında Teslim",
    description: "Zamanın değerinin bilinciyle, kaynak ve iş planlamasını doğru yapar; kalite ve projeden ödün vermeden işlerimizi taahhüt edilen sürede teslim ederiz.",
    icon_name: "Clock",
    display_order: 2,
  },
  {
    id: "fallback-value-03",
    title: "Uzman Kadro",
    description: "Alanında eğitimli ve deneyimli mühendis, tekniker ve usta kadromuzla her türlü mekanik ve mühendislik ihtiyacına çözüm sunarız.",
    icon_name: "Users",
    display_order: 3,
  },
  {
    id: "fallback-value-04",
    title: "Güvenilir ve Güvenli Hizmet",
    description: "Tüm uygulamalarımızı iş sağlığı ve güvenliği standartlarına tam uyum çerçevesinde yürütür, güven inşa ederiz.",
    icon_name: "ShieldCheck",
    display_order: 4,
  },
];

export const findFallbackSubService = (serviceSlug: string, subServiceSlug: string) =>
  fallbackSubServicesBySlug[serviceSlug]?.find((item) => item.slug === subServiceSlug);
