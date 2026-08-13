import React from "react";
import "./Hero.css";

const Hero = ({ onShopClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Eco-Friendly <span className="italic">Kitchenware</span>
          <br />
          for a greener home
        </h1>
        <p className="hero-sub">
          Sustainable materials. Thoughtful design. Kitchen essentials that care
          for the planet.
        </p>
        <button className="shop-now-btn" onClick={onShopClick}>
          Shop now
        </button>
      </div>

      <div className="hero-badge">
        <div className="badge-header">
          <div className="badge-text">
            <span>Natural.</span>
            <span>Sustainable.</span>
            <span>Eco-conscious.</span>
          </div>
          <div className="badge-leaf">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
        </div>
        <div className="badge-percent">96%</div>
      </div>
    </section>
  );
};

export default Hero;
