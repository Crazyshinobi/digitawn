import { Navigate, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Animate from '../components/Animate';
import { legalPages } from '../data/legal';
import './pages.css';

const pathMap = {
  '/privacy-policy': 'privacy-policy',
  '/terms': 'terms',
  '/refund-policy': 'refund-policy',
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const type = pathMap[pathname];
  const page = type ? legalPages[type] : null;

  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <PageHero
        label="Legal"
        title={page.title}
        crumbs={[{ label: 'Home', to: '/' }, { label: page.title }]}
      />
      <section className="page-section">
        <div className="container">
          <Animate variant="fade-up" className="page-content">
            <p className="legal-updated">Last updated: {page.updated}</p>
            {page.sections.map(s => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </Animate>
        </div>
      </section>
    </>
  );
}
