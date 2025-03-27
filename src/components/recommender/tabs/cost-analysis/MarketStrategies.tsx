
import React from 'react';
import { BarChart, DollarSign, TrendingUp } from 'lucide-react';

const MarketStrategies: React.FC = () => {
  return (
    <div className="rounded-lg border p-4">
      <h4 className="font-medium mb-3">Market Strategies</h4>
      <ul className="text-sm space-y-2">
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <TrendingUp size={12} className="text-primary" />
          </span>
          <span>Consider delayed selling to benefit from seasonal price increases.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <BarChart size={12} className="text-primary" />
          </span>
          <span>Explore direct selling to processors to eliminate middlemen margins.</span>
        </li>
        <li className="flex items-start">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
            <DollarSign size={12} className="text-primary" />
          </span>
          <span>Focus on quality grading to access premium market segments.</span>
        </li>
      </ul>
    </div>
  );
};

export default MarketStrategies;
