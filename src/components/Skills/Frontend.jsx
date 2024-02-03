import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";



function Frontend() {
  return (
    <div className="skills__content skilltent">
      <h5 className="skills__title">My Toolbox & Things I Can Do</h5>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <IoLogoHtml5 />
              </h3>
              <span className="skills__name">HTML5</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <IoLogoCss3 />
              </h3>
              <span className="skills__name">CSS3</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <FaBootstrap />
              </h3>
              <span className="skills__name">Bootsrap</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
            
          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <SiTailwindcss />
              </h3>
              <span className="skills__name">Tailwind</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <TbBrandJavascript />
              </h3>
              <span className="skills__name">Javascript</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <FaReact />
              </h3>
              <span className="skills__name">React</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Frontend;
