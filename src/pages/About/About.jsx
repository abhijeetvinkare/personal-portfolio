import React, { useEffect, useState } from "react";
import "./About.css";
import aboutImg from "../../assets/images/about.png";
import { AiOutlineSend } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { Fade, Slide, Zoom } from 'react-reveal';

function About() {

  const qualificationItems = [
    {
      title: "Swami Ramanand Teerth Marathwada University (Nanded, IN)",
      degree: "Master of Computer Applications (MCA)",
      cgpa: "8.8",
      grade: "",
      date: "2021-2023",
    },
    {
      title: "S.S.B.'S Institute of Technology & Management (Nanded, IN)",
      degree: "Bachelor of Computer Applications (BCA)",
      cgpa: "8.6",
      grade: "",
      date: "2017-2020",
    },
    {
      title: "Deendayal Junior College (Nanded, IN)",
      degree: "Higher Secondary Certificate (Science)",
      cgpa: "",
      grade: "Grade : A",
      date: "2015-2017",
    },
  ];


  const isMobile = window.innerWidth <= 1024;

  return (
    <>
      <section className="about section" id="about">
      <Fade big cascade duration={2000} delay={200} ease="ease"><h2 className="section-title" data-heading="My Intro">About Me</h2></Fade>
        <div className="about-container container grid" id="about-div">
        <Fade duration={2000} delay={200} ease="ease" left={isMobile} bottom={!isMobile} ><img src={aboutImg} alt="" className="about-img" /></Fade>
        <Fade duration={2000} delay={200} ease="ease" big={isMobile} top={!isMobile} ><div className="about-data">
            <h3 className="about-heading">
              Hi, I'm Abhijeet Vinkare, Based in India
            </h3>
            <p className="about-description">
              A passionate{" "}
              <span className="about-des-span">Full Stack Web Developer</span>{" "}
              with a focus on the MERN (MongoDB, Express, React, Node.js) stack.
              I thrive on crafting dynamic & user-friendly web applications that
              deliver exceptional experiences. I hold a{" "}
              <span className="about-des-span">
                Master's degree in Computer Application (MCA){" "}
              </span>
              from Swami Ramanand Teerth Marathwada University.
            </p>
            <a href="#contact" className="button">
              <AiOutlineSend className="button-icon" /> Contact Me
            </a>
          </div>
          </Fade>
        </div>
      </section>
      <section className="qualification section">
      <Fade big cascade duration={2000} delay={200} ease="ease"><h2 className="section-title" data-heading="My Intro">Qualification</h2></Fade>
        <div className="qualification-container container grid">
          <div className="education">
          <Fade duration={2000} delay={400} ease="ease">
            <h3 className="qualification-title">
              <FaGraduationCap fontSize={35} style={{ marginRight: "10px" }} />{" "}
              Education
            </h3>
            </Fade >
            <div className="timeline">
              {qualificationItems.map((data, index) => (
                <Fade duration={3000} delay={400} ease="ease-in-out">
                <div className="timeline-item" key={index}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-title">
                  {data.title}
                  </h3>
                  <p className="timeline-text">
                  {data.degree}
                  </p>
                  {index === qualificationItems.length - 1 ? (
                    <p className="timeline-text-cgpa">{data.grade}</p>
                  ) : (
                    <p className="timeline-text-cgpa">CGPA : {data.cgpa}</p>
                  )}
                  <span className="timeline-date">{data.date}</span>
                </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
