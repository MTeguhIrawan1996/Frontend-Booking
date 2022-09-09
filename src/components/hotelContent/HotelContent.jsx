import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const HotelContent = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="hotel-wrapper">
          <div className="address">
            <h1 className="hotel-title">Grand Hotel</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Jakarta Selatan Indonesia</span>
            </div>
            <span className="hotel-distance">
              Excellent location - 500m from center
            </span>
            <span className="hotel-price">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
          </div>
          <div className="button-hotel">
            <button className="btn btn-primary">Reserve or Book now</button>
          </div>
        </div>
        {/* <div className="hotel-img">haha</div> */}
      </div>
    </React.Fragment>
  );
};

export default HotelContent;
