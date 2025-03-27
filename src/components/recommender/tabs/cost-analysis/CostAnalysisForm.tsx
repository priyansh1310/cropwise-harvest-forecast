
import React from 'react';
import { ArrowRight, DollarSign, Loader2 } from 'lucide-react';

interface CostAnalysisFormProps {
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
}

const CostAnalysisForm: React.FC<CostAnalysisFormProps> = ({
  costForm,
  handleCostChange,
  handleCostSubmit,
  isLoading
}) => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Cost Analysis Parameters</h3>
        <DollarSign className="text-primary" size={24} />
      </div>
      
      <form onSubmit={handleCostSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">State</label>
            <select 
              name="state"
              value={costForm.state}
              onChange={handleCostChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select state</option>
              <option value="punjab">Punjab</option>
              <option value="haryana">Haryana</option>
              <option value="up">Uttar Pradesh</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="gujarat">Gujarat</option>
              <option value="maharashtra">Maharashtra</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">District</label>
            <select 
              name="district"
              value={costForm.district}
              onChange={handleCostChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select district</option>
              <option value="ludhiana">Ludhiana</option>
              <option value="amritsar">Amritsar</option>
              <option value="karnal">Karnal</option>
              <option value="meerut">Meerut</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Market Area</label>
            <input 
              type="text"
              name="marketArea"
              value={costForm.marketArea}
              onChange={handleCostChange}
              placeholder="e.g., Ludhiana Grain Market"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Crop Type</label>
            <select 
              name="cropType"
              value={costForm.cropType}
              onChange={handleCostChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select crop</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="maize">Maize</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Grade</label>
            <select 
              name="grade"
              value={costForm.grade}
              onChange={handleCostChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select grade</option>
              <option value="premium">Premium</option>
              <option value="grade-a">Grade A</option>
              <option value="grade-b">Grade B</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Arrival Date</label>
            <input 
              type="date"
              name="arrivalDate"
              value={costForm.arrivalDate}
              onChange={handleCostChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Minimum Price (₹)</label>
              <input 
                type="number"
                name="minPrice"
                value={costForm.minPrice}
                onChange={handleCostChange}
                placeholder="e.g., 1800"
                min="0"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-1">Maximum Price (₹)</label>
              <input 
                type="number"
                name="maxPrice"
                value={costForm.maxPrice}
                onChange={handleCostChange}
                placeholder="e.g., 2200"
                min="0"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
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
              Analyzing Market...
            </>
          ) : (
            <>
              Predict Cost
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CostAnalysisForm;
