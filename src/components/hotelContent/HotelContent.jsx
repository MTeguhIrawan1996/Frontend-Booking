import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import SwiperHotel from "../swiperHotel/SwiperHotel";
import useFetch from "../../hooks/useFetch";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HotelContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const state = useSelector((state) => state.search);
  const { data, loading, error } = useFetch(`/hotels/${id}`);
  const [days, setDays] = useState(0);
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      setDays(diffDays);
    };
    dayDifference(state.date[0].endDate, state.date[0].startDate);
  }, [state]);

  const handleClick = () => {
    if (user) {
      console.log("opern Modal");
    } else {
      navigate("/login");
    }
  };

  if (error.message) {
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="hotel-wrapper">
          <div className="address">
            <h1 className="hotel-title">{data.name}</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotel-distance">
              Excellent location - {data.distance} from center
            </span>
            <span className="hotel-price">
              Book a stay over Rp.{data.cheapestPrice} at this property and get
              a free airport taxi
            </span>
          </div>
          <div className="button-hotel">
            <button onClick={handleClick} className="btn btn-primary">
              Reserve or Book now
            </button>
          </div>
        </div>
        <div className="hotel-img">
          <SwiperHotel photos={data.photos} />
        </div>
        <div className="hotel-detail">
          <div className="hotel-detail-text">
            <h1 className="hotel-detail-title">{data.title}</h1>
            <p className="hotel-desc">{data.desc}</p>
          </div>
          <div className="hotel-detail-price">
            <h1 className="hotel-title-price">
              Perfect for a {days}-Night stay
            </h1>
            <span className="hotel-price-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, quod excepturi libero maxime minima molestiae omnis
              natus
            </span>
            <h2>
              <b>Rp{days * data.cheapestPrice * state.options.room}</b> ({days}{" "}
              night and {state.options.room} room)
            </h2>
            <button onClick={handleClick} className="btn">
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HotelContent;
