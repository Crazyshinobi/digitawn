import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start Your"
        highlight="Next Project"
        subtitle="Reach out for a free consultation. We respond within 24 hours and work with clients worldwide."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      >
        <div className="contact-page-quick">
          <a href="mailto:digitawn.solutions@gmail.com" className="contact-quick-card">
            <span className="contact-quick-icon">📧</span>
            <span className="contact-quick-label">Email</span>
            <span className="contact-quick-value">digitawn.solutions@gmail.com</span>
          </a>
          <a href="tel:+917581822822" className="contact-quick-card">
            <span className="contact-quick-icon">📞</span>
            <span className="contact-quick-label">Phone</span>
            <span className="contact-quick-value">+91-7581 822 822</span>
          </a>
          <div className="contact-quick-card contact-quick-card--static">
            <span className="contact-quick-icon">📍</span>
            <span className="contact-quick-label">Location</span>
            <span className="contact-quick-value">Noida, Uttar Pradesh</span>
          </div>
        </div>
      </PageHero>
      <Contact standalone />
    </>
  );
}
