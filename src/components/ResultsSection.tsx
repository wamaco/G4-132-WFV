import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ResultsSection = () => {
  const results = [
    {
      id: 'findings',
      title: 'Key Findings',
      summary: 'Significant patterns and correlations discovered',
      content:
        'Our analysis revealed three major findings: (1) Earthquake frequency peaks during monsoon season, suggesting potential climate-seismic interactions. (2) Urban areas with magnitude 6.0+ events show 3.5x higher infrastructure damage compared to rural areas. (3) Communities with active disaster preparedness programs demonstrate 40% faster recovery times and 25% lower casualty rates.',
    },
    {
      id: 'implications',
      title: 'Implications',
      summary: 'Impact on policy and future research',
      content:
        'These findings support evidence-based policy recommendations for: enhanced building codes in high-risk urban zones, seasonal preparedness campaigns aligned with monsoon patterns, and expanded community resilience programs. Future research should investigate climate-seismic linkages and long-term socioeconomic recovery patterns.',
    },
  ];

  return (
    <section id="results" className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/30 via-secondary/30 to-tertiary/30">
      <div className="absolute inset-0 bg-black/20 dark:bg-white/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-semibold text-neutral mb-12 text-center"
        >
          Results
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg h-full hover:scale-[1.02] transition-transform duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem value={result.id} className="border-0">
                    <AccordionTrigger className="text-left text-xl font-medium text-card-foreground hover:text-primary hover:no-underline">
                      {result.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light italic">
                        {result.summary}
                      </p>
                      <p className="text-sm text-card-foreground font-light leading-relaxed">
                        {result.content}
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

export default ResultsSection;
