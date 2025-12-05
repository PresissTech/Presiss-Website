import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Industries />
        <Testimonials />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
