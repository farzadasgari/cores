import Footer from './Footer';
import { DashboardHeader } from './DashboardHeader';

const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <DashboardHeader />

            <div className="flex">
                <div id="DashboardSidebar"></div>

                <main className="flex-1 transition-all duration-300 ml-64 pt-16 min-h-screen flex flex-col overflow-x-hidden">
                    <div id="DashboardContent" className="flex-1"></div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
