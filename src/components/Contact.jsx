import { useState } from 'react';
import './Contact.css';
import Animate from './Animate';

const services = [
  'Lead Generation', 'Software Development', 'Web Development',
  'App Development', 'Social Media Handling',
];

const contactDetails = [
  { icon: '📧', label: 'Email', value: 'digitawn.solutions@gmail.com', href: 'mailto:digitawn.solutions@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91-7581 822 822', href: 'tel:+917581822822' },
  { icon: '📍', label: 'Location', value: 'Noida, Uttar Pradesh' },
  { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact({ standalone = false }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const fieldId = prefix => (standalone ? `${prefix}-page` : prefix);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className={`contact${standalone ? ' contact--page' : ''}`}>
      <div className="container contact-inner">
        <Animate variant="fade-left" className="contact-info">
          {!standalone && (
            <>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Ready to <span className="gradient-text">Grow Together?</span></h2>
              <p className="section-subtitle">Tell us about your project and we'll get back to you within 24 hours.</p>
            </>
          )}
          {standalone && (
            <>
              <span className="section-label">Send a Message</span>
              <h2 className="section-title">Share Your <span className="gradient-text">Project Details</span></h2>
              <p className="section-subtitle">Fill out the form and our team will reach out with a tailored plan for your goals.</p>
            </>
          )}

          <div className="contact-details">
            {contactDetails.map((item, i) => (
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
                  <label htmlFor={fieldId('name')}>Your Name</label>
                  <input id={fieldId('name')} name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor={fieldId('email')}>Email Address</label>
                  <input id={fieldId('email')} name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor={fieldId('service')}>Service Interested In</label>
                <select id={fieldId('service')} name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor={fieldId('message')}>Tell Us About Your Project</label>
                <textarea id={fieldId('message')} name="message" rows={5} placeholder="Describe your goals, timeline, and any specific requirements..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn-primary form-submit">Send Message →</button>
            </form>
          )}
        </Animate>
      </div>
    </section>
  );
}
