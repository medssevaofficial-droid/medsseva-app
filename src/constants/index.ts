// ─── Navigation ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Contact Us', path: '/contact' },
] as const;

// ─── Company Info ───────────────────────────────────────────
export const COMPANY = {
  name: 'MedsSeva',
  fullName: 'MedsSeva Diagnostics',
  tagline: 'Smart Diagnostics. Better Care.',
  description: 'Pioneering smart diagnostics with human care. Accurate, timely, and accessible healthcare for everyone.',
  phone: '+91-9205109007',
  whatsapp: '+91-9205109007',
  email: 'info@medsseva.com',
  privacyEmail: 'tanishabhatt2318@gmail.com',
  address: 'Noida',
  city: 'Noida, Uttar Pradesh, India',
  website: 'www.medsseva.com',
  founded: '2018',
} as const;

// ─── Home — Why Choose MedsSeva ─────────────────────────────
export const WHY_CHOOSE_ITEMS = [
  {
    id: 'home-collection',
    icon: 'Home',
    title: 'Home Collection',
    description: 'Qualified phlebotomists arrive at your doorstep for hassle-free sample pickup.',
    color: '#0d6b56',
  },
  {
    id: 'digital-reports',
    icon: 'FileText',
    title: 'Digital Reports',
    description: 'Fast turnaround times with secure digital reports delivered directly to your phone.',
    color: '#3b82f6',
  },
  {
    id: 'certified-labs',
    icon: 'ShieldCheck',
    title: 'Certified Labs',
    description: 'All our labs are processed in NABL and CAP certified laboratories for accuracy.',
    color: '#8b5cf6',
  },
  {
    id: 'affordable-pricing',
    icon: 'BadgeIndianRupee',
    title: 'Affordable Pricing',
    description: 'Transparent pricing, zero hidden charges, and comprehensive health packages.',
    color: '#f59e0b',
  },
] as const;

// ─── Home — Popular Services ───────────────────────────────
export const POPULAR_SERVICES = [
  {
    id: 'blood-tests',
    title: 'Blood Tests',
    subtitle: 'Complete Blood Count, Thyroid Panel & more',
    image: '/images/service-blood-test.jpg',
    tag: 'Most Popular',
    href: '/contact',
  },
  {
    id: 'health-packages',
    title: 'Health Packages',
    subtitle: 'Comprehensive diagnostics profiles for all ages',
    image: '/images/service-health-package.jpg',
    tag: 'Best Value',
    href: '/contact',
  },
  {
    id: 'full-body-checkup',
    title: 'Full Body Checkup',
    subtitle: '90+ parameters to keep you covered',
    image: '/images/service-full-body.jpg',
    tag: 'Premium',
    href: '/contact',
  },
] as const;

// ─── Home — Service Feature Cards ─────────────────────────
export const SERVICE_FEATURES = [
  {
    id: 'home-collection-svc',
    icon: 'Home',
    title: 'Home Collection',
    description: 'Professional sample collection at your convenience.',
    href: '/contact',
  },
  {
    id: 'senior-care',
    icon: 'HeartHandshake',
    title: 'Senior Citizen Care',
    description: 'Dedicated diagnostic services for senior citizens.',
    href: '/contact',
  },
  {
    id: 'corporate-health',
    icon: 'Building2',
    title: 'Corporate Health',
    description: 'Bulk screenings and wellness packages for corporates.',
    href: '/contact',
  },
] as const;

// ─── Home — 5 Step Process ─────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    icon: 'ClipboardList',
    title: 'Book Test',
    description: 'Choose from hundreds of healthcare diagnostic tests.',
  },
  {
    step: '02',
    icon: 'CalendarCheck',
    title: 'Choose Slot',
    description: 'Pick a convenient date and time for sample collection.',
  },
  {
    step: '03',
    icon: 'Droplets',
    title: 'Sample Collection',
    description: 'Our phlebotomist visits your home for the process.',
  },
  {
    step: '04',
    icon: 'FlaskConical',
    title: 'Lab Testing',
    description: 'Accurate testing in NABL certified laboratories.',
  },
  {
    step: '05',
    icon: 'FileCheck',
    title: 'Receive Report',
    description: 'Access your secure reports online via app or email.',
  },
] as const;

