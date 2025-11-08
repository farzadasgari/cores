import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const SettingsSecurity = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
                <p className="text-muted-foreground">
                    Configure authentication, encryption, and compilance settings.
                </p>
            </div>
        </div>
    )
};
