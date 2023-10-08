import React from "react";
import "./Services.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { ImMobile } from "react-icons/im";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 data-heading="Services" className="section-title">
        What I Offer
      </h2>
      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <BsCodeSlash className="services-icon" />
            <h3 className="services-title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services-button">
            View More <AiOutlineArrowRight className="services-button-icon" />
          </span>
{/* 
          <div className="services-model">
            <div className="services-model-content">
              <i></i>
              <h3 className="services-model-title">Web Development</h3>
              <p className="services-model-description">Services with more than 3 years of experience.</p>
            <ul className="services-model-services grid">
              <li className="services-model-service">
                <i></i>
                <p className="services-model-info"></p>
              </li>
            </ul>
            </div>
          </div> */}
        </div>

        <div className="services-content">
          <div>
            <ImMobile className="services-icon" />
            <h3 className="services-title">
              App <br /> Development
            </h3>
          </div>
          <span className="services-button">
            View More <AiOutlineArrowRight className="services-button-icon" />
          </span>
        </div>

        <div className="services-content">
          <div>
            <BiEdit className="services-icon" />
            <h3 className="services-title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services-button">
            View More <AiOutlineArrowRight className="services-button-icon" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;
