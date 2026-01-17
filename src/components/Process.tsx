import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Waste to 
            <span className="text-gradient"> Wonder</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process ensures maximum sustainability while 
            delivering construction-grade materials.
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
      </div>
    </section>
  );
}
