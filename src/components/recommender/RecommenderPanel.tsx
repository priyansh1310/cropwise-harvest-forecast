
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import CropRecommendationTab from './tabs/CropRecommendationTab';
import YieldPredictionTab from './tabs/YieldPredictionTab';
import CostAnalysisTab from './tabs/CostAnalysisTab';
import { recommendationResults, yieldResults, costResults } from './mockedData';

const RecommenderPanel = () => {
  const [activeTab, setActiveTab] = useState('recommendation');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Form states
  const [recommendationForm, setRecommendationForm] = useState({
    soilType: '',
    region: '',
    area: '',
    rainfall: '',
    temperature: '',
    waterAvailability: ''
  });

  const [yieldForm, setYieldForm] = useState({
    crop: '',
    state: '',
    season: '',
    cropYear: '',
    area: '',
    rainfall: '',
    fertilizer: ''
  });

  const [costForm, setCostForm] = useState({
    state: '',
    district: '',
    marketArea: '',
    cropType: '',
    grade: '',
    arrivalDate: '',
    minPrice: '',
    maxPrice: ''
  });

  // Handle form submission
  const handleRecommendationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleYieldSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleCostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleRecommendationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRecommendationForm({ ...recommendationForm, [name]: value });
  };

  const handleYieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setYieldForm({ ...yieldForm, [name]: value });
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCostForm({ ...costForm, [name]: value });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Crop Recommender</h1>
        <p className="text-muted-foreground mt-2">
          Get personalized recommendations for crops, yield predictions, and cost analysis based on your inputs.
        </p>
      </div>

      {/* Tabs Navigation */}
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      {activeTab === 'recommendation' && (
        <CropRecommendationTab
          recommendationForm={recommendationForm}
          handleRecommendationChange={handleRecommendationChange}
          handleRecommendationSubmit={handleRecommendationSubmit}
          isLoading={isLoading}
          showResults={showResults}
          recommendationResults={recommendationResults}
        />
      )}

      {activeTab === 'yield' && (
        <YieldPredictionTab
          yieldForm={yieldForm}
          handleYieldChange={handleYieldChange}
          handleYieldSubmit={handleYieldSubmit}
          isLoading={isLoading}
          showResults={showResults}
          yieldResults={yieldResults}
        />
      )}

      {activeTab === 'cost' && (
        <CostAnalysisTab
          costForm={costForm}
          handleCostChange={handleCostChange}
          handleCostSubmit={handleCostSubmit}
          isLoading={isLoading}
          showResults={showResults}
          costResults={costResults}
        />
      )}
    </div>
  );
};

export default RecommenderPanel;
