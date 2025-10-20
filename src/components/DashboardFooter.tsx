import { cn } from '@/lib/utils';

interface DashboardFooterProps {
    sidebarCollapsed: boolean;
}

export const DashboardFooter = ({ sidebarCollapsed }: DashboardFooterProps) => {
    return (
        <footer
            className={cn(
                'fixed bottom-0 right-0 left-0 bg-background border-t border-border duration-300 px-6 py-4',
                sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
            )}
        >
            <div className="text-center text-sm">
                CoreS | Admin Panel © 2025 All rights reserved. Made with ❤️ by
                <a
                    className="pl-1.5 text-primary hover:text-primary/70 duration-300"
                    href="https://github.com/farzadasgari/"
                    target="_blank"
                >
                    FarZad
                </a>
            </div>
        </footer>
    );
};
