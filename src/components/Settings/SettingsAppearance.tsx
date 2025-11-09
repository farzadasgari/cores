import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export const SettingsAppearance = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Appearance & Branding
                </h2>
                <p className="text-muted-foreground">
                    Customize the look and feel of your application.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Theme Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                            <Label htmlFor="primary-color">Primary Color</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="primary-color"
                                    type="color"
                                    className="w-16 h-10"
                                />
                                <Input
                                    placeholder="#6a2bde"
                                    type="text"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                            <Label htmlFor="secondary-color">
                                Secondary Color
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="secondary-color"
                                    type="color"
                                    className="w-16 h-10"
                                />
                                <Input
                                    placeholder="#6a2bde"
                                    type="text"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Branding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="favicon">Favicon</Label>
                        <Input
                            id="favicon"
                            type="file"
                            className="mt-2"
                            accept="image/*"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="white-label">
                                White Label Mode
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Remove platform branding
                            </p>
                        </div>
                        <Switch id="white-label" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
