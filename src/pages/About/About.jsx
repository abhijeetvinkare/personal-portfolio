import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/about.png"
import {AiOutlineSend} from "react-icons/ai"
import { FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <>
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img"/>
        <div className="about-data">
          <h3 className="about-heading">Hi, I'm Abhijeet Vinkare, Based in India</h3>
          <p className="about-description">A passionate <span className="about-des-span">Full Stack Web Developer</span> with a focus on the MERN (MongoDB, Express, React, Node.js) stack. I thrive on crafting dynamic & user-friendly web applications that deliver exceptional experiences. I hold a <span className="about-des-span">Master's degree in Computer Application (MCA) </span>from Swami Ramanand Teerth Marathwada University.</p>
          <a href="#contact" className="button"><AiOutlineSend className="button-icon" /> Contact Me</a>
        </div>
      </div>
    </section>
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <div className="qualification-container container grid">
        <div className="education">
          <h3 className="qualification-title">
            <FaGraduationCap fontSize={35} style={{marginRight:"10px"}}/> Education
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">XYZ University (sometown, NJ)</h3>
              <p className="timeline-text">BFA in Graphic Desing</p>
              <span className="timeline-date">2013-2021</span>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">XYZ University (sometown, NJ)</h3>
              <p className="timeline-text">BFA in Graphic Desing</p>
              <span className="timeline-date">2013-2021</span>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">XYZ University (sometown, NJ)</h3>
              <p className="timeline-text">BFA in Graphic Desing</p>
              <span className="timeline-date">2013-2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
