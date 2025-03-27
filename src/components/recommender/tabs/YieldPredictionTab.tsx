
import React from 'react';
import YieldPredictionForm from './yield-prediction/YieldPredictionForm';
import YieldResults from './yield-prediction/YieldResults';

interface YieldPredictionTabProps {
  yieldForm: {
    crop: string;
    state: string;
    season: string;
    cropYear: string;
    area: string;
    rainfall: string;
    fertilizer: string;
  };
  handleYieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleYieldSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
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

const YieldPredictionTab: React.FC<YieldPredictionTabProps> = ({
  yieldForm,
  handleYieldChange,
  handleYieldSubmit,
  isLoading,
  showResults,
  yieldResults
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="space-y-6">
        <YieldPredictionForm
          yieldForm={yieldForm}
          handleYieldChange={handleYieldChange}
          handleYieldSubmit={handleYieldSubmit}
          isLoading={isLoading}
        />
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <YieldResults 
          showResults={showResults} 
          yieldResults={yieldResults} 
        />
      </div>
    </div>
  );
};

export default YieldPredictionTab;
