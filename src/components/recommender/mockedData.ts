
// Mock result data
export const recommendationResults = [
  { crop: 'Rice', suitability: 'High', confidence: 92 },
  { crop: 'Wheat', suitability: 'Medium', confidence: 78 },
  { crop: 'Soybeans', suitability: 'High', confidence: 85 },
  { crop: 'Cotton', suitability: 'Low', confidence: 45 }
];

export const yieldResults = {
  predictedYield: '3.8 tonnes/hectare',
  confidence: 87,
  comparisons: [
    { type: 'State Average', value: '3.2 tonnes/hectare', difference: '+18.75%' },
    { type: 'Previous Year', value: '3.5 tonnes/hectare', difference: '+8.57%' },
    { type: 'National Average', value: '3.0 tonnes/hectare', difference: '+26.67%' }
  ]
};

export const costResults = {
  predictedPrice: '₹2,450 - ₹2,850 per quintal',
  confidence: 81,
  factors: [
    { name: 'Seasonal demand', impact: 'High' },
    { name: 'Supply chain disruptions', impact: 'Medium' },
    { name: 'Quality of produce', impact: 'High' },
    { name: 'Imports/Exports', impact: 'Low' }
  ]
};
