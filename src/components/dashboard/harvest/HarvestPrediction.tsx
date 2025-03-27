
import React from 'react';
import { CalendarDays } from 'lucide-react';
import { cropProgress } from '../data/mockData';

const HarvestPrediction = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Expected Harvest</h3>
          <div className="space-y-2">
            {cropProgress.map((crop, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{crop.name}</span>
                <span className="text-sm font-medium">{crop.harvestDate}</span>
              </div>
            ))}
          </div>
        </div>
        <CalendarDays className="text-primary" size={24} />
      </div>
    </div>
  );
};

export default HarvestPrediction;
