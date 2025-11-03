import { useState } from 'react';
import { SettingsHeader } from '@/components/Settings/SettingsHeader';
import { SettingsNavigation } from '@/components/Settings/SettingsNavigation';
import { SettingsGeneral } from '@/components/Settings/SettingsGeneral';
import { SettingsPermissions } from '@/components/Settings/SettingsPermissions';
import { SettingsIntegrations } from '@/components/Settings/SettingsIntegrations';
import { SettingsNotifications } from '@/components/Settings/SettingsNotifications';
import { SettingsSecurity } from '@/components/Settings/SettingsSecurity';
import { SettingsAppearance } from '@/components/Settings/SettingsAppearance';
import { SettingsBilling } from '@/components/Settings/SettingsBilling';
import { SettingsPerformance } from '@/components/Settings/SettingsPerformance';
import { SettingsAdvanced } from '@/components/Settings/SettingsAdvanced';
import { SettingsAudit } from '@/components/Settings/SettingsAudit';

export const Settings = () => {
    const [activeSection, setActiveSection] = useState<string>('general');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'general':
                return <SettingsGeneral />;
            case 'user-permissions':
                return <SettingsPermissions />;
            case 'integrations':
                return <SettingsIntegrations />;
            case 'notifications':
                return <SettingsNotifications />;
            case 'security':
                return <SettingsSecurity />;
            case 'appearance':
                return <SettingsAppearance />;
            case 'billing':
                return <SettingsBilling />;
            case 'performance':
                return <SettingsPerformance />;
            case 'advanced':
                return <SettingsAdvanced />;
            case 'audit-log':
                return <SettingsAudit />;
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
