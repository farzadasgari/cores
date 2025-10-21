import { useState } from 'react';
import { DashboardFooter } from './DashboardFooter';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardContent } from './DashboardContent';
import { cn } from '@/lib/utils';

const Dashboard = () => {
    const currentPage = 'notifications';
    // const [currentPage, setCurrentPage] = useState("dashboard");

    // const handlePageChange = (page: string) => {
    //     setCurrentPage(page);
    //     switch (page) {
    //         case "dashboard":
    //         default:
    //             navigate("/");
    //             break
    //     }
    // }

    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true);

    const handleToggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="min-h-screen">
            <DashboardHeader
                onToggleSidebar={handleToggleSidebar}
                sidebarCollapsed={sidebarCollapsed}
            />
            <div className="flex">
                <DashboardSidebar sidebarCollapsed={sidebarCollapsed} />
                <main
                    className={cn(
                        'flex-1 transition-all duration-300 pt-16 pb-6 md:pb-0 ml-0 overflow-y-auto',
                        sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
                    )}
                >
                    <div className="flex-1 mb-13">
                        <DashboardContent currentPage={currentPage} />
                    </div>
                    <DashboardFooter sidebarCollapsed={sidebarCollapsed} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
