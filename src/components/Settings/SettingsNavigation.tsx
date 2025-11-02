import { cn } from "@/lib/utils"

const settingsSections = [
    {id: "general", label: "General", icon: "⚙️"},
    {id: "user-permissions", label: "User & Permissions", icon: "👤"},
    {id: "integrations", label: "Integrations", icon: "🔗"},
    {id: "notifications", label: "Notifications", icon: "🔔"},
    {id: "security", label: "Security", icon: "🛡️"},
    {id: "appearance", label: "Appearance", icon: "🎭"},
    {id: "billing", label: "Billing", icon: "💳"},
    {id: "performance", label: "Performance", icon: "📈"},
    {id: "advanced", label: "Advanced", icon: "🦾"},
    {id: "audit-log", label: "Audit Log", icon: "🕵"},
]

export const SettingsNavigation = () => {
    return (
        <nav className="space-y-1">
            {
                settingsSections.map((section) => (
                    <button
                    key={section.id}
                    className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm text-left font-medium rounded-md",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}>
                        <span>{section.icon}</span>
                        {section.label}
                    </button>
                ))
            }           
        </nav>
    )
}