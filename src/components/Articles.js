import React from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';

import { COMMON__CONTENT } from '../constants';
export const Articles = () => {
  const { FEATUREED, SEE__ALL__ARTICLE } = COMMON__CONTENT;
  const { articlesItem } = useSelector((state) => state.articles);

  return (
    <div className="articles bg--white">
      <div className="articles__header">
        <h3 className="font font__dash">{FEATUREED}</h3>
        <h3 className="font font__arrow">{SEE__ALL__ARTICLE}</h3>
      </div>
      <div className="articles__cards">
        <Card hasCardImg={true} cardItems={articlesItem} />
      </div>
    </div>
  );
};

export default Articles;
