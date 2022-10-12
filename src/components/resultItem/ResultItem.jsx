import React from "react";
import { Link } from "react-router-dom";

const ResultItem = (props) => {
  const { data } = props;

  return (
    <React.Fragment>
      {data.map((datas, i) => {
        return (
          <div className="result-item" key={i}>
            <img
              src={datas.photos}
              alt={`img-result${i}`}
              className="img-result"
            />
            <div className="result-desc">
              <h1 className="result-title">{datas.name}</h1>
              <span className="result-distance">500m from center</span>
              <span className="result-taxi">Free airport taxi</span>
              <span className="result-subtitle">
                Studio Apartment with Air conditioning
              </span>
              <span className="result-features">
                Entire studio • 1 bathroom • 21m² 1 full bed
              </span>
              <span className="result-cancel">Free cancellation</span>
              <span className="result-cancel-sub">
                You can cancel leter, so lock in this great price today
              </span>
            </div>
            <div className="result-detail">
              {datas.rating && (
                <div className="result-rating">
                  <span>Excelent</span>
                  <button className="btn-rating btn-rating-result">8.9</button>
                </div>
              )}
              <div className="result-detail-text">
                <span className="result-price">${datas.cheapestPrice}</span>
                <span className="result-text">Includes texas and fees</span>
                <Link to={`/hotels/${datas._id}`}>
                  <button className="btn navButton">See availability</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ResultItem;
