import { ResponsiveContainer } from 'recharts';
import nutshellImage from './nutshell.jpg';

const NutshellChart = () => {
  return (
    <div className="w-full">
      {/* Image */} 
      <ResponsiveContainer width="100%" height={400}>
        <img
          src={nutshellImage}
          alt="Nutshell Chart"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </ResponsiveContainer>

      {/* Caption */}
      <p className="mt-3 text-[0.95rem] leading-snug text-card-foreground">
        This nutshell plot illustrates how earthquake intensity and Seismic Risk Potential (SRP) 
        vary across Philippine regions. The left graph shows the results from 2024, while the 
        right graph shows the results for 2025. We used a choropleth map and a 2D color map 
        to shade regions based on their combined average earthquake magnitude and SRP. Lighter 
        yellow indicates higher earthquake impact and higher risk, while purple tones represent 
        lower values. Comparing both plots reveals that Region XII (Caraga) consistently displayed 
        extreme magnitude of up to 3.0 and SRP scores of up to 2500. Regions with high values also 
        include Region XIII and Region XI. Overall, this nutshell helps identify which areas require 
        urgent DRR attention and guides strategic climate resilience planning.
      </p>
    </div>
  );
};

export default NutshellChart;
