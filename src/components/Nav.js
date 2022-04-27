import React from 'react';
import { HEADER__CONTENT } from '../constants/index';

export const Nav = () => {
  return (
    <nav className="nav">
      {Object.keys(HEADER__CONTENT).map((key, index) => {
        return (
          <a className="nav__item" key={index} href="">
            {HEADER__CONTENT[key]}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
