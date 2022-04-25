import React from 'react';

export const Card = ({ hasCardImg, cardItems }) => {
  return (
    cardItems &&
    cardItems.map((cardItem) => {
      return (
        <div className={'card' + `${!!hasCardImg}` && 'card--noImg'}>
          {hasCardImg && <div className="card__image"></div>}
          <div className="card__body">
            <img src={cardItem.icon} alt={cardItem.title} />
            <h3 className="font">{cardItem.title}</h3>
          </div>
        </div>
      );
    })
  );
};

export default Card;
