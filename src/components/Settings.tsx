import { SettingsHeader } from '@/components/Settings/SettingsHeader';
import { SettingsNavigation } from '@/components/Settings/SettingsNavigation';

export const Settings = () => {
    return (
        <div className="space-y-6 p-4 md:p-6 overflow-hidden max-w-full">
            <SettingsHeader />
            <div className='flex flex-col lg:flex-row gap-6 min-h-0'>
                <div className='lg:w-64 flex-shrink-0'>
                    <SettingsNavigation />
                </div>
            </div>
        </div>
    );
};
