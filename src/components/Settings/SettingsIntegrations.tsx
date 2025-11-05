import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CircleGauge } from 'lucide-react';

export const SettingsIntegrations = () => {
    const integrations = [
        { name: 'Stripe', status: 'Connected', type: 'Payment' },
        { name: 'PayPal', status: 'Disconnected', type: 'Payment' },
        { name: 'Discord', status: 'Connected', type: 'Communication' },
        { name: 'GitHub', status: 'Disconnected', type: 'Communication' },
        { name: 'Mailchimp', status: 'Connected', type: 'Email Marketing' },
    ];
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">Integrations</h2>
                <p className="text-muted-foreground">
                    Connect and manage third-party services and APIs.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Connected Services</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {integrations.map((integration) => (
                            <div
                                key={integration.name}
                                className="flex items-center justify-between p-3 border rounded-lg"
                            >
                                <div>
                                    <h4 className="font-medium">
                                        {integration.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {integration.type}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge
                                        variant={
                                            integration.status === 'Connected'
                                                ? 'success'
                                                : 'danger'
                                        }
                                    >
                                        {integration.status}
                                    </Badge>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="cursor-pointer"
                                    >
                                        {integration.status === 'Connected'
                                            ? 'Configure'
                                            : 'Connect'}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>API Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="webhook">Webhook URL</Label>
                        <Input
                            id="webhook"
                            placeholder="https://your-domain.com/webhook"
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="api">API Key</Label>
                        <Input
                            id="api"
                            type="password"
                            placeholder="Enter Your API Key"
                            className="mt-2"
                        />
                    </div>
                    <Button className="cursor-pointer">
                        <CircleGauge className="w-4 h-4" />
                        Test Connection
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};
