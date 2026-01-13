import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Navbar bileşenimiz
import Index from "./pages/Index"; // Ana Sayfa
import MekanikSistemler from "./pages/MekanikSistemler"; // Mekanik Sayfası
import IcMimari from "./pages/IcMimari"; // YENİ EKLEDİĞİMİZ SAYFA

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
          
          {/* YENİ EKLENEN: İç Mimari Sayfası */}
          <Route path="/uzmanliklar/ic-mimari" element={<IcMimari />} />

        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;