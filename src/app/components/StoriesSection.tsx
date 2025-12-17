import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Thelonious Sumbu',
    location: 'Yaba, Lagos 16.9',
    quote: 'Natoque no trisquare para est sit nisi erat amet, ruo Laboris sit sit non rhort lectus diam, ex quis convallis porttitor, orci amet turpis dictue errt.',
    image: 'https://i.pravatar.cc/150?img=15',
  },
  {
    name: 'Yewande Lawson',
    location: 'Lekki, Lagos',
    quote: 'Etiam massa posuere molestie maecen nibh telbus quam etiam sem aliquam bibendum con quis non vulputate duis.',
    image: 'https://i.pravatar.cc/150?img=20',
  },
];

const impactStats = [
  { number: '200', label: '202 Volunteers' },
  { number: '28', label: '28 Communities' },
];

export function StoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="stories" className="relative py-24 bg-gradient-to-b from-white to-[#F5F5F5] overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#1E5A8E] text-4xl sm:text-5xl mb-16 text-center"
        >
          Stories from the Movement
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#1E5A8E] rounded-lg p-6 shadow-xl"
              >
                <div className="flex items-start mb-4">
                  <Quote className="text-[#8DC63F] mr-4 flex-shrink-0" size={32} />
                  <p className="text-white/90 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8DC63F] mr-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stats & Community Images */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-[#1E5A8E]/10">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#8DC63F] mr-2" />
                    <span className="text-[#1E5A8E] text-3xl">{stat.number}</span>
                  </div>
                  <p className="text-[#1E5A8E]/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Community Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[25, 28].map((img, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                  <ImageWithFallback
                    src={`https://i.pravatar.cc/400?img=${img}`}
                    alt="Community member"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E5A8E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="text-white">Yewande Lawson</h4>
                      <p className="text-white/80 text-sm">Etiam massa posuere rhoncus maecenas niben tellus quam sit</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
