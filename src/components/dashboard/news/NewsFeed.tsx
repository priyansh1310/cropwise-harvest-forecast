
import React from 'react';
import { news } from '../data/mockData';

const NewsFeed = () => {
  return (
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
  );
};

export default NewsFeed;
