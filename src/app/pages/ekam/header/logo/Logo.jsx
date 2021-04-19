import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from  '../../../../../assets/images/ekam/logo.png'

const Logo = () => {
  return (
    <>
      <h1 className="logo">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          <img src={LogoImage} alt="ekam" className="img-fluid" style={{ maxWidth:'100px'}}/>
        </NavLink>
      </h1>
    </>
  );
};
export default Logo;
