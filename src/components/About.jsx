import './About.css';
import Animate from './Animate';
import useInView from '../hooks/useInView';
import useCounter from '../hooks/useCounter';

const values = [
  { icon: '🚀', title: 'Results First', desc: 'Every strategy we build is tied to measurable outcomes.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We work as an extension of your team, not just a vendor.' },
  { icon: '⚡', title: 'Agile & Fast', desc: 'Startup speed with enterprise-level quality and precision.' },
  { icon: '🔒', title: 'Transparent', desc: 'Clear communication, honest timelines, no surprises.' },
];

// target: numeric value | suffix: text appended after the number
const stats = [
  { target: 50,  suffix: '+', label: 'Projects Delivered' },
  { target: 30,  suffix: '+', label: 'Happy Clients' },
  { target: 98,  suffix: '%', label: 'Retention Rate' },
  { target: 5,   suffix: '★', label: 'Average Rating' },
];

// Individual animated counter item
function StatItem({ target, suffix, label, active }) {
  const count = useCounter(target, 1800, active);
  return (
    <div className="strip-item">
      <span className="strip-value">
        {count}{suffix}
      </span>
      <span className="strip-label">{label}</span>
    </div>
  );
}

export default function About() {
  const [stripRef, stripInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-inner">
          <Animate variant="fade-left" className="about-visual">
            <div className="about-card-stack">
              <div className="about-blob" />
              <div className="about-card ac1">
                <div className="ac-icon-wrap">🎯</div>
                <div><p className="ac-title">Lead Generation</p><p className="ac-sub">+240% avg. growth</p></div>
              </div>
              <div className="about-card ac2">
                <div className="ac-icon-wrap">📱</div>
                <div><p className="ac-title">Apps Launched</p><p className="ac-sub">20+ live products</p></div>
              </div>
              <div className="about-card ac3">
                <div className="ac-icon-wrap">⭐</div>
                <div><p className="ac-title">Client Satisfaction</p><p className="ac-sub">98% retention rate</p></div>
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

        {/* Stats strip with counter animation */}
        <div ref={stripRef} className={`anim anim-fade-up about-strip-wrapper ${stripInView ? 'anim-visible' : ''}`}>
          <div className="about-strip">
            {stats.map(s => (
              <StatItem
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                active={stripInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
