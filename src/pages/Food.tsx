import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UtensilsCrossed, Leaf, Globe, Truck, Shield, Star, Store } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We source premium rice and spices directly from Indian farmers, ensuring ethical and sustainable practices throughout our supply chain.",
  },
  {
    icon: Globe,
    title: "International Quality Standards",
    description: "All products are processed and prepared to meet strict international quality standards, ensuring safety and excellence for global markets.",
  },
  {
    icon: Truck,
    title: "Cold Chain Logistics",
    description: "Specialized temperature-controlled logistics to maintain product quality and freshness from India to destination.",
  },
  {
    icon: Shield,
    title: "Quality & Safety",
    description: "Rigorous quality control and food safety standards to ensure all products meet international regulations and certifications.",
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
                Premium Rice & Spices
                <span className="opacity-80"> from India</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Reliable BV supplies premium rice and spices from India, responsibly sourced from farmers and processed to meet strict international quality standards.
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We specialize in importing and exporting high-quality rice and spices from India. Our products are sourced directly from trusted Indian farmers and prepared to meet the highest international standards, ensuring quality, freshness, and ethical sourcing from farm to table.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Whether you're a retailer, wholesaler, distributor, or investor, we provide reliable supply chain solutions tailored to your needs.
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

              {/* Service Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-border mb-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">Comprehensive Food Solutions</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Reliable BV is a trusted supplier of premium rice and spices from India for wholesalers, distributors, and retail partners. We understand the unique requirements of food logistics, from maintaining cold chains to ensuring compliance with international food safety standards.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our expertise in food logistics ensures that products maintain their quality, freshness, and nutritional value throughout the entire supply chain. We work with certified suppliers and follow strict food safety protocols, ensuring compliance with international standards and regulations. From documentation to delivery, we handle every detail so you can focus on your business.
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative rounded-xl overflow-hidden shadow-card"
                  >
                    <img
                      src="/rice.png"
                      alt="Premium rice and spices"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Target Markets */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Premium & Trust-Building</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our premium rice and spices are responsibly sourced from Indian farmers and processed to meet strict international quality standards, making them perfect for showcasing quality and building trust with investors and discerning buyers.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <Store className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Wholesale & Retail Focus</h3>
                      <p className="text-sm text-muted-foreground">For distributors and retail partners</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide reliable supply chain solutions for wholesalers, distributors, and retail partners, ensuring consistent quality and timely delivery of premium rice and spices from India to support your business operations.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Food;
