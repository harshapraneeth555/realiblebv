import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "We collect information that you provide directly to us, such as when you create an account, make a purchase, request information, or contact us for support.",
      "This may include your name, email address, phone number, mailing address, payment information, and any other information you choose to provide.",
      "We also automatically collect certain information about your device when you access our website, including your IP address, browser type, operating system, and browsing behavior.",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information.",
      "Your information helps us respond to your inquiries, provide customer support, and send you technical notices and updates.",
      "We may use your information to send you promotional communications, but you can opt out of these communications at any time.",
      "We use collected information to detect, prevent, and address technical issues and protect against fraudulent or illegal activity.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information at any time by contacting us.",
      "You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.",
      "You have the right to request a copy of your personal data and to object to or restrict certain processing of your information.",
      "If you are located in the European Economic Area, you have additional rights under the GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.",
    ],
  },
];

const PrivacyPolicy = () => {
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
                Legal Information
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                className="mb-12"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Realible, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our services.
                </p>
              </motion.div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-card p-8 rounded-2xl shadow-soft border border-border"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                    </div>
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> info@realiblebv.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +46736167376</p>
                  <p><strong className="text-foreground">Address:</strong> Verdunplein 17, 5627, SZ Eindhoven, The Netherlands</p>
                </div>
              </motion.div>

              {/* Changes to Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
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

export default PrivacyPolicy;
