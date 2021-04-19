import React from 'react';
import Copyright from './copyright/Copyright';
import FooterSocial from './footersocial/FooterSocial';
import FooterSubscribe from './footerSubscribe/FooterSubscribe';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <FooterSubscribe />

            <FooterSocial />
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <Copyright />
        </div>
      </footer>

      <span className="back-to-top d-flex align-items-center justify-content-center">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </span>
    </>
  );
};
export default Footer;
