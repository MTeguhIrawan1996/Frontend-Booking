import React from "react";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("hotels/find/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ];
  return (
    <section>
      <div className="container">
        <h1 className="titleSection">Property List</h1>
        <div className="container-grid">
          {loading ? (
            "loading"
          ) : (
            <>
              {data &&
                images.map((img, i) => {
                  return (
                    <div className="item column-3 column-sm-6" key={`img-${i}`}>
                      <div className="card">
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={img}
                            alt={`img-${i}`}
                            className="img-cover"
                            style={{ height: 180 }}
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <a className="stretched-link d-block" href="/">
                            <h5>{data[i]?.type}</h5>
                          </a>
                          <span>
                            {data[i]?.count} {data[i]?.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
