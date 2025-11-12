import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const UsersTable = () => {
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
                        
                    </Table>
                </div>
            </div>
        </div>
    )
}