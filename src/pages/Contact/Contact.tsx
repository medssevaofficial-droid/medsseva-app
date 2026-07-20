import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Phone, MessageCircle, MapPin, ChevronDown, ChevronUp, Send, Navigation,
} from 'lucide-react';
import { CONTACT_FAQS, COMPANY } from '@constants/index';
import './Contact.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="faq-item__content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: 'Booking Inquiry', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2 className="contact-form__title">Send us a Message</h2>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__label">Full Name</label>
          <input id="name" name="name" type="text" className="contact-form__input"
            placeholder="John Doe" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone" className="contact-form__label">Phone Number</label>
          <input id="phone" name="phone" type="tel" className="contact-form__input"
            placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__label">Email Address</label>
          <input id="email" name="email" type="email" className="contact-form__input"
            placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="subject" className="contact-form__label">Subject</label>
          <select id="subject" name="subject" className="contact-form__select"
            value={formData.subject} onChange={handleChange}>
            <option>Booking Inquiry</option>
            <option>Report Issue</option>
            <option>Home Collection</option>
            <option>Feedback</option>
            <option>Corporate Enquiry</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">Your Message</label>
        <textarea id="message" name="message" className="contact-form__textarea" rows={5}
          placeholder="How can we help you today?" value={formData.message} onChange={handleChange} required />
      </div>
      {status === 'sent' ? (
        <div className="contact-form__success" role="alert">
          Thank you! We will get back to you within 24 hours.
        </div>
      ) : (
        <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <span className="contact-form__spinner" />
          ) : (
            <><Send size={16} /> Send Message</>
          )}
        </button>
      )}
    </form>
  );
}

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header" aria-label="Contact header">
        <div className="container contact-header__inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="contact-header__title">Get in Touch</h1>
            <p className="contact-header__desc">
              Have questions about your diagnostic reports or want to schedule a home
              collection? Our team is here to support your journey to better health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-main section-sm" aria-label="Contact form and info">
        <div className="container contact-grid">
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="info-card">
              <div className="info-card__icon info-card__icon--green"><Phone size={18} /></div>
              <div>
                <div className="info-card__label">Customer Support</div>
                <div className="info-card__value">{COMPANY.phone}</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon info-card__icon--emerald"><MessageCircle size={18} /></div>
              <div>
                <div className="info-card__label">WhatsApp Us</div>
                <div className="info-card__value">{COMPANY.whatsapp}</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon info-card__icon--blue"><MapPin size={18} /></div>
              <div>
                <div className="info-card__label">Our Laboratory</div>
                <div className="info-card__value">{COMPANY.address}</div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__label">CONTACT US</div>
              <div className="contact-map__visual">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="contact-map__svg" aria-label="Map illustration">
                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#e8f4f0', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#c8e6de', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="200" fill="url(#mapGrad)" />
                  <rect x="20" y="40" width="80" height="60" rx="4" fill="#0d6b56" opacity="0.15" />
                  <rect x="120" y="60" width="60" height="40" rx="4" fill="#0d6b56" opacity="0.1" />
                  <rect x="200" y="30" width="100" height="80" rx="4" fill="#0d6b56" opacity="0.12" />
                  <rect x="320" y="55" width="60" height="45" rx="4" fill="#0d6b56" opacity="0.1" />
                  <rect x="30" y="120" width="120" height="50" rx="4" fill="#0d6b56" opacity="0.08" />
                  <rect x="170" y="125" width="80" height="45" rx="4" fill="#0d6b56" opacity="0.1" />
                  <rect x="270" y="115" width="100" height="55" rx="4" fill="#0d6b56" opacity="0.12" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="#0d6b56" strokeWidth="2" opacity="0.15" />
                  <line x1="160" y1="0" x2="160" y2="200" stroke="#0d6b56" strokeWidth="2" opacity="0.15" />
                  <circle cx="200" cy="100" r="12" fill="#0d6b56" />
                  <circle cx="200" cy="100" r="6" fill="white" />
                </svg>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-map__btn">
                <Navigation size={14} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section" aria-label="Frequently asked questions">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Find quick answers to your common queries.</p>
            </motion.div>
            <div className="faq-list">
              {CONTACT_FAQS.map((faq) => (
                <motion.div key={faq.id} variants={fadeUp}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
