import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Upload } from "lucide-react";

const services = [
  {
    title: "Import",
    icon: Download,
    description: "We facilitate the import of sustainable building materials and eco-friendly construction solutions from verified suppliers worldwide.",
    features: [
      "Global supplier network",
      "Quality assurance and certification",
      "Custom import solutions",
      "Logistics and shipping support",
      "Regulatory compliance assistance",
    ],
  },
  {
    title: "Export",
    icon: Upload,
    description: "Export our premium eco-bricks and sustainable building materials to international markets, helping build a greener future globally.",
    features: [
      "International distribution",
      "Bulk export capabilities",
      "Documentation and customs support",
      "Market expansion services",
      "Sustainable packaging solutions",
    ],
  },
];

const faqs = [
  {
    question: "What types of materials do you import?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How long does the export process typically take?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What certifications do your products have?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    question: "Do you offer custom packaging solutions?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What regions do you currently serve?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How can I become a partner or supplier?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Import & Export
                <span className="opacity-80"> Solutions</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Connecting sustainable building materials across borders to build a greener future worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Columns */}
        <section ref={servicesRef} className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Got Questions?
                <span className="text-gradient"> We've Got Answers</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our import and export services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card px-6 rounded-xl border border-border shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

