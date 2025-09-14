import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"

export const DashboardSidebar = () => {
    return (
        <aside className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background border-r border-rose-600 hover:border-rose-400 duration-300 overflow-hidden w-64">

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
                <Button variant="ghost"
                    className="w-full justify-start gap-3 h-10 " >
                    <Moon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Dashboard</span>
                </Button>
                <Button variant="ghost"
                    className="w-full justify-start gap-3 h-10 " >
                    <Moon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Dashboard</span>
                </Button>
            </nav>
        </aside>
    );
};
