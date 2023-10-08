import React, { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Work.css";
import coinwatcherImg from "../../assets/images/Work/3.png";
import studentrecordImg from "../../assets/images/Work/Untitledsd.png";
import planthealthImg from "../../assets/images/Work/preview1.png";
import { useState } from "react";
import mixitup from "mixitup"; 

function Work() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupImgSrc, setPopupImgSrc] = useState("");

  const togglePortfolioPopup = () => {
    setIsOpen(!isOpen);
  };

  const portfolioItemDetails = (portfolioItem) => {
    const imgSrc = portfolioItem.querySelector(".work-img").src;
    setPopupImgSrc(imgSrc);
  };


  const workContainerRef = useRef(null);

  // Initialize MixItUp when the component mounts
  useEffect(() => {
    const mixer = mixitup(workContainerRef.current, {
      selectors: {
        target: ".work-card", // Your portfolio item selector
      },
      animation:{
        duration:300
      }
    });

    return () => {
      // Destroy the MixItUp instance when the component unmounts
      mixer.destroy();
    };
  }, []);



  return (
    <>
      <section className="work section" id="portfolio">
        <h2 data-heading="My Portfolio" className="section-title">
          Recent Works
        </h2>
        <div className="work-filters">
          <span className="work-item active-work" data-filter="all">All</span>
          <span className="work-item" data-filter=".web">Web</span>
          <span className="work-item" data-filter=".mobile">Mobile</span>
        </div>
        <div className="work-container container grid" ref={workContainerRef}>

          <div className="work-card mix web">
            <img src={coinwatcherImg} alt="" className="work-img" />
            <h3 className="work-title">Web Design</h3>
            <span className="work-button" onClick={togglePortfolioPopup}>
              Demo
              <AiOutlineArrowRight className="work-button-icon" />
            </span>
            <div className="portfolio-item-details">
              <h3 className="details-title">App for Technology and Services</h3>
              <p className="details-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                quis repellat error mollitia voluptas dolorum obcaecati, quidem
                magnam tempora rerum, dolore numquam? Architecto molestiae
                blanditiis voluptatum assumenda, nemo, quibusdam, earum veniam
                labore recusandae ipsum vero!
              </p>
              <ul className="details-info">
                <li>
                  Created - <span>4 Dec 2020</span>
                </li>
                <li>
                  Technologies - <span>HTML, CSS, Js</span>
                </li>
                <li>
                  Role - <span>Full Stack</span>
                </li>
                <li>
                  Live Site -{" "}
                  <span>
                    <a href="www.google.com"></a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="work-card mix web">
            <img src={studentrecordImg} alt="" className="work-img" />
            <h3 className="work-title">Web Design</h3>
            <span className="work-button" onClick={togglePortfolioPopup}>
              Demo
              <AiOutlineArrowRight className="work-button-icon" />
            </span>
            <div className="portfolio-item-details">
              <h3 className="details-title">App for Technology and Services</h3>
              <p className="details-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                quis repellat error mollitia voluptas dolorum obcaecati, quidem
                magnam tempora rerum, dolore numquam? Architecto molestiae
                blanditiis voluptatum assumenda, nemo, quibusdam, earum veniam
                labore recusandae ipsum vero!
              </p>
              <ul className="details-info">
                <li>
                  Created - <span>4 Dec 2020</span>
                </li>
                <li>
                  Technologies - <span>HTML, CSS, Js</span>
                </li>
                <li>
                  Role - <span>Full Stack</span>
                </li>
                <li>
                  Live Site -{" "}
                  <span>
                    <a href="www.google.com"></a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="work-card mix mobile">
            <img src={planthealthImg} alt="" className="work-img" />
            <h3 className="work-title">Web Design</h3>
            <span className="work-button" onClick={togglePortfolioPopup}>
              Demo
              <AiOutlineArrowRight className="work-button-icon" />
            </span>
            <div className="portfolio-item-details">
              <h3 className="details-title">App for Technology and Services</h3>
              <p className="details-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                quis repellat error mollitia voluptas dolorum obcaecati, quidem
                magnam tempora rerum, dolore numquam? Architecto molestiae
                blanditiis voluptatum assumenda, nemo, quibusdam, earum veniam
                labore recusandae ipsum vero!
              </p>
              <ul className="details-info">
                <li>
                  Created - <span>4 Dec 2020</span>
                </li>
                <li>
                  Technologies - <span>HTML, CSS, Js</span>
                </li>
                <li>
                  Role - <span>Full Stack</span>
                </li>
                <li>
                  Live Site -{" "}
                  <span>
                    <a href="www.google.com"></a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {isOpen && (
        <div className="portfolio-popup">
          <div className="portfolio-popup-inner">
            <div className="portfolio-popup-content grid">
              <span
                className="portfolio-popup-close"
                onClick={togglePortfolioPopup}
              >
                *
              </span>
              <div className="pp-thumbnail">
                <img src={popupImgSrc} alt="" className="portfolio-popup-img" />
              </div>
              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">
                  Featured - <span>Design</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">
                    App for Technology and Services
                  </h3>
                  <p className="details-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Non quis repellat error mollitia voluptas dolorum obcaecati,
                    quidem magnam tempora rerum, dolore numquam? Architecto
                    molestiae blanditiis voluptatum assumenda, nemo, quibusdam,
                    earum veniam labore recusandae ipsum vero!
                  </p>
                  <ul className="details-info">
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      Technologies - <span>HTML, CSS, Js</span>
                    </li>
                    <li>
                      Role - <span>Full Stack</span>
                    </li>
                    <li>
                      Live Site -{" "}
                      <span>
                        <a href="www.google.com"></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Work;
