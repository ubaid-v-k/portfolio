import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Material UI', icon: '🎯' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🎸' },
      { name: 'Django REST', icon: '🔌' },
      { name: 'Flask', icon: '🧪' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'SQLite', icon: '📦' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: '📚' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📮' },
      { name: 'Vercel', icon: '▲' },
      { name: 'REST API', icon: '🔗' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-sm transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-card-light rounded-xl px-4 py-2 flex items-center gap-2 cursor-default hover:bg-white/10 transition-all"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-dark-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-8 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Clean Code', 'API Design', 'Responsive Design', 'Version Control', 'Agile Development'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-sm font-medium text-dark-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}