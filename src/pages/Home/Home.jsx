import React from "react";
import "./Home.css";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineUser} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import homeImage from "../../assets/images/home-img.png";
import Typed from "react-typed";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <div className="home-social-links">
            <a href="" target="_blank" className="home-social-link">
              <BsLinkedin />
            </a>
            <a href="" target="_blank" className="home-social-link">
              <FaSquareXTwitter size={20} />
            </a>
            <a href="" target="_blank" className="home-social-link">
              <ImFacebook2 size={18}/>
            </a>
            <a href="" target="_blank" className="home-social-link">
            <FaInstagramSquare size={21}/>
            </a>
          </div>
        </div>
        <img src={homeImage} alt="" className="home-img" />
        <div className="home-data">
          <h1 className="home-title-name">Hi, I'am Abhijeet Vinkare</h1>
          <h3 className="home-subtitle">
            And I'm a{" "}
            <Typed
              strings={[
                "Full Stack Web Developer 💻✨",
                "App Developer 📱✨",
                "Guitarist 🎸✨",
                "Audio Engineer - Autodidact 🔊✨"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="home-subtitle-typed"
            />
          </h3>
          <p className="home-description">
          As a developer, I craft digital experiences that bring ideas to life through code and design, shaping the future of technology.
          </p>
          <a href="#about" className="button">
            <AiOutlineUser className="button-icon" /> More About Me
          </a>
        </div>
        <div className="my-info">
          <div className="info-item">
            <BsInstagram className="info-icon" />
            <div>
              <h3 className="info-title">Instagram</h3>
              <span className="info-subtitle">karan_vinkare</span>
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
              <span className="info-subtitle">karan_vinkare@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
