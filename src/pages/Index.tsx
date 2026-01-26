import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Stats bileşeni silindi (Fotoğraflı ve sayılı bölüm kalktı) */}
      <WorkProcess />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;