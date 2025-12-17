import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/9d0c80f8e27362fe5dc11c21a0fbd82dd96acdc6.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1E5A8E]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="PLI Logo" className="h-14 w-14" />
            <span className="text-white text-xl hidden sm:block">PLI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('vision')} className="text-white hover:text-[#8DC63F] transition-colors">
              Our Vision
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-[#8DC63F] transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('stories')} className="text-white hover:text-[#8DC63F] transition-colors">
              Stories
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#8DC63F] transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('join')}
            className="hidden md:block bg-[#8DC63F] text-white px-6 py-2.5 rounded-md hover:bg-[#7AB82F] transition-colors"
          >
            JOIN THE MOVEMENT
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('vision')} className="text-white hover:text-[#8DC63F] text-left">
                Our Vision
              </button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-[#8DC63F] text-left">
                Team
              </button>
              <button onClick={() => scrollToSection('stories')} className="text-white hover:text-[#8DC63F] text-left">
                Stories
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#8DC63F] text-left">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('join')}
                className="bg-[#8DC63F] text-white px-6 py-2.5 rounded-md hover:bg-[#7AB82F] transition-colors text-left"
              >
                JOIN THE MOVEMENT
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
