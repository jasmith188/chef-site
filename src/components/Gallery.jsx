import React, { useState } from 'react';

const IMAGES = [
  // Replace with your files in /public/photos
  {
    src: '/photos/burrata.jpg',
    alt: 'burrata',
  },
  { src: '/photos/asian-chopstick.jpg', alt: 'sesame-chicken' },
  {
    src: '/photos/chicken-marsala.jpg',
    alt: 'chicken-marsala',
  },
  { src: '/photos/chicken.jpg', alt: 'chicken-roulade' },
  {
    src: '/photos/scallops-side.jpg',
    alt: 'scallops with mint pea puree',
  },
  // { src: '/photos/06.jpg', alt: 'Autumn salad with squash and pepitas' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <h2>Photos</h2>
        <p className="section-lead">A few plates guests love.</p>
        <div className="gallery">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(img)}
              aria-label={`Open larger view: ${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption">{lightbox.alt}</p>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close">
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
