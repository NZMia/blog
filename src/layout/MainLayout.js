import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';

export const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Header />
      <Banner />
    </div>
  );
};

export default MainLayout;
