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
    content: `
    1. Earthquake Frequency and Intensity (RQ 1)
    From 2024–2025, the Philippines experienced over 28,000 recorded earthquakes, with notable clustering in Region XIII (Caraga), Region XI (Davao), and Region VIII (Eastern Visayas).

    • Region XIII (Caraga) recorded 9,165 events, the highest nationwide, and the maximum magnitude of 6.8.
    • Region XI (Davao) followed with 4,860 quakes, including the strongest overall magnitude of 6.7, while Region XII (SOCCSKSARGEN) had the highest single SRP value (7.1).
    These patterns show that Mindanao and Eastern Visayas consistently experience both high frequency and high intensity seismic activity.

    2. Seismic Risk Potential and Regional Trends (RQ 2)
    After standardizing and analyzing earthquake records, the Spearman’s Rank Correlation test revealed a strong positive relationship between average magnitude and average SRP (ρ = 0.8336, p < 0.001).
    → Regions with stronger quakes also show significantly higher SRP scores.
    → Since data were not normally distributed, this confirms that risk is region-specific, not random.

    3. Population Exposure and Priority Risk Zones (RQ 3)
    When SRP values were cross-referenced with PSA population data:

    • Region XIII (Caraga), despite moderate population, scored the highest Priority Score (0.68) due to extreme seismic activity.
    • Region XI (Davao) balanced high SRP and dense population, making it a critical priority for DRR funding.
    • Metro-adjacent regions like IV-A (Calabarzon) showed lower SRP but large populations, implying that infrastructure resilience rather than seismic exposure should be the main focus there.`,
      },
      {
        id: 'implications',
        title: 'Implications',
        summary: 'Impact on policy and future research',
        content: `
    1. Targeted Disaster Risk Reduction (DRR)
    The strong correlation between magnitude and SRP means resilience planning must be regionalized. Mindanao and Eastern Visayas should receive priority DRR investments such as improved early-warning systems, evacuation planning, and quake-resistant infrastructure.

    2. Data-Driven Adaptation Strategies
    SRP modeling allows LGUs to rank provinces by risk, enabling efficient allocation of climate-resilience budgets and PHIVOLCS-guided response protocols.

    3. Reinforcing SDG 13: Climate Action
    These findings directly advance SDG 13.1 (“strengthen resilience and adaptive capacity to climate-related hazards”) by turning seismic data into actionable adaptation policies.

    4. Bridging the Preparedness Gap
    While quake frequency is unavoidable, vulnerability isn’t. Regions with both high SRP and high population, especially Davao, Caraga, and Eastern Visayas, must close the preparedness gap through community drills, building code enforcement, and localized education campaigns.`,
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
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light italic whitespace-pre-line">
                        {result.summary}
                      </p>
                      <p className="text-sm text-card-foreground font-light leading-relaxed whitespace-pre-line">
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
