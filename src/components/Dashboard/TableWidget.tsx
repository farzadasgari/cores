import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentOrders = [
    {
        id: '#2852',
        user: {
            name: 'John Doe',
            avatar: '/cores/dashboard/avatar3.webp',
        },
        product: 'Pro Plan',
        amount: '$69.00',
        status: 'unknown',
        date: '2025-10-12',
    },
    {
        id: '#2853',
        user: {
            name: 'Sarah Johnson',
            avatar: '/cores/dashboard/avatar.webp',
        },
        product: 'Premium Plan',
        amount: '$99.00',
        status: 'pending',
        date: '2025-10-12',
    },
    {
        id: '#2854',
        user: {
            name: 'Farzad Asgari',
            avatar: '..',
        },
        product: 'Basic Plan',
        amount: '$39.00',
        status: 'failed',
        date: '2025-10-12',
    },
    {
        id: '#2855',
        user: {
            name: 'John Smith',
            avatar: '/cores/dashboard/avatar2.webp',
        },
        product: 'Enterprise Plan',
        amount: '$199.00',
        status: 'completed',
        date: '2025-10-12',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed':
            return 'bg-emerald-200 text-emerald-900';
        case 'pending':
            return 'bg-amber-200 text-amber-900';
        case 'failed':
            return 'bg-red-200 text-red-900';
        default:
            return 'bg-slate-200 text-slate-900';
    }
};

export const TableWidget = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="outline" size="sm">
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={order.user.avatar} />
                                    <AvatarFallback>
                                        {order.user.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">
                                        {order.user.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {order.product}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="font-semibold">
                                        {order.amount}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {order.date}
                                    </p>
                                </div>
                                <Badge className={getStatusColor(order.status)}>
                                    {order.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
