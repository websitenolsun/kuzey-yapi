import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Index from "./pages/Index"; 
import MekanikSistemler from "./pages/MekanikSistemler"; 
import IcMimari from "./pages/IcMimari"; 
import ReferanslarPage from "./pages/Referanslar"; 

// 👇 YENİ EKLENEN: Yönetim Paneli Sayfası (Bunu birazdan oluşturacağız)
import Admin from "./pages/Admin"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uzmanliklar/mekanik" element={<MekanikSistemler />} />
          <Route path="/uzmanliklar/ic-mimari" element={<IcMimari />} />
          <Route path="/referanslar" element={<ReferanslarPage />} />

          {/* 👇 YENİ ROTA: Müşterinin gireceği yönetim paneli */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      
      {/* 👇 SAYACIMIZ: Sitedeki trafiği ölçmek için buraya yerleştirdik */}
      <Analytics /> 
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;