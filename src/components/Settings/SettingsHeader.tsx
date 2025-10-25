import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
export const SettingsHeader = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Settings</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>Last Modified: 2 hours ago by John Doe</span>
                        <Badge variant="destructive" className="animate-pulse">
                            3 Unsaved Changes
                        </Badge>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        Production
                    </Badge>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search Settings..."
                            className="pl-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}