import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Navbar bileşenimiz
import Index from "./pages/Index"; // Ana Sayfa
import MekanikSistemler from "./pages/MekanikSistemler"; // Mekanik Sayfası

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ÖNEMLİ KISIM: Header'ı Routes'ın DIŞINA, en tepeye koyuyoruz. 
            Böylece sayfa değişse de Navbar sabit kalır. */}
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uzmanliklar/mekanik" element={<MekanikSistemler />} />
          {/* İleride ekleyeceğimiz diğer sayfalar da buraya gelecek */}
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;