/**
 * Contact Form with EmailJS Integration
 * 
 * Setup Instructions:
 * 1. Install EmailJS: npm install @emailjs/browser
 * 2. Create a free account at https://www.emailjs.com/
 * 3. Create an email service (Gmail, Outlook, etc.)
 * 4. Create an email template with these variables:
 *    - {{to_email}} (will be set to info@realiblebv.com)
 *    - {{from_name}}
 *    - {{from_email}}
 *    - {{subject}}
 *    - {{message}}
 *    - {{reply_to}}
 * 5. Add environment variables to .env file:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@realiblebv.com",
    link: "mailto:info@realiblebv.com",
  },
  {
    icon: Phone,
    title: "Phone (Sweden)",
    content: "+46736167376",
    link: "tel:+46736167376",
  },
  {
    icon: Phone,
    title: "Phone (Netherlands)",
    content: "+31610139004",
    link: "tel:+31610139004",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Verdunplein 17, 5627, SZ Eindhoven, The Netherlands",
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try to use EmailJS if available
      let emailjs: any = null;
      try {
        // @ts-ignore - EmailJS may not be installed
        const emailjsModule = await import("@emailjs/browser");
        emailjs = emailjsModule.default || emailjsModule;
      } catch {
        // EmailJS package not installed, will use fallback
      }

      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is available and configured
      const isEmailJSConfigured = emailjs && 
        serviceId && 
        templateId && 
        publicKey && 
        serviceId !== "YOUR_SERVICE_ID" && 
        templateId !== "YOUR_TEMPLATE_ID" && 
        publicKey !== "YOUR_PUBLIC_KEY";

      if (isEmailJSConfigured) {
        // Use EmailJS to send email
        emailjs.init(publicKey);

        const response = await emailjs.send(serviceId, templateId, {
          to_email: "info@realiblebv.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        });

        if (response.status === 200) {
          toast.success("Message sent successfully!", {
            description: "We'll get back to you soon.",
          });

          // Reset form
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          return;
        } else {
          throw new Error("Email sending failed");
        }
      }

      // Fallback: Use mailto link
      const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:info@realiblebv.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      window.location.href = mailtoLink;
      
      toast.success("Opening email client...", {
        description: emailjs ? "EmailJS not configured. Please send the email from your email client." : "Please send the email from your email client.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Email sending failed:", error);
      
      // Fallback to mailto on error
      const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:info@realiblebv.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      toast.error("Failed to send message", {
        description: "Opening email client as fallback. You can also contact us directly at info@realiblebv.com",
        action: {
          label: "Open Email",
          onClick: () => {
            window.location.href = mailtoLink;
          },
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let's Build
                <span className="opacity-80"> Together</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Have questions about our services? Want to partner with us? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={formRef} className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Reach out to us through any of these channels. We're here to help you build a sustainable future.
                  </p>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-gradient-hero hover:opacity-90"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


