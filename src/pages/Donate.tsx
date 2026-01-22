import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Leaf, Globe } from "lucide-react";

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
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.203zm14.146-14.42a7.169 7.169 0 0 1-.214.55c-.277.69-.701 1.569-1.219 2.587-.87 1.733-1.704 2.61-2.45 2.61H12.88l.896-5.756h4.41c.93 0 1.775-.102 2.507-.309a5.955 5.955 0 0 0 1.93-.872zm-2.935 4.02c.23-.01.45-.029.66-.056.83-.108 1.534-.3 2.11-.576.217-.106.42-.22.61-.343.344-.22.654-.46.93-.72.315-.3.582-.63.8-.99.11-.18.2-.37.27-.55.12-.3.2-.61.24-.92.05-.38.07-.76.05-1.14-.01-.19-.03-.38-.06-.57-.06-.38-.15-.75-.27-1.11-.08-.22-.18-.43-.29-.64-.22-.42-.49-.8-.81-1.14a5.772 5.772 0 0 0-1.12-.89 6.922 6.922 0 0 0-1.58-.72c-.49-.17-1.02-.3-1.59-.38a9.04 9.04 0 0 0-1.89-.08H9.74a.76.76 0 0 0-.75.64l-2.38 15.27a.64.64 0 0 0 .63.74h3.1a.76.76 0 0 0 .74-.64l.14-.9h.01l.86-5.52a.76.76 0 0 1 .74-.64h5.82z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">PayPal</h3>
                    <p className="text-sm text-muted-foreground">
                      Donate securely with PayPal
                    </p>
                  </motion.a>

                  {/* Revolut */}
                  <motion.a
                    href="https://revolut.me/realibh6ej"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-8 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 0-.315.063-.441.189l-1.566 1.566a.603.603 0 0 0-.189.441v6.888c0 .169.063.315.189.441l1.566 1.566c.126.126.272.189.441.189h1.566c.169 0 .315-.063.441-.189l1.566-1.566a.603.603 0 0 0 .189-.441V9.756c0-.169-.063-.315-.189-.441L19.575 7.749a.603.603 0 0 0-.441-.189h-1.566zm-11.136 0c-.169 0-.315.063-.441.189L4.425 9.915a.603.603 0 0 0-.189.441v6.888c0 .169.063.315.189.441l1.566 1.566c.126.126.272.189.441.189h1.566c.169 0 .315-.063.441-.189l1.566-1.566a.603.603 0 0 0 .189-.441V9.756c0-.169-.063-.315-.189-.441L8.493 7.749a.603.603 0 0 0-.441-.189H6.432z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Revolut</h3>
                    <p className="text-sm text-muted-foreground">
                      Send via Revolut
                    </p>
                  </motion.a>
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
