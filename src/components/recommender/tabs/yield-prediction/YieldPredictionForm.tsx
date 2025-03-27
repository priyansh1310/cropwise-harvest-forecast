
import React from 'react';
import { LineChart, Loader2, ArrowRight } from 'lucide-react';

interface YieldPredictionFormProps {
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
}

const YieldPredictionForm: React.FC<YieldPredictionFormProps> = ({
  yieldForm,
  handleYieldChange,
  handleYieldSubmit,
  isLoading
}) => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Yield Prediction Parameters</h3>
        <LineChart className="text-primary" size={24} />
      </div>
      
      <form onSubmit={handleYieldSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Crop</label>
            <select 
              name="crop"
              value={yieldForm.crop}
              onChange={handleYieldChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select crop</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="maize">Maize</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="cotton">Cotton</option>
              <option value="soybeans">Soybeans</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">State</label>
            <select 
              name="state"
              value={yieldForm.state}
              onChange={handleYieldChange}
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
            <label className="text-sm font-medium block mb-1">Season</label>
            <select 
              name="season"
              value={yieldForm.season}
              onChange={handleYieldChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select season</option>
              <option value="kharif">Kharif</option>
              <option value="rabi">Rabi</option>
              <option value="zaid">Zaid</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Crop Year</label>
            <select 
              name="cropYear"
              value={yieldForm.cropYear}
              onChange={handleYieldChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Area (hectares)</label>
            <input 
              type="number"
              name="area"
              value={yieldForm.area}
              onChange={handleYieldChange}
              placeholder="e.g., 10"
              min="0.1"
              step="0.1"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Rainfall (mm)</label>
            <input 
              type="number"
              name="rainfall"
              value={yieldForm.rainfall}
              onChange={handleYieldChange}
              placeholder="e.g., 750"
              min="0"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium block mb-1">Fertilizer & Pesticide Usage</label>
            <select 
              name="fertilizer"
              value={yieldForm.fertilizer}
              onChange={handleYieldChange}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Select usage level</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="organic">Organic Only</option>
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
              Calculating...
            </>
          ) : (
            <>
              Predict Yield
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default YieldPredictionForm;
