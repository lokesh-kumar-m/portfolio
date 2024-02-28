import React from "react";
import Info from "./Info";

import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";

const About= () =>{
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <h4 className="section__subtitle">My Introduction</h4>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data"> 
                    <Info/>
                     <p className="about__description">
                        Frontend developer, I create webpages with UI / UX
                        user interface.
                     </p>
                     <a download="" href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-file-download-alt"></i>
                     </a>
                </div>
            </div>
        </section>
    )
};

export default About;