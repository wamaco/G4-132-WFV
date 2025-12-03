import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ResultsSection = () => {
  const majorGroups = [
  {
    id: 'MGA',
    title: 'Key Findings & Interpretation',
    summary: 'Major patterns and what they mean',
    subgroups: [
      {
        id: 'MGA-A',
        title: 'A. Earthquake Frequency and Intensity (RQ1)',
        content: `
From 2024–2025, the Philippines recorded over 28,000 earthquakes. This number may sound big, but it’s normal for a country located along the Ring of Fire. The constant movement of tectonic plates makes small and medium earthquakes very common.

Most earthquakes were recorded in Caraga, Davao Region, and Eastern Visayas. These areas sit close to major faults and trenches, so the ground moves more frequently. Caraga alone had 9,165 earthquakes, while Region XI had around 4,860, including several magnitude 6+ events. Region XII reached the highest SRP value (7.1), meaning the shaking there can be more intense.

Interpretation:
These results match long-term PHIVOLCS data. The numbers don’t show any new threat or unusual pattern. Instead, they confirm that our most active regions stay active because of their natural geology, not because of errors in recording or sudden changes underground.
        `,
      },
      {
        id: 'MGA-B',
        title: 'B. SRP Modeling & Regional Risk Trends (RQ2)',
        content: `
The correlation test (Spearman’s ρ = 0.8336, p < 0.001) shows a strong positive relationship between average magnitude and average SRP. In simple terms, places that experience stronger shaking also tend to have higher risk levels in the model.

We used Spearman because the data wasn’t normally distributed, which means we needed a method that doesn’t assume a smooth, bell-shaped pattern.

Interpretation:
A strong correlation doesn’t mean stronger earthquakes automatically “cause” higher SRP. SRP depends on many things like soil type, depth of the quake, distance from the fault, and ground conditions. The result only tells us that the two rise together, not that one directly controls the other. It’s a helpful pattern, but not a perfect predictor.
        `,
      },
      {
        id: 'MGA-C',
        title: 'C. Population Exposure & Priority Zones (RQ3)',
        content: `
When we combined SRP with population size, some important details became clearer. Caraga had the highest Priority Score (0.68), meaning it has both strong shaking potential and communities that could be affected. Davao Region also ranks high because of strong shaking and its growing population. Calabarzon (Region IV-A), meanwhile, has lower SRP but a very large population, which still puts many people at risk even if the shaking is weaker.

Interpretation:
Earthquake risk is not just about how often or how strong earthquakes are. It’s also about how many people live in those areas and how exposed they are. This is why different regions require different preparedness plans because some need more structural protection, while others need better evacuation and community training.
        `,
      },
    ],
  },
  {
    id: 'MGB',
    title: 'Discussion, Limitations & Policy Implications',
    summary:
      'Broader meaning of the results, what the study couldn’t cover, and what leaders should do with the findings.',
    subgroups: [
      {
        id: 'MGB-A',
        title: 'A. Discussion',
        content: `
The data confirms what many researchers already understand about the Philippines: Mindanao and Eastern Visayas naturally face more earthquakes because of their geological position. The ground there is more active, so communities experience frequent shaking. On the other hand, Luzon does not get as many strong quakes, but it still faces high risk because of its population density and building conditions.

This means that a “one-size-fits-all” approach won’t work for disaster preparation. Mindanao needs stronger infrastructure, early-warning systems, and evacuation planning. Urban centers in Luzon need better construction standards, safer building designs, and stronger public awareness programs.
        `,
      },
      {
        id: 'MGB-B',
        title: 'B. Limitations',
        content: `
• Only includes data from 2024–2025, which may not capture long-term patterns  
• Vulnerability factors like poverty levels or building age were not included  
• Population data is static and doesn’t account for migration or urban growth  
• Soil type and liquefaction risks were not fully modeled  
• Some raw data required manual cleaning, which may introduce small errors  
• No spatial modeling or machine learning due to limited time

These limitations don’t make the results invalid, but they remind us that the findings should be used with caution and ideally supported by further research.
        `,
      },
      {
        id: 'MGB-C',
        title: 'C. Policy Implications & Call to Action',
        content: `
• Prioritize Mindanao and Eastern Visayas for disaster risk reduction (DRR) investments  
• Enforce stronger building codes in crowded regions like NCR and Calabarzon  
• Use SRP and population rankings as a guide when dividing DRR budgets  
• Include earthquake data in local government training, drills, and planning  
• Support community education so people know what to do before, during, and after earthquakes

These steps push for disaster plans that fit each region’s needs instead of using the same strategy everywhere.
        `,
      },
      {
        id: 'MGB-D',
        title: 'D. Final Conclusion',
        content: `
Earthquakes are unavoidable, but disasters don’t have to be. The Philippines will always experience tectonic activity, but strong preparation can greatly lessen the impact.

By combining seismic data, SRP patterns, and population exposure, this study highlights where attention should be focused. With smart policies, better infrastructure, and strong community awareness, the country can build resilience and protect more lives in the future.
        `,
      },
    ],
  },
];

  return (
    <section
      id="results"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/30 via-secondary/30 to-tertiary/30"
    >
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

        {/* Vertical layout */}
        <div className="flex flex-col gap-6">
          {majorGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem value={group.id} className="border-0">
                    <AccordionTrigger className="text-left text-xl font-medium text-card-foreground hover:text-primary hover:no-underline">
                      {group.title}
                    </AccordionTrigger>

                    <AccordionContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light italic whitespace-pre-line">
                        {group.summary}
                      </p>

                      <Accordion type="multiple" className="pl-4 border-l border-primary/40">
                        {group.subgroups.map((sub) => (
                          <AccordionItem key={sub.id} value={sub.id}>
                            <AccordionTrigger className="text-left text-base font-medium text-card-foreground hover:text-primary hover:no-underline">
                              {sub.title}
                            </AccordionTrigger>

                            <AccordionContent>
                              <p className="text-sm text-card-foreground font-light leading-relaxed whitespace-pre-line">
                                {sub.content}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
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
