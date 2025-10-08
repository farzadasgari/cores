import { CreditCard, Users, ShoppingCart, Target } from 'lucide-react';

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
        value: '1.429',
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
        color: 'text-orange-500',
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
    return <div>Statistical Cards</div>;
};
