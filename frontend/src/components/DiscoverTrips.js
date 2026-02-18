import React, { useState } from "react";
import "./DiscoverTrips.css";

const DiscoverTrips = () => {

  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([]);
  const [selectedMood,setSelectedMood] = useState("");
  const moods = [
    { icon: "😌", title: "Relaxed", desc: "Beach days and peace" },
    { icon: "🏔", title: "Adventurous", desc: "Hiking & thrills" },
    { icon: "🌅", title: "Romantic", desc: "Sunsets & love" },
    { icon: "🌿", title: "Solo", desc: "Self discovery" }
  ];

  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      mood:"Romantic",
      desc: "Famous sunsets & white houses",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      id: 2,
      name: "Kyoto",
      country: "Japan",
      mood:"solo",
      desc: "Temples & cherry blossoms",
      img: "https://images.unsplash.com/photo-1526483360412-f4dbaf036963"
    },
    {
      id: 3,
      name: "Banff",
      country: "Canada",
      mood:"Adventurus",
      desc: "Mountains & lakes",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    }
  ];

  const toggleSave = (id) => {
    setSaved(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) && (selectedMood === "" || d.mood === selectedMood)
  );

  return (
    <div className="discover-container">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">

          <div className="ai-badge">✨ AI Powered</div>

          <h1 className="hero-title">
            Discover Your <span className="gradient-text">Next Adventure</span>
          </h1>

          {/* SEARCH */}
          <div className="search-wrapper">

            <div className="search-glow"></div>

            <div className="search-bar">
              <span className="search-icon">🔍</span>

              <input
                className="search-input"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button className="ai-assist-btn">
                ✨ AI Assist
              </button>
            </div>
          </div>

          <div className="trending-searches">
            <span className="trending-label">Trending:</span>
            <span className="trending-tag">Bali</span>
            <span className="trending-tag">Maldives</span>
            <span className="trending-tag">Switzerland</span>
          </div>

        </div>
      </section>


      {/* MOOD SECTION */}
      <section className="section">

        <div className="section-header">
          <h2>Choose Your Mood</h2>
          <p className="section-subtitle">
            Tell us how you feel
          </p>
        </div>

        <div className="mood-grid">
          {moods.map((m, i) => (
            <div key={i} className="mood-card"
            onClick = {()=>setSelectedMood(m.title)}>
              <div className="mood-icon">{m.icon}</div>
              <div className="mood-title">{m.title}</div>
              <div className="mood-description">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* DESTINATIONS */}
      <section className="section">

        <div className="section-header">
          <h2>Top Destinations</h2>
          <p className="section-subtitle">
            Personalized picks for you
          </p>
        </div>

        <div className="destinations-grid">
          {filtered.map(d => (
            <div key={d.id} className="destination-card">

              <div className="card-image">
                <img src={d.img} alt={d.name} />
                <div className="image-overlay"></div>

                <button
                  className="save-btn"
                  onClick={() => toggleSave(d.id)}
                >
                  {saved.includes(d.id) ? "💖" : "🤍"}
                </button>
              </div>

              <div className="card-content">

                <div className="destination-header">
                  <h3>{d.name}</h3>
                  <span className="country">{d.country}</span>
                </div>

                <p className="destination-description">
                  {d.desc}
                </p>

                <div className="card-actions">
                  <button className="map-btn">
                    🗺 View Map
                  </button>

                  <button className="itinerary-btn">
                    ✨ Plan Trip
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DiscoverTrips;