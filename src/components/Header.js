import React from 'react';
import {
  HEADER__CONTENT,
  CARSOUEL__TYPE,
  CARSOUEL__IMGS,
  CARSOUEL__TEXT,
} from '../constants/index';

import Carsouel from './Carsouel';
export const Header = () => {
  return (
    <header className="header header__hero">
      <div className="header__nav">
        <div className="logo"></div>
        <nav className="header__nav__item">
          {Object.keys(HEADER__CONTENT).map((key, index) => {
            return (
              <a key={index} href="">
                {HEADER__CONTENT[key]}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="header__content">
        <div className="header__left">
          <h1 className="header__left__content">
            Life is like a box of chocoloates. You never know what your're gonna
            get
          </h1>
        </div>
        <div className="header__right">
          <Carsouel
            items={CARSOUEL__TEXT}
            customClassName="carsouel__img header__right--img"
            type={CARSOUEL__TYPE.IMG}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
