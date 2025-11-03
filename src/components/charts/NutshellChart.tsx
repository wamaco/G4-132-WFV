import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const NutshellChart = () => {
  const data = [
    { metric: 'Temporal Patterns', score: 92 },
    { metric: 'Spatial Distribution', score: 88 },
    { metric: 'Magnitude Correlation', score: 95 },
    { metric: 'Infrastructure Impact', score: 85 },
    { metric: 'Community Resilience', score: 78 },
    { metric: 'Recovery Time', score: 82 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="metric" stroke="hsl(var(--foreground))" />
        <PolarRadiusAxis stroke="hsl(var(--foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
          }}
        />
        <Radar
          name="Research Findings"
          dataKey="score"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default NutshellChart;
