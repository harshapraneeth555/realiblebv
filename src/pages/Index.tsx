import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Impact } from "@/components/Impact";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Impact />
        <Services />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
