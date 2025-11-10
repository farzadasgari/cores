import { WelcomeSection } from '@/components/Dashboard/WelcomeSection';
import { StatsCards } from '@/components/Dashboard/StatsCards';
import { ChartWidget } from '@/components/Dashboard/ChartWidget';
import { TableWidget } from '@/components/Dashboard/TableWidget';
import { QuickActions } from '@/components/Dashboard/QuickActions';
import { ActivityFeed } from '@/components/Dashboard/ActivityFeed';
import { SettingsPage } from '@/components/SettingsPage';
import { UsersPage } from '@/components/UsersPage';

interface DashboardContentProps {
    currentPage: string;
}

export const DashboardContent = ({ currentPage }: DashboardContentProps) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'users':
                return <UsersPage />;
            case 'orders':
                return <div className="space-y-6">Orders Page</div>;
            case 'payments':
                return <div className="space-y-6">Payments Page</div>;
            case 'notifications':
                return <div className="space-y-6">Notifications Page</div>;
            case 'database':
                return <div className="space-y-6">Database Page</div>;
            case 'security':
                return <div className="space-y-6">Security Page</div>;
            case 'tickets':
                return <div className="space-y-6">Tickets Page</div>;
            case 'profile':
                return <div className="space-y-6">Profile Page</div>;
            case 'settings':
                return <SettingsPage />;
            default:
                return (
                    <div className="space-y-6">
                        {/* Welcom Section */}
                        <WelcomeSection />

                        {/* Statistical Cards */}
                        <StatsCards />

                        {/* Main Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                {/* Chart */}
                                <ChartWidget />

                                {/* Table */}
                                <TableWidget />
                            </div>
                            <div className="space-y-6">
                                {/* Actions */}
                                <QuickActions />

                                {/* Activities */}
                                <ActivityFeed />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <div className="p-6 animate-fade-in">{renderContent()}</div>;
};
