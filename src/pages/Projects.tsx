import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe, MapPin } from "lucide-react";

const houseImages = [
  "/house_1.png",
  "/house_2.png",
  "/house_3.png",
  "/house_4.png",
];

// Countries to highlight
const highlightedCountries = [
  { name: "Netherlands", code: "NL" },
  { name: "Sweden", code: "SE" },
  { name: "Denmark", code: "DK" },
  { name: "Norway", code: "NO" },
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
  { name: "New Zealand", code: "NZ" },
  { name: "Colombia", code: "CO" },
  { name: "Dubai (UAE)", code: "AE" },
  { name: "Saudi Arabia", code: "SA" },
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
                Global Presence
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Where We Are
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Discover our global footprint across ten countries, connecting sustainable solutions worldwide.
              </p>
            </motion.div>
          </div>
        </section>

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
                <span>Our Locations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Global Operations
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-card rounded-2xl shadow-soft border border-border p-6 lg:p-8">
                {/* World Map Image */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                  <img
                    src="/map.png"
                    alt="World map"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Country Labels */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {highlightedCountries.map((country, index) => (
                    <motion.div
                      key={country.code}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors text-center"
                    >
                      <MapPin className="w-5 h-5 text-primary" />
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
