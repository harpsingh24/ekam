import React from 'react';
import Logo from './logo/Logo';
import Navbar from './navBar/Navbar';

const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <Logo />
          <Navbar />
        </div>
      </header>
    </>
  );
};
export default Header;
