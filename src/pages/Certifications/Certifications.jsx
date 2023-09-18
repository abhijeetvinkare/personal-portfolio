import React from "react";
import "./Certifications.css";
import "swiper/swiper-bundle.css"; // Import the bundled CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ethichal_hacking_img from "../../assets/images/certifications/ethical-hacking.jpg";
import become_swd_img from "../../assets/images/certifications/become-swd.png";
import certificateImg3 from "../../assets/images/certifications/Abhijeet Vinkare.jpg";
import certificateImg4 from "../../assets/images/certifications/Cisco Introduction to -certificate_2.jpg";
import certificateImg5 from "../../assets/images/certifications/Coursera Computer Vision Basic.jpg";
import certificateImg6 from "../../assets/images/certifications/Coursera G62K4ZZWKVYS.jpg";
import certificateImg7 from "../../assets/images/certifications/Coursera J5UUZJWFCPZ3.jpg"; 
import certificateImg8 from "../../assets/images/certifications/Coursera L7KTMKN3ZKGP.jpg"; 
import certificateImg9 from "../../assets/images/certifications/Coursera The Science of Success.jpg"; 
import certificateImg10 from "../../assets/images/certifications/TCS.jpg"; 
import certificateImg11 from "../../assets/images/certifications/certificate.jpg";
import certificateImg12 from "../../assets/images/certifications/0000.jpg";
import certificateImg13 from "../../assets/images/certifications/0001.jpg";

function Certifications() {
  const certificationsData = [
    { image: ethichal_hacking_img },
    { image: become_swd_img },
    { image: certificateImg12 },
    { image: certificateImg3 },
    { image: certificateImg4 },
    { image: certificateImg5 },
    { image: certificateImg6 },
    { image: certificateImg13 },
    { image: certificateImg7 },
    { image: certificateImg8 },
    { image: certificateImg9 },
    { image: certificateImg10 },
    { image: certificateImg11 },
  ];
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
          style={{ cursor: "pointer" }}
        >
          {certificationsData.map((certification, index) => (
            <SwiperSlide key={index}>
              <div className="certification-card swiper-slide">
                <img className="cer-img" src={certification.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Certifications;
