'use client'

import { TrendingDown } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'June', desktop: 186 },
  { month: 'July', desktop: 305 },
  { month: 'August', desktop: 237 },
  { month: 'September', desktop: 73 },
  { month: 'October', desktop: 209 },
  { month: 'November', desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Balance',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

export function NetWorth() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between mb-4">
        <div className="w-2/4">
          <CardTitle className="text-5xl">$334.48</CardTitle>
          <CardDescription className="text-xs pt-2">
            Your current balance across all accounts
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
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
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending down by 5.2% this month{' '}
              <TrendingDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Jun - Nov 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
