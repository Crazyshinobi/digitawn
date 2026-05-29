import { Link } from 'react-router-dom';
import './Services.css';
import Animate from './Animate';
import { useState, useEffect } from 'react';
import { services } from '../data/services';

export default function Services({ showHeader = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 580);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
  const goToSlide = index => setCurrentIndex(index);

  return (
    <section id="services" className="services">
      <div className="container">
        {showHeader && (
          <Animate variant="fade-up" className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Services That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="section-subtitle">
              End-to-end digital solutions designed to help startups and businesses scale fast and smart.
            </p>
          </Animate>
        )}

        <div className="services-grid desktop-grid">
          {services.map((s, i) => (
            <Animate
              key={s.slug}
              variant="fade-up"
              delay={`${i * 90}ms`}
              className={`service-card ${s.featured ? 'featured' : ''}`}
            >
              <div className="card-glow" />
              <div className="service-icon-wrap">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <Link to={`/services/${s.slug}`} className="service-card-link">
                Learn more →
              </Link>
            </Animate>
          ))}
        </div>

        {isMobile && (
          <div className="mobile-carousel">
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">‹</button>
              <div className="carousel-track">
                <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {services.map(s => (
                    <div key={s.slug} className={`carousel-slide ${s.featured ? 'featured' : ''}`}>
                      <div className="card-glow" />
                      <div className="service-icon-wrap">{s.icon}</div>
                      <h3 className="service-title">{s.title}</h3>
                      <p className="service-desc">{s.desc}</p>
                      <ul className="service-features">
                        {s.features.slice(0, 4).map(f => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <Link to={`/services/${s.slug}`} className="service-card-link">Learn more →</Link>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">›</button>
            </div>
            <div className="carousel-dots">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
