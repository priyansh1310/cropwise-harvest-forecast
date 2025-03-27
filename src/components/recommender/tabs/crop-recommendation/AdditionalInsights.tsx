
import React from 'react';
import { Droplets, Cloud, Tractor } from 'lucide-react';

const AdditionalInsights: React.FC = () => {
  return (
    <div className="rounded-lg border p-4">
      <h4 className="font-medium mb-3">Additional Insights</h4>
      <ul className="text-sm space-y-2">
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <Droplets size={12} className="text-primary" />
          </span>
          <span>Rice requires consistent irrigation, which aligns with your water availability.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <Cloud size={12} className="text-primary" />
          </span>
          <span>Your rainfall pattern is ideal for soybean cultivation in this region.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <Tractor size={12} className="text-primary" />
          </span>
          <span>The loamy soil in your region has excellent nutrient retention properties.</span>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInsights;
