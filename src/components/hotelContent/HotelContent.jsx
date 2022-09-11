import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SwiperHotel from "../swiperHotel/SwiperHotel";

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
        <div className="hotel-img">
          <SwiperHotel />
        </div>
        <div className="hotel-detail">
          <div className="hotel-detail-text">
            <h1 className="hotel-detail-title">Stay in the heart of Karakow</h1>
            <p className="hotel-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              provident id aliquam itaque labore nulla blanditiis eveniet, hic
              unde maiores? Officia laudantium nulla possimus, molestiae saepe
              repellendus quaerat cumque fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis, fuga officiis ex officia
              inventore repudiandae quo laboriosam pariatur expedita
              exercitationem obcaecati sunt consequuntur nemo similique, earum
              voluptatum fugiat autem! Doloribus.
            </p>
          </div>
          <div className="hotel-detail-price">
            <h1 className="hotel-title-price">Perfect for a 9-Night stay</h1>
            <span className="hotel-price-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, quod excepturi libero maxime minima molestiae omnis
              natus
            </span>
            <h2>
              <b>$945</b>(9 night)
            </h2>
            <button className="btn">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HotelContent;
