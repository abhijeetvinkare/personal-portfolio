import React from "react";
import "./Testimonials.css";
import "swiper/swiper-bundle.css"; // Import the bundled CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <section className="testimonials section">
      <h2 className="section-title" data-heading="My clients say">
        Testimonials
      </h2>
      <div className="testimonials-container container swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          style={{cursor:"pointer"}}
        >
          <SwiperSlide>
            <div className="testimonial-card swiper-slide">
              <div className="testimonial-quote">
                <p>"</p>
              </div>
              <p className="testimonial-description">loram epsilon</p>
              <h3 className="testimonial-date">March 27, 2020</h3>
              <div className="testimonial-profile">
                <img src="" alt="" />
                <div className="testimonial-profile-data">
                  <span className="testimonial-profile-name">asd</span>
                  <span className="testimonial-profile-detail">Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card swiper-slide">
              <div className="testimonial-quote">
                <p>"</p>
              </div>
              <p className="testimonial-description">loram epsilon</p>
              <h3 className="testimonial-date">March 27, 2020</h3>
              <div className="testimonial-profile">
                <img src="" alt="" />
                <div className="testimonial-profile-data">
                  <span className="testimonial-profile-name">qwe</span>
                  <span className="testimonial-profile-detail">Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card swiper-slide">
              <div className="testimonial-quote">
                <p>"</p>
              </div>
              <p className="testimonial-description">loram epsilon</p>
              <h3 className="testimonial-date">March 27, 2020</h3>
              <div className="testimonial-profile">
                <img src="" alt="" />
                <div className="testimonial-profile-data">
                  <span className="testimonial-profile-name">zxcc</span>
                  <span className="testimonial-profile-detail">Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
