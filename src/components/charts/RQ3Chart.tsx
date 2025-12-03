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

const RQ3Chart = () => {
  const data = [
    { region: 'BARMM', srp2024: 446.53, srp2025: 583.67, pop2024: 147234728, pop2025: 299040627 },
    { region: 'CAR', srp2024: 292.42, srp2025: 161.53, pop2024: 84620835, pop2025: 104008554 },
    { region: 'NIR', srp2024: 263.37, srp2025: 356.69, pop2024: 666271912, pop2025: 975241866 },
    { region: 'R1', srp2024: 757.38, srp2025: 581.66, pop2024: 856784754, pop2025: 847103634 },
    { region: 'R2', srp2024: 717.92, srp2025: 716.24, pop2024: 690561082, pop2025: 867944766 },
    { region: 'R3', srp2024: 249.31, srp2025: 127.61, pop2024: 351996631, pop2025: 373461674 },
    { region: 'R4A', srp2024: 230.91, srp2025: 164.18, pop2024: 1787640302, pop2025: 2300191356 },
    { region: 'R4B', srp2024: 382.57, srp2025: 227.11, pop2024: 384714519, pop2025: 430592527 },
    { region: 'R5', srp2024: 563.93, srp2025: 433.98, pop2024: 434015970, pop2025: 855333051 },
    { region: 'R6', srp2024: 517.33, srp2025: 391.78, pop2024: 144390015, pop2025: 148533753 },
    { region: 'R7', srp2024: 143.25, srp2025: 100.40, pop2024: 255234543, pop2025: 306485452 },
    { region: 'R8', srp2024: 930.79, srp2025: 545.26, pop2024: 980368244, pop2025: 999014481 },
    { region: 'R9', srp2024: 197.07, srp2025: 585.08, pop2024: 239135570, pop2025: 258469446 },
    { region: 'R10', srp2024: 282.18, srp2025: 164.00, pop2024: 152224533, pop2025: 148628625 },
    { region: 'R11', srp2024: 1100.19, srp2025: 1086.62, pop2024: 1269523809, pop2025: 989240780 },
    { region: 'R12', srp2024: 2165.79, srp2025: 2091.54, pop2024: 261767512, pop2025: 208522215 },
    { region: 'R13', srp2024: 1141.85, srp2025: 325.93, pop2024: 3779682349, pop2025: 1910358656 },
  ];

  return (
    <ResponsiveContainer width="100%" height={450}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

        <XAxis dataKey="region" stroke="hsl(var(--foreground))" />

        {/* Left axis for SRP */}
        <YAxis yAxisId="left" stroke="hsl(var(--foreground))" />

        {/* Right axis for Population */}
        <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--foreground))" />

        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
          }}
        />

        <Legend />

        {/* Bars for SRP on left axis */}
        <Bar yAxisId="left" dataKey="srp2024" name="SRP 2024" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
        <Bar yAxisId="left" dataKey="srp2025" name="SRP 2025" fill="hsl(var(--secondary))" radius={[6, 6, 0, 0]} />

        {/* Lines for Population on right axis */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="pop2024"
          name="Population 2024"
          stroke="hsl(var(--tertiary))"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="pop2025"
          name="Population 2025"
          stroke="hsl(var(--foreground))"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RQ3Chart;