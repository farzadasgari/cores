interface DashboardContentProps {
    currentPage: string;
}

export const DashboardContent = ({ currentPage }: DashboardContentProps) => {
    const renderContent = () => {
        switch (currentPage) {
            default: 
            return (
                <div className="space-y-6">
                    This is dashboard content
                </div>
            )
        }
    };

    return (
        <div className="p-6 animate-fade-in">
            {renderContent()}
        </div>
    )
}