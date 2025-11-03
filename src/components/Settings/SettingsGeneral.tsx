import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

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
                            <Label htmlFor="orgname">Organization Name</Label>
                            <Input
                                id="orgname"
                                value="FeriX"
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="logo">Logo</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                id="logo"
                                type="file"
                                accept="image/*"
                                className="flex-1 mt-2"
                                />
                                <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                                >
                                    <Upload className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}