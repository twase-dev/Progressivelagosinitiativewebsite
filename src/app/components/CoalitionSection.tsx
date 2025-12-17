import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  { name: 'Bernard Sobowale', role: 'Policy Advisor' },
  { name: 'Eniola Ajayi', role: 'Economic Strategist' },
  { name: 'Chioma Okeke', role: 'Infrastructure Lead' },
  { name: 'Ngozi Nwosu', role: 'Social Development' },
  { name: 'Babatunde Ogunleye', role: 'Technology & Innovation' },
  { name: 'Adenike Adeleke', role: 'Community Relations' },
];

const roadmap = [
  { phase: 'Hope Nova', year: '21' },
  { phase: 'Awaken the Mind', year: '22' },
  { phase: 'Growing Discourse', year: '23' },
  { phase: 'Sentencate to Nation', year: '24' },
];

export function CoalitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="relative py-24 bg-[#1E5A8E] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#8DC63F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F7941D]/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-white text-4xl sm:text-5xl mb-12 text-center">The Coalition</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-[#8DC63F] shadow-lg">
                  <ImageWithFallback
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white mb-1">{member.name}</h4>
                <p className="text-white/60 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-white text-4xl sm:text-5xl mb-12 text-center">The Road Ahead</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#8DC63F]/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#8DC63F] flex items-center justify-center text-white mr-4">
                    {index + 1}
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-white/40 text-sm mr-2">'</span>
                    <span className="text-[#8DC63F] text-xl">{item.year}</span>
                  </div>
                </div>
                <h4 className="text-white text-lg">{item.phase}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