// ─── About — Statistics ────────────────────────────────────
export const ABOUT_STATS = [
  { value: '50+', label: 'Partner Labs' },
  { value: '1000+', label: 'Daily Bookings' },
  { value: '500+', label: 'Tests Offered' },
  { value: '98%', label: 'Satisfaction' },
] as const;

// ─── About — Mission Vision Values ────────────────────────
export const MVV_ITEMS = [
  {
    id: 'mission',
    icon: 'Target',
    title: 'Our Mission',
    description:
      'To empower every individual with accurate, accessible, and affordable diagnostic insights through technology-driven clinical excellence.',
  },
  {
    id: 'vision',
    icon: 'Eye',
    title: 'Our Vision',
    description:
      'To become the global gold standard for home-integrated diagnostics, making preventative health care a seamless part of every lifestyle.',
  },
  {
    id: 'values',
    icon: 'Gem',
    title: 'Our Values',
    description:
      "Integrity in data, empathy in care, and relentless innovation in diagnostic technology. We put the patient's trust at the center of everything.",
  },
] as const;

// ─── About — Journey Timeline ──────────────────────────────
export const JOURNEY_MILESTONES = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Started with a single lab and a vision for accessible diagnostics.',
  },
  {
    year: '2020',
    title: 'Growth',
    description: 'Launched home collection services across 10 major metros.',
  },
  {
    year: '2021',
    title: '10+ Labs',
    description: 'Expanded network to cover major state healthcare hubs.',
  },
  {
    year: '2023',
    title: '90+ clients',
    description: 'Proudly served our millionth patient with 99% accuracy.',
  },
  {
    year: '2024',
    title: '50+ Labs',
    description: 'Integrating AI diagnostics for faster and more precise reporting.',
  },
] as const;

// ─── About — Leadership Team ───────────────────────────────
export const LEADERSHIP_TEAM = [
  {
    id: 'rajesh-khanna',
    name: 'Dr. Rajesh Khanna',
    title: 'Founder & CEO',
    description: 'Over 20 years of experience in healthcare management and clinical pathology.',
    image: '/images/leader-1.jpg',
  },
  {
    id: 'anjali-mehta',
    name: 'Dr. Anjali Mehta',
    title: 'Medical Director',
    description: 'Expert in diagnostic imaging and pathology with a passion for digital healthcare.',
    image: '/images/leader-2.jpg',
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    title: 'Head of Operations',
    description: 'Specialized in supply chain logistics and healthcare network optimization.',
    image: '/images/leader-3.jpg',
  },
] as const;

// ─── Contact — FAQ ─────────────────────────────────────────
export const CONTACT_FAQS = [
  {
    id: 'book-test',
    question: 'How do I book a test online?',
    answer:
      'You can book a test through our website or mobile app. Simply select your test, choose a convenient slot, enter your address, and confirm your booking. Our phlebotomist will arrive at your doorstep at the chosen time.',
  },
  {
    id: 'payment-options',
    question: 'What are the payment options?',
    answer:
      'We accept all major payment methods including UPI, debit/credit cards, net banking, and cash on collection. All online payments are processed through secure, encrypted gateways.',
  },
  {
    id: 'report-time',
    question: 'When will I get my reports?',
    answer:
      'Most routine reports are available within 24 hours. Specialized tests may take 48–72 hours. You will receive an SMS and email notification as soon as your report is ready.',
  },
  {
    id: 'home-collection-faq',
    question: 'Is home collection available everywhere?',
    answer:
      'Home collection is currently available in 25+ cities across India. We are rapidly expanding. You can check serviceability by entering your pincode on our app or website.',
  },
  {
    id: 'fasting',
    question: 'Do I need to fast before the test?',
    answer:
      'Fasting requirements vary by test. Blood glucose and lipid profile tests typically require 8–12 hours of fasting. Specific instructions will be mentioned in your booking confirmation.',
  },
] as const;

// ─── Footer Links ──────────────────────────────────────────
export const FOOTER_QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms', path: '/terms' },
] as const;

export const FOOTER_SERVICES = [
  { label: 'Blood Tests', path: '/contact' },
  { label: 'Health Packages', path: '/contact' },
  { label: 'Home Collection', path: '/contact' },
  { label: 'Refund Policy', path: '/terms' },
] as const;

export const FOOTER_LEGAL = [
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Cookie Policy', path: '/privacy' },
] as const;

export const FOOTER_SUPPORT = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'WhatsApp', path: '/contact' },
  { label: 'Report Issue', path: '/contact' },
] as const;