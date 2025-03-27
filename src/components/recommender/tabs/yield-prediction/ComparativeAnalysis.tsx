
import React from 'react';

interface ComparativeAnalysisProps {
  comparisons: Array<{
    type: string;
    value: string;
    difference: string;
  }>;
}

const ComparativeAnalysis: React.FC<ComparativeAnalysisProps> = ({ comparisons }) => {
  return (
    <div>
      <h4 className="font-medium mb-3">Comparative Analysis</h4>
      <div className="space-y-3">
        {comparisons.map((comparison, index) => (
          <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
            <span className="text-sm">{comparison.type}</span>
            <div className="flex items-center">
              <span className="text-sm mr-2">{comparison.value}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                comparison.difference.startsWith('+') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {comparison.difference}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparativeAnalysis;
