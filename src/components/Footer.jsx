import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Chef Jimmy Smith. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#gallery">Photos</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
