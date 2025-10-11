import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: "Jan", revenue: 4000, users: 2400 },
    { name: "Feb", revenue: 3000, users: 1398 },
    { name: "Mar", revenue: 2000, users: 9800 },
    { name: "Apr", revenue: 2780, users: 3908 },
    { name: "May", revenue: 1890, users: 4800 },
    { name: "Jun", revenue: 2390, users: 3800 },
    { name: "Jul", revenue: 3490, users: 4300 },
    { name: "Aug", revenue: 4000, users: 2400 },
    { name: "Sep", revenue: 3000, users: 1398 },
    { name: "Oct", revenue: 2000, users: 9800 },
    { name: "Nov", revenue: 2780, users: 3908 },
    { name: "Dec", revenue: 1890, users: 4800 },
]
export const ChartWidget = () => {
    const [activeMetric, setActiveMetric] = useState<'revenue' | 'users'>(
        'revenue'
    );
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Performance Overview</CardTitle>
                <div className="flex gap-2">
                    <Button
                        variant={
                            activeMetric === 'revenue' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setActiveMetric('revenue')}
                    >
                        Revenue
                    </Button>
                    <Button
                        variant={
                            activeMetric === 'users' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setActiveMetric('users')}
                    >
                        Users
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id='colorGradient' x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                className="text-muted-foreground"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                className="text-muted-foreground"
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "var(--card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "8px"
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey={activeMetric}
                                stroke="var(--primary)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill='url(#colorGradient)'
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};
