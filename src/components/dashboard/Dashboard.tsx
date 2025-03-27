
import React from 'react';
import DashboardHeader from './header/DashboardHeader';
import HarvestPrediction from './harvest/HarvestPrediction';
import FarmProfile from './profile/FarmProfile';
import NewsFeed from './news/NewsFeed';
import WeatherCard from './weather/WeatherCard';
import CropProgressCards from './progress/CropProgressCards';
import WateringProgress from './watering/WateringProgress';
import MarketTrends from './market/MarketTrends';
import GovernmentSchemes from './schemes/GovernmentSchemes';
import NotificationsList from './notifications/NotificationsList';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <DashboardHeader />

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First column */}
        <div className="space-y-6">
          <HarvestPrediction />
          <FarmProfile />
          <NewsFeed />
        </div>

        {/* Second column */}
        <div className="space-y-6">
          <WeatherCard />
          <CropProgressCards />
          <WateringProgress />
        </div>

        {/* Third column */}
        <div className="space-y-6">
          <MarketTrends />
          <GovernmentSchemes />
          <NotificationsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
