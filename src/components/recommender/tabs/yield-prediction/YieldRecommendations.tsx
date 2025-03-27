
import React from 'react';
import { Droplets, Tractor, LineChart } from 'lucide-react';

const YieldRecommendations: React.FC = () => {
  return (
    <div className="rounded-lg border p-4">
      <h4 className="font-medium mb-3">Recommendations</h4>
      <ul className="text-sm space-y-2">
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <Droplets size={12} className="text-primary" />
          </span>
          <span>Consider drip irrigation to optimize water usage and potentially increase yield.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <Tractor size={12} className="text-primary" />
          </span>
          <span>Applying organic fertilizers during the flowering stage could enhance yield.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <LineChart size={12} className="text-primary" />
          </span>
          <span>Monitor soil pH regularly to maintain optimal growing conditions.</span>
        </li>
      </ul>
    </div>
  );
};

export default YieldRecommendations;
