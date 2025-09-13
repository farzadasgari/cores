import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover';
import { Menu, Moon, Bell, Settings, User, LogOut } from 'lucide-react';

export const DashboardHeader = () => {
    const mockNotifications = [
        { id: 1, title: "New User Registered", time: "2 min ago", unread: true },
        { id: 2, title: "Payment Received", time: "10 min ago", unread: true },
        { id: 3, title: "Server Maintenance Scheduled", time: "1 hour ago", unread: false },
    ]
    return (
        <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-slate-100 border-b border-rose-600 hover:border-rose-400 duration-300">
            <div className="flex items-center justify-between h-full px-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                        <Moon className="h-5 w-5" />
                    </Button>
                    
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm" className="relative">
                                <Bell className="h-5 w-5" />
                                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 bg-rose-500 flex items-center justify-center">
                                    3
                                </Badge>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-80 p-0'>
                            <div className='p-4 border-b'>
                                <h3 className='font-semibold'>Notifications</h3>
                            </div>
                            <div className='max-h-64 overflow-y-auto'>
                                {mockNotifications.map((notification) => (
                                    <div key={notification.id} className='p-3 border-b hover:bg-muted/50'>
                                        <div className='flex items-start gap-3'>
                                            <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? "bg-rose-500" : "bg-slate-300"}`} />
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium'>{notification.title}</p>
                                                <p className='text-xs font-medium text-muted-foreground'>{notification.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='p-3 border-t'>
                                <Button variant="ghost" size="sm" className='w-full'>
                                    View All Notifications
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Button variant="ghost" size="sm">
                        <Settings className="h-5 w-5" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src="/cores/dashboard/avatar.webp"
                                        alt="profile"
                                    />
                                    <AvatarFallback>FA</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                            <DropdownMenuItem>
                                <User className="h-4 w-4 mr-2" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-4 w-4 mr-2" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};
