import React, { useState, useEffect, useRef, useContext } from "react";
import "./Sidebar.css";
import { FiShare2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logoDark from "../../assets/images/amono.png";
import logoLight from "../../assets/images/amonoblack.png";
import { RWebShare } from "react-web-share";
import { Fade, Slide, Zoom } from "react-reveal";
import scrollLock from "scroll-lock";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-toggle").style.top = "32px";
    } else {
      document.getElementById("nav-toggle").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionId = section.id;
        const sectionTop = section.offsetTop - 50; // Adjust this value as needed

        if (scrollY >= sectionTop) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navMenuRef = useRef(null);

  const handleToggleClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.add("show-sidebar");
      scrollLock.disablePageScroll();
    }
  };

  const handleCloseClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove("show-sidebar");
      scrollLock.enablePageScroll();
    }
  };

  return (
    <>
      <div className="nav-toggle" id="nav-toggle" onClick={handleToggleClick}>
        <GiHamburgerMenu />
      </div>
      <aside className="sidebar" ref={navMenuRef} id="sidebar">
        <nav className="navbar">
          <div className="nav-logo">
            <Fade duration={2000} delay={200} ease="ease" left>
            <img src={logoDark} alt="Dark Logo" className="logo-img" />
              {/* {isDarkMode ? (
                <img src={logoDark} alt="Dark Logo" className="logo-img" />
              ) : (
                <img src={logoLight} alt="Light Logo" className="logo-img" />
              )} */}
            </Fade>
          </div>
          <div className="nav-menu">
            <div className="menu">
              <Fade duration={2000} delay={200} ease="ease" top>
                <ul className="nav-list">
                  <li className={`nav-item nav-item-home`}>
                    <a
                      onClick={handleCloseClick}
                      href="#home"
                      className={`nav-link ${
                        activeLink === "home" ? "active-link" : ""
                      }`}
                    >
                      Home
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a
                      onClick={handleCloseClick}
                      href="#about"
                      className={`nav-link ${
                        activeLink === "about" ? "active-link" : ""
                      }`}
                    >
                      About
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a
                      onClick={handleCloseClick}
                      href="#skills"
                      className={`nav-link ${
                        activeLink === "skills" ? "active-link" : ""
                      }`}
                    >
                      Skills
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a
                      onClick={handleCloseClick}
                      href="#services"
                      className={`nav-link ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                    >
                      Services
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a
                      onClick={handleCloseClick}
                      href="#portfolio"
                      className={`nav-link ${
                        activeLink === "portfolio" ? "active-link" : ""
                      }`}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a
                      onClick={handleCloseClick}
                      href="#contact"
                      className={`nav-link ${
                        activeLink === "contact" ? "active-link" : ""
                      }`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
          <Fade duration={2000} delay={200} ease="ease" left>
            <div className="btn-share">
              <RWebShare
                data={{
                  url: "https://abhijeetvinkare.netlify.com",
                  title: "abhijeetvinkare",
                }}
              >
                <button className="share-btn">
                  <FiShare2 className="share-icon" />
                </button>
              </RWebShare>
            </div>
          </Fade>

          <div className="nav-close" id="nav-close" onClick={handleCloseClick}>
            <AiOutlineClose />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
