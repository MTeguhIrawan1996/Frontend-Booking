import React from "react";

const FeaturedProperties = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <h1 className="titleSection">Home Guest Love</h1>
          <div className="container-grid">
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper fpItem">
                  <a href="/" className="stretched-link d-block">
                    <h5>Aparthotel Stare Miasto</h5>
                  </a>
                  <span className="fpCity">Jakarta</span>
                  <span className="fpPrice">Starting form $120</span>
                  <div className="fpRating">
                    <button className="btn btn-rating">8.9</button>
                    <span>Excelent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper fpItem">
                  <a href="/" className="stretched-link d-block">
                    <h5>Aparthotel Stare Miasto</h5>
                  </a>
                  <span className="fpCity">Jakarta</span>
                  <span className="fpPrice">Starting form $120</span>
                  <div className="fpRating">
                    <button className="btn btn-rating">8.9</button>
                    <span>Excelent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper fpItem">
                  <a href="/" className="stretched-link d-block">
                    <h5>Aparthotel Stare Miasto</h5>
                  </a>
                  <span className="fpCity">Jakarta</span>
                  <span className="fpPrice">Starting form $120</span>
                  <div className="fpRating">
                    <button className="btn btn-rating">8.9</button>
                    <span>Excelent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper fpItem">
                  <a href="/" className="stretched-link d-block">
                    <h5>Aparthotel Stare Miasto</h5>
                  </a>
                  <span className="fpCity">Jakarta</span>
                  <span className="fpPrice">Starting form $120</span>
                  <div className="fpRating">
                    <button className="btn btn-rating">10</button>
                    <span>Excelent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturedProperties;
