
import React, { useState } from 'react';
import { 
  Cloud, 
  CloudRain, 
  Droplets, 
  Sun, 
  Wind, 
  ArrowRight, 
  Clock,
  CalendarDays,
  ThermometerSun,
  Sprout
} from 'lucide-react';

const WeatherPanel = () => {
  const [selectedLocation, setSelectedLocation] = useState('Karnataka, India');
  const [weatherView, setWeatherView] = useState<'today' | 'forecast'>('today');
  
  // Mock weather data
  const currentWeather = {
    location: 'Karnataka, India',
    temperature: 32,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
    uvIndex: 7,
    airQuality: 'Moderate',
    sunrise: '06:15',
    sunset: '18:45',
    date: 'Monday, 15 August 2023'
  };
  
  const hourlyForecast = [
    { time: '09:00', temp: 28, icon: 'sun' },
    { time: '12:00', temp: 32, icon: 'sun' },
    { time: '15:00', temp: 31, icon: 'cloud' },
    { time: '18:00', temp: 28, icon: 'cloud' },
    { time: '21:00', temp: 26, icon: 'cloud' },
    { time: '00:00', temp: 25, icon: 'cloud-rain' }
  ];
  
  const weeklyForecast = [
    { day: 'Mon', date: '15 Aug', high: 32, low: 24, icon: 'cloud', condition: 'Partly Cloudy', rainfall: 0 },
    { day: 'Tue', date: '16 Aug', high: 33, low: 25, icon: 'sun', condition: 'Sunny', rainfall: 0 },
    { day: 'Wed', date: '17 Aug', high: 30, low: 24, icon: 'cloud-rain', condition: 'Light Rain', rainfall: 12 },
    { day: 'Thu', date: '18 Aug', high: 29, low: 23, icon: 'cloud-rain', condition: 'Rain', rainfall: 25 },
    { day: 'Fri', date: '19 Aug', high: 28, low: 22, icon: 'cloud-rain', condition: 'Rain', rainfall: 18 },
    { day: 'Sat', date: '20 Aug', high: 30, low: 23, icon: 'cloud', condition: 'Cloudy', rainfall: 5 },
    { day: 'Sun', date: '21 Aug', high: 31, low: 24, icon: 'sun', condition: 'Sunny', rainfall: 0 }
  ];
  
  const cropWeatherTips = [
    {
      id: 1,
      crop: 'Rice',
      tip: 'Expected rainfall in the coming days is favorable for rice cultivation. Consider postponing pesticide application until after Wednesday.'
    },
    {
      id: 2,
      crop: 'Wheat',
      tip: 'High temperatures expected this week. Ensure adequate irrigation to prevent heat stress on wheat crops.'
    },
    {
      id: 3,
      crop: 'Soybeans',
      tip: 'Upcoming rain should benefit soybean growth. Monitor fields for potential water logging in low-lying areas.'
    }
  ];
  
  const renderWeatherIcon = (icon: string, size = 24) => {
    switch (icon) {
      case 'sun':
        return <Sun size={size} className="text-amber-500" />;
      case 'cloud':
        return <Cloud size={size} className="text-slate-400" />;
      case 'cloud-rain':
        return <CloudRain size={size} className="text-blue-400" />;
      default:
        return <Cloud size={size} className="text-slate-400" />;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Weather Forecast</h1>
        <p className="text-muted-foreground mt-2">
          Get detailed weather information and forecasts to plan your farming activities.
        </p>
      </div>

      {/* Location selector */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium">Location:</label>
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-1 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary text-sm"
          >
            <option value="Karnataka, India">Karnataka, India</option>
            <option value="Punjab, India">Punjab, India</option>
            <option value="Maharashtra, India">Maharashtra, India</option>
            <option value="Uttar Pradesh, India">Uttar Pradesh, India</option>
          </select>
        </div>
      </div>

      {/* View toggle */}
      <div className="flex border-b border-border mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            weatherView === 'today' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setWeatherView('today')}
        >
          Today
          {weatherView === 'today' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            weatherView === 'forecast' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setWeatherView('forecast')}
        >
          7-Day Forecast
          {weatherView === 'forecast' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
      </div>

      {weatherView === 'today' && (
        <div className="space-y-6">
          {/* Current weather card */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm text-muted-foreground">{currentWeather.date}</h3>
                <h2 className="text-lg font-medium">{currentWeather.location}</h2>
              </div>
              {renderWeatherIcon(currentWeather.condition === 'Partly Cloudy' ? 'cloud' : 'sun', 40)}
            </div>
            
            <div className="flex items-center mb-6">
              <div className="text-5xl font-semibold">{currentWeather.temperature}°C</div>
              <div className="ml-4">
                <p className="text-lg">{currentWeather.condition}</p>
                <p className="text-sm text-muted-foreground">
                  Feels like {currentWeather.temperature - 1}°C
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/50">
                <Droplets className="h-5 w-5 text-blue-500 mb-1" />
                <span className="text-sm text-muted-foreground">Humidity</span>
                <span className="text-lg font-medium">{currentWeather.humidity}%</span>
              </div>
              
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/50">
                <Wind className="h-5 w-5 text-slate-500 mb-1" />
                <span className="text-sm text-muted-foreground">Wind</span>
                <span className="text-lg font-medium">{currentWeather.windSpeed} km/h</span>
              </div>
              
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/50">
                <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
                <span className="text-sm text-muted-foreground">Rainfall</span>
                <span className="text-lg font-medium">{currentWeather.rainfall} mm</span>
              </div>
              
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/50">
                <Sun className="h-5 w-5 text-amber-500 mb-1" />
                <span className="text-sm text-muted-foreground">UV Index</span>
                <span className="text-lg font-medium">{currentWeather.uvIndex} (High)</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm">Sunrise</span>
                </div>
                <span className="font-medium">{currentWeather.sunrise}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm">Sunset</span>
                </div>
                <span className="font-medium">{currentWeather.sunset}</span>
              </div>
            </div>
          </div>

          {/* Hourly forecast */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Hourly Forecast</h3>
              <Clock className="text-primary" size={24} />
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              {hourlyForecast.map((hour, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-sm font-medium">{hour.time}</span>
                  {renderWeatherIcon(hour.icon, 28)}
                  <span className="text-lg font-medium mt-1">{hour.temp}°C</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crop-specific weather advice */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Weather Tips for Your Crops</h3>
              <Sprout className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              {cropWeatherTips.map((tip) => (
                <div key={tip.id} className="p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">{tip.crop}</h4>
                  <p className="text-sm">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {weatherView === 'forecast' && (
        <div className="space-y-6">
          {/* Weekly forecast */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">7-Day Forecast</h3>
              <CalendarDays className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              {weeklyForecast.map((day, index) => (
                <div key={index} className={`p-4 rounded-lg grid grid-cols-7 gap-2 items-center ${
                  index === 0 ? 'bg-primary/10' : 'hover:bg-secondary transition-colors'
                }`}>
                  <div className="col-span-2">
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    {renderWeatherIcon(day.icon, 30)}
                  </div>
                  
                  <div className="col-span-2 text-center">
                    <p className="text-sm text-muted-foreground">{day.condition}</p>
                    <p className="text-sm">
                      <CloudRain className="h-3 w-3 inline mr-1" />
                      {day.rainfall} mm
                    </p>
                  </div>
                  
                  <div className="col-span-2 flex items-center justify-end space-x-3">
                    <div>
                      <ThermometerSun className="h-4 w-4 inline mr-1 text-amber-500" />
                      <span className="font-medium">{day.high}°C</span>
                    </div>
                    <div className="text-muted-foreground">
                      <ThermometerSun className="h-4 w-4 inline mr-1" />
                      <span>{day.low}°C</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rainfall forecast */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Rainfall Forecast</h3>
              <CloudRain className="text-primary" size={24} />
            </div>
            
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-6">
                {weeklyForecast.map((day, index) => (
                  <div key={index} className="flex flex-col items-center w-1/7">
                    <div className="relative mb-2">
                      <div 
                        className={`w-8 bg-blue-400 rounded-t-sm transition-all duration-500 ${
                          day.rainfall > 0 ? 'opacity-100' : 'opacity-30'
                        }`}
                        style={{
                          height: `${day.rainfall * 2}px`,
                          minHeight: '4px'
                        }}
                      ></div>
                      {day.rainfall > 0 && (
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium">
                          {day.rainfall}mm
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Total expected rainfall for the week: 60mm
              </p>
              <p className="text-sm mt-2">
                This is 15% above the seasonal average for your region.
              </p>
            </div>
          </div>

          {/* Agricultural impact */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Agricultural Impact</h3>
              <Sprout className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                <h4 className="font-medium flex items-center">
                  <Sun className="h-5 w-5 text-amber-500 mr-2" />
                  Heat Advisory
                </h4>
                <p className="text-sm mt-1">
                  High temperatures expected on Tuesday may cause heat stress to crops. Consider shade structures for sensitive plants.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="font-medium flex items-center">
                  <CloudRain className="h-5 w-5 text-blue-500 mr-2" />
                  Rainfall Alert
                </h4>
                <p className="text-sm mt-1">
                  Moderate to heavy rainfall expected Wednesday through Friday. Ensure proper drainage in fields to prevent waterlogging.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <h4 className="font-medium flex items-center">
                  <Sprout className="h-5 w-5 text-green-500 mr-2" />
                  Planting Conditions
                </h4>
                <p className="text-sm mt-1">
                  Favorable conditions for planting seasonal crops expected by the weekend after rainfall subsides.
                </p>
              </div>
            </div>
            
            <button className="w-full mt-4 flex items-center justify-center px-4 py-2 rounded-md text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
              View Detailed Agricultural Forecast
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherPanel;
