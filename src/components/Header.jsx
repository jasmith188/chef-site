import React from 'react';

export default function Header({ scrolled }) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Chef home">
          <span className="brand-mark">
            <img src="/photos/mp-dijon.png" alt="mp-dijon" />
          </span>
          <span className="brand-text">maison provisions</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#gallery">Photos</a>
          <a href="#contact" className="cta">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
