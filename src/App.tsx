import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30" />
      
      {/* Main Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
}

export default App;
