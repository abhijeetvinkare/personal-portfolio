import React from "react";
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

function Home() {
  const initialPosition = {
    x: "100%", // Start the element 100% to the right
  };

  const animatePosition = {
    x: "0", // Move the element back to its initial position
  };

  const transition = {
    duration: 3, // Increase duration for a smoother animation
    type: "spring",
    stiffness: 50, // Adjust stiffness for a smoother motion
    damping: 10, // Adjust damping for a smoother spring effect
  };

  return (
    <section className="home" id="home">
      <div className="home-container container grid">
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
        <img src={homeImage} alt="" className="home-img" />
        <motion.div
          initial={initialPosition}
          animate={animatePosition}
          transition={transition}
          className="home-data"
        >
          <h1 className="home-title-name">Hi, I'am Abhijeet Vinkare</h1>
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
          <p className="home-description">
            As a developer, I craft digital experiences that bring ideas to life
            through code and design, shaping the future of technology.
          </p>
          <a href="#about" className="button btn-more">
            <AiOutlineUser className="button-icon" /> More About Me
          </a>
          <a href={resume} download className="button btn-resume">
            <BsDownload className="button-icon btn-resume-icon" /> Resume
          </a>
        </motion.div>
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
      </div>
    </section>
  );
}

export default Home;
