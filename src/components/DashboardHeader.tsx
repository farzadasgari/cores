import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Bell, Settings, User, LogOut } from "lucide-react"

export const DashboardHeader = () => {
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
                    <Button variant="ghost" size="sm" >
                        <Moon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="relative">
                        <Bell className="h-5 w-5" />
                        <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 bg-rose-500 flex items-center justify-center">
                            3
                        </Badge>
                    </Button>
                    <Button variant="ghost" size="sm" >
                        <Settings className="h-5 w-5" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="relative">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/cores/dashboard/avatar.webp" alt="profile" />
                                    <AvatarFallback>FA</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuItem>
                                <User className="h-4 w-4 mr-2"/>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-4 w-4 mr-2"/>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="h-4 w-4 mr-2"/>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
