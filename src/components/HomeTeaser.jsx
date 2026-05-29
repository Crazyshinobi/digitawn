import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Animate from './Animate';
import './HomeTeaser.css';

const teasers = [
  { to: '/services', label: 'Services', title: 'Growth-Focused', highlight: 'Digital Services', desc: 'Lead gen, marketing, web, apps, and social — built to scale your business.', linkText: 'Explore Services' },
  { to: '/work', label: 'Portfolio', title: 'Proven', highlight: 'Client Results', desc: 'See how we help brands increase leads, traffic, and product success.', linkText: 'View Our Work' },
  { to: '/about', label: 'About', title: 'Your Partner in', highlight: 'Digital Growth', desc: 'A startup-minded team combining strategy, design, and engineering.', linkText: 'About Digitawn' },
  { to: '/blog', label: 'Insights', title: 'Fresh', highlight: 'Ideas & Trends', desc: 'Expert perspectives on web, AI, marketing, and building for 2025.', linkText: 'Read the Blog' },
];

const featuredServices = services.filter(s => s.featured || s.slug === 'web-development' || s.slug === 'digital-marketing').slice(0, 3);

export default function HomeTeaser() {
  return (
    <>
      <section className="home-teaser">
        <div className="container">
          <Animate variant="fade-up" className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Grow Online</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explore our dedicated pages for services, work, insights, and more.
            </p>
          </Animate>
          <div className="home-teaser-grid">
            {teasers.map((t, i) => (
              <Animate key={t.to} variant="fade-up" delay={`${i * 90}ms`} className="home-teaser-card">
                <span className="home-teaser-label">{t.label}</span>
                <h3 className="home-teaser-title">
                  {t.title} <span className="gradient-text">{t.highlight}</span>
                </h3>
                <p className="home-teaser-desc">{t.desc}</p>
                <Link to={t.to} className="home-teaser-link">
                  {t.linkText} →
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services-preview">
        <div className="container">
          <Animate variant="fade-up" className="home-preview-header">
            <span className="section-label">Popular Services</span>
            <h2 className="section-title">Start With What <span className="gradient-text">Matters Most</span></h2>
          </Animate>
          <div className="home-preview-grid">
            {featuredServices.map((s, i) => (
              <Animate key={s.slug} variant="fade-up" delay={`${i * 80}ms`} className="home-preview-card">
                <span className="home-preview-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.slug}`}>Learn more →</Link>
              </Animate>
            ))}
          </div>
          <div className="home-preview-cta">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
