import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CircleFadingArrowUp } from 'lucide-react';

export const SettingsBilling = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Billing & Subscriptions
                </h2>
                <p className="text-muted-foreground">
                    Manage your subscription plan and payment methods
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium">Professional Plan</h3>
                            <p className="text-sm text-muted-foreground">
                                $ 99/month
                            </p>
                            <Badge className="mt-1">Active</Badge>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                className="cursor-pointer"
                            >
                                <CircleFadingArrowUp className="w-5 h-5" />
                                Upgrade Plan
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">
                                    •••• •••• •••• 4242
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Expires 12/29
                                </p>
                            </div>
                            <Badge variant="success">Primary</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">
                                    •••• •••• •••• 1441
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Expires 12/28
                                </p>
                            </div>
                            <Badge variant="secondary">Alternative</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">
                                    •••• •••• •••• 8228
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Expires 12/27
                                </p>
                            </div>
                            <Badge variant="secondary">Alternative</Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Invoice Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="billing-email">Billing Email</Label>
                        <Input
                            id="billing-email"
                            type="email"
                            placeholder="billing@company.com"
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="tax">Tax ID</Label>
                        <Input
                            id="tax"
                            type="text"
                            placeholder="Enter tax identification number"
                            className="mt-2"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
