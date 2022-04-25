import React from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';
import { COMMON__CONTENT } from '../constants';

export const Category = () => {
  const { categoryItems } = useSelector((state) => state.category);
  const { BROWSE, SEE__ALL__CATEGORY } = COMMON__CONTENT;
  return (
    <div className="category bg--grey">
      <div className="category__header">
        <h3 className="font">{BROWSE}</h3>
        <h3 className="font">{SEE__ALL__CATEGORY}</h3>
      </div>
      <div className="catetory__cards">
        <Card hasCardImg={false} cardItems={categoryItems} />
      </div>
    </div>
  );
};

export default Category;
