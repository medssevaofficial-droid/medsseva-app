import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import './MainLayout.css';

const MainLayout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
