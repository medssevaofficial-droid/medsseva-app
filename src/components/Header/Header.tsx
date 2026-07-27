import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrolled, useMobileMenu } from '@hooks/index';
import { NAV_LINKS } from '@constants/index';
import './Header.css';

const Header: React.FC = () => {
  const isScrolled = useScrolled(10);
  const { isOpen, toggle, close } = useMobileMenu();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    close();
  }, [location.pathname, close]);

  return (
  <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner" style={{ background: 'linear-gradient(90deg, #0a6b5e 0%, #12a090 100%)' }}>
      <div className="container header__inner">
        {/* Logo */}
      <Link to="/" className="header__logo" aria-label="MedsSeva Home">
   <img
              src="/logo.png"
              alt="MedsSeva logo"
              style={{ display: 'block', height: '60px', width: '220px', objectFit: 'cover', objectPosition: '50% 50%' }}
            />
        </Link>
        {/* Desktop Nav */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header__actions">
          <Link to="/contact" className="header__btn-login">
            Login
          </Link>
          <Link to="/contact" className="header__btn-cta">
            Book Test
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={toggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="header__overlay"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu ${isOpen ? 'header__mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__mobile-nav-link ${isActive ? 'header__mobile-nav-link--active' : ''}`
                  }
                  end={link.path === '/'}
                  onClick={close}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__mobile-actions">
          <Link to="/contact" className="header__btn-login header__btn-login--full" onClick={close}>
            Login
          </Link>
          <Link to="/contact" className="header__btn-cta header__btn-cta--full" onClick={close}>
            Book Test
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
