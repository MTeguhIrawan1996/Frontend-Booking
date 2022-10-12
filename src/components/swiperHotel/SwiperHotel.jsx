import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const SwiperHotel = (props) => {
  const { photos } = props;
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          1200: {
            // width: 1200,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          320: {
            // width: 576,
            slidesPerView: 1,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {photos?.map((data, index) => {
          return (
            <SwiperSlide key={`photos-${index}`}>
              <img
                src={data}
                alt={`img-swiper-${index}`}
                className="img-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default SwiperHotel;
