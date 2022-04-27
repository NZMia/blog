import React from 'react';
import Button from './Button';
import person from '../assets/person.png';

import { BANNER__CONTENT } from '../constants';

export const Banner = () => {
  const { MAIN__CONTENT, SUB__CONTENT } = BANNER__CONTENT;
  return (
    <div className="banner bg--grey">
      <div className="banner__text">
        <div className="banner__text__container">
          <h1 className="font font--big">{MAIN__CONTENT}</h1>
          <p className="font font--grey">{SUB__CONTENT}</p>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              autoComplete="off"
            />
            <Button content="Subscribe" />
          </form>
        </div>
      </div>
      <div className="banner__img">
        <img src={person} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
