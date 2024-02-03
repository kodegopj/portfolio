import React from "react";
import movie from "../../assets/movie.png";
import dashboard from "../../assets/dashboard.png";
import centercode from "../../assets/centercode.png";
import { FaArrowRight } from "react-icons/fa";
import "../../Styles/Projects.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="container section__border">
        <div className="projects__container">
          <div className="projescts__squares">
            {/* ============ Project 1 ============  */}
            <div className="projects__square">
              <img
                src={dashboard}
                alt="projects image"
                className="projects__img"
              />

              <div>
                <h1 className="projects__title">Ecom-Dashboard</h1>
                <p className="projects__subtitle">
                  It is an Ecommerce Dashboard, an automated and easy to use
                  marketing reporting tool created to help marketers save hours
                  of work and create a beautiful reports in the blink of an eye.
                  See how Ecommerce Dashboard can help your business by
                  selecting the category that best fits you.
                </p>

                <div className="projects__demo">
                  <a
                    href="https://ecommerce-dashboard-kwz4.onrender.com/"
                    className="projects__buttons"
                  >
                    View demo
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            {/* ============ Project 2 ============  */}
            <div className="projects__square">
              <img
                src={centercode}
                alt="projects image"
                className="projects__img"
              />

              <div>
                <h1 className="projects__title">Center Code</h1>
                <p className="projects__subtitle">
                  It is an Ecommerce Dashboard, an automated and easy to use
                  marketing reporting tool created to help marketers save hours
                  of work and create a beautiful reports in the blink of an eye.
                  See how Ecommerce Dashboard can help your business by
                  selecting the category that best fits you.
                </p>

                <div className="projects__demo">
                  <a
                    href="https://mp1-woad.vercel.app/"
                    className="projects__buttons"
                  >
                    View demo
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            {/* ============ Project 3 ============  */}
            <div className="projects__square">
              <img src={movie} alt="projects image" className="projects__img" />

              <div>
                <h1 className="projects__title">Disney Movie Clone</h1>
                <p className="projects__subtitle">
                  It is a Disney Movie clone, it is a free movie app that you
                  can watch movies online fo free.
                </p>

                <div className="projects__demo">
                  <a
                    href="https://movieapp-five-iota.vercel.app/"
                    className="projects__buttons"
                  >
                    View demo
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
