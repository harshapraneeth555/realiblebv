import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
