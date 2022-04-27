import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Articles from '../components/Articles';

import { fetchAllCategory } from '../stores/categorySlice';
import { fetchAllArticles } from '../stores/articlesSlice';
export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <div className="mainLayout">
      <Header />
      <Banner />
      <Category />
      <Articles />
    </div>
  );
};

export default MainLayout;
