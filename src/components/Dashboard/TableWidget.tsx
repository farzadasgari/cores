import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentOrders = [
    {
        id: '#2852',
        user: {
            name: 'John Doe',
            avatar: '/cores/dashboard/avatar.web',
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
            avatar: '/cores/dashboard/avatar.web',
        },
        product: 'Premium Plan',
        amount: '$99.00',
        status: 'pending',
        date: '2025-10-12',
    },
    {
        id: '#2854',
        user: {
            name: 'Mike Wilson',
            avatar: '/cores/dashboard/avatar.web',
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
            avatar: '/cores/dashboard/avatar.web',
        },
        product: 'Enterprise Plan',
        amount: '$199.00',
        status: 'completed',
        date: '2025-10-12',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "completed":
            return "bg-emeral-100 text-emerald-800";
        case "pending":
            return "bg-amber-100 text-amber-800";
        case "failed":
            return "bg-red-100 text-red-800";
        default:
            return "bg-slate-100 text-slate-800"
    }
}

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
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="/cores/dashboard/avatar.webp" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-muted-foreground">
                                    Basic Plan
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="font-semibold">$39.0</p>
                                <p className="text-sm text-muted-foreground">
                                    2025-10-12
                                </p>
                            </div>
                            <Badge>Completed</Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
