import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBricks from "@/assets/hero-bricks.jpg";
import { useState, useEffect } from "react";

const houseImages = [
  "/house_1.png",
  "/house_2.png",
  "/house_3.png",
  "/house_4.png",
];

export function Hero() {
  const [showHouses, setShowHouses] = useState(false);
  const [currentHouseIndex, setCurrentHouseIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHouses(true);
    }, 5000); // 5 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showHouses) return;

    const carouselTimer = setInterval(() => {
      setCurrentHouseIndex((prev) => (prev + 1) % houseImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(carouselTimer);
  }, [showHouses]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-36 lg:pt-36 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Recycle className="w-4 h-4" />
              <span>Sustainable Construction</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground mb-4 sm:mb-6">
              Turning Plastic 
              <span className="block text-gradient mt-1 sm:mt-2">Into Possibility</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              We transform plastic waste into durable, eco-friendly building bricks. 
              Building a sustainable future, one brick at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="hero" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Kg Plastic Recycled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Bricks Produced</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Column */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              {!showHouses ? (
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src="/brick.png"
                    alt="Sustainable bricks made from recycled plastic"
                    className="w-full h-auto object-cover aspect-[3/2] sm:aspect-[4/3]"
                    onError={(e) => {
                      // Fallback to hero-bricks.jpg if brick.png doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = heroBricks;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHouseIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated"
                  >
                    <div className="relative aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                      <img
                        src={houseImages[currentHouseIndex]}
                        alt={`House ${currentHouseIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-card border border-border z-10"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">Eco-Certified</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Green Building Material</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* SDG Icons Row - Separate container to prevent overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 sm:mt-8 lg:mt-12"
            >
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 text-center lg:text-left font-medium">
                Supporting UN Sustainable Development Goals
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start items-center">
                {[5, 8, 9, 11, 12, 13].map((goalNumber, index) => (
                  <motion.div
                    key={goalNumber}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    className="group relative flex-shrink-0"
                  >
                    <img
                      src={`/sdg${goalNumber}.png`}
                      alt={`SDG ${goalNumber}`}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg object-cover shadow-soft border border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:scale-110 cursor-pointer"
                      title={`UN SDG ${goalNumber}`}
                      onError={(e) => {
                        // Hide image if it fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
