import { Download, Filter, FunnelX, Home, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Search, X, FileText, Sheet, FileSpreadsheet } from 'lucide-react';
export const UsersHeader = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <nav className="text-sm text-muted-foreground mb-1 flex items-center">
                        <span className="hover:text-foreground cursor-pointer flex items-center">
                            <Home className="w-4 h-4 mr-1" />
                        </span>
                        <span className="mx-2">/</span>
                        <span className="text-foreground font-medium">
                            Users
                        </span>
                    </nav>
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>
                            Manage user accounts, roles, and permissions
                        </span>
                    </div>
                </div>
                <Button variant="outline" className="cursor-pointer">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New User
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search users by name, email, or ID..."
                        className="pl-10"
                    />
                    <Button
                        variant="ghost"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    >
                        <X className="h-3 w-3" />
                    </Button>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-2 px-2 py-0.5 bg-muted rounded-lg">
                        <Badge variant="secondary">3 users Selected</Badge>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive/70 hover:text-destructive dark:text-rose-400 dark:hover:text-rose-600 cursor-pointer"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button
                        variant="outline"
                        className="cursor-pointer bg-accent"
                    >
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="cursor-pointer"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Export
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <FileSpreadsheet className="h-4 w-4 mr-1" />
                                Export as CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileText className="h-4 w-4 mr-1" />
                                Export as PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Sheet className="h-4 w-4 mr-1" />
                                Export as Excel
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Status
                        </label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Role
                        </label>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                    <SelectItem value="Editor">
                                        Editor
                                    </SelectItem>
                                    <SelectItem value="Viewer">
                                        Viewer
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <Button
                            variant="outlineDestructive"
                            className="w-full cursor-pointer"
                        >
                            <FunnelX />
                            Clear Filters
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
