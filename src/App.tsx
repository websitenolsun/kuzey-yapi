import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import MekanikSistemler from "./pages/MekanikSistemler";
import IcMimari from "./pages/IcMimari";
import YapiDekorasyon from "./pages/YapiDekorasyon";

const queryClient = new QueryClient();

const App = () => (
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

        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;