import React, { useEffect, useState } from "react";
import "./Contact.css";
import { AiOutlineSend, AiOutlineArrowRight } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    await emailjs
      .send(
        "service_2kqdmhv",
        "template_cm4g4jr",
        templateParams,
        "40uYG0Vr5Dn_MB1QL"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Thanks! Message received.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something Went Wrong!");
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <section className="contact section" id="contact">
     <Fade big cascade duration={2000} delay={200} ease="ease"> <h2 className="section-title" data-heading="Get in touch ">
        Contact Me
      </h2>
      </Fade>
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">

          <Fade duration={3000} delay={200} ease="ease">
            <div className="contact-card">
              <SiGmail className="contact-card-icon" />
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                abhijeetvinkare@gmail.com
              </span>
              <span className="contact-button">
              <a className="contanct-text-me-hyperlinks" href="mailto:abhijeetvinkare@gmail.com"> Write me <AiOutlineArrowRight className="contact-button-icon" /></a>
              </span>
            </div>
            </Fade>
            <Fade duration={3000} delay={400} ease="ease">
            <div className="contact-card">
              <BsWhatsapp className="contact-card-icon" />
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+91 9284312533</span>
              <span className="contact-button">
                <a className="contanct-text-me-hyperlinks" href="https://wa.me/+919284312533">
                  {" "}
                  Text me{" "}
                  <AiOutlineArrowRight className="contact-button-icon" />
                </a>
              </span>
            </div>
            </Fade>
          </div>
        </div>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
          <Fade duration={3000} delay={200} ease="ease">
            <div className="input-container">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <label htmlFor="">Name</label>
              <span>Name</span>
            </div>
            </Fade>
            <Fade duration={3000} delay={400} ease="ease">
            <div className="input-container">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            </Fade>
            <Fade duration={3000} delay={600} ease="ease">
            <div className="input-container textarea">
              <textarea
                name=""
                id=""
                className="input"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            </Fade>
            <Fade duration={3000} delay={800} ease="ease">
            <button className="button">
              <AiOutlineSend className="button-icon" />
              Send Message
            </button>
            </Fade>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </section>
  );
}

export default Contact;
