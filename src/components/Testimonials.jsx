import './Testimonials.css';
import Animate from './Animate';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechLaunch Inc.',
    avatar: 'SM',
    color: '#0096E1',
    text: 'Digitawn transformed our online presence completely. Their lead generation campaigns tripled our qualified leads within 3 months. Absolutely outstanding work.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    role: 'Founder, GrowFast',
    avatar: 'RP',
    color: '#2D55A5',
    text: 'The web app they built for us is fast, beautiful, and exactly what we envisioned. The team communicated clearly throughout and delivered ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Amina Hassan',
    role: 'Marketing Director, NovaBrand',
    avatar: 'AH',
    color: '#4DD0E1',
    text: 'Our social media engagement went up by 400% in two months. Digitawn really understands content strategy and knows how to build an audience that converts.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'CTO, BuildStack',
    avatar: 'JO',
    color: '#4080C5',
    text: 'From architecture to deployment, the team handled everything flawlessly. Our SaaS platform launched on time and has been rock-solid ever since.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Growth, ScaleUp',
    avatar: 'PS',
    color: '#0096E1',
    text: 'The SEO and paid ads strategy Digitawn put together drove a 3x increase in organic traffic within 60 days. Incredible ROI and a pleasure to work with.',
    rating: 5,
  },
  {
    name: 'Lucas Fernandez',
    role: 'Product Manager, Nexora',
    avatar: 'LF',
    color: '#2D55A5',
    text: 'They redesigned our entire mobile app UI and the user retention numbers speak for themselves — up 55% month over month. Highly recommend.',
    rating: 5,
  },
];

// Duplicate for seamless infinite loop
const track = [...testimonials, ...testimonials];

const Stars = ({ count }) => (
  <div className="t-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg className="t-quote-icon" viewBox="0 0 40 30" fill="currentColor" aria-hidden="true">
    <path d="M0 30V18.75C0 8.438 6.25 2.5 18.75 0l2.5 4.375C15.313 5.938 12.188 9.063 11.25 13.75H17.5V30H0zm22.5 0V18.75C22.5 8.438 28.75 2.5 41.25 0l2.5 4.375c-5.937 1.563-9.063 4.688-10 9.375H40V30H22.5z" />
  </svg>
);

function TestimonialCard({ t }) {
  return (
    <div className="t-card">
      <QuoteIcon />
      <Stars count={t.rating} />
      <p className="t-text">"{t.text}"</p>
      <div className="t-author">
        <div className="t-avatar" style={{ background: t.color }}>
          {t.avatar}
        </div>
        <div className="t-author-info">
          <p className="t-name">{t.name}</p>
          <p className="t-role">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ showHeader = true }) {
  return (
    <section className="testimonials" id="testimonials">
      {showHeader && (
        <div className="container">
          <Animate variant="fade-up" className="section-header testimonials-header">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Real results from real businesses. Here's what our clients have to say about working with us.
            </p>
          </Animate>
        </div>
      )}

      {/* ── Carousel — full-width, outside container ── */}
      <div className="t-carousel-outer" aria-label="Client testimonials carousel">
        {/* fade edges */}
        <div className="t-fade t-fade--left"  aria-hidden="true" />
        <div className="t-fade t-fade--right" aria-hidden="true" />

        <div className="t-track">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
