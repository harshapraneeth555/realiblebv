import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-elevated border border-border text-center relative overflow-hidden">
            {/* Eco decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4"
              >
                <Sprout className="w-7 h-7 text-primary-foreground" />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Ready to Build 
                <span className="text-gradient"> Sustainably?</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                Join the sustainable construction revolution. Contact us to learn how 
                our eco-bricks can transform your next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90 group">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Typical response time: Within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
