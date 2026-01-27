import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const projectFormSchema = z.object({
  title: z.string().min(2, "Başlık en az 2 karakter olmalıdır."),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalıdır."),
  status: z.enum(["ongoing", "completed"]),
  image: z
    .custom<File>((value) => value instanceof File, {
      message: "Geçerli bir görsel dosyası seçin.",
    })
    .optional(),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

type ProjectStatus = "ongoing" | "completed";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  status: ProjectStatus;
  created_at: string;
}

interface ProjectInsert {
  title: string;
  description: string;
  image_url: string;
  status: ProjectStatus;
}

interface ProjectUpdate {
  title?: string;
  description?: string;
  image_url?: string;
  status?: ProjectStatus;
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  ongoing: "Devam Eden",
  completed: "Tamamlandı",
};

const getStoragePath = (url: string) => {
  const marker = "/projects-bucket/";
  const index = url.indexOf(marker);
  if (index === -1) return null;
  return url.slice(index + marker.length);
};

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "ongoing",
      image: undefined,
    },
  });

  const dialogTitle = useMemo(
    () => (editingProject ? "Projeyi Düzenle" : "Yeni Proje Ekle"),
    [editingProject]
  );

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .returns<Project[]>();

    if (error) {
      toast({
        title: "Projeler yüklenemedi",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    setProjects(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (dialogOpen) return;
    form.reset({
      title: "",
      description: "",
      status: "ongoing",
      image: undefined,
    });
    setEditingProject(null);
  }, [dialogOpen, form]);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    form.reset({
      title: project.title,
      description: project.description,
      status: project.status,
      image: undefined,
    });
    setDialogOpen(true);
  };

  const uploadImage = async (file: File) => {
    const extension = file.name.split(".").pop() ?? "jpg";
    const filePath = `projects/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("projects-bucket")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from("projects-bucket").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (values: ProjectFormValues) => {
    if (!editingProject && !values.image) {
      form.setError("image", { message: "Proje görseli zorunludur." });
      return;
    }

    setSaving(true);

    try {
      let imageUrl = editingProject?.image_url ?? "";

      if (values.image) {
        if (editingProject?.image_url) {
          const existingPath = getStoragePath(editingProject.image_url);
          if (existingPath) {
            await supabase.storage.from("projects-bucket").remove([existingPath]);
          }
        }
        imageUrl = await uploadImage(values.image);
      }

      if (editingProject) {
        const updates: ProjectUpdate = {
          title: values.title,
          description: values.description,
          status: values.status,
          image_url: imageUrl,
        };

        const { error } = await supabase
          .from("projects")
          .update(updates)
          .eq("id", editingProject.id);

        if (error) throw error;
      } else {
        const payload: ProjectInsert = {
          title: values.title,
          description: values.description,
          status: values.status,
          image_url: imageUrl,
        };

        const { error } = await supabase.from("projects").insert(payload);
        if (error) throw error;
      }

      toast({
        title: editingProject ? "Proje güncellendi" : "Proje eklendi",
        description: "Liste güncellendi.",
      });

      setDialogOpen(false);
      fetchProjects();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast({
        title: "Kaydetme işlemi başarısız",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleStatusUpdate = async (project: Project) => {
    if (project.status === "completed") return;
    setStatusUpdatingId(project.id);
    const { error } = await supabase
      .from("projects")
      .update({ status: "completed" })
      .eq("id", project.id);

    if (error) {
      toast({
        title: "Durum güncellenemedi",
        description: error.message,
        variant: "destructive",
      });
      setStatusUpdatingId(null);
      return;
    }

    setProjects((prev) =>
      prev.map((item) =>
        item.id === project.id ? { ...item, status: "completed" } : item
      )
    );
    toast({
      title: "Proje tamamlandı",
      description: "Durum 'Tamamlandı' olarak güncellendi.",
    });
    setStatusUpdatingId(null);
  };

  const handleDelete = async (project: Project) => {
    setDeletingId(project.id);
    try {
      if (project.image_url) {
        const storagePath = getStoragePath(project.image_url);
        if (storagePath) {
          await supabase.storage.from("projects-bucket").remove([storagePath]);
        }
      }

      const { error } = await supabase.from("projects").delete().eq("id", project.id);
      if (error) throw error;

      setProjects((prev) => prev.filter((item) => item.id !== project.id));
      toast({
        title: "Proje silindi",
        description: "Görsel ve kayıt kaldırıldı.",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast({
        title: "Silme işlemi başarısız",
        description: message,
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Referanslar Admin Paneli</h1>
            <p className="mt-2 text-sm text-slate-300">
              Tamamlanan ve devam eden projeleri buradan yönetin.
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400">
                Yeni Proje
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogDescription>
                  Proje bilgilerini eksiksiz girin. Görsel yüklemesi zorunludur.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Başlık</FormLabel>
                        <FormControl>
                          <Input placeholder="Proje adı" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Açıklama</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Proje açıklaması"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Durum</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Durum seçin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ongoing">Devam Eden</SelectItem>
                            <SelectItem value="completed">Tamamlandı</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Görsel</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(event) =>
                              field.onChange(event.target.files?.[0])
                            }
                          />
                        </FormControl>
                        {editingProject?.image_url && (
                          <p className="text-xs text-slate-500">
                            Mevcut görsel yüklü. Yeni dosya seçerseniz üzerine yazılır.
                          </p>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                      disabled={saving}
                    >
                      Vazgeç
                    </Button>
                    <Button
                      type="submit"
                      className="bg-amber-500 text-slate-950 hover:bg-amber-400"
                      disabled={saving}
                    >
                      {saving ? "Kaydediliyor..." : "Kaydet"}
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-slate-200">Proje</TableHead>
                <TableHead className="text-slate-200">Durum</TableHead>
                <TableHead className="text-slate-200">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <TableRow key={`skeleton-${index}`}>
                      <TableCell>
                        <Skeleton className="h-5 w-48" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-5 w-28" />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-24" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                : projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-white">
                            {project.title}
                          </span>
                          <span className="text-xs text-slate-400">
                            {project.description}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            project.status === "completed"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {STATUS_LABELS[project.status]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(project)}
                          >
                            Düzenle
                          </Button>
                          {project.status === "ongoing" && (
                            <Button
                              size="sm"
                              className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                              onClick={() => handleStatusUpdate(project)}
                              disabled={statusUpdatingId === project.id}
                            >
                              {statusUpdatingId === project.id
                                ? "Güncelleniyor..."
                                : "Tamamlandı"}
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(project)}
                            disabled={deletingId === project.id}
                          >
                            {deletingId === project.id
                              ? "Siliniyor..."
                              : "Sil"}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              {!loading && projects.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="py-10 text-center text-slate-400">
                    Henüz proje eklenmedi.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;
