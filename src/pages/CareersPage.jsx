import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Animate from '../components/Animate';
import { openings, perks } from '../data/careers';
import './pages.css';

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build the Future"
        highlight="With Digitawn"
        subtitle="Join a growth-focused team building digital products and campaigns that make an impact."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />
      <section className="page-section page-section--alt">
        <div className="container careers-grid">
          <Animate variant="fade-left">
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: 24 }}>Open Positions</h2>
            {openings.map(job => (
              <div key={job.title} className="job-card">
                <h3>{job.title}</h3>
                <p className="job-type">{job.type}</p>
                <p>{job.desc}</p>
              </div>
            ))}
            <Link to="/contact" className="btn-primary" style={{ marginTop: 16, display: 'inline-block' }}>
              Apply Now →
            </Link>
          </Animate>
          <Animate variant="fade-right" delay="100ms">
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: 24 }}>Why Join Us</h2>
            <ul className="perks-list">
              {perks.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p style={{ marginTop: 24, color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>
              Don&apos;t see a perfect fit? Send your resume to{' '}
              <a href="mailto:digitawn.solutions@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                digitawn.solutions@gmail.com
              </a>
            </p>
          </Animate>
        </div>
      </section>
      <PageCta title="Ready to join the team?" subtitle="We'd love to hear from talented people who share our passion for growth." />
    </>
  );
}
