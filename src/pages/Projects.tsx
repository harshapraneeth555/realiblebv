import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Building2 } from "lucide-react";
import heroBricks from "@/assets/hero-bricks.jpg";

interface Project {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  stats: {
    bricksUsed: string;
    plasticRecycled: string;
    area: string;
  };
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Green Community Center",
    location: "Eco City, California",
    date: "2024",
    image: heroBricks,
    shortDescription: "A modern community center built entirely with eco-bricks, showcasing sustainable construction practices.",
    fullDescription: "This innovative community center represents a milestone in sustainable construction. Built using over 50,000 eco-bricks made from recycled plastic waste, the project diverted 25 tons of plastic from landfills. The building features state-of-the-art energy-efficient systems and serves as a model for future green construction projects. The interlocking brick system allowed for rapid construction while maintaining structural integrity and thermal efficiency.",
    stats: {
      bricksUsed: "50,000+",
      plasticRecycled: "25 tons",
      area: "5,000 sq ft",
    },
    highlights: [
      "LEED Gold Certified",
      "Zero-waste construction process",
      "Community gathering space for 200+ people",
      "Solar panel integration",
    ],
  },
  {
    id: 2,
    title: "Sustainable School Complex",
    location: "Portland, Oregon",
    date: "2023",
    image: heroBricks,
    shortDescription: "A multi-building school campus demonstrating the versatility of eco-brick construction in educational settings.",
    fullDescription: "This comprehensive school complex consists of three main buildings: a primary school, middle school, and administrative center. All structures were constructed using our eco-brick technology, totaling over 120,000 bricks. The project successfully recycled 60 tons of plastic waste while creating safe, durable learning environments. The bricks' natural insulation properties help maintain comfortable temperatures year-round, reducing energy costs by 40% compared to traditional construction.",
    stats: {
      bricksUsed: "120,000+",
      plasticRecycled: "60 tons",
      area: "15,000 sq ft",
    },
    highlights: [
      "Three-building campus",
      "40% energy cost reduction",
      "Safe learning environment for 500+ students",
      "Earthquake-resistant design",
    ],
  },
  {
    id: 3,
    title: "Affordable Housing Development",
    location: "Austin, Texas",
    date: "2024",
    image: heroBricks,
    shortDescription: "A residential development providing affordable, sustainable housing using eco-brick technology.",
    fullDescription: "This affordable housing development consists of 20 single-family homes, each built with eco-bricks. The project addresses both housing affordability and environmental sustainability. By using recycled materials, construction costs were reduced by 30%, making homeownership more accessible. Each home features modern amenities while maintaining a minimal carbon footprint. The development has become a model for sustainable affordable housing initiatives across the region.",
    stats: {
      bricksUsed: "200,000+",
      plasticRecycled: "100 tons",
      area: "40,000 sq ft",
    },
    highlights: [
      "20 affordable homes",
      "30% cost reduction",
      "Water-resistant construction",
      "Community garden integration",
    ],
  },
  {
    id: 4,
    title: "Eco-Warehouse Facility",
    location: "Seattle, Washington",
    date: "2023",
    image: heroBricks,
    shortDescription: "A large-scale warehouse facility showcasing the durability and scalability of eco-brick construction.",
    fullDescription: "This 30,000 square foot warehouse facility demonstrates that eco-bricks are suitable for large-scale commercial applications. The building houses distribution operations for a major retailer committed to sustainability. The construction used over 150,000 eco-bricks, recycling 75 tons of plastic waste. The facility features high ceilings, wide spans, and heavy-duty flooring—all made possible by the strength and versatility of our eco-brick system. The project achieved BREEAM certification for sustainable building practices.",
    stats: {
      bricksUsed: "150,000+",
      plasticRecycled: "75 tons",
      area: "30,000 sq ft",
    },
    highlights: [
      "BREEAM Certified",
      "Large-scale commercial application",
      "Heavy-duty load capacity",
      "Climate-controlled storage",
    ],
  },
  {
    id: 5,
    title: "Coastal Resilience Center",
    location: "Miami, Florida",
    date: "2024",
    image: heroBricks,
    shortDescription: "A coastal facility designed to withstand harsh marine environments using water-resistant eco-bricks.",
    fullDescription: "Built near the coastline, this resilience center serves as both a research facility and emergency response hub. The project showcases the water-resistant properties of eco-bricks, making them ideal for coastal and flood-prone areas. The building has withstood multiple hurricane seasons without damage, proving the durability of our materials. The facility houses research labs, meeting spaces, and emergency operations centers, all constructed with over 80,000 eco-bricks that recycled 40 tons of ocean-bound plastic waste.",
    stats: {
      bricksUsed: "80,000+",
      plasticRecycled: "40 tons",
      area: "8,000 sq ft",
    },
    highlights: [
      "Hurricane-resistant design",
      "Ocean-bound plastic recycling",
      "Emergency operations center",
      "Research facility integration",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isCarouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
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
                Our Projects
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Technology in
                <span className="opacity-80"> Action</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Explore real-world applications of our eco-brick technology across diverse construction projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Carousel */}
        <section ref={carouselRef} className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Featured Projects
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Building a Sustainable
                <span className="text-gradient"> Future</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See how our eco-bricks are transforming construction across various sectors and applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {projects.map((project, index) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isCarouselInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-primary-foreground text-sm mb-2">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                              {project.title}
                            </h3>
                            <p className="text-sm text-primary-foreground/90 line-clamp-2">
                              {project.shortDescription}
                            </p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{project.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              <span>{project.stats.area}</span>
                            </div>
                          </div>
                          <Button
                            onClick={() => setSelectedProject(project)}
                            className="w-full bg-gradient-hero hover:opacity-90"
                          >
                            Read More
                          </Button>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 lg:-left-12" />
                <CarouselNext className="-right-4 lg:-right-12" />
              </Carousel>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.date}</span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Project Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {selectedProject.stats.bricksUsed}
                    </div>
                    <div className="text-sm text-muted-foreground">Bricks Used</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {selectedProject.stats.plasticRecycled}
                    </div>
                    <div className="text-sm text-muted-foreground">Plastic Recycled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {selectedProject.stats.area}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Area</div>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;

