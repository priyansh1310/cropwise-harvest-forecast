
import React from 'react';

interface NavTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

export default NavTabs;
