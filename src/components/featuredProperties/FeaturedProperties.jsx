import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("hotels?featured=true&limit=4");
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <h1 className="titleSection">Home Guest Love</h1>
          <div className="container-grid">
            {loading ? (
              <div className="item column-12 column-sm-12">
                There is no propert at this category....
              </div>
            ) : (
              data.map((datas, i) => {
                return (
                  <div className="item column-3 column-sm-6" key={i}>
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
                          <h5>{datas.name}</h5>
                        </a>
                        <span className="fpCity">
                          {datas.city.charAt(0).toUpperCase() +
                            datas.city.slice(1).toLowerCase()}
                        </span>
                        <span className="fpPrice">
                          Starting form {datas.cheapestPrice}
                        </span>
                        <div className="fpRating">
                          <button className="btn btn-rating">8.9</button>
                          <span>Excelent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturedProperties;
