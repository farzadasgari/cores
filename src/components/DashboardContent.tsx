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
                        <div className="bg-gradient-to-r from-rose-500/90 to-slate-200/90 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-2">
                                    Welcome back, John!👋🏻
                                </h1>
                                <p className="text-white/90 text-lg">
                                    Here's what's happening with your business
                                    today.
                                </p>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <div className="p-6 animate-fade-in">{renderContent()}</div>;
};
