import React from 'react';
import BannerInfo from './BannerinfoData';

const HerobannerInfo = () => {
  return (
    <>
      <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row">
            {BannerInfo.map((data, i) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="icon-box">
                      <div className="icon">
                        <i
                          className={BannerInfo[i].icon + ' fa'}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h4 className="title"> {BannerInfo[i].title} </h4>
                      <p className="description">{BannerInfo[i].description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default HerobannerInfo;
