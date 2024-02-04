import React from "react";
import "../../Styles/About.css";
import Try from "../../assets/try.jpg";
import cv from "../../assets/PROFILE.pdf"
import Info from "./Info";
import { FaDownload } from "react-icons/fa6";
import img3 from "../../assets/img3.png";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={Try} alt="" className="about__img" />

        <div className="about__data">
          {/* <Info /> */}
          <p className="about__description">
            As a junior Front-End Developer, I posses an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in
            designing and maintaining responsive websites that offer a smooth
            {/* user experience. My expertise in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting edge development tools and techniques. */}
          </p>
          <a href={cv} className="button button--flex">
            Download CV <FaDownload className="about__download" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
