import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { TbSettingsCog } from "react-icons/tb";

function Backend() {
  return (
    <div className="skills__content">
      <h5 className="skills__title">My Toolbox & Things I Can Do</h5>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <FaGithub />
              </h3>
              <span className="skills__name">Github</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <FaGitAlt />
              </h3>
              <span className="skills__name">Git</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <SiMongodb />
              </h3>
              <span className="skills__name">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
        <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <FaNodeJs />
              </h3>
              <span className="skills__name">NodeJs</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <SiFirebase />
              </h3>
              <span className="skills__name">Firebase</span>
            </div>
          </div>

          <div className="skills__data">
            <HiBadgeCheck className="badge"/>

            <div>
              <h3 className="skills__icon">
                <TbBrandVscode />
              </h3>
              <span className="skills__name">VSCode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
