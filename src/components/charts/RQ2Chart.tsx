import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RQ2Chart = () => {
  const data = [
    { magnitude: 3.5, damage: 12 },
    { magnitude: 4.2, damage: 28 },
    { magnitude: 4.8, damage: 45 },
    { magnitude: 5.1, damage: 67 },
    { magnitude: 5.5, damage: 89 },
    { magnitude: 5.9, damage: 112 },
    { magnitude: 6.2, damage: 156 },
    { magnitude: 6.5, damage: 203 },
    { magnitude: 6.8, damage: 267 },
    { magnitude: 7.1, damage: 342 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="magnitude"
          name="Magnitude"
          stroke="hsl(var(--foreground))"
          label={{ value: 'Magnitude', position: 'insideBottom', offset: -5 }}
        />
        <YAxis
          dataKey="damage"
          name="Infrastructure Damage"
          stroke="hsl(var(--foreground))"
          label={{ value: 'Damage Index', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
          }}
        />
        <Scatter name="Urban Areas" data={data} fill="hsl(var(--primary))" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RQ2Chart;
