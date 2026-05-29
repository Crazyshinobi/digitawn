import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';
import useCounter from '../hooks/useCounter';

const metrics = [
  { label: 'Lead Conversion', value: '87%', width: '87%' },
  { label: 'Client Growth Rate', value: '94%', width: '94%' },
  { label: 'Campaign ROI', value: '76%', width: '76%' },
];

const heroStats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients' },
  { target: 98, suffix: '%', label: 'Satisfaction Rate' },
];

const titlePhrases = [
  'Digital Presence',
  'Online Growth',
  'Brand Identity',
  'Lead Pipeline',
  'Web Experience',
];

const servicePills = [
  { label: 'Lead Gen', to: '/services/lead-generation' },
  { label: 'Web Dev', to: '/services/web-development' },
  { label: 'Marketing', to: '/services/digital-marketing' },
  { label: 'Apps', to: '/services/app-development' },
];

const trustPoints = [
  'Free consultation',
  '24h response time',
  '30+ happy clients',
];

function HeroStat({ target, suffix, label, delay = 0 }) {
  const [started, setStarted] = React.useState(false);
  const count = useCounter(target, 1600, started);
  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 900 + delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className="stat-item">
      <span className="stat-value gradient-text">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Typewriter({ words }) {
  const [idx, setIdx] = React.useState(0);
  const [text, setText] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 45 : 90;
    const pause = 2000;

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText(prev => (deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return (
    <span className="hero-tw gradient-text">
      {text}
      <span className="hero-tw-cursor" aria-hidden="true">|</span>
    </span>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [barsReady, setBarsReady] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setBarsReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById('home-trust')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />
        <div className="hero-grid" />
        <div className="hero-gradient-ring" aria-hidden="true" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="badge-dot" />
            Digital Marketing &amp; Development Agency
          </div>

          <h1 className="hero-title hero-anim hero-anim-2">
            We Grow Your <br />
            <Typewriter words={titlePhrases} />
          </h1>

          <p className="hero-tagline hero-anim hero-anim-2">
            Strategy · Design · Development · Growth
          </p>

          <p className="hero-subtitle hero-anim hero-anim-3">
            From lead generation to full-scale software — Digitawn delivers measurable
            results that scale startups and growing brands worldwide.
          </p>

          <div className="hero-pills hero-anim hero-anim-3">
            {servicePills.map(p => (
              <Link key={p.to} to={p.to} className="hero-pill">{p.label}</Link>
            ))}
          </div>

          <div className="hero-actions hero-anim hero-anim-4">
            <Link to="/services" className="btn-primary">
              Explore Services
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <button type="button" className="btn-outline" onClick={() => navigate('/contact')}>
              Free Consultation
            </button>
          </div>

          <ul className="hero-trust-list hero-anim hero-anim-4">
            {trustPoints.map(point => (
              <li key={point}>
                <span className="hero-trust-check" aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="hero-stats hero-anim hero-anim-5">
            {heroStats.map((stat, i) => (
              <HeroStat
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 120}
              />
            ))}
          </div>
        </div>

        <div className="hero-visual hero-anim hero-anim-6">
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-card-main">
            <div className="hc-header">
              <span className="hc-title">Campaign Performance</span>
              <span className="hc-badge">● Live</span>
            </div>
            <div className="hc-metrics">
              {metrics.map((m, i) => (
                <div key={m.label} className="hc-metric">
                  <div className="hc-metric-label">
                    <span>{m.label}</span>
                    <span>{m.value}</span>
                  </div>
                  <div className="hc-bar">
                    <div
                      className={`hc-fill ${barsReady ? 'hc-fill--active' : ''}`}
                      style={{ width: barsReady ? m.width : '0%', transitionDelay: `${i * 120}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="hc-footer">
              <div className="hc-stat">
                <span className="hc-stat-val">+240%</span>
                <span className="hc-stat-lbl">Avg. Lead Growth</span>
              </div>
              <div className="hc-stat">
                <span className="hc-stat-val">4.9★</span>
                <span className="hc-stat-lbl">Client Rating</span>
              </div>
              <div className="hc-stat">
                <span className="hc-stat-val">24h</span>
                <span className="hc-stat-lbl">Response Time</span>
              </div>
            </div>
          </div>

          <div className="hero-float-card fc1">
            <span className="fc-icon">🚀</span>
            <div className="fc-text">
              <strong>New Project</strong>
              <span>App launched successfully</span>
            </div>
          </div>

          <div className="hero-float-card fc2">
            <span className="fc-icon">📈</span>
            <div className="fc-text">
              <strong>+320 Leads</strong>
              <span>This month</span>
            </div>
          </div>

          <div className="hero-float-card fc3">
            <span className="fc-icon">⭐</span>
            <div className="fc-text">
              <strong>98% Retention</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-stats" aria-hidden="true">
          <div className="hero-mobile-stat">
            <span className="gradient-text">50+</span>
            <small>Projects</small>
          </div>
          <div className="hero-mobile-stat">
            <span className="gradient-text">30+</span>
            <small>Clients</small>
          </div>
          <div className="hero-mobile-stat">
            <span className="gradient-text">98%</span>
            <small>Satisfaction</small>
          </div>
        </div>
      </div>

      <button type="button" className="hero-scroll-hint" onClick={scrollDown} aria-label="Scroll down">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </button>
    </section>
  );
}
