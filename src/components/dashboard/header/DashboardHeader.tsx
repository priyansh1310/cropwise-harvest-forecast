
import React from 'react';
import { Bell, User } from 'lucide-react';
import { userProfile } from '../data/mockData';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
            {userProfile.name.slice(0, 1)}
          </div>
          <div>
            <p className="text-sm font-medium">{userProfile.name}</p>
            <p className="text-xs text-muted-foreground">{userProfile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
