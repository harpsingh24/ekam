import React from 'react';

const ProductDetail = props => {
  const pData = props.passdata;

  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details </h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Portfolio Details</li>
              <li>{pData.pname}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div
                id="carousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={pData.pDetailGallery}
                      className="d-block w-100"
                      alt={pData.pname}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Product information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Product Name</strong>: {pData.pname}
                  </li>
                  <li>
                    <strong>Product Date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2> {pData.pDetailHD} </h2>
                <p>{pData.pDetailPehra}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetail;
