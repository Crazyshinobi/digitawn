import { Link } from 'react-router-dom';
import Animate from './Animate';
import './PageHero.css';

export default function PageHero({ label, title, highlight, subtitle, crumbs = [], children }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero-bg" aria-hidden="true">
        <div className="page-hero-orb page-hero-orb--1" />
        <div className="page-hero-orb page-hero-orb--2" />
        <div className="page-hero-grid" />
      </div>
      <div className="container page-hero-inner">
        {crumbs.length > 0 && (
          <Animate variant="fade-up">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.label} className="page-breadcrumb-item">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
          </Animate>
        )}
        <Animate variant="fade-up" delay="80ms">
          {label && <span className="section-label">{label}</span>}
          <h1 id="page-hero-title" className="page-hero-title">
            {title}
            {highlight && <> <span className="gradient-text">{highlight}</span></>}
          </h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </Animate>
        {children && (
          <Animate variant="fade-up" delay="160ms">
            {children}
          </Animate>
        )}
      </div>
    </section>
  );
}
