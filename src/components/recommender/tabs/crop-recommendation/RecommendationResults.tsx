
import React from 'react';
import { Lightbulb } from 'lucide-react';
import RecommendationResultItem from './RecommendationResultItem';
import AdditionalInsights from './AdditionalInsights';

interface RecommendationResultsProps {
  showResults: boolean;
  recommendationResults: Array<{
    crop: string;
    suitability: string;
    confidence: number;
  }>;
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  showResults,
  recommendationResults
}) => {
  if (!showResults) {
    return null;
  }

  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Crop Recommendations</h3>
        <Lightbulb className="text-primary" size={24} />
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {recommendationResults.map((result, index) => (
            <RecommendationResultItem
              key={index}
              crop={result.crop}
              suitability={result.suitability}
              confidence={result.confidence}
            />
          ))}
        </div>

        <AdditionalInsights />
      </div>
    </div>
  );
};

export default RecommendationResults;
