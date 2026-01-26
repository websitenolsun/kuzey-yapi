import React, { useState } from "react";
import { supabase } from "@/lib/supabase"; // Lovable projelerinde depo anahtarı genellikle buradadır
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Bildirim kutucuğu için

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !title) return toast.error("Lütfen bir başlık ve fotoğraf seçin!");

    setLoading(true);
    try {
      // 1. ADIM: Fotoğrafı 'project-images' kutusuna atalım
      const fileExt = image.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      // 2. ADIM: Fotoğrafın internet linkini alalım
      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName);

      // 3. ADIM: Bilgileri 'projects' defterine (tablosuna) yazalım
      const { error: insertError } = await supabase
        .from('projects')
        .insert([{ title, description, image_url: publicUrl }]);

      if (insertError) throw insertError;

      toast.success("Proje başarıyla eklendi! Referanslar sayfasında görebilirsiniz.");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error: any) {
      toast.error("Bir hata oluştu: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 pt-32 min-h-screen bg-slate-950 text-white">
      <h1 className="text-3xl font-bold mb-8 border-b border-gold-500 pb-4">Kuzey Yapı - Yeni Proje Ekle</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-2 font-semibold">Proje İsmi</label>
          <Input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Örn: Modern Villa Dekorasyonu"
            className="bg-slate-900 border-slate-700"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Proje Açıklaması</label>
          <Textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Yapılan işlemler hakkında kısa bilgi..."
            className="bg-slate-900 border-slate-700 h-32"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Proje Fotoğrafı</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold-600 file:text-white hover:file:bg-gold-700 cursor-pointer"
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-6"
        >
          {loading ? "Yükleniyor..." : "Projeyi Kaydet ve Yayınla"}
        </Button>
      </form>
    </div>
  );
};

export default Admin;