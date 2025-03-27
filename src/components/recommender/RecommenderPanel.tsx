
import React, { useState } from 'react';
import { 
  Lightbulb, 
  LineChart, 
  Droplets, 
  Tractor, 
  DollarSign,
  ArrowRight,
  BarChart,
  Loader2
} from 'lucide-react';

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

  // Mock result data
  const recommendationResults = [
    { crop: 'Rice', suitability: 'High', confidence: 92 },
    { crop: 'Wheat', suitability: 'Medium', confidence: 78 },
    { crop: 'Soybeans', suitability: 'High', confidence: 85 },
    { crop: 'Cotton', suitability: 'Low', confidence: 45 }
  ];

  const yieldResults = {
    predictedYield: '3.8 tonnes/hectare',
    confidence: 87,
    comparisons: [
      { type: 'State Average', value: '3.2 tonnes/hectare', difference: '+18.75%' },
      { type: 'Previous Year', value: '3.5 tonnes/hectare', difference: '+8.57%' },
      { type: 'National Average', value: '3.0 tonnes/hectare', difference: '+26.67%' }
    ]
  };

  const costResults = {
    predictedPrice: '₹2,450 - ₹2,850 per quintal',
    confidence: 81,
    factors: [
      { name: 'Seasonal demand', impact: 'High' },
      { name: 'Supply chain disruptions', impact: 'Medium' },
      { name: 'Quality of produce', impact: 'High' },
      { name: 'Imports/Exports', impact: 'Low' }
    ]
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Crop Recommender</h1>
        <p className="text-muted-foreground mt-2">
          Get personalized recommendations for crops, yield predictions, and cost analysis based on your inputs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === 'recommendation' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('recommendation')}
        >
          Crop Recommendation
          {activeTab === 'recommendation' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === 'yield' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('yield')}
        >
          Yield Prediction
          {activeTab === 'yield' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === 'cost' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('cost')}
        >
          Cost Analysis
          {activeTab === 'cost' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            {activeTab === 'recommendation' && (
              <>
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
              </>
            )}

            {activeTab === 'yield' && (
              <>
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
              </>
            )}

            {activeTab === 'cost' && (
              <>
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
              </>
            )}
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {activeTab === 'recommendation' && (
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
          )}

          {activeTab === 'yield' && (
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
          )}

          {activeTab === 'cost' && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommenderPanel;
