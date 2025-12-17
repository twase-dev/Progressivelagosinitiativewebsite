import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Building2, Leaf, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Education & Innovation',
    description: 'Lorem ips am tristique sed tellus ob odio risus lobortis, tempus lorem consectetuer nullam facilisis donec sit amet gravida tellus, arcu eut non turpis pharetra turpis.',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Building2,
    title: 'Infrastructure & Sustainability',
    description: 'Lorem ips am tristique sed tellus ob odio risus lobortis, tempus lorem consectetuer nullam facilisis donec sit amet gravida tellus.',
    image: 'https://images.unsplash.com/photo-1626260375275-8cc2b344378e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWdvcyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2NTg4NTg5MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Leaf,
    title: 'Infrastructure & Transparency',
    description: 'Lorem ips verum dolor sit amet nisi elit cras facilisis donec sit amet gravida tellus, arcu eut non turpis pharetra nullam facilisis donec.',
    image: 'https://images.unsplash.com/photo-1764012956893-fd788aed5a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWdvcyUyMGNpdHlzY2FwZSUyMG1vZGVybnxlbnwxfHx8fDE3NjU4ODU4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function PolicyPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="vision" className="relative py-24 bg-gradient-to-b from-[#F5F5F5] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0D4D4D 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1E5A8E] text-4xl sm:text-5xl mb-6">Our Vision</h2>
              <p className="text-[#1E5A8E]/70 text-lg leading-relaxed mb-6">
                The core tenet diuturing your guid ob amissa and auspice sint deleniti ob essenticus. Cred porttitor, enun compure sed neque sint deleniti.
              </p>
              <p className="text-[#1E5A8E]/70 text-lg leading-relaxed">
                Tellus dictue lacinia expet consectetuer pede dictue ipsam et semper comple sit nuis comple compre expet eget arpe sed dictue arpit.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJvZmVzc2lvbmFscyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1ODg1ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Policy Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-[#1E5A8E] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E5A8E] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#8DC63F] p-3 rounded-lg mr-4">
                      <pillar.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white text-xl">{pillar.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
