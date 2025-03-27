
import React from 'react';

interface Factor {
  name: string;
  impact: string;
}

interface InfluencingFactorsProps {
  factors: Factor[];
}

const InfluencingFactors: React.FC<InfluencingFactorsProps> = ({ factors }) => {
  return (
    <div>
      <h4 className="font-medium mb-3">Influencing Factors</h4>
      <div className="space-y-3">
        {factors.map((factor, index) => (
          <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
            <span className="text-sm">{factor.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              factor.impact === 'High' 
                ? 'bg-red-100 text-red-800' 
                : factor.impact === 'Medium'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-blue-100 text-blue-800'
            }`}>
              {factor.impact} Impact
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencingFactors;
