import React from 'react';
import { NavLink } from 'react-router-dom';
import CallToAction from './callToAction/CallToAction';
import PorfolioData from './PorfolioData';
import ProductDetail from './ProductDetail';
import Testimonial from './testimonial/Testimonial';

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span>Portfolio</span>
            <h2>Portfolio</h2>
            <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p>
          </div>

          <div className="row portfolio-container">
            {PorfolioData.map((data, i) => {
              return (
                <div className="col-lg-4 col-md-6 portfolio-item position-relative">
                  <img
                    src={PorfolioData[i].thumb}
                    className="img-fluid"
                    alt={PorfolioData[i].pname}
                  />
                  <div className="portfolio-info">
                    <h4> {PorfolioData[i].pname} </h4>
                    <p>{PorfolioData[i].pDescription} </p>

                    <NavLink
                      to={`/productdetail${i + 1}`}
                      className="details-link"
                      title="More Details"
                    >
                      <i className="fa fa-link"></i>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*<Testimonial/> */}

      <CallToAction />
    </>
  );
};
export default Portfolio;
