import React from 'react';
import { Link } from 'react-router-dom';
import { X, Share2, Globe, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import {
  COMPANY,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_LEGAL,
} from '@constants/index';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
         <Link to="/" className="footer__logo" aria-label="MedSeva Home">
              <img
                src="/logo.png"
                alt="MedSeva logo"
                style={{ display: 'block', height: '60px', width: '220px', objectFit: 'cover', objectPosition: '50% 50%' }}
              />
            </Link>
            <p className="footer__brand-desc">{COMPANY.description}</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Follow on X">
                <X size={16} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Connect on LinkedIn">
                <ExternalLink size={16} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Follow on social">
                <Globe size={16} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Share">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__links">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer__col">
            <h3 className="footer__col-title">Support</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Phone size={14} className="footer__contact-icon" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="footer__contact-item">
                <Mail size={14} className="footer__contact-icon" />
                <a href={`mailto:${COMPANY.email}`} className="footer__link">
                  {COMPANY.email}
                </a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={14} className="footer__contact-icon" />
                <span>{COMPANY.city}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} {COMPANY.fullName}. {COMPANY.tagline}
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__bottom-link">Terms</Link>
            <Link to="/terms" className="footer__bottom-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
