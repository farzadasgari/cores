import { WelcomeSection } from './Dashboard/WelcomeSection';
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
                    </div>
                );
        }
    };

    return <div className="p-6 animate-fade-in">{renderContent()}</div>;
};
