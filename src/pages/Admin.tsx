import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Supabase client'ı oluştur
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !title) return toast.error("Lütfen başlık ve fotoğraf seçin!");

    setLoading(true);
    try {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName);

      const { error: insertError } = await supabase
        .from('projects')
        .insert([{ title, description, image_url: publicUrl }]);

      if (insertError) throw insertError;

      toast.success("Proje başarıyla eklendi!");
      setTitle(""); setDescription(""); setImage(null);
    } catch (error: any) {
      toast.error("Hata: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 pt-32 min-h-screen bg-slate-950 text-white">
      <h1 className="text-3xl font-bold mb-8 border-b border-gold-500 pb-4">Kuzey Yapı Yönetim Paneli</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-2 font-semibold">Proje İsmi</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-slate-900 border-slate-700" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Açıklama</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="bg-slate-900 border-slate-700 h-32" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Fotoğraf</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} className="block w-full text-sm cursor-pointer" />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-gold-600 hover:bg-gold-700">
          {loading ? "Yükleniyor..." : "Projeyi Kaydet ve Yayınla"}
        </Button>
      </form>
    </div>
  );
};

export default Admin;