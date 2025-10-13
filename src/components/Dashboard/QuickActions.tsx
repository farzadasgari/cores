import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Plus, Settings, Upload, Users } from "lucide-react";

const actions = [
    { icon: Plus, label: "New Project", color: "bg-blue-500"},
    { icon: Users, label: "Add User", color: "bg-emerald-500"},
    { icon: FileText, label: "Generate Report", color: "bg-purple-500"},
    { icon: Upload, label: "Import Data", color: "bg-rose-500"},
    { icon: Download, label: "Export Data", color: "bg-amber-500"},
    { icon: Settings, label: "Settings", color: "bg-slate-500"}
]

export const QuickActions = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        variant="outline"
                        className="h-20 flex flex-col gap-2 hover:bg-accent"
                    >
                        <div className="p-2 rounded-lg text-white bg-rose-500">
                            <Plus className="h-5 w-5" />
                        </div>
                        <span className="text-sm">New Project</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}