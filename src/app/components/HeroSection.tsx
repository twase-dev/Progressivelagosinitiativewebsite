import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToNext = () => {
    const element = document.getElementById('vision');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 parallax-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E5A8E]/80 via-[#1E5A8E]/70 to-[#0F3A5F]/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1721907758701-d118fdd56b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWdvcyUyME5pZ2VyaWElMjBza3lsaW5lfGVufDF8fHx8MTc2NTc5MzA2MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Lagos Skyline"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight text-shadow-lg">
            LAGOS FORWARD
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl lg:text-3xl mb-4">
            A Collective Journey to 2027
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Beyond Rhetoric: Curating Lagos's Intellectual Capital
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('join');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#8DC63F] text-white px-8 py-4 rounded-md text-lg hover:bg-[#7AB82F] transition-colors inline-block shadow-xl"
          >
            RECLAIM VIDEO
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}