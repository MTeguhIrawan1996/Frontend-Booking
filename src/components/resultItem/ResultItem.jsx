import React from "react";

const ResultItem = () => {
  return (
    <React.Fragment>
      <div className="result-item">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt="img-result"
          className="img-result"
        />
        <div className="result-desc">
          <h1 className="result-title">Tower Street Apartments</h1>
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
          <div className="result-rating">
            <span>Excelent</span>
            <button className="btn-rating btn-rating-result">8.9</button>
          </div>
          <div className="result-detail-text">
            <span className="result-price">$123</span>
            <span className="result-text">Includes texas and fees</span>
            <button className="btn navButton">See availability</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResultItem;
