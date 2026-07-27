import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Home as HomeIcon,
  FileText,
  ShieldCheck,
  BadgeIndianRupee,
  ArrowRight,
  Smartphone,
  CheckCircle,
  ClipboardList,
  CalendarCheck,
  Droplets,
  FlaskConical,
  FileCheck,
  HeartHandshake,
  Building2,
  Star,
} from 'lucide-react';
import Button from '@components/Button/Button';
import { PROCESS_STEPS } from '@constants/index';
import './Home.css';

// ─── Animation variants ───────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Section Wrapper with InView ─────────────────────────
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Step Icon Map ────────────────────────────────────────
const stepIcons: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList size={24} />,
  CalendarCheck: <CalendarCheck size={24} />,
  Droplets: <Droplets size={24} />,
  FlaskConical: <FlaskConical size={24} />,
  FileCheck: <FileCheck size={24} />,
};

// ─── WHY CHOOSE icons ─────────────────────────────────────
const whyIcons: Record<string, React.ReactNode> = {
  Home: <HomeIcon size={22} />,
  FileText: <FileText size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  BadgeIndianRupee: <BadgeIndianRupee size={22} />,
};

// ─── Component ────────────────────────────────────────────
const HomePage: React.FC = () => {
  return (
    <div className="home">
      {/* ─── HERO ─── */}
      <section className="hero" aria-label="Hero section">
        <div className="container hero__inner">
          {/* Left Content */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="hero__badge-dot" />
              Healthcare Delivered
            </motion.div>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              Healthcare at
              <br />
              <span className="hero__title-accent">Your Doorstep</span>
            </motion.h1>

            <motion.p
              className="hero__desc"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
            >
              Book pathology tests, health packages and home sample collection with
              NABL certified accuracy. High quality diagnostics delivered to you,
              affordably.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
            >
              <Button to="/contact" variant="primary" size="lg" icon={<CheckCircle size={18} />}>
                Book Test
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                View Packages
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Hero Visual */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero__img-wrap">
              <img
                src="/images/hero-doctor.jpg"
                alt="Healthcare professional in a modern diagnostic lab"
                className="hero__img"
              />
              {/* Floating Cards */}
              <motion.div
                className="hero__float-card hero__float-card--top-right"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="hero__float-icon">
                  <HomeIcon size={16} />
                </div>
                <div>
                  <div className="hero__float-label">Home Collection</div>
                  <div className="hero__float-sub">At your convenience</div>
                </div>
              </motion.div>

              <motion.div
                className="hero__float-card hero__float-card--bottom-left"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="hero__float-icon hero__float-icon--blue">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="hero__float-label">Instant Reports</div>
                  <div className="hero__float-sub">Digital delivery</div>
                </div>
              </motion.div>

              <motion.div
                className="hero__float-card hero__float-card--bottom-right"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="hero__float-icon hero__float-icon--gold">
                  <Star size={16} />
                </div>
                <div>
                  <div className="hero__float-label">Trusted Partners</div>
                  <div className="hero__float-sub">50+ NABL labs</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ─── */}
      <section className="why-choose section" aria-label="Why choose MedsSeva">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="section-header">
              <h2 className="section-title">Why Choose MedsSeva?</h2>
            </motion.div>

            <div className="why-grid">
              {[
                {
                  icon: 'Home',
                  color: '#0d6b56',
                  bg: '#e6f4f0',
                  title: 'Home Collection',
                  desc: 'Qualified phlebotomists arrive at your doorstep for hassle-free sample pickup.',
                },
                {
                  icon: 'FileText',
                  color: '#3b82f6',
                  bg: '#eff6ff',
                  title: 'Digital Reports',
                  desc: 'Fast turnaround times with secure digital reports delivered directly to your phone.',
                },
                {
                  icon: 'ShieldCheck',
                  color: '#8b5cf6',
                  bg: '#f5f3ff',
                  title: 'Certified Labs',
                  desc: 'All our labs are processed in NABL and CAP certified laboratories for accuracy.',
                },
                {
                  icon: 'BadgeIndianRupee',
                  color: '#f59e0b',
                  bg: '#fffbeb',
                  title: 'Affordable Pricing',
                  desc: 'Transparent pricing, zero hidden charges, and comprehensive health packages.',
                },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleIn} className="why-card">
                  <div
                    className="why-card__icon"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {whyIcons[item.icon]}
                  </div>
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── POPULAR SERVICES ─── */}
      <section className="services section" aria-label="Popular services">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="services__header">
              <div>
                <h2 className="section-title">Popular Diagnostic Services</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>
                  Explore a wide range of specialized tests and preventive health checkups at competitive prices.
                </p>
              </div>
              <Link to="/contact" className="services__view-all">
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Big Service Cards */}
            <div className="services__big-grid">
              {[
                {
                  img: '/images/service-blood-test.jpg',
                  tag: 'Most Popular',
                  title: 'Blood Tests',
                  sub: 'Complete Blood Count, Thyroid Panel & more',
                  tagColor: '#0d6b56',
                },
                {
                  img: '/images/service-health-package.jpg',
                  tag: 'Best Value',
                  title: 'Health Packages',
                  sub: 'Comprehensive diagnostics profiles for all ages',
                  tagColor: '#3b82f6',
                },
                {
                  img: '/images/service-full-body.jpg',
                  tag: 'Premium',
                  title: 'Full Body Checkup',
                  sub: '90+ parameters to keep you covered',
                  tagColor: '#f59e0b',
                },
              ].map((svc) => (
                <motion.div key={svc.title} variants={scaleIn}>
                  <Link to="/contact" className="svc-big-card">
                    <div className="svc-big-card__img-wrap">
                      <img src={svc.img} alt={svc.title} className="svc-big-card__img" />
                      <div className="svc-big-card__overlay" />
                    </div>
                    <div className="svc-big-card__body">
                      <span className="svc-big-card__tag" style={{ background: svc.tagColor }}>
                        {svc.tag}
                      </span>
                      <h3 className="svc-big-card__title">{svc.title}</h3>
                      <p className="svc-big-card__sub">{svc.sub}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Small Feature Cards */}
            <div className="services__small-grid">
              {[
                {
                  icon: <HomeIcon size={20} />,
                  color: '#0d6b56',
                  bg: '#e6f4f0',
                  title: 'Home Collection',
                  desc: 'Professional sample collection at your convenience.',
                },
                {
                  icon: <HeartHandshake size={20} />,
                  color: '#8b5cf6',
                  bg: '#f5f3ff',
                  title: 'Senior Citizen Care',
                  desc: 'Dedicated diagnostic services for senior citizens.',
                },
                {
                  icon: <Building2 size={20} />,
                  color: '#3b82f6',
                  bg: '#eff6ff',
                  title: 'Corporate Health',
                  desc: 'Bulk screenings and wellness packages for corporates.',
                },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleIn}>
                  <Link to="/contact" className="svc-small-card">
                    <div className="svc-small-card__icon" style={{ background: item.bg, color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="svc-small-card__body">
                      <h3 className="svc-small-card__title">{item.title}</h3>
                      <p className="svc-small-card__desc">{item.desc}</p>
                    </div>
                    <span className="svc-small-card__link">
                      Explore more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5 STEP PROCESS ─── */}
      <section className="process section" aria-label="How it works">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="section-header">
              <h2 className="section-title">Simple 5 Step Process</h2>
              <p className="section-subtitle">
                Getting your diagnostic tests done has never been this easy.
              </p>
            </motion.div>

            <div className="process__steps">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={step.step} variants={scaleIn} className="process__step">
                  <div className="process__step-num">{step.step}</div>
                  <div className="process__step-icon">
                    {stepIcons[step.icon]}
                  </div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.description}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="process__connector" aria-hidden="true" />
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DOWNLOAD APP ─── */}
      <section className="download section" aria-label="Download the app">
        <div className="container">
          <AnimatedSection>
            <div className="download__inner">
              <motion.div variants={fadeUp} className="download__content">
                <h2 className="download__title">
                  Healthcare in Your Pocket,
                  <br />
                  <span>Download the App.</span>
                </h2>
                <p className="download__desc">
                  Manage your health on the go. Book tests, track samples in
                  real time and access your entire medical history, in one
                  place.
                </p>
                <div className="download__buttons">
                  <a href="#" className="download__store-btn" aria-label="Download on the App Store">
                    <Smartphone size={20} />
                    <div>
                      <span className="download__store-small">Download on the</span>
                      <span className="download__store-big">App Store</span>
                    </div>
                  </a>
                  <a href="#" className="download__store-btn" aria-label="Get it on Google Play">
                    <Smartphone size={20} />
                    <div>
                      <span className="download__store-small">Get it on</span>
                      <span className="download__store-big">Google Play</span>
                    </div>
                  </a>
                </div>
                <div className="download__ratings">
                  <div className="download__stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="download__rating-text">4.8 · 45k+ Users</span>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="download__phone-wrap">
                <div className="download__phone-glow" />
                <div className="download__phone-placeholder">
                  <Smartphone size={64} strokeWidth={1} />
                  <span>MedsSeva App</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
