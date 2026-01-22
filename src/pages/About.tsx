import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, Droplets, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Sustainable",
    description: "Every brick is made entirely from recycled plastic waste, diverting tons from landfills and oceans.",
  },
  {
    icon: Shield,
    title: "Durable & Strong",
    description: "Our bricks exceed traditional building standards with superior strength and weather resistance.",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description: "Naturally waterproof, perfect for various climates and reducing maintenance costs.",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "Lower production costs mean affordable sustainable building materials for everyone.",
  },
];

const About = () => {
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
                Why Realible
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Building Tomorrow with 
                <span className="opacity-80"> Yesterday's Waste</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We're pioneering a circular economy in construction by transforming discarded 
                plastics into high-quality building materials that rival traditional options.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="py-24 lg:py-32 bg-secondary/30">
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
                  At Realible, we believe that the future of construction lies in sustainable innovation. 
                  Our mission is to transform the way we build by turning plastic waste into high-quality, 
                  durable building materials that don't compromise on strength or performance.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

              {/* Additional Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 bg-card p-8 rounded-2xl shadow-soft border border-border"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We envision a world where construction materials are sourced sustainably, where waste 
                      becomes a valuable resource, and where every building project contributes to a healthier planet. 
                      Our eco-bricks are just the beginning of a larger movement toward circular economy principles 
                      in the construction industry.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By choosing Realible, you're not just selecting a building material—you're making a 
                      statement about the future you want to build. Join us in creating a sustainable tomorrow, 
                      one brick at a time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <strong className="text-foreground">Reducing Carbon Footprint:</strong> Our eco-brick production process 
                      significantly reduces carbon emissions compared to traditional brick manufacturing, helping combat 
                      climate change while building a sustainable future.
                    </p>
                  </div>
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="relative rounded-xl overflow-hidden shadow-card"
                    >
                      <img
                        src="/brick.png"
                        alt="Eco-brick"
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
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

export default About;
