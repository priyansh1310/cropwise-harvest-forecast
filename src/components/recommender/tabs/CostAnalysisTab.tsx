
import React from 'react';
import { DollarSign, BarChart, TrendingUp, Loader2, ArrowRight } from 'lucide-react';

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
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <div className={`p-6 rounded-lg border bg-card shadow-sm animate-fade-in ${!showResults && 'hidden'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Cost Analysis Results</h3>
            <DollarSign className="text-primary" size={24} />
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Predicted Price Range</h4>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {costResults.predictedPrice}
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white border border-primary/20">
                  <span className="font-bold text-primary">{costResults.confidence}%</span>
                  <span className="text-xs ml-0.5">confidence</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Influencing Factors</h4>
              <div className="space-y-3">
                {costResults.factors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
                    <span className="text-sm">{factor.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      factor.impact === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : factor.impact === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {factor.impact} Impact
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-medium mb-3">Market Strategies</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <TrendingUp size={12} className="text-primary" />
                  </span>
                  <span>Consider delayed selling to benefit from seasonal price increases.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <BarChart size={12} className="text-primary" />
                  </span>
                  <span>Explore direct selling to processors to eliminate middlemen margins.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <DollarSign size={12} className="text-primary" />
                  </span>
                  <span>Focus on quality grading to access premium market segments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalysisTab;
