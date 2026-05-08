import './Process.css';
import Animate from './Animate';

const steps = [
  { num: '01', icon: '💬', title: 'Discovery Call', desc: 'We start with a free consultation to understand your business, goals, and challenges. No fluff — just focused strategy.' },
  { num: '02', icon: '🗺️', title: 'Strategy & Planning', desc: 'Our team crafts a tailored roadmap with clear milestones, timelines, and deliverables aligned to your objectives.' },
  { num: '03', icon: '⚙️', title: 'Execution', desc: 'We build, launch, and iterate fast. You get regular updates and full visibility into progress at every stage.' },
  { num: '04', icon: '📊', title: 'Measure & Scale', desc: 'We track results, optimize performance, and scale what works — turning your investment into compounding growth.' },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <Animate variant="fade-up" className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our <span className="gradient-text">Simple Process</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From first conversation to measurable results — here's how we get things done.
          </p>
        </Animate>

        <div className="process-grid">
          {steps.map((step, i) => (
            <Animate key={step.num} variant="fade-up" delay={`${i * 120}ms`} className="process-step">
              <div className="step-num">{step.num}</div>
              <div className="step-icon-wrap">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
