import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
    {
        id: 1,
        user: {
            name: "Elena Delgado",
            avatar: '/cores/avatar/avatar4.webp',
        },
        action: "Created a new project",
        target: "Website Redesign",
        time: "2 minutes ago",
        type: "Create"
    },
    {
        id: 2,
        user: {
            name: "Marcus Okafor",
            avatar: '..',
        },
        action: "Updated user profile",
        target: "Account Settings",
        time: "15 minutes ago",
        type: "Update"
    },
    {
        id: 3,
        user: {
            name: "Priya Chen",
            avatar: '/cores/avatar/avatar5.webp',
        },
        action: "Completed task",
        target: "Database Migration",
        time: "1 hour ago",
        type: "Complete"
    },
    {
        id: 4,
        user: {
            name: "Jordan Thompson",
            avatar: '/cores/avatar/avatar6.webp',
        },
        action: "Uploaded file",
        target: "Design assets.zip",
        time: "2 hours ago",
        type: "Upload"
    }
]


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