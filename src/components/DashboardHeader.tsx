import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export const DashboardHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-slate-100 border-b border-rose-600 hover:border-rose-400 duration-300">
            <div className="flex items-center justify-between h-full px-4">
                <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}
