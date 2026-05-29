import { Link } from 'react-router-dom';
import './pages.css';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div>
        <h1>404</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
