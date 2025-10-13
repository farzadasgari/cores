import { WelcomeSection } from '@/components/Dashboard/WelcomeSection';
import { StatsCards } from '@/components/Dashboard/StatsCards';
import { ChartWidget } from '@/components/Dashboard/ChartWidget';
import { TableWidget } from '@/components/Dashboard/TableWidget';
import { QuickActions } from '@/components/Dashboard/QuickActions';

interface DashboardContentProps {
    currentPage: string;
}

export const DashboardContent = ({ currentPage }: DashboardContentProps) => {
    const renderContent = () => {
        switch (currentPage) {
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
                                <QuickActions />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <div className="p-6 animate-fade-in">{renderContent()}</div>;
};
