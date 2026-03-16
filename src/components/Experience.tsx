import { motion } from 'framer-motion';
import { Server, Database, GitBranch, Rocket, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    icon: Server,
    title: 'REST API Development',
    description: 'Built robust and scalable REST APIs using Django REST Framework, implementing authentication, serialization, and complex business logic.',
    highlights: ['JWT Authentication', 'API Versioning', 'Rate Limiting', 'Documentation'],
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Designed and optimized relational database schemas using PostgreSQL and SQLite, ensuring data integrity and query performance.',
    highlights: ['Schema Design', 'Query Optimization', 'Migrations', 'Indexing'],
  },
  {
    icon: GitBranch,
    title: 'Version Control & Collaboration',
    description: 'Utilized Git and GitHub for collaborative development, implementing branching strategies and code review processes.',
    highlights: ['Branch Management', 'Pull Requests', 'Code Review', 'CI/CD'],
  },
  {
    icon: Rocket,
    title: 'Cloud Deployment',
    description: 'Deployed applications using modern platforms like Vercel, ensuring high availability and optimal performance.',
    highlights: ['Vercel', 'Environment Config', 'Auto-scaling', 'Monitoring'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
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
            Experience <span className="gradient-text">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Key areas of expertise and professional achievements
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-sm transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <exp.icon className="text-primary-400" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 text-xs text-dark-300"
                      >
                        <CheckCircle2 size={12} className="text-primary-400" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">10+</div>
              <div className="text-sm text-dark-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">20+</div>
              <div className="text-sm text-dark-400">APIs Developed</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">5+</div>
              <div className="text-sm text-dark-400">Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-sm text-dark-400">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}