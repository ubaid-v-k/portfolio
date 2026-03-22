import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, ExternalLink } from 'lucide-react';
import profileImage from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light text-sm text-dark-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text text-glow">Muhammed Ubaid V K</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-dark-300 mb-6"
            >
              Full Stack Python Django Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-dark-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable, high-performance web applications with Python, Django, and modern frontend technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl glass-card-light text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="https://github.com/ubaid-v-k"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-card-light text-dark-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/muhammed-ubaid-bb128437a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-card-light text-dark-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:muhammedubaidvk@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-card-light text-dark-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-sm text-dark-400 justify-center lg:justify-start"
            >
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                Malappuram, Kerala, India
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                +91 9497180892
              </span>
            </motion.div>
          </div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 blur-2xl opacity-40"
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Profile photo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-90 lg:h-110 rounded-[2.5rem] p-1 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 glow shadow-2xl overflow-hidden"
  
              >
                <img
                  src={profileImage}
                  alt="Muhammed Ubaid V K"
                 className="w-full h-full object-cover object-[center_25%] scale-105"
  />

              </motion.div>

              {/* Floating accents */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card-light rounded-xl p-3 shadow-lg border border-primary-500/20"
                animate={{ rotate: [0, 5, 0, -5, 0], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold bg-green-500/20 text-green-400 px-1 rounded">Dj</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card-light rounded-xl p-3 shadow-lg border border-accent-500/20"
                animate={{ rotate: [0, -5, 0, 5, 0], y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-12 glass-card-light rounded-xl p-3 shadow-lg border border-primary-500/20"
                animate={{ x: [0, 5, 0], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-dark-400 hover:text-white transition-colors"
          >
            <span className="text-xs">Scroll down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}