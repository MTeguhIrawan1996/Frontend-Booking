import React from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch("hotels/find/countByCity");
  return (
    <section>
      <div className="container">
        <div className="container-grid">
          {loading ? (
            "loading please wait"
          ) : (
            <>
              {data.map((datas, i) => {
                return (
                  <div
                    className={`item column-4 ${
                      i === 0 ? "row-2 column-sm-12" : "row-1 column-sm-6"
                    }`}
                    key={i}
                  >
                    <div className="card card-featured">
                      <figure className="img-wrapper">
                        <img
                          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                          alt="img-1"
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <a className="stretched-link d-block" href="/">
                          <h5>
                            {datas._id.charAt(0).toUpperCase() +
                              datas._id.slice(1).toLowerCase()}
                          </h5>
                        </a>
                        <span>{datas.count}, Properties</span>
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

export default Featured;
