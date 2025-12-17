import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0A3838] text-white py-12 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Progressive Lagos Initiative</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Curating Lagos's intellectual capital for a progressive future. Join us in our journey to 2027.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white text-sm transition-colors">
                  Our Vision
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white text-sm transition-colors">
                  The Coalition
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white text-sm transition-colors">
                  Stories
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white text-sm transition-colors">
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:ProgressiveLagos2027@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  ProgressiveLagos2027@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:PLI.Lagos.Office@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  PLI.Lagos.Office@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                href="#"
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                href="#"
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                href="#"
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                href="#"
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                href="#"
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 Progressive Lagos Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                INEC Compliance
              </button>
            </div>
          </div>
          
          {/* Compliance Statement */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              Progressive Lagos Initiative is a registered political organization in accordance with Nigerian electoral laws and INEC regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
