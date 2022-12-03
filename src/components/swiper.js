// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import LandingPage from "../Pages/landingPage";



// import required modules

export default function SwiperView () {
  return (
    <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    autoplay={{delay: 5000}}
    pagination={{
      clickable: true,
    }}
    navigation={true}
  >
    <SwiperSlide><LandingPage/></SwiperSlide>
    <SwiperSlide><LandingPage/></SwiperSlide>
    <SwiperSlide><LandingPage/></SwiperSlide>
  </Swiper>
  );
};