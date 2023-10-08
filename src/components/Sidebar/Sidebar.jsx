import React from "react";
import "./Sidebar.css";
import {FiShare2} from "react-icons/fi"
import logo from "../../assets/images/amono.png"

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo-img"/>
        </div>
        <div className="nav-menu">
            <div className="menu">
                <ul className="nav-list">
                    <li className="nav-item nav-item-home"> 
                        <a href="#home" className="nav-link active-link">Home</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="btn-share">
          <FiShare2 className="share-icon"/>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
