import React from 'react';
import jimmyapron from '/photos/jimmy-apron.jpg';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Elevated Private Dining, Crafted Just for You</h1>
          <p>
            I’m Jimmy, a private chef specializing in seasonal tasting menus,
            intimate celebrations, and chef’s-table experiences across
            Wisconsin.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn">
              Book a Tasting
            </a>
            <a href="#gallery" className="btn btn-ghost">
              View Dishes
            </a>
          </div>
          <ul className="hero-highlights" aria-label="Highlights">
            <li>Farm-driven menus</li>
            <li>Dietary mindful</li>
            <li>On-site service</li>
          </ul>
        </div>
        <div className="hero-card">
          <img src={jimmyapron} alt="jimmyapron" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
