import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Animate from '../components/Animate';
import { projects } from '../data/portfolio';
import './pages.css';

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects That"
        highlight="Deliver Results"
        subtitle="A snapshot of how we help clients grow leads, traffic, engagement, and product success."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]}
      />
      <section className="page-section page-section--alt">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <Animate key={p.slug} variant="fade-up" delay={`${i * 80}ms`} className="portfolio-card">
                <span className="portfolio-icon">{p.icon}</span>
                <span className="portfolio-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="portfolio-result">{p.result}</p>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{p.client}</span>
              </Animate>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Want results like these?" />
    </>
  );
}
