import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950 border-t border-white/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">U</span>
              </div>
              <span className="font-bold gradient-text">Muhammed Ubaid V K</span>
            </motion.div>
            <p className="text-dark-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

         

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/ubaid-v-k"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/muhammed-ubaid-bb128437a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:muhammedubaidvk@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Scroll to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center justify-center shadow-lg hover:shadow-primary-500/25 transition-all z-40"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}