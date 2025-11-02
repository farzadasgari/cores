import { useState } from 'react';
import { SettingsHeader } from '@/components/Settings/SettingsHeader';
import { SettingsNavigation } from '@/components/Settings/SettingsNavigation';

export const Settings = () => {
    const [activeSection, setActiveSection] = useState<string>('general');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'general':
                return <span>General Section</span>;
            case 'user-permissions':
                return <span>Users and Permissions Section</span>;
            case 'integrations':
                return <span>Integrations Section</span>;
            case 'notifications':
                return <span>Notifications Section</span>;
            case 'security':
                return <span>Security Section</span>;
            case 'appearance':
                return <span>Appearance Section</span>;
            case 'billing':
                return <span>Billing Section</span>;
            case 'performance':
                return <span>Performance Section</span>;
            case 'advanced':
                return <span>Advanced Section</span>;
            case 'audit-log':
                return <span>Audit-Log Section</span>;
        }
    };
    return (
        <div className="space-y-6 p-4 md:p-6 overflow-hidden max-w-full">
            <SettingsHeader />
            <div className="flex flex-col lg:flex-row gap-6 min-h-0">
                <div className="lg:w-64 flex-shrink-0">
                    <SettingsNavigation
                        activeSection={activeSection}
                        onSectionChange={setActiveSection}
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="bg-card rounded-lg border hover:border-primary/30 duration-300 p-6 min-h-[600px]">
                        {renderActiveSection()}
                    </div>
                </div>
            </div>
        </div>
    );
};
