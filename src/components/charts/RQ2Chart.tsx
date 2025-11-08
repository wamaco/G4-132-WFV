import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RQ2Chart = () => {
  const data = [
    { region: "REGION XIII", priority: 0.68 },
    { region: "REGION XI", priority: 0.57 },
    { region: "REGION XII", priority: 0.42 },
    { region: "REGION VIII", priority: 0.34 },
    { region: "REGION II", priority: 0.31 },
    { region: "REGION I", priority: 0.29 },
    { region: "REGION IV-A", priority: 0.19 },
    { region: "REGION V", priority: 0.19 },
    { region: "NIR", priority: 0.17 },
    { region: "REGION VI", priority: 0.14 },
    { region: "BARMM", priority: 0.13 },
    { region: "REGION IV-B", priority: 0.12 },
    { region: "REGION IX", priority: 0.07 },
    { region: "REGION X", priority: 0.07 },
    { region: "REGION III", priority: 0.06 },
    { region: "CAR", priority: 0.05 },
    { region: "REGION VII", priority: -0.01 },
  ];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          type="number"
          dataKey="priority"
          stroke="hsl(var(--foreground))"
          label={{
            value: "Priority Score",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          type="category"
          dataKey="region"
          stroke="hsl(var(--foreground))"
          width={100}
        />
        <Tooltip
          cursor={{ fill: "hsl(var(--muted))" }}
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            color: "hsl(var(--card-foreground))",
          }}
          formatter={(value) => [value.toFixed(2), "Priority Score"]}
        />
        <Bar dataKey="priority" fill="hsl(var(--primary))" radius={[4, 4, 4, 4]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RQ2Chart;
