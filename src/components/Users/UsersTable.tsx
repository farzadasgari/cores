import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { type User } from "@/components/UsersPage";

interface UsersTableProps {
    users: User[];
}

export const UsersTable = ({ users }: UsersTableProps) => {
    return (
        <div className="space-y-4 w-full">
            <div className="border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">ID</TableHead>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead className="w-32">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}