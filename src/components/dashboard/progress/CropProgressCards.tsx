
import React from 'react';
import { BarChart3 } from 'lucide-react';
import { cropProgress } from '../data/mockData';

const CropProgressCards = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Crop Progress</h3>
        <BarChart3 className="text-primary" size={24} />
      </div>
      
      <div className="space-y-4">
        {cropProgress.map((crop, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">{crop.name}</span>
              <span className="text-xs font-medium">{crop.progress}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary"
                style={{ width: `${crop.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-muted-foreground">Stage: {crop.stage}</span>
              <span className="text-xs text-muted-foreground">Health: {crop.healthStatus}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropProgressCards;
