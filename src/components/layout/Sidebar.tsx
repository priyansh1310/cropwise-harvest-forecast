
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Lightbulb,
  BookOpen,
  Cloud,
  BarChart2,
  MessageSquare,
  User,
  Settings,
  LogOut
} from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Recommender', path: '/recommender', icon: Lightbulb },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Weather', path: '/weather', icon: Cloud },
    { name: 'Progress', path: '/progress', icon: BarChart2 },
    { name: 'Chatbot', path: '/chatbot', icon: MessageSquare },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside 
      className={`flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <div className={`overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
          <h1 className="text-xl font-semibold text-primary">CropWise</h1>
        </div>
        
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 py-6 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-secondary'
              }`}
            >
              <Icon size={20} />
              
              <span 
                className={`ml-4 transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border">
        <Link
          to="/login"
          className={`flex items-center px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors`}
        >
          <LogOut size={20} />
          
          <span 
            className={`ml-4 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
            }`}
          >
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
};
