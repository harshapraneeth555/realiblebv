import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, CheckCircle, Shield, Leaf } from "lucide-react";

const certifications = [
  {
    icon: Leaf,
    name: "LEED Certification",
    description: "Leadership in Energy and Environmental Design",
    details: [
      "Our eco-bricks contribute to LEED points in multiple categories",
      "Certified for sustainable material sourcing and waste reduction",
      "Meets LEED v4.1 standards for building materials",
      "Supports green building projects worldwide",
    ],
  },
  {
    icon: Shield,
    name: "BREEAM Certification",
    description: "Building Research Establishment Environmental Assessment Method",
    details: [
      "Recognized for environmental performance excellence",
      "Complies with BREEAM material efficiency requirements",
      "Contributes to circular economy principles",
      "Validated for use in sustainable construction projects",
    ],
  },
  {
    icon: Award,
    name: "Green Building Council",
    description: "Certified Sustainable Building Materials",
    details: [
      "Member of the Green Building Council network",
      "Products meet international sustainability standards",
      "Verified environmental impact assessments",
      "Supporting global green building initiatives",
    ],
  },
  {
    icon: CheckCircle,
    name: "ISO Standards",
    description: "International Organization for Standardization",
    details: [
      "ISO 14001: Environmental Management Systems",
      "ISO 9001: Quality Management Systems",
      "Compliance with international quality standards",
      "Regular audits and continuous improvement processes",
    ],
  },
];

const Certifications = () => {
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
                Quality & Standards
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Certifications & Standards
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Our commitment to quality, sustainability, and environmental responsibility is validated by leading international certifications.
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
                  At Realible, we are committed to meeting and exceeding international standards for quality, 
                  sustainability, and environmental responsibility. Our products and processes are certified by 
                  leading organizations that validate our commitment to building a greener future.
                </p>
              </motion.div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">{cert.name}</h2>
                        <p className="text-muted-foreground text-sm">{cert.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cert.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                        </li>
                      ))}
                    </ul>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We continuously work to maintain and improve our certifications, ensuring that our products 
                    meet the highest standards of quality and environmental responsibility. Our commitment to 
                    sustainability is not just about meeting standards—it's about exceeding them and setting 
                    new benchmarks for the industry.
                  </p>
                  <p>
                    All our certifications are regularly audited and renewed, demonstrating our ongoing dedication 
                    to environmental stewardship and quality excellence. We believe that transparency and accountability 
                    are essential to building trust with our partners and customers.
                  </p>
                  <p>
                    For more information about our certifications or to request certification documentation, 
                    please contact us at <strong className="text-foreground">info@realiblebv.com</strong> or 
                    call <strong className="text-foreground">+46736167376</strong>.
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

export default Certifications;
