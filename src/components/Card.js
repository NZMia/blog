import React from 'react';

export const Card = ({ hasCardImg, cardItems }) => {
  console.info('cardItems', cardItems);

  return (
    cardItems &&
    cardItems.map((cardItem, index) => {
      return (
        <div className={`${hasCardImg ? 'card' : 'card--noImg'}`} key={index}>
          {hasCardImg && (
            <img
              className="card__image"
              src={cardItem.img}
              alt={cardItem.title}
            />
          )}
          <div className="card__body">
            {cardItem.icon && <img src={cardItem.icon} alt={cardItem.title} />}

            <h3 className="font">{cardItem.title}</h3>
          </div>
        </div>
      );
    })
  );
};

export default Card;
