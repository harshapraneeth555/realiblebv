import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Upload, Sprout } from "lucide-react";

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
    answer: "We import a wide range of sustainable building materials including eco-bricks, recycled construction materials, and certified green building products from verified suppliers worldwide.",
  },
  {
    question: "How long does the export process typically take?",
    answer: "Export timelines vary based on destination and order size, typically ranging from 2-6 weeks. We provide detailed timelines and tracking for all shipments to ensure transparency throughout the process.",
  },
  {
    question: "What certifications do your products have?",
    answer: "Our eco-bricks are certified by leading sustainability organizations including LEED, BREEAM, and Green Building Council. All products meet international quality and environmental standards.",
  },
  {
    question: "Do you offer custom packaging solutions?",
    answer: "Yes, we provide sustainable, recyclable packaging solutions tailored to your shipping needs. Our packaging is designed to minimize waste and environmental impact while ensuring product safety.",
  },
  {
    question: "What regions do you currently serve?",
    answer: "We currently serve North America, Europe, and select markets in Asia-Pacific. We're continuously expanding our reach to make sustainable building materials accessible globally.",
  },
  {
    question: "How can I become a partner or supplier?",
    answer: "We welcome partnerships with sustainable suppliers and distributors. Please contact us through our contact form with details about your organization and how you'd like to collaborate.",
  },
];

export function Services() {
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Eco decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sprout className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Import & Export
              <span className="text-gradient"> Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Connecting sustainable building materials across borders to build a greener future worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
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
      <section ref={faqRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Eco decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sprout className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
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
                  className="bg-card px-6 rounded-xl border border-border shadow-soft hover:border-primary/20 transition-colors"
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
    </>
  );
}

