import { useState } from 'react';
import { UsersHeader } from '@/components/Users/UsersHeader';
import { UsersTable } from '@/components/Users/UsersTable';

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Pending' | 'Inactive';
    department: string;
    lastLogin: string;
    avatar?: string;
    phone?: string;
    employeeId?: string;
}

export const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@company.com",
            role: "Admin",
            status: "Active",
            department: "IT",
            lastLogin: "2025-10-11T10:30:03",
            avatar: "/cores/avatar/avatar1.webp",
            phone: "+1 (555) 123-4567",
            employeeId: "CS001",
        },
        {
            id: "2",
            name: "Sarah Wilson",
            email: "sarah.wilson@company.com",
            role: "Editor",
            status: "Active",
            department: "Marketing",
            lastLogin: "2025-10-12T16:35:51",
            avatar: "/cores/avatar/avatar3.webp",
            phone: "+1 (555) 234-5678",
            employeeId: "CS002",
        },
        {
            id: "3",
            name: "Mike Johnson",
            email: "mike.johnson@company.com",
            role: "Viewer",
            status: "Inactive",
            department: "Shop",
            lastLogin: "2025-10-05T23:12:47",
            avatar: "/cores/avatar/avatar5.webp",
            phone: "+1 (555) 345-6789",
            employeeId: "CS003",
        },
        {
            id: "4",
            name: "Emily Chen",
            email: "emily.chen@company.com",
            role: "Editor",
            status: "Pending",
            department: "Graphic",
            lastLogin: "2025-10-08T11:28:32",
            avatar: "/cores/avatar/avatar2.webp",
            phone: "+1 (555) 456-7890",
            employeeId: "CS004",
        },
    ])

    return (
        <div className="space-y-6 p-6">
            <UsersHeader />

            <UsersTable />
        </div>
    );
};
