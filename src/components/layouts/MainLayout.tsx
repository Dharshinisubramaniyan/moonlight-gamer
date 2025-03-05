
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, GamepadIcon, Star, Settings, Search, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: GamepadIcon, label: 'Games', path: '/games' },
    { icon: Star, label: 'Featured', path: '/featured' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-space-bg text-moon">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-moon-dark/30 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Moon className="h-6 w-6 text-moon animate-pulse-subtle" />
          <h1 className="text-xl font-semibold tracking-tight">MoonPlay</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 backdrop-blur-lg bg-moon-dark/30 border-t border-white/10">
        <div className="max-w-md mx-auto flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center py-3 px-4 relative",
                  isActive ? "text-moon" : "text-moon-accent hover:text-moon-highlight"
                )}
              >
                <Icon className={cn("h-5 w-5 mb-1", isActive && "animate-pulse-subtle")} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-moon rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
