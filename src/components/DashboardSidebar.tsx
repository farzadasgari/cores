import { Button } from "@/components/ui/button"
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
    Settings
} from "lucide-react"

export const DashboardSidebar = () => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/" },
        { id: "users", label: "Users", icon: Users, href: "/users" },
        { id: "orders", label: "Orders", icon: ShoppingCart, href: "/orders" },
        { id: "payments", label: "Payments", icon: CreditCard, href: "/payments" },
        { id: "notifications", label: "Notifications", icon: Bell, href: "/notifications" },
        { id: "database", label: "Database", icon: Database, href: "/database" },
        { id: "security", label: "Security", icon: Shield, href: "/security" },
        { id: "tickets", label: "Tickets", icon: TicketIcon, href: "/tickets" },
        { id: "profile", label: "Profile", icon: User, href: "/profile" },
        { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
    ];
    return (
        <aside className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background border-r border-rose-600 hover:border-rose-400 duration-300 overflow-hidden w-64">

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">

                {menuItems.map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className="w-full justify-start gap-3 h-10" >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </Button>
                ))}

            </nav>
        </aside>
    );
};
