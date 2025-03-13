"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    { month: "Enero", visits: 20, interactions: 8 },
    { month: "Febrero", visits: 120, interactions: 45 },
    { month: "Marzo", visits: 90, interactions: 65 },
    { month: "Abril", visits: 270, interactions: 95 },
    { month: "Mayo", visits: 210, interactions: 240 },
    { month: "Junio", visits: 300, interactions: 280 },
];
const chartConfig = {
    visits: {
        label: "Visitas",
        color: "hsl(var(--chart-2))",
    },
    interactions: {
        label: "Interacciones",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;
export function Chart() {
    return (
        <Card className="bg-transparent shadow-none border-none">
            <CardHeader>
                <CardTitle>Aumenta tus visitas con nosotros</CardTitle>
                <CardDescription>
                    Mostrando el rendimiento de los últimos 6 meses
                </CardDescription>
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
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <defs>
                            <linearGradient
                                id="fillVisits"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-visits)"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-visits)"
                                    stopOpacity={0.9}
                                />
                            </linearGradient>
                            <linearGradient
                                id="fillInteractions"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-interactions)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-interactions)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="interactions"
                            type="natural"
                            fill="url(#fillInteractions)"
                            fillOpacity={0.4}
                            stroke="var(--color-interactions)"
                            stackId="a"
                        />
                        <Area
                            dataKey="visits"
                            type="natural"
                            fill="url(#fillVisits)"
                            fillOpacity={0.4}
                            stroke="var(--color-visits)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Tu interacciones aumentaron un 56%{" "}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Enero - Junio 2025
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
