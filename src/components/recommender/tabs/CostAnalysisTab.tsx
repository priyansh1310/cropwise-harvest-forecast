
import React from 'react';
import CostAnalysisForm from './cost-analysis/CostAnalysisForm';
import CostAnalysisResults from './cost-analysis/CostAnalysisResults';

interface CostAnalysisTabProps {
  costForm: {
    state: string;
    district: string;
    marketArea: string;
    cropType: string;
    grade: string;
    arrivalDate: string;
    minPrice: string;
    maxPrice: string;
  };
  handleCostChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCostSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
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

const CostAnalysisTab: React.FC<CostAnalysisTabProps> = ({
  costForm,
  handleCostChange,
  handleCostSubmit,
  isLoading,
  showResults,
  costResults
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="space-y-6">
        <CostAnalysisForm
          costForm={costForm}
          handleCostChange={handleCostChange}
          handleCostSubmit={handleCostSubmit}
          isLoading={isLoading}
        />
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <CostAnalysisResults
          showResults={showResults}
          costResults={costResults}
        />
      </div>
    </div>
  );
};

export default CostAnalysisTab;
