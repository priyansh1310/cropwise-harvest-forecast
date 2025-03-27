
import React from 'react';

interface PredictedPriceProps {
  predictedPrice: string;
  confidence: number;
}

const PredictedPrice: React.FC<PredictedPriceProps> = ({ predictedPrice, confidence }) => {
  return (
    <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Predicted Price Range</h4>
          <p className="text-2xl font-bold text-primary mt-1">
            {predictedPrice}
          </p>
        </div>
        <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white border border-primary/20">
          <span className="font-bold text-primary">{confidence}%</span>
          <span className="text-xs ml-0.5">confidence</span>
        </div>
      </div>
    </div>
  );
};

export default PredictedPrice;
