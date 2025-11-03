import { Card, CardHeader, CardTitle ,CardContent } from "@/components/ui/card"

export const SettingsGeneral = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">General Settings</h2>
                <p className="text-muted-foreground">
                    Configure basic organization settings and preferences.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Organization Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}