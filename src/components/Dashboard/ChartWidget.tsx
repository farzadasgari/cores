import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ChartWidget = () => {
    const [activeMetric, setActiveMetric] = useState<'revenue' | 'users'>(
        'users'
    );
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Performance Overview</CardTitle>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveMetric('revenue')}
                        className={
                            activeMetric === 'revenue'
                                ? 'bg-rose-600 hover:bg-rose-500 text-white hover:text-white'
                                : ''
                        }
                    >
                        Revenue
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveMetric('users')}
                        className={
                            activeMetric === 'users'
                                ? 'bg-rose-600 hover:bg-rose-500 text-white hover:text-white'
                                : ''
                        }
                    >
                        Users
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
};
