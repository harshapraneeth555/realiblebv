import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileCheck, AlertCircle, Scale, Gavel } from "lucide-react";

const sections = [
  {
    icon: FileCheck,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by the above, please do not use this service.",
      "These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.",
    ],
  },
  {
    icon: Scale,
    title: "Use License",
    content: [
      "Permission is granted to temporarily download one copy of the materials on Realible's website for personal, non-commercial transitory viewing only.",
      "This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.",
      "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Realible at any time.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    content: [
      "The materials on Realible's website are provided on an 'as is' basis. Realible makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      "Further, Realible does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
      "Realible shall not be liable for any damages arising from the use or inability to use the materials on this website.",
    ],
  },
  {
    icon: Gavel,
    title: "Limitations of Liability",
    content: [
      "In no event shall Realible or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Realible's website, even if Realible or a Realible authorized representative has been notified orally or in writing of the possibility of such damage.",
      "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      "Our total liability to you for all claims arising from or related to the use of our services shall not exceed the amount you paid us in the twelve months prior to the action giving rise to liability.",
    ],
  },
];

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Please read these terms carefully before using our services. By using our website, you agree to these terms.
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
                  These Terms of Service ("Terms") govern your access to and use of Realible's website and services. 
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any 
                  part of these terms, then you may not access our services.
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

              {/* Additional Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Additional Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Governing Law:</strong> These Terms shall be governed by and 
                    construed in accordance with the laws of The Netherlands, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    <strong className="text-foreground">Changes to Terms:</strong> We reserve the right, at our sole 
                    discretion, to modify or replace these Terms at any time. If a revision is material, we will try to 
                    provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    <strong className="text-foreground">Contact Information:</strong> If you have any questions about 
                    these Terms, please contact us at info@realiblebv.com or +46736167376.
                  </p>
                </div>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  We reserve the right to update, change, or replace any part of these Terms of Service by posting 
                  updates and changes to our website. It is your responsibility to check our website periodically for changes.
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

export default TermsOfService;
