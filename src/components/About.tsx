import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Zap, Layers } from 'lucide-react';

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, well-documented code' },
  { icon: Server, title: 'REST APIs', desc: 'Building robust backend services' },
  { icon: Database, title: 'Database Design', desc: 'Optimized schemas & queries' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'Modern deployment pipelines' },
  { icon: Zap, title: 'Performance', desc: 'Fast, optimized applications' },
  { icon: Layers, title: 'Full Stack', desc: 'End-to-end development' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 glow">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card-light rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <item.icon className="text-primary-400" size={24} />
                      </div>
                      <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-dark-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -left-6 glass-card-light rounded-2xl px-4 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-medium gradient-text">3+ Years</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card-light rounded-2xl px-4 py-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-sm font-medium text-dark-300">Problem Solver</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              A Passionate <span className="gradient-text">Full Stack Developer</span>
            </h3>
            
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                I'm a dedicated Full Stack Developer with hands-on experience building scalable web applications using <span className="text-primary-400 font-medium">Python</span>, <span className="text-primary-400 font-medium">Django</span>, and <span className="text-primary-400 font-medium">React</span>. My journey in software development has equipped me with a comprehensive understanding of both frontend and backend technologies.
              </p>
              <p>
                I specialize in <span className="text-accent-400 font-medium">REST API development</span>, creating responsive frontend designs, architecting efficient database solutions, and deploying applications to the cloud. My approach emphasizes clean code practices, performance optimization, and building maintainable architecture that scales.
              </p>
              <p>
                Whether it's developing complex e-commerce platforms, project management systems, or educational applications, I bring a problem-solving mindset and attention to detail to every project. I'm always eager to learn new technologies and contribute to innovative solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="glass-card-light rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-dark-400 mt-1">Projects</div>
              </div>
              <div className="glass-card-light rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-xs text-dark-400 mt-1">Technologies</div>
              </div>
              <div className="glass-card-light rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-dark-400 mt-1">Years Learning</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}