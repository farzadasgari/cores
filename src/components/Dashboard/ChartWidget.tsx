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
        </Card>
    );
};
