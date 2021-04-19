import React from 'react';
import FootersocialData from './FootersocialData';

const FooterSocial = () => {
  return (
    <>
      <div className="social-links">
        
        <a href={FootersocialData.twitter} className="twitter">
          <i className="fa fa-twitter" aria-hidden="true"></i> 
        </a>
        <a href={FootersocialData.facebook} className="facebook">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href={FootersocialData.instagram} className="instagram">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href={FootersocialData.googlePlus} className="google-plus">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </a>
        <a href={FootersocialData.linkedin} className="linkedin">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};
export default FooterSocial;
