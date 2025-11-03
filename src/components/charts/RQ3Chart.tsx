import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RQ3Chart = () => {
  const data = [
    { factor: 'Preparedness Programs', impact: 85 },
    { factor: 'Early Warning Systems', impact: 78 },
    { factor: 'Building Codes', impact: 72 },
    { factor: 'Community Training', impact: 68 },
    { factor: 'Emergency Resources', impact: 65 },
    { factor: 'Communication Networks', impact: 61 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" stroke="hsl(var(--foreground))" />
        <YAxis dataKey="factor" type="category" stroke="hsl(var(--foreground))" width={150} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
          }}
        />
        <Legend />
        <Bar dataKey="impact" fill="hsl(var(--secondary))" name="Resilience Impact Score" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RQ3Chart;
