
import React from 'react';
import { Lightbulb, Droplets, Tractor, Cloud, Loader2, ArrowRight } from 'lucide-react';

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
        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Input Parameters</h3>
            <Lightbulb className="text-primary" size={24} />
          </div>
          
          <form onSubmit={handleRecommendationSubmit}>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Soil Type</label>
                <select 
                  name="soilType"
                  value={recommendationForm.soilType}
                  onChange={handleRecommendationChange}
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="silt">Silt</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Region</label>
                <select 
                  name="region"
                  value={recommendationForm.region}
                  onChange={handleRecommendationChange}
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select region</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                  <option value="central">Central India</option>
                  <option value="northeast">Northeast India</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Area of Cultivation (hectares)</label>
                <input 
                  type="number"
                  name="area"
                  value={recommendationForm.area}
                  onChange={handleRecommendationChange}
                  placeholder="e.g., 5.5"
                  min="0.1"
                  step="0.1"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Annual Rainfall (mm)</label>
                <input 
                  type="number"
                  name="rainfall"
                  value={recommendationForm.rainfall}
                  onChange={handleRecommendationChange}
                  placeholder="e.g., 850"
                  min="0"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Temperature Range (°C)</label>
                <input 
                  type="text"
                  name="temperature"
                  value={recommendationForm.temperature}
                  onChange={handleRecommendationChange}
                  placeholder="e.g., 25-35"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Water Availability</label>
                <select 
                  name="waterAvailability"
                  value={recommendationForm.waterAvailability}
                  onChange={handleRecommendationChange}
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="abundant">Abundant</option>
                  <option value="adequate">Adequate</option>
                  <option value="limited">Limited</option>
                  <option value="scarce">Scarce</option>
                </select>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Get Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <div className={`p-6 rounded-lg border bg-card shadow-sm animate-fade-in ${!showResults && 'hidden'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Crop Recommendations</h3>
            <Lightbulb className="text-primary" size={24} />
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {recommendationResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${
                    result.suitability === 'High' ? 'border-green-200 bg-green-50' :
                    result.suitability === 'Medium' ? 'border-amber-200 bg-amber-50' :
                    'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{result.crop}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Suitability: {result.suitability}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white">
                      <span className="font-bold text-primary">{result.confidence}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-medium mb-3">Additional Insights</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <Droplets size={12} className="text-primary" />
                  </span>
                  <span>Rice requires consistent irrigation, which aligns with your water availability.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <Cloud size={12} className="text-primary" />
                  </span>
                  <span>Your rainfall pattern is ideal for soybean cultivation in this region.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <Tractor size={12} className="text-primary" />
                  </span>
                  <span>The loamy soil in your region has excellent nutrient retention properties.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendationTab;
