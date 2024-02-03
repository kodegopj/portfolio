import { RiMailSendFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import "../../Styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nscztrq",
        "template_6uinw7i",
        form.current,
        "QdEcA_YtUEX2nD4Dn"
      )
      e.target.reset()
  };

  return (
    <section className="contacts" id="contacts">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contacts__container container grid">
        <div className="contacts__content">
          <h3 className="contacts__title">Talk to me</h3>

          <div className="contacts__info">
            <div className="contacts__card">
              <RiMailSendFill className="contacts__icon" />
              <h3 className="contacts__card-title">Email</h3>
              <span className="contacts__card-data">
                pauljohncunanan5@gmail.com
              </span>

              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="contacts__button"
              >
                Write me
                <FaArrowRight className="arrow__icon" />
              </a>
            </div>

            <div className="contacts__card">
              <FaLinkedin className="contacts__icon" />
              <h3 className="contacts__card-title">linkedin</h3>
              <span className="contacts__card-data">linkedin</span>

              <a href="" className="contacts__button">
                Write me
                <FaArrowRight className="arrow__icon" />
              </a>
            </div>

            <div className="contacts__card">
              <SiMessenger className="contacts__icon" />
              <h3 className="contacts__card-title">Messenger</h3>
              <span className="contacts__card-data"></span>

              <a
                href="https://www.facebook.com/pauljohn.cunanan.14"
                className="contacts__button"
              >
                Write me
                <FaArrowRight className="arrow__icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contacts__content">
          <h3 className="contacts__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contacts__form">
            <div className="contacts__form-div">
              <label className="contacts__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contacts__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contacts__form-div">
              <label className="contacts__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contacts__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contacts__form-div contacts__form-area">
              <label className="contacts__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contacts__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className=" hello button--flex">
              Send Message <RiMailSendFill className="icon__hello" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
