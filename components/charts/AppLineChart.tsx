"use client";

import Title from "@/components//global/Title";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { lineChartConfig, lineChartData } from "@/lib/charts-data";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

function AppLineChart() {
  return (
    <>
      <Title>Ukkser Activity</Title>
      <ChartContainer config={lineChartConfig}>
        <LineChart
          accessibilityLayer
          data={lineChartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
}

export default AppLineChart;
