import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
export const SettingsNotifications = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Notifications Settings
                </h2>
                <p className="text-muted-foreground">
                    Configure notifications channels and templates
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

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="desktop-notification">
                                Desktop Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Show system-level desktop popups
                            </p>
                        </div>
                        <Switch id="desktop-notification" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="slack-notification">
                                Slack Messages
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Send notifications to your Slack workspace
                            </p>
                        </div>
                        <Switch id="slack-notification" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="discord-notification">
                                Discord Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications in Discord
                            </p>
                        </div>
                        <Switch id="discord-notification" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="sound-alert">Sound Alert</Label>
                            <p className="text-sm text-muted-foreground">
                                Play a sound when notifications arrive
                            </p>
                        </div>
                        <Switch id="sound-alert" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="do-not-disturb">
                                Do Not Disturb
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Silence all notifications temporarily
                            </p>
                        </div>
                        <Switch id="do-not-disturb" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="digest-email">
                                Daily Digest Email
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive a summary email once per day
                            </p>
                        </div>
                        <Switch id="digest-email" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="critical-only">
                                Critical Alerts Only
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Only notify for high-priority events
                            </p>
                        </div>
                        <Switch id="critical-only" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
