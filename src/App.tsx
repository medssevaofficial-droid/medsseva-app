import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import '@styles/global.css';
import '@styles/animations.css';

// Lazy-load pages for code splitting
const HomePage = React.lazy(() => import('@pages/Home/Home'));
const AboutPage = React.lazy(() => import('@pages/About/About'));
const TermsPage = React.lazy(() => import('@pages/Terms/Terms'));
const PrivacyPage = React.lazy(() => import('@pages/Privacy/Privacy'));
const ContactPage = React.lazy(() => import('@pages/Contact/Contact'));

// Loading fallback
function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: '3px solid #e5e7eb',
          borderTopColor: '#0d6b56',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
