import React from "react";
import "../../Styles/Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__sections">
        <h1 className="section__title">Skills & Tools</h1>
        <span className="section__subtitle">
          The Skills, tools and technologies i use to bring your products to
          life:
        </span>
        <div className="skills__container container grid">
          <Frontend />
          <Backend />
        </div>

        <div className="skills__description">
          <h5 className="skills__title">Currently working on:</h5>
          <span className="section__subtitle">
            Improving my skills and understanding of vanilla Javascript and
            React.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
