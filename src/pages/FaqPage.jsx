import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Animate from '../components/Animate';
import { faqs } from '../data/faq';
import './pages.css';

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Quick answers about our services, process, pricing, and support."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />
      <section className="page-section page-section--alt">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <Animate key={item.q} variant="fade-up" delay={`${i * 50}ms`}>
                <details className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </Animate>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Still have questions?" subtitle="Contact us — we're happy to help." />
    </>
  );
}
