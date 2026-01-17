import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Realible
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Tomorrow with 
            <span className="text-gradient"> Yesterday's Waste</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're pioneering a circular economy in construction by transforming discarded 
            plastics into high-quality building materials that rival traditional options.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
      </div>
    </section>
  );
}
