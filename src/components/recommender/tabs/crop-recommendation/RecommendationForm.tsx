
import React from 'react';
import { Lightbulb, Loader2, ArrowRight } from 'lucide-react';

interface RecommendationFormProps {
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
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({
  recommendationForm,
  handleRecommendationChange,
  handleRecommendationSubmit,
  isLoading
}) => {
  return (
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
  );
};

export default RecommendationForm;
