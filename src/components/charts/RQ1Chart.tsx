import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
} from 'recharts';

const RQ1Chart = () => {
  const data = [
    { region: 'BARMM', normEq: 0.02, normAvg: 0.35, normMax: 0.27 },
    { region: 'CAR', normEq: 0.06, normAvg: 0.17, normMax: 0.17 },
    { region: 'NIR', normEq: 0.06, normAvg: 0.44, normMax: 0.33 },
    { region: 'REGION I', normEq: 0.15, normAvg: 0.61, normMax: 0.53 },
    { region: 'REGION II', normEq: 0.17, normAvg: 0.66, normMax: 0.57 },
    { region: 'REGION III', normEq: 0.06, normAvg: 0.17, normMax: 0.53 },
    { region: 'REGION IV-A', normEq: 0.14, normAvg: 0.06, normMax: 0.47 },
    { region: 'REGION IV-B', normEq: 0.13, normAvg: 0.26, normMax: 0.33 },
    { region: 'REGION IX', normEq: 0.03, normAvg: 0.16, normMax: 0.43 },
    { region: 'REGION V', normEq: 0.10, normAvg: 0.41, normMax: 0.33 },
    { region: 'REGION VI', normEq: 0.01, normAvg: 0.48, normMax: 0.20 },
    { region: 'REGION VII', normEq: 0.01, normAvg: 0.00, normMax: 0.00 },
    { region: 'REGION VIII', normEq: 0.27, normAvg: 0.61, normMax: 0.57 },
    { region: 'REGION X', normEq: 0.00, normAvg: 0.33, normMax: 0.03 },
    { region: 'REGION XI', normEq: 0.52, normAvg: 1.00, normMax: 0.87 },
    { region: 'REGION XII', normEq: 0.03, normAvg: 0.55, normMax: 1.00 },
    { region: 'REGION XIII', normEq: 1.00, normAvg: 0.41, normMax: 0.90 },
  ];

  return (
    <ResponsiveContainer width="100%" height={450}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="region"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={80}
          stroke="hsl(var(--foreground))"
        />
        <YAxis stroke="hsl(var(--foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
          }}
        />
        <Legend />

        {/* Bars for normalized magnitudes */}
        <Bar
          dataKey="normAvg"
          name="Norm. Avg Magnitude"
          fill="hsl(var(--primary))"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="normMax"
          name="Norm. Max Magnitude"
          fill="hsl(var(--secondary))"
          radius={[6, 6, 0, 0]}
        />

        {/* Line for normalized earthquake count */}
        <Line
          type="monotone"
          dataKey="normEq"
          name="Norm. EQ Count"
          stroke="hsl(var(--tertiary))"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RQ1Chart;