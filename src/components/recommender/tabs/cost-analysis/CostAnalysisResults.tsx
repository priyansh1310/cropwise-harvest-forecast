
import React from 'react';
import { DollarSign } from 'lucide-react';
import PredictedPrice from './PredictedPrice';
import InfluencingFactors from './InfluencingFactors';
import MarketStrategies from './MarketStrategies';

interface CostAnalysisResultsProps {
  showResults: boolean;
  costResults: {
    predictedPrice: string;
    confidence: number;
    factors: Array<{
      name: string;
      impact: string;
    }>;
  };
}

const CostAnalysisResults: React.FC<CostAnalysisResultsProps> = ({
  showResults,
  costResults
}) => {
  if (!showResults) return null;

  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Cost Analysis Results</h3>
        <DollarSign className="text-primary" size={24} />
      </div>
      
      <div className="space-y-6">
        <PredictedPrice 
          predictedPrice={costResults.predictedPrice} 
          confidence={costResults.confidence} 
        />

        <InfluencingFactors factors={costResults.factors} />

        <MarketStrategies />
      </div>
    </div>
  );
};

export default CostAnalysisResults;
