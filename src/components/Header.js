import React from 'react';
import Nav from './Nav';
import Button from './Button';

export const Header = () => {
  return (
    <div className="header bg--grey">
      <div className="header__icon"></div>
      <div className="header__nav">
        <Nav />
      </div>
      <div className="header__button">
        <Button content="Admin" />
      </div>
    </div>
  );
};

export default Header;
