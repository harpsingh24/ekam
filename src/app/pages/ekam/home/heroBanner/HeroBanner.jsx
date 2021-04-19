import React from 'react';
import { NavLink } from 'react-router-dom';
 
import HeroData from './HeroBannerData';



const HeroBanner = () => {
  

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1> {HeroData.heading} </h1>
              <h2>
              {HeroData.pehra} 
              </h2>
              <div className="d-flex">
                 <NavLink to={HeroData.btnlink}  className="btn-get-started"> {HeroData.btntext}  </NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={HeroData.heroimage} className="img-fluid animated"/>
      
  </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
