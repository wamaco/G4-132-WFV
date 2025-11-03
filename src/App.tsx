import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import DataSection from './components/DataSection';
import MethodsSection from './components/MethodsSection';
import ResultsSection from './components/ResultsSection';
import AboutSection from './components/AboutSection';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { useThemeStore } from './stores/themeStore';

function App() {
  const { isDark } = useThemeStore();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowBackToTop(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <ScrollProgress />
      <main>
        <HeroSection />
        <OverviewSection />
        <DataSection />
        <MethodsSection />
        <ResultsSection />
        <AboutSection />
      </main>
      {showBackToTop && <BackToTop />}
    </div>
  );
}

export default App;
