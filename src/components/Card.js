import React from 'react';

export const Card = ({ hasCardImg, cardItems }) => {
  return (
    cardItems &&
    cardItems.map((cardItem) => {
      return (
        <div className="card">
          {hasCardImg && <div className="card__image"></div>}
          <div className="card__body">
            <p>{cardItem.title}</p>
            <p>{cardItem.icon}</p>
          </div>
        </div>
      );
    })
  );
};

export default Card;
