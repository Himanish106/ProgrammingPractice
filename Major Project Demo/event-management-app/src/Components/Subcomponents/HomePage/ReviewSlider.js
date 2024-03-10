import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import imgReview1 from "../../Images/img1.jpg";
import imgReview2 from "../../Images/img2.jpg";
import imgReview3 from "../../Images/img3.jpg";
import imgReview4 from "../../Images/img4.jpg";
import { Autoplay } from "swiper/modules";
const ReviewSlider = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        client's <span className="col">review</span>
      </h1>
      <div className="review-slider swiper-container">
        <Swiper
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide box">
                <i className="fas fa-quote-right" />
                <div className="user">
                  <img src={imgReview1} />
                  <div className="user-info">
                    <h3>nayana</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <i className="fas fa-quote-right" />
                <div className="user">
                  <img src={imgReview2}/>
                  <div className="user-info">
                    <h3>lisa</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <i className="fas fa-quote-right" />
                <div className="user">
                  <img src={imgReview3}/>
                  <div className="user-info">
                    <h3>mary</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <i className="fas fa-quote-right" />
                <div className="user">
                  <img src={imgReview4}/>
                  <div className="user-info">
                    <h3>rose</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default ReviewSlider;
