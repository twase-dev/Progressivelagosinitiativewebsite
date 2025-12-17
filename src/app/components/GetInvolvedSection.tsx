import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function GetInvolvedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend/CRM
    console.log("Form submitted:", formData);
    toast.success(
      "Thank you for joining the movement! We will be in touch soon.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="join"
      className="relative py-24 bg-[#1E5A8E] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #8DC63F 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl sm:text-5xl mb-6">
            BE THE CHANGE
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Join the Progressive Lagos Initiative and be part of
            shaping Lagos's future. Your voice matters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-white text-2xl mb-6">
              Join the Coalition
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-white mb-2 block"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-white mb-2 block"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-white mb-2 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-white mb-2 block"
                >
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Tell us why you want to join the movement..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8DC63F] text-white hover:bg-[#7AB82F] text-lg py-6"
              >
                <Send className="mr-2" size={20} />
                VOLUNTEER
              </Button>
            </form>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3
                className="text-white text-2xl mb-6"
                id="contact"
              >
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail
                    className="text-[#8DC63F] mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <p className="text-white mb-1">Email</p>
                    <a
                      href="mailto:ProgressiveLagos2027@gmail.com"
                      className="text-white/70 hover:text-[#D4AF37] transition-colors"
                    >
                      ProgressiveLagos2027@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin
                    className="text-[#D4AF37] mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <p className="text-white mb-1">Office</p>
                    <p className="text-white/70">
                      PLI.Lagos.Office@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Share */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-white text-2xl mb-6">
                Share Our Vision
              </h3>
              <p className="text-white/70 mb-6">
                Help us spread the word about Progressive Lagos
                Initiative. Share on social media:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() =>
                    window.open(
                      "https://twitter.com/intent/tweet?text=Join the Progressive Lagos Initiative",
                      "_blank",
                    )
                  }
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/sharer/sharer.php?u=progressivelagos.org",
                      "_blank",
                    )
                  }
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/sharing/share-offsite/?url=progressivelagos.org",
                      "_blank",
                    )
                  }
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Mobile Apps Mockup */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#0D4D4D] rounded-lg p-6 border border-[#D4AF37]/30">
                <h4 className="text-[#D4AF37] mb-2">
                  Expand Horizons
                </h4>
                <p className="text-white/60 text-sm">
                  Learn more about our policy initiatives
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#0D4D4D] rounded-lg p-6 border border-[#D4AF37]/30">
                <h4 className="text-[#D4AF37] mb-2">
                  Scope Realities
                </h4>
                <p className="text-white/60 text-sm">
                  Explore data and research
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}