import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  function toptopage() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="section footer-main">
    <footer>
      <div className="footer-heading-div">
      <Fade big cascade duration={2000} delay={200} ease="ease"><h1 className="footer-h1">Abhijeet Vinkare</h1></Fade>
      <Fade big cascade duration={2000} delay={400} ease="ease"><span className="footer-span">Full Stack Web Developer</span></Fade>
      </div>
      <Fade big cascade duration={2000} delay={200} ease="ease">
      <div className="footer-nav-main">
        <div className="footter-nav-div">
          <ul className="footer-nav-list">
            <li className="footer-li">
              <a onClick={toptopage} className="footer-navlink" >
                Home
              </a>
            </li>
            <li className="footer-li">
              <a
                className="footer-navlink"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="footer-li">
              <a
                className="footer-navlink"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="footer-li">
              <a
                className="footer-navlink"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="footer-li">
              <a
                className="footer-navlink"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="footer-li">
              <a
                className="footer-navlink"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      </Fade>
      <div className="footer-social-div-main">
      <div className="footer-social-div">
        <Fade duration={3000} delay={700} ease="ease" bottom> 
        <a
          href="https://twitter.com/karanvinkare"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <span>Twitter</span>
        </a>
        </Fade>
        <Fade duration={3000} delay={600} ease="ease" bottom>
        <a
          href="https://www.instagram.com/__abhijeet__vinkare/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <span>Instagram</span>
        </a>
        </Fade>
        <Fade duration={3000} delay={450} ease="ease" bottom>
        <a
          href="https://github.com/abhijeetvinkare"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <span>Github</span>
        </a>
        </Fade>
        <Fade duration={3000} delay={300} ease="ease" bottom>
        <a
          href="https://www.linkedin.com/in/abhijeet-vinkare-2956a61ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <span>Linkedin</span>
        </a>
        </Fade>
      </div>
      </div>
      <Fade big cascade duration={2000} delay={400} ease="ease">
      <div className="copyright-div">
        <p className="copyright-para">
          Copyright ©{year} All rights reserved | Made with
          <span className="footer-love-icon"> ❤ </span> by Abhijeet_Vinkare
        </p>
      </div>
      </Fade>
    </footer>
    </section>
  );
}

export default Footer;
