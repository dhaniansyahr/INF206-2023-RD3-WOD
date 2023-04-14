import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Data Image Slide
import image1 from "../../assets/images/LandingPage/2.jpg";
import image2 from "../../assets/images/LandingPage/3.jpg";
import image3 from "../../assets/images/LandingPage/4.jpg";
import image4 from "../../assets/images/LandingPage/5.jpg";
import image5 from "../../assets/images/LandingPage/6.jpg";
import image6 from "../../assets/images/LandingPage/7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImageSlider() {
  return (
    <div className="flex">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image1}
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image2}
            alt="image2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image3}
            alt="image3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image4}
            alt="image4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image5}
            alt="image5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-screen h-[40rem]"
            src={image6}
            alt="image6"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
