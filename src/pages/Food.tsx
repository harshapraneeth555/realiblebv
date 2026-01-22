import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UtensilsCrossed, Leaf, Globe, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We source food products from sustainable and ethical suppliers committed to environmental responsibility.",
  },
  {
    icon: Globe,
    title: "Global Food Network",
    description: "Access to premium food products from around the world, ensuring quality and freshness.",
  },
  {
    icon: Truck,
    title: "Cold Chain Logistics",
    description: "Specialized temperature-controlled logistics to maintain product quality from source to destination.",
  },
  {
    icon: Shield,
    title: "Quality & Safety",
    description: "Rigorous quality control and food safety standards to ensure all products meet international regulations.",
  },
];

const Food = () => {
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
                Food Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Food Import & Export
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Connecting sustainable food products across borders, ensuring quality, freshness, and 
                ethical sourcing from farm to table.
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
                  Our food services specialize in the import and export of high-quality, sustainably sourced 
                  food products. We understand the unique requirements of food logistics, from maintaining 
                  cold chains to ensuring compliance with international food safety standards.
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
                    <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Comprehensive Food Solutions</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Whether you're importing specialty foods, organic products, or exporting local 
                      delicacies, we provide end-to-end solutions tailored to the food industry. Our 
                      expertise in food logistics ensures that products maintain their quality, freshness, 
                      and nutritional value throughout the entire supply chain.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We work with certified suppliers and follow strict food safety protocols, ensuring 
                      compliance with international standards and regulations. From documentation to 
                      delivery, we handle every detail so you can focus on your business.
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

export default Food;
