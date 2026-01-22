import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Leaf, Globe, CreditCard, Copy, Check } from "lucide-react";

const Donate = () => {
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6"
              >
                <Coffee className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
                Support Our Mission
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Help Support the 
                <span className="opacity-80"> Eco Cause</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Every contribution helps us transform plastic waste into sustainable building materials. 
                Consider donating a coffee to support our mission of building a greener future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Section */}
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Your support enables us to continue our work in transforming plastic waste into 
                  sustainable building materials. Every donation, no matter the size, helps us make 
                  a positive impact on the environment and build a more sustainable future.
                </p>
              </motion.div>

              {/* Donation Options */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl shadow-soft border border-border mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Choose Your Payment Method
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* PayPal */}
                  <motion.a
                    href="https://www.paypal.com/ncp/payment/YEVVVYBAA9M2E"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="flex items-center justify-center">
                        <span className="text-3xl font-bold" style={{ color: '#003087' }}>Pay</span>
                        <span className="text-3xl font-bold" style={{ color: '#009CDE' }}>Pal</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">PayPal</h3>
                    <p className="text-sm text-muted-foreground">
                      Donate securely with PayPal
                    </p>
                  </motion.a>

                  {/* Bank Transfer / IBAN */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 rounded-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Bank Transfer</h3>
                    <div className="w-full space-y-3 text-left">
                      <div className="bg-background/50 p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                        <p className="font-semibold text-foreground">Realible B.V</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-1">IBAN</p>
                        <p className="font-mono font-semibold text-foreground">NL79REVO3652352777</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-1">BIC</p>
                        <p className="font-mono font-semibold text-foreground">REVONL22</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Impact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Your Donation Makes a Difference
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Reduce Waste</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us divert more plastic from landfills and oceans
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Build Sustainably</h3>
                    <p className="text-sm text-muted-foreground">
                      Support the creation of eco-friendly building materials
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Create Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Contribute to a greener future for generations to come
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Thank You Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <p className="text-muted-foreground">
                  Thank you for supporting our mission to transform waste into sustainable building materials. 
                  Every contribution helps us build a greener future, one brick at a time.
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

export default Donate;
