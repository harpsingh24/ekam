import React from 'react';

import HeroAboutImg from '../../../../assets/images/ekam/about.png';
import AboutData from './AboutData';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={HeroAboutImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3> {AboutData.heading} </h3>
              <p className="fst-italic">{AboutData.pehra}</p>
              <ul>
                {AboutData.ULText.map((data, i) => {
                  return (
                    <li>
                    <i className="fa fa-check" aria-hidden="true"></i> 
                      {AboutData.ULText[i]} 
                    </li>
                  );
                })}
              </ul>
              <p> {AboutData.pehra2} </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
