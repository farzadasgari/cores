import { Badge } from "@/components/ui/badge";

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
        </div>
    )
}