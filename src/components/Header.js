import React from 'react';
import { HEADER__CONTENT } from '../constants/index';

export const Header = () => {
  return (
    <header className="header header__hero">
      <div className="header__content">
        <div className="header__left">
          <div className="header__nav__logo"></div>
          <h3>
            Life is like a box of chocoloates. You never know what your're gonna
            get
          </h3>
        </div>
        <div className="header__right">
          <nav className="header__nav__item">
            {Object.keys(HEADER__CONTENT).map((key, index) => {
              return (
                <a key={index} href="">
                  {HEADER__CONTENT[key]}
                </a>
              );
            })}
          </nav>
          <div className="header__textCarousel">
            <h1>H</h1>
            <h1>L</h1>
            <h1>N</h1>
            <h1>M</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
