import React, { useState } from "react";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Home, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui Card
import { Button } from "@/components/ui/button"; // shadcn/ui Button
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // shadcn/ui Tabs
import { Badge } from "@/components/ui/badge"; // shadcn/ui Badge

// --- MOCK DATA (Veritabanı gelene kadar placeholder) ---
const BRANDS = [
  { id: 1, name: "Ortadoğu Enerji", logo: "https://placehold.co/200x80/EEE/31343C?text=ORTADOGU" },
  { id: 2, name: "İstaç", logo: "https://placehold.co/200x80/EEE/31343C?text=ISTAC" },
  { id: 3, name: "İstanbul Enerji", logo: "https://placehold.co/200x80/EEE/31343C?text=IST+ENERJI" },
  { id: 4, name: "Hotiç", logo: "https://placehold.co/200x80/EEE/31343C?text=HOTIC" },
  { id: 5, name: "Lacoste", logo: "https://placehold.co/200x80/EEE/31343C?text=LACOSTE" },
  { id: 6, name: "Vakko", logo: "https://placehold.co/200x80/EEE/31343C?text=VAKKO" },
  { id: 7, name: "İBB", logo: "https://placehold.co/200x80/EEE/31343C?text=IBB" },
  { id: 8, name: "Mavi", logo: "https://placehold.co/200x80/EEE/31343C?text=MAVI" },
];

const PROJECTS = [
  { id: 1, title: "Seymen Enerji Santrali", category: "Endüstriyel", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Vadi İstanbul Konutları", category: "Konut", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Merkez Plaza Yenileme", category: "Ticari", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Sosa Restoran Zinciri", category: "Ticari", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Koi Tokyo Kozmetik", category: "Ticari", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Gürsa Lojistik Merkezi", category: "Endüstriyel", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
];

export default function ReferanslarPage() {
  const [activeTab, setActiveTab] = useState("completed");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION (Kuzey Yapı Style: Dark Navy & Gold) */}
      <section className="relative w-full py-20 bg-[#0f172a]"> {/* Slate-900 / Deep Navy */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Anasayfa</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#D4AF37]">Referanslar</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Referanslarımız
            </h1>
            <p className="text-lg text-[#D4AF37] max-w-2xl font-light"> {/* Gold Accent */}
              Güven inşa ediyoruz, kalite tasarlıyoruz. Sektörün öncü markalarıyla hayata geçirdiğimiz projeler.
            </p>
        </div>
        
        {/* Decorative Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      </section>

      {/* 2. FILTER & STATS BAR (Akterm Style: Clean & Functional) */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Tabs */}
          <Tabs defaultValue="completed" onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-transparent p-0 h-auto flex gap-4">
              <TabsTrigger 
                value="completed" 
                className="rounded-none border-b-2 border-transparent px-4 py-2 text-slate-500 data-[state=active]:border-[#D4AF37] data-[state=active]:text-[#D4AF37] data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-all"
              >
                Tamamlanan Projeler
              </TabsTrigger>
              <TabsTrigger 
                value="ongoing" 
                className="rounded-none border-b-2 border-transparent px-4 py-2 text-slate-500 data-[state=active]:border-[#D4AF37] data-[state=active]:text-[#D4AF37] data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-all"
              >
                Devam Eden Projeler
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Stats Counter */}
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
             <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
             <span>Toplam <strong className="text-slate-800">81</strong> Proje Başarıyla Tamamlandı</span>
          </div>

        </div>
      </section>

      {/* 3. CONTENT GRIDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 space-y-20">

          {/* PART A: BRANDS (Logos) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-gray-200 flex-1"></div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Çözüm Ortaklarımız</h3>
                <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {BRANDS.map((brand) => (
                <Card key={brand.id} className="group border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-none hover:shadow-lg bg-white">
                  <CardContent className="flex items-center justify-center p-8 h-32">
                    {/* Logo: Grayscale to Color & Slightly Scale on Hover */}
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-h-12 w-auto opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PART B: PROJECTS (Gallery) */}
          <div>
             <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-[#0f172a]">Proje Galerisi</h2>
                <Button variant="outline" className="text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white">
                    Tümünü Gör <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
             </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-md cursor-pointer h-72">
                  
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient (Akterm Style but Cleaner) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    
                    {/* Badge */}
                    <Badge className="w-fit bg-[#D4AF37] text-white hover:bg-[#b8952b] mb-2 border-none">
                        {project.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <span>Detayları İncele</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lite Footer for Context */}
      <footer className="bg-[#0f172a] py-8 text-center text-slate-500 text-sm border-t border-slate-800">
         Kuzey Yapı Mühendislik & Tasarım © 2024
      </footer>
    </div>
  );
}