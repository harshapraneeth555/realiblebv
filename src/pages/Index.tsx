import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Realible | Sustainable Building Materials from Recycled Plastic"
        description="Realible transforms plastic waste into durable, eco-friendly building bricks. Building a sustainable future, one brick at a time. Premium rice and spices from India."
        keywords="sustainable building materials, recycled plastic bricks, eco-friendly construction, green building, plastic waste recycling"
        url="/"
      />
      <StructuredData />
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
