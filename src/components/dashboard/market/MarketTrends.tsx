
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { marketTrends } from '../data/mockData';

const MarketTrends = () => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Market Trends</h3>
        <TrendingUp className="text-primary" size={24} />
      </div>
      
      <div className="space-y-3">
        {marketTrends.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm">{item.crop}</span>
            <div className="flex items-center">
              <span className="text-sm mr-2">{item.price}</span>
              <span className={`text-xs ${
                item.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
          View Detailed Analysis
        </button>
      </div>
    </div>
  );
};

export default MarketTrends;
