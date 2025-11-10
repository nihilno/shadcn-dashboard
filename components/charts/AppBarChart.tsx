"use client";

import Title from "@/components/global/Title";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { barChartConfig, barChartData } from "@/lib/charts-data";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

function AppBarChart() {
  return (
    <>
      <Title>Total Revenue</Title>
      <ChartContainer config={barChartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={barChartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={true} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
}

export default AppBarChart;
