import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Trash2, Factory, Boxes, Building } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Trash2,
    title: "Collection",
    description: "We partner with communities and businesses to collect plastic waste that would otherwise end up in landfills or oceans.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Processing",
    description: "Collected plastics are sorted, cleaned, and processed using our innovative low-energy manufacturing system.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Manufacturing",
    description: "The processed plastic is molded into uniform, interlocking bricks with precise engineering specifications.",
  },
  {
    number: "04",
    icon: Building,
    title: "Construction",
    description: "Our eco-bricks are delivered to construction sites, ready to build homes, schools, and community spaces.",
  },
];

const Process = () => {
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
                Our Process
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                From Waste to 
                <span className="opacity-80"> Wonder</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Our streamlined process ensures maximum sustainability while 
                delivering construction-grade materials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
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
                  Our four-step process transforms plastic waste into high-quality building materials. 
                  Each stage is carefully designed to maximize efficiency, minimize environmental impact, 
                  and ensure the highest quality standards for our eco-bricks.
                </p>
              </motion.div>

              {/* Process Steps */}
              <div className="relative">
                {/* Connection Line - Desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 40 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      className="relative text-center"
                    >
                      {/* Step Number */}
                      <div className="relative z-10 mx-auto mb-6">
                        <div className="w-20 h-20 rounded-full bg-card border-4 border-background shadow-card flex items-center justify-center mx-auto relative">
                          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                            {step.number}
                          </span>
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-12 bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Throughout our process, we maintain strict quality control measures to ensure that every 
                  eco-brick meets or exceeds industry standards. Our materials undergo rigorous testing for 
                  strength, durability, and environmental safety before being approved for construction use.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to transparency and continuous improvement, regularly refining our processes 
                  to reduce energy consumption, minimize waste, and enhance the quality of our products.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
