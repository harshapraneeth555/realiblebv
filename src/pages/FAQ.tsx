import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What kind of insulation do you have?",
    answer: "The product used for the manufacture of houses and living spaces already for its nature is an insulating element of both heat, cold, humidity, fire and electricity. No additional insulators are required.",
  },
  {
    question: "Heat and cold tests (fire risk tolerance)",
    answer: "Laboratory tests were carried out and it prevents 62.59% of the heat in the entrance area from reaching the exit area.",
  },
  {
    question: "What kind of anchor do you have?",
    answer: "The anchors are made to the base plate or piles as the case may be by means of expansion chazo, the structural elements are joined by screws and metal plates.",
  },
  {
    question: "Can the facilities and/or networks be placed inside the blocks?",
    answer: "Yes, the facilities and/or networks can be placed inside the blocks and are not exposed.",
  },
  {
    question: "On what base should it be mounted or only on land with some mechanism?",
    answer: "A stable and permanent base must be provided that does not deteriorate over time, such as a concrete plate or shoes, which can be made with the same plastic element from which the blocks and columns of our construction system are made.",
  },
  {
    question: "How many floors can be built?",
    answer: "Using exclusively our system you can make buildings of a floor regardless of the size of the area. When you want to make more than one floor, the structural columns and beams must be replaced by steel columns to guarantee resistance.",
  },
  {
    question: "What kind of roof can be built?",
    answer: "Various types of roofs can be built using our system, including traditional roofing materials that are compatible with our construction blocks.",
  },
  {
    question: "What structure do you need to support yourself (beams, columns, roof)?",
    answer: "Our construction system includes integrated structural elements. For single-floor buildings, our blocks and columns provide sufficient support. For multi-floor structures, steel reinforcement is recommended.",
  },
  {
    question: "What types of materials do you import?",
    answer: "We facilitate the import of sustainable building materials, eco-friendly construction solutions, premium rice and spices from India, and other verified products from suppliers worldwide.",
  },
  {
    question: "How long does the export process typically take?",
    answer: "Export timelines vary depending on the destination, product type, and shipping method. Typically, the process takes 2-6 weeks from order confirmation to delivery, including documentation and customs clearance.",
  },
  {
    question: "What certifications do your products have?",
    answer: "Our products meet strict international quality standards and certifications. Our eco-bricks are certified for sustainable construction, and our food products meet EU quality standards and international food safety regulations.",
  },
  {
    question: "What regions do you currently serve?",
    answer: "We operate in Netherlands, Sweden, Denmark, Norway, India, Australia, New Zealand, Colombia, Dubai (UAE), and Saudi Arabia. We're continuously expanding our global reach.",
  },
  {
    question: "How can I become a partner or supplier?",
    answer: "We welcome partnerships with suppliers, distributors, and retailers. Please contact us through our contact page or email us at info@realiblebv.com to discuss partnership opportunities.",
  },
  {
    question: "Do you offer custom packaging solutions?",
    answer: "Yes, we offer custom packaging solutions tailored to your specific needs, ensuring product safety and compliance with international shipping standards.",
  },
  {
    question: "What is the environmental impact of your products?",
    answer: "Our eco-bricks are made from 100% recycled plastic waste, diverting tons of plastic from landfills and oceans. Each brick represents a step toward a circular economy and significantly reduces carbon emissions compared to traditional brick manufacturing.",
  },
];

const FAQ = () => {
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions - Realible FAQ"
        description="Find answers to common questions about Realible's sustainable building materials, eco-bricks, construction process, import/export services, and food products."
        keywords="realible FAQ, eco-bricks questions, sustainable construction FAQ, building materials FAQ, rice import FAQ, spices import FAQ"
        url="/faq"
      />
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
                Frequently Asked Questions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Got Questions?
                <span className="opacity-80"> We've Got Answers</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Find answers to common questions about our products, services, and operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card px-6 rounded-xl border border-border shadow-soft hover:border-primary/20 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
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

export default FAQ;
