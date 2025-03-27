
import React, { useState } from 'react';
import { 
  Search, 
  PlayCircle, 
  ShoppingBag, 
  Star, 
  Info, 
  Filter, 
  Loader2,
  ArrowRight 
} from 'lucide-react';

const ResourcePanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('videos');
  const [isSearching, setIsSearching] = useState(false);
  
  // Mock video data
  const videoResults = [
    {
      id: 1,
      title: 'Modern Irrigation Techniques for Rice Cultivation',
      channel: 'AgriTech Tutorials',
      views: '125K views',
      duration: '15:42',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Organic Pest Control for Sustainable Farming',
      channel: 'Green Farming',
      views: '87K views',
      duration: '22:15',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Soil Testing Methods for Better Crop Yields',
      channel: 'Farming Institute',
      views: '203K views',
      duration: '18:30',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Advanced Fertilization Strategies for Wheat',
      channel: 'Crop Science',
      views: '72K views',
      duration: '26:18',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.5
    }
  ];

  // Mock marketplace data
  const marketplaceItems = [
    {
      id: 1,
      name: 'Precision Drip Irrigation Kit',
      price: '₹12,850',
      rating: 4.7,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: true
    },
    {
      id: 2,
      name: 'Organic Fertilizer - 25kg',
      price: '₹1,850',
      rating: 4.5,
      reviews: 96,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: false
    },
    {
      id: 3,
      name: 'Digital Soil Testing Kit',
      price: '₹8,450',
      rating: 4.8,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: true
    },
    {
      id: 4,
      name: 'High Yield Rice Seeds - 5kg',
      price: '₹3,250',
      rating: 4.6,
      reviews: 73,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: false
    },
    {
      id: 5,
      name: 'Solar-Powered Water Pump',
      price: '₹24,999',
      rating: 4.9,
      reviews: 158,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: true
    },
    {
      id: 6,
      name: 'Handheld GPS Field Mapper',
      price: '₹18,750',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bestseller: false
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resource Finder</h1>
        <p className="text-muted-foreground mt-2">
          Discover educational videos and marketplace items to improve your farming practices.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text"
            placeholder={activeTab === 'videos' ? "Search for farming tutorials..." : "Search for farming equipment..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-lg border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search className="absolute left-3 top-3.5 text-muted-foreground h-5 w-5" />
          <button 
            type="submit"
            className="absolute right-3 top-2.5 px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
            disabled={isSearching}
          >
            {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Search'}
          </button>
        </form>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === 'videos' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('videos')}
        >
          Tutorial Videos
          {activeTab === 'videos' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === 'marketplace' 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('marketplace')}
        >
          Marketplace
          {activeTab === 'marketplace' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
      </div>

      {/* Content */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recommended Videos</h3>
            <button className="flex items-center text-sm text-primary">
              <Filter className="h-4 w-4 mr-1" />
              Filter Results
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {videoResults.map((video) => (
              <div key={video.id} className="group rounded-lg border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">{video.channel}</span>
                    <span className="text-xs text-muted-foreground">{video.views}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-sm ml-1">{video.rating}</span>
                    </div>
                    <button className="ml-auto text-sm text-primary hover:underline">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <button className="flex items-center px-4 py-2 text-sm text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors">
              Load More Videos
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {activeTab === 'marketplace' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recommended Products</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="text-sm border-none bg-transparent focus:outline-none focus:ring-0">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <button className="flex items-center text-sm text-primary">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceItems.map((item) => (
              <div key={item.id} className="group rounded-lg border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {item.bestseller && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded bg-primary text-primary-foreground text-xs font-medium">
                      Bestseller
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-sm ml-1">{item.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-3 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">
                    Add to Cart
                  </button>
                  
                  <button className="w-full mt-2 px-4 py-2 rounded-md border border-primary text-primary bg-transparent hover:bg-primary/5 text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <button className="flex items-center px-4 py-2 text-sm text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors">
              View More Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePanel;
