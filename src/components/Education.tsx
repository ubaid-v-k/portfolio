import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Full Stack Developer Course',
    field: 'Python & Django',
    institution: 'Calicut',
    period: '2025 – Present',
    description: 'Comprehensive training in Python, Django, REST APIs, and modern web development practices.',
    current: true,
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Plus Two',
    institution: 'Kerala State Board',
    period: 'Completed 2023',
    description: 'Completed higher secondary education with focus on science and mathematics.',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-sm transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary-400 font-medium mb-2">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {edu.description}
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