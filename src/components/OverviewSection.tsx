import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const OverviewSection = () => {
  const overviewItems = [
    {
      id: 'background',
      title: 'Background',
      summary: 'Understanding the seismic landscape of the Philippines',
      content:
        'The Philippines sits on the Pacific Ring of Fire, experiencing frequent seismic activity. This research examines a decade of earthquake data to understand patterns, impacts, and resilience strategies in vulnerable communities.',
    },
    {
      id: 'questions',
      title: 'Research Questions',
      summary: 'Key questions driving our investigation',
      content:
        'RQ1: What are the temporal and spatial patterns of earthquake occurrences? RQ2: How do magnitude distributions correlate with infrastructure damage? RQ3: What factors contribute to community resilience in high-risk areas?',
    },
    {
      id: 'hypotheses',
      title: 'Hypotheses',
      summary: 'Our predictions based on preliminary analysis',
      content:
        'H1: Earthquake frequency shows seasonal variation. H2: Higher magnitude events correlate with increased infrastructure damage in urban areas. H3: Communities with disaster preparedness programs demonstrate faster recovery times.',
    },
    {
      id: 'solution',
      title: 'Solution',
      summary: 'Data-driven approaches to climate resilience',
      content:
        'By analyzing comprehensive earthquake data, we propose evidence-based strategies for disaster preparedness, infrastructure planning, and community resilience building aligned with SDG 13: Climate Action.',
    },
  ];

  return (
    <section id="overview" className="relative py-16 lg:py-24 bg-secondary">
      <div className="absolute inset-0 bg-black/20 dark:bg-white/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-semibold text-neutral mb-12 text-center"
        >
          Overview
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem value={item.id} className="border-0">
                    <AccordionTrigger className="text-left text-lg font-medium text-card-foreground hover:text-primary hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light">
                        {item.summary}
                      </p>
                      <p className="text-sm text-card-foreground font-light leading-relaxed">
                        {item.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
