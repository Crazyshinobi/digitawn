import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Animate from '../components/Animate';
import { getServiceBySlug } from '../data/services';
import './pages.css';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero
        label={service.title}
        title="Expert"
        highlight={service.title}
        subtitle={service.overview}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />
      <section className="page-section">
        <div className="container">
          <div className="service-detail-grid">
            <Animate variant="fade-left">
              <span className="service-detail-icon">{service.icon}</span>
              <p className="section-subtitle">{service.desc}</p>
              <div className="service-tags-row">
                {service.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3 className="section-title" style={{ fontSize: '1.3rem', marginTop: 32 }}>
                What&apos;s Included
              </h3>
              <ul className="service-detail-list">
                {service.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Animate>
            <Animate variant="fade-right" delay="100ms">
              <div className="service-detail-card">
                <h3>Deliverables</h3>
                <ul className="service-detail-list">
                  {service.deliverables.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="service-detail-card">
                <h3>Benefits</h3>
                <ul className="service-detail-list">
                  {service.benefits.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: 8 }}>
                Get a Quote →
              </Link>
            </Animate>
          </div>
        </div>
      </section>
      <PageCta title={`Ready for ${service.title}?`} />
    </>
  );
}
