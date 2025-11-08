import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const DataSection = () => {
  const faqItems = [
    {
      id: 'dataset',
      question: 'What is the dataset?',
      answer:
        'The dataset combines earthquake records from PHIVOLCS and the U.S. Geological Survey (USGS), covering all seismic events within and around the Philippine archipelago from January 2013 to December 2023. Each record includes event ID, date, time, location, depth, and magnitude.',
    },
    {
      id: 'collection',
      question: 'How was data collected?',
      answer:
        'Data was retrieved through PHIVOLCS’ public earthquake catalog and USGS Earthquake Hazards API, then merged and cleaned (tabulated) to remove duplicates. Regional data alignment was based on PSA administrative divisions for consistency in analysis.',
    },
    {
      id: 'sampling',
      question: 'What sampling method was used?',
      answer:
        'A purposive sampling approach was applied: only earthquakes within Philippine regional boundaries and with a magnitude ≥ 1 were included. This ensures the dataset focuses on events with measurable local impact.',
    },
    {
      id: 'preprocessing',
      question: 'How was data preprocessed?',
      answer:
        'Raw data was normalized and formatted in Excel and Python to standardize magnitudes, filter null coordinates, and classify regions by their Seismic Risk Potential (SRP). Outliers were retained to reflect real seismic variability.',
    },
    {
      id: 'size',
      question: 'What is the dataset size?',
      answer:
        'The dataset contains 28,536 earthquake records spanning 2024–2025 across all 18 Philippine regions. For the study’s focused analysis, these projections were generated using PHIVOLCS trend data and regional SRP indicators.',
    },
  ];

  return (
    <section id="data" className="relative py-16 lg:py-24 bg-gradient-2">
      <div className="absolute inset-0 bg-black/25 dark:bg-white/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-semibold text-neutral mb-8 text-center"
        >
          Data
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral font-light mb-12"
        >
          28,536 earthquake records | 2024-2025 | PHIVOLCS & International Sources
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://docs.google.com/spreadsheets/d/18VFFMKlerqq_RzcE4RGBcNhUG8ieDFms_naPvtiL9bs/edit?usp=sharing"
                className="w-full h-full border-0"
                title="Earthquake Dataset"
                loading="lazy"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.id} value={item.id} className={index === faqItems.length - 1 ? 'border-0' : ''}>
                  <AccordionTrigger className="text-left text-base font-medium text-card-foreground hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-card-foreground font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-warning/20 backdrop-blur-sm p-6 rounded-xl border-2 border-warning inline-block">
            <p className="text-card-foreground font-light mb-4">
              Access the complete dataset for detailed analysis
            </p>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open('https://docs.google.com/spreadsheets/d/18VFFMKlerqq_RzcE4RGBcNhUG8ieDFms_naPvtiL9bs/edit?usp=sharing', '_blank')}
            >
              View Full Dataset
              <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSection;
