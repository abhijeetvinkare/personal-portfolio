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
import certificateImg9 from "../../assets/images/certifications/hackerrank_python.png";
import certificateImg10 from "../../assets/images/certifications/TCS.jpg";
import certificateImg11 from "../../assets/images/certifications/certificate.jpg";
import certificateImg12 from "../../assets/images/certifications/0000.jpg";
import certificateImg13 from "../../assets/images/certifications/0001.jpg";

function Certifications() {
  const certificationsData = [
    {
      image: ethichal_hacking_img,
      url: "https://drive.google.com/file/d/1E75QH7nyr1uq8StytMkDKH70b_AdKyRc/view?usp=sharing",
    },
    {
      image: become_swd_img,
      url: "https://www.linkedin.com/learning/certificates/aef981c9cffc394e2efa1f1fb61bf9ecd9ee43f97960bd8d7016593ef89c8cb6?trk=backfilled_certificate",
    },
    {
      image: certificateImg12,
      url: "https://drive.google.com/file/d/1-Q0dbYLB_RIPd-aO01SlnkfZCo0NsAYG/view?usp=sharing",
    },
    {
      image: certificateImg3,
      url: "https://verify.mygreatlearning.com/verify/NOYCPHVX",
    },
    {
      image: certificateImg4,
      url: "https://drive.google.com/file/d/1fp9_Wv-froEbDNbobmOrhXPGw6x7RK9-/view?usp=sharing",
    },
    {
      image: certificateImg5,
      url: "https://drive.google.com/file/d/1_M_Xv8ws10d0ta-LtKbSgutWHGgDPhCD/view?usp=sharing",
    },
    { image: certificateImg6, url: "https://coursera.org/verify/G62K4ZZWKVYS" },
    {
      image: certificateImg13,
      url: "https://www.futurelearn.com/certificates/slgdr7u",
    },
    {
      image: certificateImg7,
      url: "https://www.coursera.org/account/accomplishments/verify/J5UUZJWFCPZ3",
    },
    { image: certificateImg8, url: "https://coursera.org/verify/L7KTMKN3ZKGP" },
    {
      image: certificateImg9,
      url: "https://drive.google.com/file/d/1fyCzr3zvjxMQxDx4DLuUumjTvY6zKbOQ/view?usp=sharing",
    },
    {
      image: certificateImg10,
      url: "https://drive.google.com/file/d/1K0CAwiDTqiLXpAX4IjbiG315rgfKUAYJ/view?usp=sharing",
    },
    {
      image: certificateImg11,
      url: "https://drive.google.com/file/d/1PJg48uzf_yWsikEOIw2L1HEFUHQh2Om7/view?usp=sharing",
    },
  ];

  const handleCertificationClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <section className="certifications section">
      <h2 className="section-title" data-heading="My Intro">
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
            <SwiperSlide
              key={index}
              onClick={() => handleCertificationClick(certification.url)}
            >
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
