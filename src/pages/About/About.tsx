import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Gem, Users, Award, TrendingUp } from 'lucide-react';
import { ABOUT_STATS, JOURNEY_MILESTONES, LEADERSHIP_TEAM, MVV_ITEMS } from '@constants/index';
import Button from '@components/Button/Button';
import './About.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const mvvIcons: Record<string, React.ReactNode> = {
  Target: <Target size={24} />,
  Eye: <Eye size={24} />,
  Gem: <Gem size={24} />,
};

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      {/* ─── WHO WE ARE ─── */}
      <section className="about-hero section" aria-label="Who We Are">
        <div className="container about-hero__inner">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="about-hero__title">Who We Are</h1>
            <p className="about-hero__desc">
              MedSeva is a pioneer in digital-first diagnostic care, bridging the gap
              between clinical excellence and modern accessibility. We believe that
              precise diagnostics are the cornerstone of proactive health management.
            </p>
            <Button to="/contact" variant="primary" size="lg">Our Approach</Button>
          </motion.div>

          <motion.div
            className="about-hero__img-wrap"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="/images/about-team.jpg"
              alt="MedSeva medical team in a modern laboratory"
              className="about-hero__img"
            />
            <div className="about-hero__img-placeholder">
              <Users size={64} strokeWidth={1} />
              <span>Our Expert Team</span>
            </div>
            <div className="about-hero__img-badge">
              <div className="about-hero__badge-logo">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <rect width="28" height="28" rx="8" fill="#0d6b56" />
                  <path d="M14 6v16M6 14h16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span>MedSeva</span>
              </div>
              <p>Certified &amp; Trusted</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATISTICS BAR ─── */}
      <section className="about-stats" aria-label="Statistics">
        <div className="container about-stats__grid">
          {ABOUT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about-stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="about-stat__value">{stat.value}</div>
              <div className="about-stat__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── MISSION VISION VALUES ─── */}
      <section className="mvv section" aria-label="Mission, Vision and Values">
        <div className="container">
          <AnimatedSection>
            <div className="mvv__grid">
              {MVV_ITEMS.map((item) => (
                <motion.div key={item.id} variants={fadeUp} className="mvv-card">
                  <div className="mvv-card__icon">{mvvIcons[item.icon]}</div>
                  <h2 className="mvv-card__title">{item.title}</h2>
                  <p className="mvv-card__desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <section className="journey section" aria-label="Our journey">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="section-header">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">Milestones that defined our growth and commitment.</p>
            </motion.div>

            <div className="journey__timeline">
              {JOURNEY_MILESTONES.map((milestone) => (
                <motion.div key={milestone.year} variants={fadeUp} className="journey__item">
                  <div className="journey__year">{milestone.year}</div>
                  <div className="journey__dot" />
                  <div className="journey__content">
                    <h3 className="journey__milestone-title">{milestone.title}</h3>
                    <p className="journey__milestone-desc">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="leadership section" aria-label="Leadership team">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="section-header">
              <h2 className="section-title">Leadership Team</h2>
              <p className="section-subtitle">
                The minds steering MedSeva towards a healthier future.
              </p>
            </motion.div>

            <div className="leadership__grid">
              {LEADERSHIP_TEAM.map((leader) => (
                <motion.div key={leader.id} variants={fadeUp} className="leader-card">
                  <div className="leader-card__img-wrap">
                    <img
                      src={leader.image}
                      alt={`${leader.name}, ${leader.title}`}
                      className="leader-card__img"
                    />
                    <div className="leader-card__img-placeholder">
                      <Users size={48} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="leader-card__body">
                    <h3 className="leader-card__name">{leader.name}</h3>
                    <div className="leader-card__title">{leader.title}</div>
                    <p className="leader-card__desc">{leader.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="about-cta section-sm" aria-label="Join MedSeva">
        <div className="container">
          <div className="about-cta__inner">
            <div className="about-cta__icons">
              <Award size={32} />
              <TrendingUp size={32} />
            </div>
            <h2 className="about-cta__title">Ready to experience the future of diagnostics?</h2>
            <p className="about-cta__desc">
              Book your first test today and discover how MedSeva is changing healthcare delivery across India.
            </p>
            <div className="about-cta__actions">
              <Button to="/contact" variant="primary" size="lg">Book a Test</Button>
              <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
