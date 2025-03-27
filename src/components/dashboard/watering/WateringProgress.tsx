
import React from 'react';
import { Droplets } from 'lucide-react';

const WateringProgress = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Watering Progress</h3>
        <Droplets className="text-primary" size={24} />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">Rice Field</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Optimal</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>Last watered: Yesterday</span>
            <span className="mx-2">•</span>
            <span>Next: In 2 days</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">Wheat Field</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Needs Water</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>Last watered: 4 days ago</span>
            <span className="mx-2">•</span>
            <span>Next: Today</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">Soybean Field</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Optimal</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>Last watered: 2 days ago</span>
            <span className="mx-2">•</span>
            <span>Next: Tomorrow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WateringProgress;
