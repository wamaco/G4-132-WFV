import { ArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-12 h-12 shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </Button>
    </motion.div>
  );
};

export default BackToTop;
