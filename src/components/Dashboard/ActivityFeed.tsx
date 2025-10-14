import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const ActivityFeed = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-lg hover:bg-accent/50">
                        <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src="/cores/dashboard/avatar2.webp" />
                            <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 justify-between">
                                <span className="text-sm font-medium">Farzad Asgari</span>
                                <Badge className="text-xs">
                                    Upload
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet <span className="font-medium">consectetur adipisicing elit.</span>
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                2 hours ago
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}