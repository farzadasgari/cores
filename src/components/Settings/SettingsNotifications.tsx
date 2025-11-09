import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const SettingsNotifications = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Notifications Settings
                </h2>
                <p className="text-muted-foreground">
                    Configure notifications channels and templates.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Channel Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="email-notification">
                                Email Notificiation
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Send notifications via email
                            </p>
                        </div>
                        <Switch id="email-notification" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="sms-notification">
                                SMS Notificiation
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Send notifications via SMS
                            </p>
                        </div>
                        <Switch id="sms-notification" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="push-notification">
                                Push Notificiation
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Send browser push notifications
                            </p>
                        </div>
                        <Switch id="push-notification" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="in-app-notification">
                                In-App Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Show notifications within the app
                            </p>
                        </div>
                        <Switch id="in-app-notification" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Escalation Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="escalation">Escalation Time</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select escalation time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1hour">1 Hour</SelectItem>
                                <SelectItem value="4hour">4 Hour</SelectItem>
                                <SelectItem value="24hour">24 Hour</SelectItem>
                                <SelectItem value="48hour">48 Hour</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
