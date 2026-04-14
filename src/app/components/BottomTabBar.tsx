import { Home, Calendar, TrendingUp, MessageCircle } from 'lucide-react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomTabBar({ activeTab, onTabChange }: TabBarProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'history', label: 'History', icon: Calendar },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'reflect', label: 'Reflect', icon: MessageCircle }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border)] px-4 py-3 max-w-[430px] mx-auto z-50">
      <div className="flex items-center justify-around">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all"
            >
              <Icon
                size={24}
                className={isActive ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}
              />
              <span className={`text-xs ${isActive ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
