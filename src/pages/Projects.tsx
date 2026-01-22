import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe } from "lucide-react";

const houseImages = [
  "/house_1.png",
  "/house_2.png",
  "/house_3.png",
  "/house_4.png",
];

// Countries to highlight: Netherlands, Sweden, Denmark, Norway, India, Australia
const highlightedCountries = [
  { name: "Netherlands", code: "NL" },
  { name: "Sweden", code: "SE" },
  { name: "Denmark", code: "DK" },
  { name: "Norway", code: "NO" },
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
];

const Projects = () => {
  const galleryRef = useRef(null);
  const mapRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 lg:pt-36">
        {/* Gallery Section */}
        <section ref={galleryRef} className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {houseImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl shadow-soft border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`House ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section ref={mapRef} className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                <span>Our Global Presence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Where We Operate
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-card rounded-2xl shadow-soft border border-border p-8">
                {/* World Map with highlighted countries */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl overflow-hidden">
                  <svg
                    viewBox="0 0 1000 500"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Simplified world map background */}
                    <g fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.5">
                      {/* Europe outline */}
                      <path d="M 400 150 L 550 120 L 580 180 L 520 220 L 450 240 L 400 200 Z" />
                      {/* Asia outline */}
                      <path d="M 550 120 L 850 100 L 900 200 L 850 320 L 650 350 L 550 250 Z" />
                      {/* Africa outline */}
                      <path d="M 480 240 L 580 250 L 600 350 L 520 400 L 450 380 Z" />
                      {/* Americas outline */}
                      <path d="M 100 150 L 350 120 L 380 280 L 200 350 L 100 300 Z" />
                      {/* Australia/Oceania outline */}
                      <path d="M 750 320 L 900 310 L 920 400 L 800 420 L 750 380 Z" />
                    </g>

                    {/* Highlighted Countries */}
                    <g>
                      {/* Netherlands - small country in Western Europe */}
                      <circle cx="485" cy="200" r="8" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                      {/* Sweden - Northern Europe */}
                      <circle cx="520" cy="160" r="12" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                      {/* Denmark - small country between Sweden and Germany */}
                      <circle cx="500" cy="190" r="6" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                      {/* Norway - long country in Northern Europe */}
                      <circle cx="510" cy="140" r="10" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                      {/* India - South Asia */}
                      <circle cx="700" cy="250" r="25" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                      {/* Australia - Oceania */}
                      <circle cx="850" cy="360" r="30" fill="#22c55e" stroke="#16a34a" strokeWidth="2" className="animate-pulse" />
                    </g>
                  </svg>
                </div>

                {/* Country Labels */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {highlightedCountries.map((country, index) => (
                    <motion.div
                      key={country.code}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium text-foreground">{country.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
