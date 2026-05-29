import { Link } from 'react-router-dom';
import Animate from '../Animate';
import { services } from '../../data/services';
import { projects } from '../../data/portfolio';
import './HomeSections.css';

const whyUs = [
  { icon: '🚀', title: 'Results First', desc: 'Every strategy tied to measurable KPIs — leads, revenue, and growth.' },
  { icon: '⚡', title: 'Startup Speed', desc: 'Agile delivery with enterprise quality. Launch faster, iterate smarter.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We work as an extension of your team with transparent communication.' },
  { icon: '🔒', title: 'No Surprises', desc: 'Clear timelines, honest pricing, and dedicated project managers.' },
];

const processSteps = [
  { num: '01', icon: '💬', title: 'Discovery', desc: 'Free consultation to understand goals and challenges.' },
  { num: '02', icon: '🗺️', title: 'Strategy', desc: 'Tailored roadmap with milestones and deliverables.' },
  { num: '03', icon: '⚙️', title: 'Execution', desc: 'Build, launch, and iterate with full visibility.' },
  { num: '04', icon: '📊', title: 'Scale', desc: 'Measure results and optimize for compounding growth.' },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechLaunch Inc.',
    text: 'Digitawn transformed our online presence. Lead generation campaigns tripled qualified leads within 3 months.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    role: 'Founder, GrowFast',
    text: 'The web app they built is fast, beautiful, and exactly what we envisioned. Delivered ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Growth, ScaleUp',
    text: 'SEO and paid ads drove 3x organic traffic in 60 days. Incredible ROI and a pleasure to work with.',
    rating: 5,
  },
];

