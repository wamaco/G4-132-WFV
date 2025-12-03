import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'data', label: 'Data' },
    { id: 'methods', label: 'Methods' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center cursor-pointer"
          aria-label={`Scroll to ${section.label}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeIndex === index
                ? 'bg-primary border-primary scale-125'
                : 'bg-transparent border-gray-400 hover:border-primary'
            }`}
            animate={{
              scale: activeIndex === index ? 1.25 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <span className="absolute left-6 whitespace-nowrap text-xs font-normal text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-card px-2 py-1 rounded-md shadow-md">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollProgress;
