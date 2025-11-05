import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const SettingsIntegrations = () => {
    const integrations = [
        { name: "Stripe", status: "Connected", type: "Payment" },
        { name: "PayPal", status: "Disconnected", type: "Payment" },
        { name: "Discord", status: "Connected", type: "Communication" },
        { name: "GitHub", status: "Disconnected", type: "Communication" },
        { name: "Mailchimp", status: "Connected", type: "Email Marketing" },
    ]
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
                        {
                            integrations.map((integration) => (
                                <div
                                    key={integration.name}
                                    className="flex items-center justify-between p-3 border rounded-lg"
                                >
                                    <div>
                                        <h4 className="font-medium">{integration.name}</h4>
                                        <p className="text-sm text-muted-foreground">{integration.type}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant={integration.status === 'Connected' ? "success" : "danger"}
                                        >
                                            {integration.status}
                                        </Badge>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer"
                                        >
                                            {integration.status === "Connected" ? "Configure" : "Connect"}
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
