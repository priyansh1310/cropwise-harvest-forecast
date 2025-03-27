
import React from 'react';
import { LineChart, Droplets, Tractor, BarChart, Loader2, ArrowRight } from 'lucide-react';

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
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <div className={`p-6 rounded-lg border bg-card shadow-sm animate-fade-in ${!showResults && 'hidden'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Yield Prediction Results</h3>
            <BarChart className="text-primary" size={24} />
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Predicted Yield</h4>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {yieldResults.predictedYield}
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white border border-primary/20">
                  <span className="font-bold text-primary">{yieldResults.confidence}%</span>
                  <span className="text-xs ml-0.5">confidence</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Comparative Analysis</h4>
              <div className="space-y-3">
                {yieldResults.comparisons.map((comparison, index) => (
                  <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
                    <span className="text-sm">{comparison.type}</span>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">{comparison.value}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        comparison.difference.startsWith('+') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {comparison.difference}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-medium mb-3">Recommendations</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <Droplets size={12} className="text-primary" />
                  </span>
                  <span>Consider drip irrigation to optimize water usage and potentially increase yield.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <Tractor size={12} className="text-primary" />
                  </span>
                  <span>Applying organic fertilizers during the flowering stage could enhance yield.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <LineChart size={12} className="text-primary" />
                  </span>
                  <span>Monitor soil pH regularly to maintain optimal growing conditions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPredictionTab;
