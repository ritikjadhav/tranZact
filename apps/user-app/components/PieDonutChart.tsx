"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useBalance } from '@tranzact/store/useBalance'

export const description = "A donut chart with text"

const chartConfig = {
  balance: {
    label: "Balance",
  },
  lockedBal: {
    label: "Locked Balance",
    color: "hsl(var(--chart-1))",
  },
  unlockedBal: {
    label: "Unlocked Balance",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PieDonutChart() {
  const { amount, locked } = useBalance()
  
  const chartData = [
    { balanceType: "unlocked balance", balance: amount, fill: "var(--color-unlockedBal)" },
    { balanceType: "locked balance", balance: locked, fill: "var(--color-lockedBal)" },
  ]

  const totalBalance = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.balance, 0)
  }, [chartData])

  return (
    <div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="balance"
              nameKey="balanceType"
              innerRadius={80}
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
                          {totalBalance.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Totat Balance
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  )
}
