import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



function Social() {
  return (
    <div className="home__social">
        <a href="https://github.com/dashboard" className="home__social-icon" target='_blank'><FaGithub /></a>
        <a href="/#" className="home__social-icon" target='_blank'>< FaLinkedin/></a>
        <a href="https://www.facebook.com/pauljohn.cunanan.14" className="home__social-icon" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default Social