import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsDownload,
} from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import homeImage from "../../assets/images/ddd.png";
import resume from "../../assets/PDF/resume.pdf";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { Fade, Slide, Zoom } from "react-reveal";
//loading Spinner
import { Backdrop } from '@mui/material';
import HashLoader from "react-spinners/HashLoader";

function Home() {
  //page loading
  const [isPageLoading, setIsPageLoading] = useState(false);

  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <Fade duration={2000} delay={200} ease="ease" top>
          <div className="home-social">
            <span className="home-social-follow">Follow Me</span>
            <div className="home-social-links">
              <a
                href="https://www.linkedin.com/in/abhijeet-vinkare-2956a61ab/"
                target="_blank"
                className="home-social-link"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://twitter.com/karanvinkare"
                target="_blank"
                className="home-social-link"
              >
                <FaSquareXTwitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/karanvinkare"
                target="_blank"
                className="home-social-link"
              >
                <ImFacebook2 size={18} />
              </a>
              <a
                href="https://www.instagram.com/__abhijeet__vinkare/"
                target="_blank"
                className="home-social-link"
              >
                <FaInstagramSquare size={21} />
              </a>
            </div>
          </div>
        </Fade>
        <img src={homeImage} alt="" className="home-img" />
        <div className="home-data">
          <Fade big duration={4000} delay={350} ease="ease">
            <h1 className="home-title-name">Hi, I'am Abhijeet Vinkare</h1>{" "}
          </Fade>
          <Fade big duration={4000} delay={550} ease="ease">
            <h3 className="home-subtitle">
              And I'm a{" "}
              <Typed
                strings={[
                  "Full Stack Web Developer 💻✨",
                  "App Developer 📱✨",
                  "Guitarist 🎸✨",
                  "Audio Engineer - Autodidact 🔊✨",
                  "Freelancer ✨",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="home-subtitle-typed"
              />
            </h3>
          </Fade>
          <Fade big duration={4000} delay={750} ease="ease">
            <p className="home-description">
              As a developer, I craft digital experiences that bring ideas to
              life through code and design, shaping the future of technology.
            </p>
          </Fade>
          <Fade big duration={4000} delay={850} ease="ease">
            <a href="#about" className="button btn-more">
              <AiOutlineUser className="button-icon" /> More About Me
            </a>
          </Fade>
          <Fade big duration={4000} delay={950} ease="ease">
            <a href={resume} download className="btn-resume">
              <BsDownload className="button-icon btn-resume-icon" /> Resume
            </a>
          </Fade>
        </div>

        <Fade duration={2000} delay={200} ease="ease" bottom>
          <div className="my-info">
            <div className="info-item">
              <BsInstagram className="info-icon" />
              <div>
                <h3 className="info-title">Instagram</h3>
                <span className="info-subtitle">__abhijeet__vinkare</span>
              </div>
            </div>
            <div className="info-item">
              <BsWhatsapp className="info-icon" />
              <div>
                <h3 className="info-title">Whatsapp</h3>
                <span className="info-subtitle">+91 &nbsp;9284312533</span>
              </div>
            </div>
            <div className="info-item">
              <SiGmail className="info-icon" />
              <div>
                <h3 className="info-title">Email</h3>
                <span className="info-subtitle">abhijeetvinkare@gmail.com</span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div>
        {isPageLoading ? (
          <Backdrop
            sx={{
              color: "#ffffff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "rgb(0,0,0,0.8)",
            }}
            open
          >
            <HashLoader color="#FF2C3F" />
          </Backdrop>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Home;
