import { useState } from 'react';

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
    // const [users, setUsers] = useState
    return <>Users Page</>;
};
