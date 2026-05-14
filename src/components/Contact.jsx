import { useState } from 'react';
import './Contact.css';
import Animate from './Animate';

const services = [
  'Lead Generation', 'Software Development', 'Web Development',
  'App Development', 'Social Media Handling',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <Animate variant="fade-left" className="contact-info">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Ready to <span className="gradient-text">Grow Together?</span></h2>
          <p className="section-subtitle">Tell us about your project and we'll get back to you within 24 hours.</p>

          <div className="contact-details">
            {[
              { icon: '📧', label: 'Email', value: 'digitawn.solutions@gmail.com', href: 'mailto:digitawn.solutions@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Available Worldwide' },
              { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours' },
            ].map((item, i) => (
              <Animate key={item.label} variant="fade-up" delay={`${i * 80}ms`} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <p className="contact-label">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="contact-value">{item.value}</a>
                    : <p className="contact-value">{item.value}</p>
                  }
                </div>
              </Animate>
            ))}
          </div>

          <Animate variant="fade-up" delay="240ms" className="contact-why">
            <h4>Why work with Digitawn?</h4>
            <ul>
              <li>Free initial consultation & strategy session</li>
              <li>Dedicated project manager for every client</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Ongoing support after project delivery</li>
              <li>Proven track record with 30+ happy clients</li>
            </ul>
          </Animate>
        </Animate>

        <Animate variant="fade-right" delay="100ms" className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll be in touch shortly.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" rows={5} placeholder="Describe your goals, timeline, and any specific requirements..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn-primary form-submit">Send Message →</button>
            </form>
          )}
        </Animate>
      </div>
    </section>
  );
}
