
import React from 'react';

interface RecommendationResultItemProps {
  crop: string;
  suitability: string;
  confidence: number;
}

const RecommendationResultItem: React.FC<RecommendationResultItemProps> = ({ 
  crop, 
  suitability, 
  confidence 
}) => {
  return (
    <div 
      className={`p-4 rounded-lg border ${
        suitability === 'High' ? 'border-green-200 bg-green-50' :
        suitability === 'Medium' ? 'border-amber-200 bg-amber-50' :
        'border-red-200 bg-red-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{crop}</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Suitability: {suitability}
          </p>
        </div>
        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white">
          <span className="font-bold text-primary">{confidence}%</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationResultItem;
