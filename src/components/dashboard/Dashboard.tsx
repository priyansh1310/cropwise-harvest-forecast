
import React from 'react';
import { 
  CalendarDays, 
  BarChart3, 
  Wind, 
  Droplets, 
  TrendingUp, 
  Landmark, 
  Bell
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for dashboard
  const userProfile = {
    name: 'John Doe',
    location: 'Karnataka, India',
    farmSize: '12 hectares',
    activeCrops: ['Rice', 'Wheat', 'Soybeans'],
    lastHarvest: '15 May, 2023'
  };

  const weatherData = {
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

  const cropProgress = [
    { name: 'Rice', progress: 75, stage: 'Flowering', harvestDate: '15 Aug 2023', healthStatus: 'Good' },
    { name: 'Wheat', progress: 40, stage: 'Tillering', harvestDate: '20 Oct 2023', healthStatus: 'Excellent' },
    { name: 'Soybeans', progress: 60, stage: 'Pod formation', harvestDate: '05 Sep 2023', healthStatus: 'Average' }
  ];

  const marketTrends = [
    { crop: 'Rice', price: '₹2,850/quintal', trend: 'up', change: '+2.5%' },
    { crop: 'Wheat', price: '₹2,015/quintal', trend: 'down', change: '-1.2%' },
    { crop: 'Soybeans', price: '₹3,720/quintal', trend: 'up', change: '+3.8%' }
  ];

  const notifications = [
    { id: 1, type: 'alert', message: 'Heavy rainfall expected in your region tomorrow', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Rice crop needs fertilizer application this week', time: '5 hours ago' },
    { id: 3, type: 'update', message: 'New government scheme for organic farming announced', time: '1 day ago' }
  ];

  const news = [
    { id: 1, title: 'New drought-resistant crop varieties released', source: 'Agri Times', time: '2 hours ago' },
    { id: 2, title: 'Government increases MSP for Kharif crops', source: 'Farmers Weekly', time: '1 day ago' },
    { id: 3, title: 'Sustainable farming practices gaining popularity', source: 'Rural News', time: '2 days ago' }
  ];

  const govtSchemes = [
    { id: 1, name: 'PM-KISAN', description: 'Income support of ₹6,000 per year', eligibility: 'All farmers' },
    { id: 2, name: 'Soil Health Card', description: 'Free soil testing and recommendations', eligibility: 'All farmers' },
    { id: 3, name: 'PMFBY', description: 'Crop insurance scheme', eligibility: 'Farmers with crop loans' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
              {userProfile.name.slice(0, 1)}
            </div>
            <div>
              <p className="text-sm font-medium">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground">{userProfile.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First column */}
        <div className="space-y-6">
          {/* Harvest prediction */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Expected Harvest</h3>
                <div className="space-y-2">
                  {cropProgress.map((crop, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{crop.name}</span>
                      <span className="text-sm font-medium">{crop.harvestDate}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CalendarDays className="text-primary" size={24} />
            </div>
          </div>

          {/* User profile */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Farm Profile</h3>
              <User className="text-primary" size={24} />
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Farm Size</p>
                <p className="text-sm font-medium">{userProfile.farmSize}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active Crops</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {userProfile.activeCrops.map((crop, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full bg-secondary">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Last Harvest</p>
                <p className="text-sm font-medium">{userProfile.lastHarvest}</p>
              </div>
            </div>
          </div>

          {/* News feed */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Agri News</h3>
              <button className="text-xs text-primary">View all</button>
            </div>
            
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.source}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="space-y-6">
          {/* Weather */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Weather Forecast</h3>
                <div className="flex items-baseline mt-1">
                  <span className="text-2xl font-semibold">{weatherData.temperature}</span>
                  <span className="text-sm ml-2">{userProfile.location}</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex items-center">
                    <Wind size={14} className="mr-1 text-muted-foreground" />
                    <span className="text-xs">Humidity: {weatherData.humidity}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets size={14} className="mr-1 text-muted-foreground" />
                    <span className="text-xs">Rainfall: {weatherData.rainfall}</span>
                  </div>
                </div>
              </div>
              <Cloud className="text-primary" size={24} />
            </div>
            
            <div className="flex justify-between mt-6">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{day.day}</span>
                  <span className="text-xs mt-1">{day.temp}</span>
                  <span className="mt-1">
                    {day.icon === 'sunny' && <Sun size={16} className="text-amber-500" />}
                    {day.icon === 'cloudy' && <Cloud size={16} className="text-slate-400" />}
                    {day.icon === 'rainy' && <Cloud size={16} className="text-blue-400" />}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Crop progress */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Crop Progress</h3>
              <BarChart3 className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              {cropProgress.map((crop, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{crop.name}</span>
                    <span className="text-xs font-medium">{crop.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary"
                      style={{ width: `${crop.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">Stage: {crop.stage}</span>
                    <span className="text-xs text-muted-foreground">Health: {crop.healthStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watering progress */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Watering Progress</h3>
              <Droplets className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Rice Field</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Optimal</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Last watered: Yesterday</span>
                  <span className="mx-2">•</span>
                  <span>Next: In 2 days</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Wheat Field</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Needs Water</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Last watered: 4 days ago</span>
                  <span className="mx-2">•</span>
                  <span>Next: Today</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Soybean Field</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Optimal</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Last watered: 2 days ago</span>
                  <span className="mx-2">•</span>
                  <span>Next: Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="space-y-6">
          {/* Market trends */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Market Trends</h3>
              <TrendingUp className="text-primary" size={24} />
            </div>
            
            <div className="space-y-3">
              {marketTrends.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.crop}</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">{item.price}</span>
                    <span className={`text-xs ${
                      item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <button className="w-full py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                View Detailed Analysis
              </button>
            </div>
          </div>

          {/* Government schemes */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Government Schemes</h3>
              <Landmark className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              {govtSchemes.map((scheme) => (
                <div key={scheme.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                  <h4 className="text-sm font-medium">{scheme.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{scheme.description}</p>
                  <p className="text-xs mt-1">
                    <span className="text-muted-foreground">Eligibility:</span> {scheme.eligibility}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button className="w-full py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                Check Eligibility
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Notifications</h3>
              <Bell className="text-primary" size={24} />
            </div>
            
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className={`mt-0.5 h-2 w-2 rounded-full ${
                    notification.type === 'alert' ? 'bg-destructive' : 
                    notification.type === 'info' ? 'bg-primary' : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button className="w-full py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                View All Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
