import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const SettingsSecurity = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Security Settings
                </h2>
                <p className="text-muted-foreground">
                    Configure authentication, encryption, and compilance
                    settings.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                            <p className="text-sm text-muted-foreground">
                                Enable SSO authentication
                            </p>
                        </div>
                        <Switch id="sso" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="oauth">OAuth Integrations</Label>
                            <p className="text-sm text-muted-foreground">
                                Allow OAuth provider Login
                            </p>
                        </div>
                        <Switch id="oauth" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Password Policies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="min-length">
                            Minimum Password Length
                        </Label>
                        <Input
                            id="min-length"
                            type="number"
                            placeholder="8"
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="require-special">
                                Require Special Characters
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Passwords must include special characters
                            </p>
                        </div>
                        <Switch id="require-special" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Data Encryption</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="encrypt">
                                Encrypt Sensitive Data
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Enable encryption for sensitive information
                            </p>
                        </div>
                        <Switch id="encrypt" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
