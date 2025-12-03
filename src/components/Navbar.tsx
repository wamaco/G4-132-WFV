import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '../stores/themeStore';
import { useNavigationStore } from '../stores/navigationStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const { isMenuOpen, setMenuOpen, activeSection, setActiveSection } = useNavigationStore();
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'data', label: 'Data' },
    { id: 'methods', label: 'Methods & Analysis' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="bg-transparent text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </Button>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-normal transition-colors duration-200 cursor-pointer hover:text-primary ${
                    activeSection === section.id ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div className="lg:hidden">
              <Button
                onClick={() => setMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="icon"
                className="bg-transparent text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-8 space-y-6 mt-16">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-base font-normal transition-colors duration-200 cursor-pointer hover:text-primary ${
                      activeSection === section.id ? 'text-primary font-medium' : 'text-card-foreground'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
