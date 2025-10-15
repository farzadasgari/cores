import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const activities = [
    {
        id: 1,
        user: {
            name: 'Elena Delgado',
            avatar: '/cores/avatar/avatar4.webp',
        },
        action: 'Created a new project',
        target: 'Website Redesign',
        time: '2 minutes ago',
        type: 'Create',
    },
    {
        id: 2,
        user: {
            name: 'Marcus Okafor',
            avatar: '..',
        },
        action: 'Updated user profile',
        target: 'Account Settings',
        time: '15 minutes ago',
        type: 'Update',
    },
    {
        id: 3,
        user: {
            name: 'Priya Chen',
            avatar: '/cores/avatar/avatar5.webp',
        },
        action: 'Completed task',
        target: 'Database Migration',
        time: '1 hour ago',
        type: 'Complete',
    },
    {
        id: 4,
        user: {
            name: 'Jordan Thompson',
            avatar: '/cores/avatar/avatar6.webp',
        },
        action: 'Uploaded file',
        target: 'Design assets.zip',
        time: '2 hours ago',
        type: 'Upload',
    },
];

const getTypeColor = (type: string) => {
    switch (type) {
        case 'Complete':
            return 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900';
        case 'Update':
            return 'bg-sky-100 hover:bg-sky-200 text-sky-900';
        case 'Create':
            return 'bg-violet-100 hover:bg-violet-200 text-violet-900';
        default:
            return 'bg-slate-100 hover:bg-slate-200 text-slate-900';
    }
};

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
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-start gap-3 p-3 border rounded-lg hover:bg-accent/50"
                        >
                            <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarImage src={activity.user.avatar} />
                                <AvatarFallback>
                                    {activity.user.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 justify-between">
                                    <span className="text-sm font-medium">
                                        {activity.user.name}
                                    </span>
                                    <Badge
                                        className={`text-xs ${getTypeColor(activity.type)}`}
                                    >
                                        {activity.type}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {activity.action}{' '}
                                    <span className="font-medium">
                                        {activity.target}
                                    </span>
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
