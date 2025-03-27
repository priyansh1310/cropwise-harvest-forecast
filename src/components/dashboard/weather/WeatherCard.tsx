
import React from 'react';
import { Wind, Droplets, Cloud, Sun } from 'lucide-react';
import { weatherData, userProfile } from '../data/mockData';

const WeatherCard = () => {
  return (
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
  );
};

export default WeatherCard;
