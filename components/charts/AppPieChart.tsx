"use client";

import { Label, Pie, PieChart } from "recharts";

import Title from "@/components/global/Title";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { pieChartConfig, pieChartData } from "@/lib/charts-data";
import { TrendingUp } from "lucide-react";

function AppPieChart() {
  const totalVisitors = pieChartData.reduce(
    (acc, curr) => acc + curr.visitors,
    0,
  );

  return (
    <>
      <Title>Browser Usage</Title>
      <ChartContainer
        config={pieChartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={pieChartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </>
  );
}

export default AppPieChart;
