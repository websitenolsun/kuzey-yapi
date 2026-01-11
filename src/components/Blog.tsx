import { ArrowRight } from "lucide-react";
import tesisatArizaImg from "@/assets/tesisat-ariza.jpg";

const blogPosts = [
  {
    title: "Enerji Tasarrufu ve Kombi Çözümleri",
    description: "Doğalgaz faturanızı nasıl %30 düşürebilirsiniz?",
    category: "Enerji",
    image: null,
  },
  {
    title: "Tesisat Arıza Rehberi",
    description: "Evdeki tesisat sorunlarına hızlı çözümler.",
    category: "Bakım",
    image: tesisatArizaImg,
  },
  {
    title: "Tasarım & Fonksiyonellik",
    description: "Modern yaşam alanlarında estetik ve işlevsellik.",
    category: "Tasarım",
    image: null,
  },
  {
    title: "Tesisat Arıza Rehberi",
    description: "Endüstriyel tesislerde bakım önerileri.",
    category: "Endüstriyel",
    image: tesisatArizaImg,
  },
  {
    title: "Periyodik Bakım Takvimi",
    description: "Tesisat bakımlarınızı planlayın.",
    category: "Bakım",
    image: null,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm uppercase tracking-[0.25em] mb-3">
            Bilgi Merkezi
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Önemli Bilgiler
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="group block bg-card rounded-lg overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image area */}
              <div className="h-48 bg-gradient-to-br from-slate-dark to-slate-medium relative overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/15 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-blueprint opacity-30" />
                  </>
                )}
                
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-4 py-1.5 bg-accent text-accent-foreground text-xs font-display font-semibold uppercase tracking-wider rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-serif text-muted-foreground text-sm mb-5 italic">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Devamını Oku
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;