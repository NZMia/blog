import React from 'react';
import { useSlider } from '../utils/useSlider';

import { CARSOUEL__TYPE } from '../constants';

export const Carsouel = ({ items, customClassName, ...props }) => {
  const itemLength = items.length;
  const itemSlider = useSlider(itemLength);
  const type = props.type;
  return (
    <section className="carsouel">
      <div className="carsouel__container">
        <div
          className="carsouel__inner"
          style={{
            width: `${itemLength * 100}%`,
            transform: `translateX(-${(100 * itemSlider) / itemLength}%)`,
          }}
        >
          {items &&
            items.map((item, index) => {
              return type != CARSOUEL__TYPE.IMG ? (
                <h1
                  className={customClassName}
                  key={index}
                  style={{ width: `${100 / itemLength}%` }}
                >
                  {item}
                </h1>
              ) : (
                <img
                  src={item}
                  key={index}
                  className={customClassName}
                  style={{ width: `${100 / itemLength}%` }}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Carsouel;
