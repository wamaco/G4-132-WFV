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
      summary: 'Exploring why the Philippines faces recurring earthquakes and uneven resilience',
      content:
        'The Philippines lies along the Pacific Ring of Fire, making it highly prone to frequent and powerful earthquakes. From 2016 to 2025, PHIVOLCS recorded thousands of seismic events, some causing major damage in Mindanao and Abra. However, preparedness remains uneven because many local governments struggle with limited resources and weak enforcement of building codes. In line with SDG 13: Climate Action, this study analyzes earthquake frequency, magnitude, and Seismic Risk Potential (SRP) from 2024–2025 to identify high-risk, highly populated regions that should be prioritized for disaster resilience and adaptation.',
    },
    {
      id: 'questions',
      title: 'Research Questions',
      summary: 'Guiding questions that shape our data-driven analysis',
      content:
        'RQ1: How frequent and intense have earthquakes in the Philippines been from 2024 to 2025, and which regions were most affected?\nRQ2: How can patterns in earthquake frequency, magnitude, and Seismic Risk Potential (SRP) from 2024-2025 be used to identify regions that should be prioritized for disaster risk reduction and adaptation strategies?\nRQ3: Which highly-populated regions experience the highest SRP, and how can this inform climate resilience planning and resource allocation?',
    },
    {
      id: 'hypotheses',
      title: 'Hypotheses',
      summary: 'Testing whether some regions face higher seismic risks than others',
      content:
        'Null Hypothesis (H₀):\nThere is no significant relationship between earthquake frequency, magnitude, and Seismic Risk Potential (SRP) across Philippine regions, meaning earthquakes occur randomly, not region-specifically.\nAlternative Hypothesis (H₁):\nThere is a significant relationship between these factors, meaning some regions face consistently higher seismic risks, which can guide disaster risk reduction and resilience planning.',
    },
    {
      id: 'solution',
      title: 'Solution',
      summary: 'Building data-driven resilience through adaptation and preparedness',
      content:
        'Our study focuses on adaptation, not prevention because earthquakes can’t be stopped, but their impact can be reduced. We propose:\n\n• Upgrade early warning systems using PHIVOLCS and USGS real-time data.\n• Conduct regular community drills and training in high-density areas.\n• Enforce stricter building codes to strengthen infrastructure.\n• Use Seismic Risk Potential (SRP) analysis to help LGUs prioritize funding and resilience efforts.',
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
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light whitespace-pre-line">
                        {item.summary}
                      </p>
                      <p className="text-sm text-card-foreground font-light leading-relaxed whitespace-pre-line">
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
