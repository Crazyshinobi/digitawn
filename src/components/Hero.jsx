import React from 'react';
import './Hero.css';
import useCounter from '../hooks/useCounter';

const metrics = [
  { label: 'Lead Conversion',   value: '87%', width: '87%' },
  { label: 'Client Growth Rate', value: '94%', width: '94%' },
  { label: 'Campaign ROI',       value: '76%', width: '76%' },
];

const heroStats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients'      },
  { target: 98, suffix: '%', label: 'Satisfaction Rate'  },
];

const titlePhrases = [
  'Digital Presence',
  'Online Growth',
  'Brand Identity',
  'Lead Pipeline',
  'Web Experience',
];

/* ── Animated counter ── */
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

/* ── Typewriter ── */
function Typewriter({ words }) {
  const [idx, setIdx]         = React.useState(0);
  const [text, setText]       = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word  = words[idx];
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
      setText(prev =>
        deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
      );
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
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        {/* Left */}
        <div className="hero-content">
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="badge-dot" />
            Digital Marketing Agency
          </div>

          <h1 className="hero-title hero-anim hero-anim-2">
            We Grow Your <br />
            <Typewriter words={titlePhrases} />
          </h1>

          <p className="hero-subtitle hero-anim hero-anim-3">
            From lead generation to full-scale software development — Digitawn Solutions
            delivers results-driven strategies that scale your business in the digital world.
          </p>

          <div className="hero-actions hero-anim hero-anim-4">
            <button className="btn-primary" onClick={() => scrollTo('services')}>
              Explore Services
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Let's Talk
            </button>
          </div>

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

        {/* Right */}
        <div className="hero-visual hero-anim hero-anim-6">
          <div className="hero-card-main">
            <div className="hc-header">
              <span className="hc-title">Campaign Performance</span>
              <span className="hc-badge">● Live</span>
            </div>
            <div className="hc-metrics">
              {metrics.map(m => (
                <div key={m.label} className="hc-metric">
                  <div className="hc-metric-label">
                    <span>{m.label}</span>
                    <span>{m.value}</span>
                  </div>
                  <div className="hc-bar">
                    <div className="hc-fill" style={{ width: m.width }} />
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
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('services')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
