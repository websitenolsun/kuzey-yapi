import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
