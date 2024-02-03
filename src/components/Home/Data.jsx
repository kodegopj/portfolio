import React from "react";
import "../../Styles/Home.css";
import hand from "../../assets/hand.png";
import { RiMailSendFill } from "react-icons/ri";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title handy">
        Paul John <img src={hand} alt="" className="hand" />{" "}
      </h1>
      <h3 className="home__subtitle">Junior Web Developer</h3>
      <p className="home__description">
        I'm a frontend developer, i'm very passionate and dedicated to my work,
        and i offer the best projects resulting in quality work
      </p>
      <a href="#contact" className=" hello button--flex">
        Say Hello <RiMailSendFill className="icon__hello" />
      </a>
    </div>
 
  );
}

export default Data;
