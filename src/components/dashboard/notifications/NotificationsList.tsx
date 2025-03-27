
import React from 'react';
import { Bell } from 'lucide-react';
import { notifications } from '../data/mockData';

const NotificationsList = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Notifications</h3>
        <Bell className="text-primary" size={24} />
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
            <div className={`mt-0.5 h-2 w-2 rounded-full ${
              notification.type === 'alert' ? 'bg-destructive' : 
              notification.type === 'info' ? 'bg-primary' : 'bg-green-500'
            }`}></div>
            <div className="flex-1">
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <button className="w-full py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsList;
