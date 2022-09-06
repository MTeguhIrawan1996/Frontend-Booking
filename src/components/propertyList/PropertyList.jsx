import React from "react";

const PropertyList = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <h1 className="titleSection">Property List</h1>
          <div className="container-grid">
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper">
                  <a className="stretched-link d-block" href="/">
                    <h5>Hotels</h5>
                  </a>
                  <span>233 Hotels</span>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper">
                  <a className="stretched-link d-block" href="/">
                    <h5>Apartments</h5>
                  </a>
                  <span>233 Hotels</span>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper">
                  <a className="stretched-link d-block" href="/">
                    <h5>Resorts</h5>
                  </a>
                  <span>233 Hotels</span>
                </div>
              </div>
            </div>
            <div className="item column-3 column-sm-6">
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                    alt="img-1"
                    className="img-cover"
                    style={{ height: 180 }}
                  />
                </figure>
                <div className="meta-wrapper">
                  <a className="stretched-link d-block" href="/">
                    <h5>Villas</h5>
                  </a>
                  <span>233 Hotels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PropertyList;
