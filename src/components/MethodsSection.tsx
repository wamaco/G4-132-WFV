import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RQ1Chart from './charts/RQ1Chart';
import RQ2Chart from './charts/RQ2Chart';
import RQ3Chart from './charts/RQ3Chart';
import NutshellChart from './charts/NutshellChart';

const MethodsSection = () => {
  return (
    <section id="methods" className="relative py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-semibold text-foreground mb-12 text-center"
        >
          Methods & Analysis
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Tabs defaultValue="rq1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-card">
              <TabsTrigger value="rq1" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                RQ1
              </TabsTrigger>
              <TabsTrigger value="rq2" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                RQ2
              </TabsTrigger>
              <TabsTrigger value="rq3" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                RQ3
              </TabsTrigger>
              <TabsTrigger value="nutshell" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Nutshell
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rq1">
              <Card className="bg-card p-6 rounded-xl border-0 shadow-lg">
                <h3 className="text-xl font-medium text-card-foreground mb-4">
                  Temporal & Spatial Patterns
                </h3>
                <RQ1Chart />
              </Card>
            </TabsContent>

            <TabsContent value="rq2">
              <Card className="bg-card p-6 rounded-xl border-0 shadow-lg">
                <h3 className="text-xl font-medium text-card-foreground mb-4">
                  Magnitude vs Infrastructure Damage
                </h3>
                <RQ2Chart />
              </Card>
            </TabsContent>

            <TabsContent value="rq3">
              <Card className="bg-card p-6 rounded-xl border-0 shadow-lg">
                <h3 className="text-xl font-medium text-card-foreground mb-4">
                  Community Resilience Factors
                </h3>
                <RQ3Chart />
              </Card>
            </TabsContent>

            <TabsContent value="nutshell">
              <Card className="bg-card p-6 rounded-xl border-0 shadow-lg">
                <h3 className="text-xl font-medium text-card-foreground mb-4">
                  Key Findings Overview
                </h3>
                <NutshellChart />
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border-0 shadow-lg">
            <h3 className="text-xl font-medium text-card-foreground mb-4">
              Hypothesis Testing
            </h3>
            <p className="text-card-foreground font-light leading-relaxed mb-4">
            To validate our hypotheses, we first tested the data for normality using Q–Q plots.
            Since the dataset showed non-normal behavior, a non-parametric approach was applied
            using <strong>Spearman’s Rank Correlation Coefficient</strong>.
            </p>

            <p className="text-card-foreground font-light leading-relaxed mb-4">
            Results showed a strong positive correlation (<strong>ρ = 0.8336</strong>) between
            average earthquake magnitudes (2024–2025) and regional Seismic Risk Potential (SRP),
            with a <strong>p-value = 6.03 × 10⁻⁵</strong>, which is below the 0.05 significance level.
            This led to the <strong>rejection of the null hypothesis</strong>.
            </p>

            <p className="text-card-foreground font-light leading-relaxed mb-4">
            In short, some regions consistently face higher seismic risks,
            supporting the idea that earthquakes in the Philippines are not random but region-specific.
            These insights can inform <strong>Disaster Risk Reduction (DRR)</strong> priorities
            and contribute to <strong>SDG 13: Climate Action</strong>.
            </p>

            <p className="text-muted-foreground text-sm italic">
            H₀: No significant relationship between earthquake trends and SRP.<br />
            H₁: A significant relationship exists, indicating regional differences in seismic risk.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodsSection;
