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
        'Our dataset comprises 10 years of earthquake records from the Philippine Institute of Volcanology and Seismology (PHIVOLCS), including magnitude, location, depth, and impact assessments.',
    },
    {
      id: 'collection',
      question: 'How was data collected?',
      answer:
        'Data was collected from official PHIVOLCS reports, cross-referenced with international seismological databases, and validated through field surveys in affected communities.',
    },
    {
      id: 'sampling',
      question: 'What sampling method was used?',
      answer:
        'We employed comprehensive sampling covering all recorded seismic events magnitude 3.0 and above, ensuring geographic representation across all Philippine regions.',
    },
    {
      id: 'preprocessing',
      question: 'How was data preprocessed?',
      answer:
        'Data cleaning included removing duplicates, standardizing location coordinates, normalizing magnitude scales, and imputing missing values using statistical methods.',
    },
    {
      id: 'size',
      question: 'What is the dataset size?',
      answer:
        'The final dataset contains 8,247 earthquake records spanning 2013-2023, with 15 variables per record including temporal, spatial, and impact metrics.',
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
          8,247 earthquake records | 2013-2023 | PHIVOLCS & International Sources
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
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxample/pubhtml?widget=true&headers=false"
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
              onClick={() => window.open('https://docs.google.com/spreadsheets/d/example', '_blank')}
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
