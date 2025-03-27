
import React from 'react';
import { Landmark } from 'lucide-react';
import { govtSchemes } from '../data/mockData';

const GovernmentSchemes = () => {
  return (
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
  );
};

export default GovernmentSchemes;
