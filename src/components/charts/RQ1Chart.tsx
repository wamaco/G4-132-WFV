import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RQ1Chart = () => {
  const data = [
    { month: 'Jan', frequency: 45, magnitude: 4.2 },
    { month: 'Feb', frequency: 38, magnitude: 4.0 },
    { month: 'Mar', frequency: 52, magnitude: 4.5 },
    { month: 'Apr', frequency: 48, magnitude: 4.3 },
    { month: 'May', frequency: 61, magnitude: 4.7 },
    { month: 'Jun', frequency: 73, magnitude: 5.1 },
    { month: 'Jul', frequency: 82, magnitude: 5.3 },
    { month: 'Aug', frequency: 78, magnitude: 5.2 },
    { month: 'Sep', frequency: 69, magnitude: 4.9 },
    { month: 'Oct', frequency: 58, magnitude: 4.6 },
    { month: 'Nov', frequency: 51, magnitude: 4.4 },
    { month: 'Dec', frequency: 43, magnitude: 4.1 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
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
        <Line
          type="monotone"
          dataKey="frequency"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          name="Earthquake Frequency"
        />
        <Line
          type="monotone"
          dataKey="magnitude"
          stroke="hsl(var(--secondary))"
          strokeWidth={2}
          name="Avg Magnitude"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RQ1Chart;
