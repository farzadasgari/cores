import { Home, Plus } from "lucide-react"
import { Button } from "../ui/button"

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
                        <span className="text-foreground font-medium">Users</span>
                    </nav>
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>Manage user accounts, roles, and permissions</span>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="cursor-pointer"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New User
                </Button>
            </div>
        </div>
    )
}