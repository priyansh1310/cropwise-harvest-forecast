
import React from 'react';
import { User } from 'lucide-react';
import { userProfile } from '../data/mockData';

const FarmProfile = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Farm Profile</h3>
        <User className="text-primary" size={24} />
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">Farm Size</p>
          <p className="text-sm font-medium">{userProfile.farmSize}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Active Crops</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {userProfile.activeCrops.map((crop, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-full bg-secondary">
                {crop}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Last Harvest</p>
          <p className="text-sm font-medium">{userProfile.lastHarvest}</p>
        </div>
      </div>
    </div>
  );
};

export default FarmProfile;
