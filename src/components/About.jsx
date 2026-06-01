import './About.css';
import Animate from './Animate';
import useInView from '../hooks/useInView';
import useCounter from '../hooks/useCounter';
import aboutUsImg from '../assets/67ed4fc14d11dabout-us.svg';
import image1 from '../assets/image1.png';

const values = [
  { icon: '🚀', title: 'Results First', desc: 'Every strategy we build is tied to measurable outcomes.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We work as an extension of your team, not just a vendor.' },
  { icon: '⚡', title: 'Agile & Fast', desc: 'Startup speed with enterprise-level quality and precision.' },
  { icon: '🔒', title: 'Transparent', desc: 'Clear communication, honest timelines, no surprises.' },
];

const stats = [
  {
    target: 50,
    suffix: '+',
    label: 'Projects Delivered',
    hint: 'Web, apps & campaigns shipped',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    target: 30,
    suffix: '+',
    label: 'Happy Clients',
    hint: 'Startups & growing brands',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    target: 98,
    suffix: '%',
    label: 'Client Retention',
    hint: 'Long-term partnerships',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    target: 5,
    suffix: '',
    label: 'Average Rating',
    hint: 'Based on client feedback',
    isRating: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

function StatCard({ stat, active, index }) {
  const count = useCounter(stat.target, 1800, active);

  return (
    <article className="about-stat-card" style={{ '--stat-i': index }}>
      <div className="about-stat-icon">{stat.icon}</div>
      <div className="about-stat-body">
        {stat.isRating ? (
          <div className="about-stat-value-row">
            <span className="about-stat-value gradient-text">{count}</span>
            <span className="about-stat-rating-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className={i < Math.round(count) ? 'filled' : ''}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
          </div>
        ) : (
          <span className="about-stat-value gradient-text">
            {count}{stat.suffix}
          </span>
        )}
        <h3 className="about-stat-label">{stat.label}</h3>
        <p className="about-stat-hint">{stat.hint}</p>
      </div>
      <div className="about-stat-accent" aria-hidden="true" />
    </article>
  );
}

export default function About() {
  const [stripRef, stripInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-inner">
          <Animate variant="fade-left" className="about-visual">
            <div className="about-illustration-wrap">
              <div className="about-blob" />
              <img
                src={aboutUsImg}
                alt="About Digitawn – digital agency illustration"
                className="about-illustration"
              />
              <div className="about-card ac1">
                <div className="ac-icon-wrap">🎯</div>
                <div><p className="ac-title">Lead Generation</p><p className="ac-sub">+240% avg. growth</p></div>
              </div>
              <div className="about-card ac2">
                <div className="ac-icon-wrap">📱</div>
                <div><p className="ac-title">Apps Launched</p><p className="ac-sub">20+ live products</p></div>
              </div>
              <div className="about-badge-img">
                <img src={image1} alt="Digitawn certified partner badge" />
              </div>
            </div>
          </Animate>

          <Animate variant="fade-right" delay="100ms" className="about-text">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">A Startup Built to <span className="gradient-text">Scale Startups</span></h2>
            <p className="about-desc">
              Digitawn Solutions is a digital marketing agency founded with one mission — to help
              businesses grow in the digital age. We combine creative thinking with technical
              expertise to deliver solutions that actually move the needle.
            </p>
            <p className="about-desc">
              Whether you're launching your first product or scaling an existing brand, we bring
              the strategy, tools, and execution to get you there faster. We're not just a service
              provider — we're your growth partner.
            </p>
            <div className="values-grid">
              {values.map((v, i) => (
                <Animate key={v.title} variant="scale" delay={`${i * 80}ms`} className="value-item">
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <p className="value-title">{v.title}</p>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </Animate>
        </div>

        <div ref={stripRef} className={`about-stats-section ${stripInView ? 'about-stats-section--visible' : ''}`}>
          <div className="about-stats-header">
            <span className="section-label">Our Impact</span>
            <h3 className="about-stats-title">Numbers That <span className="gradient-text">Back Our Work</span></h3>
            <p className="about-stats-sub">Real outcomes from projects we&apos;ve delivered for clients worldwide.</p>
          </div>
          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} active={stripInView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
