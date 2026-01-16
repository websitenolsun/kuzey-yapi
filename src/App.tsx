import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Index from "./pages/Index";
import MekanikSistemler from "./pages/MekanikSistemler";
import IcMimari from "./pages/IcMimari";
import YapiDekorasyon from "./pages/YapiDekorasyon";
import Hakkimizda from "./pages/Hakkimizda";
import ISGPolitikamiz from "./pages/ISGPolitikamiz";
import KalitePolitikamiz from "./pages/KalitePolitikamiz";
import ElektrikSistemleri from "./pages/ElektrikSistemleri";
import DogalgazSistemleri from "./pages/DogalgazSistemleri";
import Iletisim from "./pages/Iletisim";
import Referanslar from "./pages/Referanslar";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Navigasyon barı (Header) her sayfada görünsün diye buraya koyduk */}
          <Header />

          <Routes>
            {/* Ana Sayfa */}
            <Route path="/" element={<Index />} />
            
            {/* Mekanik Sistemler Sayfası */}
            <Route path="/uzmanliklar/mekanik" element={<MekanikSistemler />} />
            
            {/* İç Mimari Sayfası */}
            <Route path="/uzmanliklar/ic-mimari" element={<IcMimari />} />

            {/* Yapı & Dekorasyon Landing Page */}
            <Route path="/yapi-dekorasyon" element={<YapiDekorasyon />} />

            {/* Kurumsal Sayfalar */}
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/isg-politikamiz" element={<ISGPolitikamiz />} />
            <Route path="/kalite-politikamiz" element={<KalitePolitikamiz />} />
            <Route path="/referanslar" element={<Referanslar />} />
            <Route path="/iletisim" element={<Iletisim />} />

            {/* Hizmet Sayfaları */}
            <Route path="/hizmetler/elektrik" element={<ElektrikSistemleri />} />
            <Route path="/hizmetler/dogalgaz" element={<DogalgazSistemleri />} />

          </Routes>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;