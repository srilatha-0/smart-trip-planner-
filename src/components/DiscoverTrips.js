import React, { useState } from 'react';
import "./DiscoverTrips.css";

const DiscoverTrip = () => {
  const [currentStep, setCurrentStep] = useState(2);
  
  const moodCards = [
    {
      icon: '😌',
      title: 'Relaxed',
      description: 'Beach days, spas, and peaceful retreats',
      color: 'linear-gradient(145deg, #E3F2FD, #BBDEFB)'
    },
    {
      icon: '🏔',
      title: 'Adventurous',
      description: 'Hiking, extreme sports, and exploration',
      color: 'linear-gradient(145deg, #E8F5E9, #C8E6C9)'
    },
    {
      icon: '🌅',
      title: 'Romantic',
      description: 'Sunsets, fine dining, and cozy moments',
      color: 'linear-gradient(145deg, #FFF3E0, #FFE0B2)'
    },
    {
      icon: '🌿',
      title: 'Solo Reflection',
      description: 'Mindfulness, solitude, and self-discovery',
      color: 'linear-gradient(145deg, #F1F8E9, #DCEDC8)'
    },
    {
      icon: '🎉',
      title: 'Party',
      description: 'Nightlife, festivals, and vibrant energy',
      color: 'linear-gradient(145deg, #FCE4EC, #F8BBD9)'
    },
    {
      icon: '🛕',
      title: 'Spiritual',
      description: 'Temples, meditation, and ancient wisdom',
      color: 'linear-gradient(145deg, #EDE7F6, #D1C4E9)'
    }
  ];


  const destinations = [
    {
      id: 1,
      name: 'Kyoto',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Ancient temples meet modern zen in this city of thousand shrines. Cherry blossoms and traditional tea ceremonies await.',
      budget: '$2,500 - $3,200',
      weather: '18°C, Clear',
      weatherIcon: '☀️',
      coordinates: { lat: 35.0116, lng: 135.7681 }
    },
    {
      id: 2,
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'White-washed buildings cascading down cliffs to the Aegean Sea. Famous for stunning sunsets and volcanic beaches.',
      budget: '$3,000 - $4,000',
      weather: '24°C, Sunny',
      weatherIcon: '☀️',
      coordinates: { lat: 36.3932, lng: 25.4615 }
    },
    {
      id: 3,
      name: 'Banff',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Turquoise lakes surrounded by majestic mountains. A paradise for outdoor enthusiasts and wildlife lovers.',
      budget: '$2,800 - $3,500',
      weather: '12°C, Partly Cloudy',
      weatherIcon: '⛅',
      coordinates: { lat: 51.1784, lng: -115.5708 }
    }
  ];

  return (
    <div className="discover-container">
      {/* Hero Search Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="ai-badge">
            <span className="sparkle-icon">✨</span>
            AI-Powered Travel Planning
          </div>
          <h1 className="hero-title">
            Discover Your Next <span className="gradient-text">Adventure</span>
          </h1>
          <div className="search-wrapper">
            <div className="search-glow"></div>
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Describe your dream trip..." 
                className="search-input"
              />
              <button className="ai-assist-btn">
                <span className="sparkle-icon">✨</span>
                AI Assist
              </button>
            </div>
          </div>
          <div className="trending-searches">
            <span className="trending-label">Popular:</span>
            <button className="trending-tag">Beach getaway 🏖</button>
            <button className="trending-tag">European tour 🇪🇺</button>
            <button className="trending-tag">Mountain trek ⛰</button>
          </div>
        </div>
      </div>

      {/* Mood-Based Selection */}
      <div className="section">
        <div className="section-header">
          <h2>How do you want to feel?</h2>
          <p className="section-subtitle">Select your travel mood to personalize recommendations</p>
        </div>
        <div className="mood-grid">
          {moodCards.map((mood, index) => (
            <div key={index} className="mood-card" style={{ background: mood.color }}>
              <div className="mood-icon">{mood.icon}</div>
              <h3 className="mood-title">{mood.title}</h3>
              <p className="mood-description">{mood.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trip Discovery Panel */}
      <div className="section discovery-panel">
        <div className="panel-header">
          <h2>Build Your Perfect Trip</h2>
          <div className="progress-indicator">
            <div className="progress-steps">
              <span className={`step ${currentStep >= 1 ? 'active' : ''}`}>Budget</span>
              <span className={`step ${currentStep >= 2 ? 'active' : ''}`}>Duration</span>
              <span className={`step ${currentStep >= 3 ? 'active' : ''}`}>Travelers</span>
              <span className={`step ${currentStep >= 4 ? 'active' : ''}`}>Weather</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
            </div>
          </div>
        </div>
        
        <div className="preferences-grid">
          <div className="preference-card">
            <div className="preference-icon">💰</div>
            <label>Budget Range</label>
            <div className="range-inputs">
              <select className="preference-select">
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>
          </div>
          
          <div className="preference-card">
            <div className="preference-icon">📅</div>
            <label>Trip Duration</label>
            <div className="range-inputs">
              <select className="preference-select">
                <option>3-5 days</option>
                <option>6-9 days</option>
                <option>10-14 days</option>
                <option>15+ days</option>
              </select>
            </div>
          </div>
          
          <div className="preference-card">
            <div className="preference-icon">👥</div>
            <label>Traveling With</label>
            <div className="range-inputs">
              <select className="preference-select">
                <option>Solo</option>
                <option>Partner</option>
                <option>Family</option>
                <option>Friends</option>
              </select>
            </div>
          </div>
          
          <div className="preference-card">
            <div className="preference-icon">🌤️</div>
            <label>Weather Preference</label>
            <div className="range-inputs">
              <select className="preference-select">
                <option>Warm & Sunny</option>
                <option>Cool & Breezy</option>
                <option>Snowy</option>
                <option>Tropical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Generated Destinations */}
      <div className="section">
        <div className="section-header">
          <h2>AI-Curated Destinations</h2>
          <p className="section-subtitle">Personalized just for you based on your preferences</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                <div className="image-overlay"></div>
                <button className="save-btn">❤️</button>
              </div>
              <div className="card-content">
                <div className="destination-header">
                  <h3>{destination.name}</h3>
                  <span className="country">{destination.country}</span>
                </div>
                <p className="destination-description">{destination.description}</p>
                <div className="destination-details">
                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <span>{destination.budget}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">{destination.weatherIcon}</span>
                    <span>{destination.weather}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="map-btn">🗺️ View on Map</button>
                  <button className="itinerary-btn">✨ Generate Itinerary</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="section map-section">
        <div className="section-header">
          <h2>Discover on Map</h2>
          <p className="section-subtitle">Explore suggested destinations around the world</p>
        </div>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <div className="map-marker" style={{ top: '30%', left: '65%' }}>
                <span className="marker-pulse"></span>
                <div className="marker-info">Kyoto, Japan</div>
              </div>
              <div className="map-marker" style={{ top: '45%', left: '55%' }}>
                <span className="marker-pulse"></span>
                <div className="marker-info">Santorini, Greece</div>
              </div>
              <div className="map-marker" style={{ top: '25%', left: '35%' }}>
                <span className="marker-pulse"></span>
                <div className="marker-info">Banff, Canada</div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="World Map" 
              className="map-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverTrip;