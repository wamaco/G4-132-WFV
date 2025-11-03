import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-1 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-white/15" />
      
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://c.animaapp.com/mhiq68cpq5CgYE/img/ai_1.png"
          alt="earthquake inspired abstract texture"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral mb-6"
        >
          Paulit-ulit na Pagsubok
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl lg:text-2xl text-neutral font-light mb-12"
        >
          A Decade of Earthquakes & Resilience in the Philippines
        </motion.p>

        <motion.button
          onClick={scrollToOverview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="cursor-pointer"
          aria-label="Scroll to overview"
        >
          <ChevronDownIcon className="w-12 h-12 text-neutral animate-bounce mx-auto" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
