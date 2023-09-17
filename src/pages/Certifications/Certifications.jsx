import React from "react";
import "./Certifications.css";
import "swiper/swiper-bundle.css"; // Import the bundled CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Certifications() {
  return (
    <section className="certifications section">
      <h2 className="section-title" data-heading="My clients say">
      My Certifications
      </h2>
      <div className="certifications-container container swiper">
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
            <div className="certification-card swiper-slide">
              <div className="certification-quote">
                <p>"</p>
              </div>
              <p className="certification-description">loram epsilon</p>
              <h3 className="certification-date">March 27, 2020</h3>
              <div className="certification-profile">
                <img src="" alt="" />
                <div className="certification-profile-data">
                  <span className="certification-profile-name">asd</span>
                  <span className="certification-profile-detail">Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certification-card swiper-slide">
              <div className="certification-quote">
                <p>"</p>
              </div>
              <p className="certification-description">loram epsilon</p>
              <h3 className="certification-date">March 27, 2020</h3>
              <div className="certification-profile">
                <img src="" alt="" />
                <div className="certification-profile-data">
                  <span className="certification-profile-name">qwe</span>
                  <span className="certification-profile-detail">Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Certifications;
