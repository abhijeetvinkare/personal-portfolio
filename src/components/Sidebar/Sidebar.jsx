import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import { FiShare2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/amono.png";
import { RWebShare } from "react-web-share";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");

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
    }
  };

  const handleCloseClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove("show-sidebar");
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
            <img src={logo} alt="logo" className="logo-img" />
          </div>
          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                <li className={`nav-item nav-item-home`}>
                  <a
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
                    href="#contact"
                    className={`nav-link ${
                      activeLink === "contact" ? "active-link" : ""
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-share">
            <RWebShare
              data={{
                url: "https://abhijeetvinkare.netlify.com",
                title: "abhijeetvinkare",
              }}
            >
              <button className="share-btn"><FiShare2 className="share-icon" /></button>
            </RWebShare>
            {" "}
          </div>

          <div className="nav-close" id="nav-close" onClick={handleCloseClick}>
            <AiOutlineClose />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
