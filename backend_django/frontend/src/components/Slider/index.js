// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default ({ slides = [], ...props }) => {
  return (
    <Swiper
      {...props}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides?.map((slide, idx) => (
        <SwiperSlide key={idx}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
