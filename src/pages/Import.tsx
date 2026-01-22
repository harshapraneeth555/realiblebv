import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, Globe, Shield, Package, FileCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Supplier Network",
    description: "Access to verified suppliers worldwide for sustainable building materials and eco-friendly construction solutions.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control and certification processes to ensure all imported materials meet international standards.",
  },
  {
    icon: Package,
    title: "Logistics Support",
    description: "Comprehensive logistics and shipping support to ensure smooth delivery from source to destination.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Expert assistance with customs, documentation, and regulatory compliance for seamless imports.",
  },
];

const Import = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 lg:pt-36">
        {/* Hero Section */}
        <section ref={heroRef} className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
                Import Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Import Solutions
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We facilitate the import of sustainable building materials and eco-friendly construction 
                solutions from verified suppliers worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={contentRef} className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our import services connect you with the best sustainable building materials from around 
                  the world. We handle every aspect of the import process, from supplier verification to 
                  final delivery, ensuring quality and compliance at every step.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Custom Import Solutions</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Whether you need specific materials for a construction project or are looking to 
                      expand your product offerings, we provide custom import solutions tailored to your 
                      requirements. Our team works closely with you to understand your needs and source 
                      the best materials from our global network.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      From initial consultation to final delivery, we ensure a seamless import experience 
                      with transparent communication, competitive pricing, and reliable service.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Import;
