import React, { useEffect } from "react";
import "./Contact.css";
import { AiOutlineSend, AiOutlineArrowRight } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in touch ">
        Contact Me
      </h2>
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <SiGmail className="contact-card-icon" />
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                abhijeetvinkare@gmail.com
              </span>
              <span className="contact-button">
                Write me <AiOutlineArrowRight className="contact-button-icon" />
              </span>
            </div>

            <div className="contact-card">
              <BsWhatsapp className="contact-card-icon" />
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+91 9284312533</span>
              <span className="contact-button">
                Text me <AiOutlineArrowRight className="contact-button-icon" />
              </span>
            </div>

          </div>
        </div>

        <div className="contact-content">
          <form action="" className="contact-form">
            <div className="input-container">
              <input type="text" className="input" />
              <label htmlFor="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea name="" id="" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <button className="button">
              <AiOutlineSend className="button-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
