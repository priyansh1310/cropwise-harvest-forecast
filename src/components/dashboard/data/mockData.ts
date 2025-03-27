
// Mock data for the dashboard
export const userProfile = {
  name: 'John Doe',
  location: 'Karnataka, India',
  farmSize: '12 hectares',
  activeCrops: ['Rice', 'Wheat', 'Soybeans'],
  lastHarvest: '15 May, 2023'
};

export const weatherData = {
  temperature: '32°C',
  humidity: '65%',
  rainfall: '12mm',
  forecast: [
    { day: 'Mon', temp: '32°C', icon: 'sunny' },
    { day: 'Tue', temp: '30°C', icon: 'cloudy' },
    { day: 'Wed', temp: '29°C', icon: 'rainy' },
    { day: 'Thu', temp: '31°C', icon: 'sunny' },
    { day: 'Fri', temp: '33°C', icon: 'sunny' },
  ]
};

export const cropProgress = [
  { name: 'Rice', progress: 75, stage: 'Flowering', harvestDate: '15 Aug 2023', healthStatus: 'Good' },
  { name: 'Wheat', progress: 40, stage: 'Tillering', harvestDate: '20 Oct 2023', healthStatus: 'Excellent' },
  { name: 'Soybeans', progress: 60, stage: 'Pod formation', harvestDate: '05 Sep 2023', healthStatus: 'Average' }
];

export const marketTrends = [
  { crop: 'Rice', price: '₹2,850/quintal', trend: 'up', change: '+2.5%' },
  { crop: 'Wheat', price: '₹2,015/quintal', trend: 'down', change: '-1.2%' },
  { crop: 'Soybeans', price: '₹3,720/quintal', trend: 'up', change: '+3.8%' }
];

export const notifications = [
  { id: 1, type: 'alert', message: 'Heavy rainfall expected in your region tomorrow', time: '2 hours ago' },
  { id: 2, type: 'info', message: 'Rice crop needs fertilizer application this week', time: '5 hours ago' },
  { id: 3, type: 'update', message: 'New government scheme for organic farming announced', time: '1 day ago' }
];

export const news = [
  { id: 1, title: 'New drought-resistant crop varieties released', source: 'Agri Times', time: '2 hours ago' },
  { id: 2, title: 'Government increases MSP for Kharif crops', source: 'Farmers Weekly', time: '1 day ago' },
  { id: 3, title: 'Sustainable farming practices gaining popularity', source: 'Rural News', time: '2 days ago' }
];

export const govtSchemes = [
  { id: 1, name: 'PM-KISAN', description: 'Income support of ₹6,000 per year', eligibility: 'All farmers' },
  { id: 2, name: 'Soil Health Card', description: 'Free soil testing and recommendations', eligibility: 'All farmers' },
  { id: 3, name: 'PMFBY', description: 'Crop insurance scheme', eligibility: 'Farmers with crop loans' }
];
