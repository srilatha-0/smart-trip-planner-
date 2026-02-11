import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeNav, setActiveNav] = useState('');

  const features = [
    {
      id: 1,
      icon: "fas fa-map-marked-alt",
      title: "Tour Guides",
      description: "Connect with certified local tour guides who can show you hidden gems and provide authentic cultural experiences tailored to your interests.",
      color: "#2a5bd7"
    },
    {
      id: 2,
      icon: "fas fa-globe-americas",
      title: "Discover Trips",
      description: "Explore curated travel experiences from around the world. Filter by destination, activity type, duration, and budget to find your perfect adventure.",
      color: "#ff6b35"
    },
    {
      id: 3,
      icon: "fas fa-calendar-alt",
      title: "Plan Trips",
      description: "Create detailed itineraries with our smart trip planner. Get suggestions for attractions, restaurants, and activities based on your preferences.",
      color: "#3acf99"
    },
    {
      id: 4,
      icon: "fas fa-users",
      title: "Find Buddies",
      description: "Match with fellow travelers who share your interests and travel dates. Connect before your trip to coordinate plans and share experiences.",
      color: "#ffc107"
    },
    {
      id: 5,
      icon: "fas fa-money-bill-wave",
      title: "Split Costs",
      description: "Easily split expenses with travel buddies. Our integrated payment system tracks shared costs and calculates each person's share automatically.",
      color: "#9c27b0"
    },
    {
      id: 6,
      icon: "fas fa-robot",
      title: "AI Friendly Advice",
      description: "Get personalized travel recommendations from our AI assistant.",
      color: "#2196f3"
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  useEffect(() => {
    const textElement = document.querySelector('.animated-text');
    if (textElement) {
      textElement.style.animation = 'none';
      setTimeout(() => {
        textElement.style.animation = 'textAnimation 1.5s ease-out forwards';
      }, 10);
    }
  }, []);

  return (
    <div className="home-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-compass"></i> Tripify
        </div>

        <ul className="nav-links">
          <li>
            <a href="#features" onClick={() => setActiveNav('features')}>
              Features
            </a>
          </li>

          {/* ✅ Fixed Discover Trips Routing */}
          <li>
            <Link
              to="/DiscoverTrips"
              onClick={() => setActiveNav('DiscoverTrips')}
              className={activeNav === 'DiscoverTrips' ? 'active' : ''}
            >
              Discover Trips
            </Link>
          </li>

          <li>
            <a href="#plan-trips" onClick={() => setActiveNav('plan-trips')}>
              Plan Trips
            </a>
          </li>

          <li>
            <a href="#find-buddies" onClick={() => setActiveNav('find-buddies')}>
              Find Buddies
            </a>
          </li>

          <li>
            <a href="#split-costs" onClick={() => setActiveNav('split-costs')}>
              Split Costs
            </a>
          </li>

          <li>
            <a href="#ai-advice" onClick={() => setActiveNav('ai-advice')}>
              AI Advice
            </a>
          </li>
        </ul>

        <button className="sign-in-btn">Sign In</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animated-text">
            Welcome to <span>Tripify</span>
          </h1>
          <p className="hero-subtitle">
            Your personalized travel companion for unforgettable adventures.
          </p>
          <a href="#features" className="cta-button">
            Explore Features
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1470&q=80"
          alt="Travel Adventure"
          className="hero-image"
        />
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Personalized Travel Features</h2>
        <div className="features-container">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon" style={{ color: feature.color }}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
