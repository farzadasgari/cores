import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    CreditCard,
    Bell,
    Database,
    Shield,
    TicketIcon,
    User,
    Settings,
    BarChart3,
    ChevronDown,
    BarChart2,
    Activity,
    HelpCircle,
    MessageSquare,
} from 'lucide-react';

interface DashboardSidebarProps {
    sidebarCollapsed: boolean;
}

export const DashboardSidebar = ({ sidebarCollapsed }: DashboardSidebarProps) => {
    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: LayoutDashboard,
            href: '/',
        },
        { id: 'users', label: 'Users', icon: Users, href: '/users' },
        { id: 'orders', label: 'Orders', icon: ShoppingCart, href: '/orders' },
        {
            id: 'payments',
            label: 'Payments',
            icon: CreditCard,
            href: '/payments',
        },
        {
            id: 'notifications',
            label: 'Notifications',
            icon: Bell,
            href: '/notifications',
        },
        {
            id: 'database',
            label: 'Database',
            icon: Database,
            href: '/database',
        },
        { id: 'security', label: 'Security', icon: Shield, href: '/security' },
        { id: 'tickets', label: 'Tickets', icon: TicketIcon, href: '/tickets' },
        { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
        {
            id: 'settings',
            label: 'Settings',
            icon: Settings,
            href: '/settings',
        },
    ];

    const analyticsItems = [
        {
            id: 'analytics-overview',
            label: 'Overview',
            icon: BarChart2,
            href: '/analytics/overview',
        },
        {
            id: 'analytics-realtime',
            label: 'Real-Time',
            icon: Activity,
            href: '/analytics/realtime',
        },
    ];
    return (
        <aside className={cn(
            "fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] transition-all duration-300 overflow-hidden",
            "bg-background border-r border-border md:translate-x-0",
            sidebarCollapsed ? "-translate-x-full md:w-16" : "translate-x-0 w-64"
        )}>
            <div className="flex flex-col h-full">
                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            className="w-full justify-start gap-3 h-10 cursor-pointer"
                        >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span className="truncate">{item.label}</span>
                        </Button>
                    ))}

                    {/* Analytics */}
                    <div className="relative">
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-3 h-10 cursor-pointer"
                                >
                                    <BarChart3 className="h-5 w-5 flex-shrink-0" />
                                    <span className="truncate flex-1 text-left">
                                        Analytics
                                    </span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="overflow-hidden">
                                <div className="space-y-1 mt-1">
                                    {analyticsItems.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            className="w-full justify-start gap-3 h-9 ml-6 cursor-pointer"
                                        >
                                            <item.icon className="h-4 w-4 flex-shrink-0" />
                                            <span className="truncate text-sm">
                                                {item.label}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </nav>

                {/* Help & Support */}
                <div className="border-t p-3">
                    <div className="space-y-1">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-9 cursor-pointer"
                        >
                            <HelpCircle className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm">Help Center</span>
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-9 cursor-pointer"
                        >
                            <MessageSquare className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm">Support</span>
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
