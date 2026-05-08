import './PerformanceMarketing.css';
import Animate from './Animate';

const pmServices = [
  { icon: '🔍', title: 'Google Ads Management', desc: 'Search, Display & YouTube Ads' },
  { icon: '📘', title: 'Meta Advertising', desc: 'Facebook & Instagram Ads' },
  { icon: '🎯', title: 'Lead Generation Campaigns', desc: 'Quality leads at scale' },
  { icon: '🛒', title: 'E-commerce Marketing', desc: 'Product promotions & sales' },
  { icon: '🔁', title: 'Remarketing & Retargeting', desc: 'Re-engage warm audiences' },
  { icon: '🖥️', title: 'Landing Page & Funnels', desc: 'Creation & funnel optimization' },
  { icon: '📈', title: 'Conversion Rate Optimization', desc: 'CRO for maximum results' },
  { icon: '👥', title: 'Audience Targeting', desc: 'Customer segmentation strategies' },
  { icon: '📱', title: 'App Promotion', desc: 'User acquisition campaigns' },
  { icon: '📊', title: 'Analytics & Tracking', desc: 'Conversion tracking & reporting' },
  { icon: '🤖', title: 'CRM & Automation', desc: 'Marketing automation integration' },
  { icon: '💰', title: 'ROI & ROAS Management', desc: 'Performance-focused campaigns' },
];

const whyUs = [
  'Data-Driven Marketing Strategies',
  'High Conversion Focused Campaigns',
  'Transparent Reporting & Analytics',
  'Cost-Effective Lead Generation',
  'Experienced Digital Marketing Team',
  'Scalable Advertising Solutions',
];

export default function PerformanceMarketing() {
  return (
    <section className="pm-section">
      <div className="container">
        <Animate variant="fade-up" className="pm-header">
          <span className="section-label">Performance Marketing</span>
          <h2 className="section-title">Result-Oriented <span className="gradient-text">Performance Marketing</span></h2>
          <p className="pm-intro">
            At DigiTawn Solutions, we offer result-oriented Performance Marketing services designed
            to help businesses generate quality leads, increase brand visibility, and maximize
            revenue through data-driven digital campaigns.
          </p>
        </Animate>

        <div className="pm-services-grid">
          {pmServices.map((s, i) => (
            <Animate key={s.title} variant="scale" delay={`${i * 50}ms`} className="pm-service-card">
              <span className="pm-icon">{s.icon}</span>
              <div>
                <p className="pm-card-title">{s.title}</p>
                <p className="pm-card-desc">{s.desc}</p>
              </div>
            </Animate>
          ))}
        </div>

        <div className="pm-bottom">
          <Animate variant="fade-left" className="pm-approach">
            <h3 className="pm-sub-title">Our Approach</h3>
            <p className="pm-text">
              We create customized marketing strategies based on business objectives, target
              audience behavior, and market trends to deliver measurable results — leads, sales,
              website traffic, and customer engagement.
            </p>
            <div className="pm-objective">
              <span className="pm-obj-label">Objective</span>
              <p className="pm-obj-text">
                To help businesses achieve sustainable growth through targeted digital advertising,
                optimized campaigns, and performance-based marketing strategies that deliver measurable ROI.
              </p>
            </div>
          </Animate>

          <Animate variant="fade-right" delay="100ms" className="pm-why">
            <h3 className="pm-sub-title">Why Choose DigiTawn?</h3>
            <ul className="pm-why-list">
              {whyUs.map((item, i) => (
                <li key={item} style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="pm-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Animate>
        </div>
      </div>
    </section>
  );
}
