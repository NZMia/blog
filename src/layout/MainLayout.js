import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';

import { fetchAllCategory } from '../stores/categorySlice';

export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);
  return (
    <div className="mainLayout">
      <Header />
      <Banner />
      <Category />
    </div>
  );
};

export default MainLayout;
