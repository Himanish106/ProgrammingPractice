import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import img1 from "../../Images/home1.jpg";
import img2 from "../../Images/home2.jpg";
import img3 from "../../Images/home3.jpg";
import img4 from "../../Images/home4.jpg";
import img5 from "../../Images/home5.jpg";
import img6 from "../../Images/home6.jpg";

function MySwiper({ headingRef }) {
  return (
    <section className="container">
      <h1 className="heading" id="heading" ref={headingRef}>
        Captured <span className="heading-imp">Moments</span> Collective
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img1} alt="img1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img1"></img>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default MySwiper;
