
import React from 'react';
import { BarChart } from 'lucide-react';
import PredictedYield from './PredictedYield';
import ComparativeAnalysis from './ComparativeAnalysis';
import YieldRecommendations from './YieldRecommendations';

interface YieldResultsProps {
  showResults: boolean;
  yieldResults: {
    predictedYield: string;
    confidence: number;
    comparisons: Array<{
      type: string;
      value: string;
      difference: string;
    }>;
  };
}

const YieldResults: React.FC<YieldResultsProps> = ({
  showResults,
  yieldResults
}) => {
  if (!showResults) {
    return null;
  }

  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Yield Prediction Results</h3>
        <BarChart className="text-primary" size={24} />
      </div>
      
      <div className="space-y-6">
        <PredictedYield 
          predictedYield={yieldResults.predictedYield} 
          confidence={yieldResults.confidence} 
        />

        <ComparativeAnalysis comparisons={yieldResults.comparisons} />

        <YieldRecommendations />
      </div>
    </div>
  );
};

export default YieldResults;
