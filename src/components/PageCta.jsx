import { Link } from 'react-router-dom';
import Animate from './Animate';
import './PageCta.css';

export default function PageCta({
  title = 'Ready to grow with Digitawn?',
  subtitle = 'Tell us about your project and get a free consultation within 24 hours.',
}) {
  return (
    <section className="page-cta">
      <div className="container">
        <Animate variant="fade-up" className="page-cta-inner">
          <h2 className="page-cta-title">{title}</h2>
          <p className="page-cta-sub">{subtitle}</p>
          <div className="page-cta-actions">
            <Link to="/contact" className="btn-primary">Get Started →</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
