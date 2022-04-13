import React from 'react';

export const PriceLists = ({ items }) => {
  return (
    <ul className="accoundBook__priceList list__group">
      {items.map((item) => {
        <li className="list__item" key={item.id}>
          <span className="list__title">{item.title}</span>
          <span className="list__title">
            {item.category.type != 'income' ? -1 * item.price : item.price}
          </span>
          <span>{item.category.name}</span>
          <span>{item.data}</span>

          {/* <button className="" onClick={() => onDeleteItem(item)}> Delete </button>
							<button className="" onClick={() => onModifyItem(item)}> Modify </button> */}
        </li>;
      })}
    </ul>
  );
};

export default PriceLists;
