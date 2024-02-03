import React from "react";
import Navbar from "../Navbar.jsx";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import "../../Styles/Home.css";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main className="main">
          <section className="home sectio" id="home">
            <div className="home__containe containe grid">
              <div className="home__content grid">
                <Social />
                <div className="home__img"></div>
                <Data />
              </div>
            </div>
          </section>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer/>
        </main>
      </div>
    </>
  );
}

export default Home;
