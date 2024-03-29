import React from "react";
import "../../Styles/Home.css";
import hand from "../../assets/hand.png";
import img2 from "../../assets/img2.png";
import { RiMailSendFill } from "react-icons/ri";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title handy">
        Paul John <img src={hand} alt="" className="hand" />{" "}
      </h1>
      <h3 className="home__subtitle">Junior Web Developer</h3>
      <p className="home__description">
        I'm a Junior Web developer, I bring a strong foundation in HTML, CSS and
        Javasctipt, i'm very passionate and dedicated to my project. I am
        excited about leveraging my coding skills to create a user-friendly and
        visually appealing websites resulting in quality work.
      </p>
      <a href="#contacts" className=" hello button--flex">
        Hello <RiMailSendFill className="icon__hello" />
      </a>
    </div>
  );
}

export default Data;
