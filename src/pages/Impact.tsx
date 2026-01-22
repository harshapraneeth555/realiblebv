import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const stats = [
  { value: 500000, suffix: "+", label: "Kg Plastic Recycled", prefix: "" },
  { value: 10000, suffix: "+", label: "Eco-Bricks Produced", prefix: "" },
  { value: 50, suffix: "+", label: "Structures Built", prefix: "" },
  { value: 85, suffix: "%", label: "Carbon Footprint Reduction", prefix: "" },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const Impact = () => {
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
                Our Impact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Making a 
                <span className="opacity-80"> Measurable Difference</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Every brick we produce represents a step toward a cleaner planet and more sustainable construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
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
                  Our commitment to sustainability goes beyond just producing eco-friendly materials. 
                  We measure our success by the positive impact we create for the environment, communities, 
                  and the construction industry as a whole.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Impact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Environmental Benefits</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By recycling plastic waste into building materials, we're diverting significant amounts 
                    of waste from landfills and oceans. Each eco-brick we produce represents plastic that 
                    won't pollute our environment for hundreds of years.
                  </p>
                  <p>
                    Our manufacturing process uses significantly less energy than traditional brick production, 
                    resulting in an 85% reduction in carbon footprint. This means that choosing our eco-bricks 
                    not only helps reduce waste but also contributes to lower greenhouse gas emissions.
                  </p>
                  <p>
                    Beyond the numbers, our impact extends to communities around the world. We're creating 
                    sustainable building solutions that are accessible, affordable, and environmentally responsible, 
                    helping to build a better future for generations to come.
                  </p>
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

export default Impact;
