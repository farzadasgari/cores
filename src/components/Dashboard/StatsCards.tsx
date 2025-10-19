import {
    CreditCard,
    Users,
    ShoppingCart,
    Target,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
    {
        title: 'Total Revenue',
        value: '$124,592',
        change: '+12.5%',
        trend: 'up',
        icon: CreditCard,
        color: 'text-emerald-500',
    },
    {
        title: 'Active Users',
        value: '1,429',
        change: '+8.2%',
        trend: 'up',
        icon: Users,
        color: 'text-blue-500',
    },
    {
        title: 'Orders',
        value: '892',
        change: '-2.1%',
        trend: 'down',
        icon: ShoppingCart,
        color: 'text-rose-500',
    },
    {
        title: 'Rate',
        value: '3.24%',
        change: '+5.7%',
        trend: 'up',
        icon: Target,
        color: 'text-purple-500',
    },
];

export const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                const TrendIcon =
                    stat.trend == 'up' ? TrendingUp : TrendingDown;

                return (
                    <Card
                        key={index}
                        className="hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
                    >
                        <CardContent className="px-8 py-1">
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`p-2 rounded-lg bg-muted ${stat.color}`}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div
                                    className={`flex items-center text-sm ${stat.trend == 'up' ? 'text-emerald-500' : 'text-red-500'}`}
                                >
                                    <TrendIcon className="h-4 w-4 mr-1.5" />
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">
                                    {stat.value}
                                </h3>
                                <p className="text-muted-foreground text-md">
                                    {stat.title}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
