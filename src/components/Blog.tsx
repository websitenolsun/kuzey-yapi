import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Enerji Tasarrufu ve Kombi Çözümleri",
    description: "Doğalgaz faturanızı nasıl %30 düşürebilirsiniz?",
    category: "Enerji",
  },
  {
    title: "Tesisat Arıza Rehberi",
    description: "Evdeki tesisat sorunlarına hızlı çözümler.",
    category: "Bakım",
  },
  {
    title: "Tasarım & Fonksiyonellik",
    description: "Modern yaşam alanlarında estetik ve işlevsellik.",
    category: "Tasarım",
  },
  {
    title: "Tesisat Arıza Rehberi",
    description: "Endüstriyel tesislerde bakım önerileri.",
    category: "Endüstriyel",
  },
  {
    title: "Periyodik Bakım Takvimi",
    description: "Tesisat bakımlarınızı planlayın.",
    category: "Bakım",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          Önemli Bilgiler
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-muted to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
