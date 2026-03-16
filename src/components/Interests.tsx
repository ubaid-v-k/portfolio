import { motion } from 'framer-motion';
import { Globe, Lightbulb, Code2, Rocket } from 'lucide-react';

const interests = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Building modern, responsive web applications that solve real-world problems.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Learning New Technologies',
    description: 'Staying updated with the latest frameworks, tools, and best practices in tech.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Code2,
    title: 'Problem Solving & Coding Challenges',
    description: 'Tackling algorithmic challenges and finding elegant solutions to complex problems.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Technology Innovation',
    description: 'Exploring innovative ways to leverage technology for impactful solutions.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Interests() {
  return (
    <section id="interests" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
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
            Interests & <span className="gradient-text">Passions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            What drives my passion for technology and development
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center hover:glow-sm transition-all duration-500 group cursor-default"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <interest.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {interest.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}