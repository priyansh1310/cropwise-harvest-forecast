
import React from 'react';
import RecommendationForm from './crop-recommendation/RecommendationForm';
import RecommendationResults from './crop-recommendation/RecommendationResults';

interface CropRecommendationTabProps {
  recommendationForm: {
    soilType: string;
    region: string;
    area: string;
    rainfall: string;
    temperature: string;
    waterAvailability: string;
  };
  handleRecommendationChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleRecommendationSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  showResults: boolean;
  recommendationResults: Array<{
    crop: string;
    suitability: string;
    confidence: number;
  }>;
}

const CropRecommendationTab: React.FC<CropRecommendationTabProps> = ({
  recommendationForm,
  handleRecommendationChange,
  handleRecommendationSubmit,
  isLoading,
  showResults,
  recommendationResults
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="space-y-6">
        <RecommendationForm
          recommendationForm={recommendationForm}
          handleRecommendationChange={handleRecommendationChange}
          handleRecommendationSubmit={handleRecommendationSubmit}
          isLoading={isLoading}
        />
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <RecommendationResults
          showResults={showResults}
          recommendationResults={recommendationResults}
        />
      </div>
    </div>
  );
};

export default CropRecommendationTab;