const industries = [
  { icon: '🛒', name: 'E-Commerce' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🏠', name: 'Real Estate' },
  { icon: '✈️', name: 'Travel' },
  { icon: '📚', name: 'Ed-Tech' },
  { icon: '💪', name: 'Fitness' },
  { icon: '📦', name: 'Logistics' },
  { icon: '🎬', name: 'OTT & Media' },
];

const trustBrands = ['Startups', 'SaaS', 'E-Commerce', 'Healthcare', 'Real Estate', 'FinTech'];

const featuredWork = projects.slice(0, 3);
const featuredServices = services.slice(0, 6);

export function HomeTrustBar() {
  return (
    <section id="home-trust" className="home-trust">
      <div className="container">
        <p className="home-trust-label">Trusted by growing brands across industries</p>
        <div className="home-trust-brands">
          {trustBrands.map((b, i) => (
            <span key={b} className="home-trust-brand" style={{ animationDelay: `${i * 0.08}s` }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWhyUs() {
  return (
    <section className="home-why">
      <div className="container">
        <div className="home-split-header">
          <Animate variant="fade-left">
            <span className="section-label">Why Digitawn</span>
            <h2 className="section-title">
              Built for Brands That <span className="gradient-text">Want to Win</span>
            </h2>
            <p className="section-subtitle">
              We combine marketing expertise with engineering depth — so you get one partner
              for strategy, design, development, and growth.
            </p>
            <Link to="/about" className="btn-outline home-split-cta">Learn About Us →</Link>
          </Animate>
          <div className="home-why-grid">
            {whyUs.map((item, i) => (
              <Animate key={item.title} variant="fade-up" delay={`${i * 80}ms`} className="home-why-card">
                <span className="home-why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeServicesGrid() {
  return (
    <section className="home-services">
      <div className="container">
        <Animate variant="fade-up" className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Full-Stack Solutions for <span className="gradient-text">Digital Growth</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Six core services to take you from idea to scale — all under one roof.
          </p>
        </Animate>
        <div className="home-services-grid">
          {featuredServices.map((s, i) => (
            <Animate key={s.slug} variant="fade-up" delay={`${i * 60}ms`} className="home-service-card">
              <span className="home-service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={`/services/${s.slug}`}>Explore →</Link>
            </Animate>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

export function HomeProcess() {
  return (
    <section className="home-process">
      <div className="container">
        <Animate variant="fade-up" className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            From Idea to <span className="gradient-text">Impact</span> in 4 Steps
          </h2>
        </Animate>
        <div className="home-process-track">
          {processSteps.map((step, i) => (
            <Animate key={step.num} variant="fade-up" delay={`${i * 100}ms`} className="home-process-step">
              <span className="home-process-num">{step.num}</span>
              <span className="home-process-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < processSteps.length - 1 && <span className="home-process-connector" aria-hidden="true" />}
            </Animate>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/process" className="btn-outline">See Full Process →</Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedWork() {
  return (
    <section className="home-work">
      <div className="container">
        <div className="home-work-header">
          <Animate variant="fade-left">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">
              Results That <span className="gradient-text">Speak Loud</span>
            </h2>
            <p className="section-subtitle">
              Real outcomes from real clients — lead growth, product launches, and brand scale-ups.
            </p>
          </Animate>
          <Link to="/work" className="btn-outline home-work-link">View Portfolio →</Link>
        </div>
        <div className="home-work-grid">
          {featuredWork.map((p, i) => (
            <Animate key={p.slug} variant="fade-up" delay={`${i * 90}ms`} className="home-work-card">
              <span className="home-work-icon">{p.icon}</span>
              <span className="home-work-cat">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="home-work-result">{p.result}</span>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  return (
    <section className="home-testimonials">
      <div className="container">
        <Animate variant="fade-up" className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">
            Loved by <span className="gradient-text">Founders & Teams</span>
          </h2>
        </Animate>
        <div className="home-testimonials-grid">
          {testimonials.map((t, i) => (
            <Animate key={t.name} variant="fade-up" delay={`${i * 100}ms`} className="home-t-card">
              <div className="home-t-stars" aria-label={`${t.rating} stars`}>
                {'★'.repeat(t.rating)}
              </div>
              <p className="home-t-text">&ldquo;{t.text}&rdquo;</p>
              <div className="home-t-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </Animate>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/testimonials" className="btn-outline">Read More Reviews →</Link>
        </div>
      </div>
    </section>
  );
}

export function HomeIndustries() {
  return (
    <section className="home-industries">
      <div className="container">
        <Animate variant="fade-up" className="home-industries-inner">
          <div className="home-industries-text">
            <span className="section-label">Industries</span>
            <h2 className="section-title">
              Expertise Across <span className="gradient-text">14+ Sectors</span>
            </h2>
            <p className="section-subtitle">
              From e-commerce to healthcare, we tailor solutions to your industry&apos;s unique challenges.
            </p>
            <Link to="/industries" className="btn-primary">Explore Industries →</Link>
          </div>
          <div className="home-industries-grid">
            {industries.map((ind, i) => (
              <div key={ind.name} className="home-ind-chip" style={{ animationDelay: `${i * 0.05}s` }}>
                <span>{ind.icon}</span>
                {ind.name}
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}

export function HomeQuickLinks() {
  const links = [
    { to: '/work', label: 'Portfolio', highlight: 'Our Work', desc: 'Case studies & client results', icon: '💼' },
    { to: '/about', label: 'About', highlight: 'Our Team', desc: 'Mission, values & story', icon: '🏢' },
    { to: '/blog', label: 'Blog', highlight: 'Insights', desc: 'Trends & expert tips', icon: '📝' },
    { to: '/faq', label: 'FAQ', highlight: 'Answers', desc: 'Common questions answered', icon: '❓' },
  ];

  return (
    <section className="home-quick">
      <div className="container">
        <div className="home-quick-grid">
          {links.map((l, i) => (
            <Animate key={l.to} variant="fade-up" delay={`${i * 70}ms`}>
              <Link to={l.to} className="home-quick-card">
                <span className="home-quick-icon">{l.icon}</span>
                <span className="home-quick-label">{l.label}</span>
                <h3>{l.highlight}</h3>
                <p>{l.desc}</p>
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
