import React, { useEffect, useRef } from "react";
import { AiOutlineArrowRight, AiOutlineGithub} from "react-icons/ai";
import "./Work.css";
import coinwatcherImg from "../../assets/images/Work/3.png";
import studentrecordImg from "../../assets/images/Work/Untitledsd.png";
import planthealthImg from "../../assets/images/Work/preview1.png";
import { useState } from "react";
import mixitup from "mixitup";

function Work() {
  const workContainerRef = useRef(null);

  // Initialize MixItUp when the component mounts
  useEffect(() => {
    const mixer = mixitup(workContainerRef.current, {
      selectors: {
        target: ".work-card", // Your portfolio item selector
      },
      animation: {
        duration: 300,
      },
    });

    return () => {
      // Destroy the MixItUp instance when the component unmounts
      mixer.destroy();
    };
  }, []);

  const [activeItem, setActiveItem] = useState("all");

  const handleItemClick = (filter) => {
    setActiveItem(filter);
  };

  return (
    <section className="work section" id="portfolio">
      <h2 data-heading="My Portfolio" className="section-title">
        Recent Works
      </h2>
      <div className="work-filters">
        <span
          className={`work-item ${activeItem === "all" ? "active-work" : ""}`}
          onClick={() => handleItemClick("all")}
          data-filter="all"
        >
          All
        </span>
        <span
          className={`work-item ${activeItem === "web" ? "active-work" : ""}`}
          onClick={() => handleItemClick("web")}
          data-filter=".web"
        >
          Web
        </span>
        <span
          className={`work-item ${
            activeItem === "mobile" ? "active-work" : ""
          }`}
          onClick={() => handleItemClick("mobile")}
          data-filter=".mobile"
        >
          Mobile
        </span>
      </div>
      <div className="work-container container grid" ref={workContainerRef}>
        <div className="work-card mix web">
          <img src={coinwatcherImg} alt="" className="work-img" />
          <h3 className="work-title">Coinwatchers</h3>
          <div className="links-container">
          <div>
          <a href="https://coinwatchers.netlify.app/" target="_blank">
          <span className="work-button">
            Demo
            <AiOutlineArrowRight className="work-button-icon" />
          </span>
          </a>
         </div> 
         <div>
          <a href="https://github.com/abhijeetvinkare/coinwatchers-live-cryptocurrency-prices" target="_blank">
          <span className="work-button">
            GitHub
            <AiOutlineGithub className="work-button-icon" />
          </span>
          </a>
         </div> 
        </div>
        </div>

        <div className="work-card mix web">
          <img src={studentrecordImg} alt="" className="work-img" />
          <h3 className="work-title">StudentGradeX</h3>
          <div className="links-container">
          <div>
          <a href="https://studentgradex.netlify.app/" target="_blank">
          <span className="work-button">
            Demo
            <AiOutlineArrowRight className="work-button-icon" />
          </span>
          </a>
         </div> 
         <div>
          <a href="https://github.com/abhijeetvinkare/StudentGradeX" target="_blank">
          <span className="work-button">
            GitHub
            <AiOutlineGithub className="work-button-icon" />
          </span>
          </a>
         </div> 
        </div>
        </div>

        <div className="work-card mix mobile">
          <img src={planthealthImg} alt="" className="work-img" />
          <h3 className="work-title">PlantHealthPro</h3>
          <div className="links-container">
          <div>
          <a href="https://plant-health-pro.onrender.com/" target="_blank">
          <span className="work-button">
            Demo
            <AiOutlineArrowRight className="work-button-icon" />
          </span>
          </a>
         </div> 
         <div>
          <a href="https://github.com/abhijeetvinkare/PlantHealthPro" target="_blank">
          <span className="work-button">
            GitHub
            <AiOutlineGithub className="work-button-icon" />
          </span>
          </a>
         </div> 
        </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
