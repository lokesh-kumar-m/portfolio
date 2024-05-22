import React, { useState } from "react";
import Info from "./Info";

import "./about.css";
import AboutImg from "../../assets/about.jpg";
// import CV from "../../assets/cv.pdf";
import Coding from "../../assets/wrk.png"
import Design from "../../assets/dsin.png"
import Games from "../../assets/gme.png"

const CV=" https://drive.google.com/file/d/15fGuR-JgwLwtlOlK9gOUMrA5gsgKL_8C/view?usp=drivesdk"
const About= () =>{
    const [flag,setFlag]=useState(0)

    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <h4 className="section__subtitle">My Introduction</h4>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data"> 
                    <Info/>
                    
                    <div className="about__info grid">
                        <div className="interests__box" onClick={()=>setFlag(1)}>
                            <img src={Coding} alt="" />
                        </div>
                        <div className={flag===1? "interest__modal Coding__interest":" interest__modal"}>
                            <div className="interest__card">
                                <span className="card__close" onClick={()=>setFlag(0)}><i className="uil uil-times-circle"></i></span>
                                <div className="card__part-1">
                                    {/* <span className="emoji-1">&#129300;</span>
                                    <span className="emoji-2">&#129488;</span>
                                    <span className="emoji-3">&#129327;</span> */}
                                    <h2 className="about__title">Career</h2>
                                    <br />
                                    <img src={Coding} alt="" />
                                </div>
                                <div className="card__part-2">
                                    <ul className="coding__interest-list">
                                        <li className="">
                                        <i className="uil uil-check-circle"></i> I enjoy Coding and problem solving.
                                        </li>
                                        <li>
                                        <i className="uil uil-check-circle"></i> Excited about learning new things and gaining knowledge.
                                        </li>
                                        <li>
                                        <i className="uil uil-check-circle"></i> Quick learner and work well with fast paced team.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="interests__box" onClick={()=>setFlag(2)}>
                            <img src={Design} alt="" />
                        </div>
                                

                        <div className={flag===2? "interest__modal Coding__interest":" interest__modal"}>
                            <div className="interest__card">
                                <span className="card__close" onClick={()=>setFlag(0)}><i className="uil uil-times-circle"></i></span>
                                <div className="card__part-1">
                                    {/* <span className="emoji-1">&#129300;</span>
                                    <span className="emoji-2">&#129488;</span>
                                    <span className="emoji-3">&#129327;</span> */}
                                    <h2 className="about__title">Hobbies and Interests</h2>
                                    <br />
                                    <img src={Design} alt="" />
                                </div>
                                <div className="card__part-2">
                                    <ul className="coding__interest-list">
                                        <li className="">
                                        <i className="uil uil-check-circle"></i> Creative individual.
                                        </li>
                                        <li>
                                        <i className="uil uil-check-circle"></i> I love travelling, photography and exploring new places.
                                        </li>
                                        <li>
                                        <i className="uil uil-check-circle"></i> Voluntered as graphpic designer and organiser.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="interests__box" onClick={()=>setFlag(3)}>
                            <img src={Games} alt="" />
                        </div>

                        <div className={flag===3? "interest__modal Coding__interest":" interest__modal"}>
                            <div className="interest__card">
                                <span className="card__close" onClick={()=>setFlag(0)}><i className="uil uil-times-circle"></i></span>
                                <div className="card__part-1">
                                    {/* <span className="emoji-1">&#129300;</span>
                                    <span className="emoji-2">&#129488;</span>
                                    <span className="emoji-3">&#129327;</span> */}
                                    <h2 className="about__title">Entertainment</h2>
                                    <br />
                                    <img src={Games} alt="" />
                                </div>
                                <div className="card__part-2">
                                    <ul className="coding__interest-list">
                                        <li className="">
                                            <i className="uil uil-check-circle"></i> I play badminton, and volleyball.
                                        </li>
                                        
                                        <li>
                                            <i className="uil uil-check-circle"></i> Enjoy pop music, fav artists: Post Malone, Khalid
                                        </li>

                                        <li>
                                            <i className="uil uil-check-circle"></i> Play mobile legends bang bang under the name "Gypsy"
                                        </li>
                                        
                                        <li>
                                            <i className="uil uil-check-circle"></i> Discussing Anime, Sci-fi movies/Series? Count me in!
                                        </li>

                                        <li>
                                            <i className="uil uil-check-circle"></i> Most watched series: Chernobyl
                                        </li>
                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="about__description">
                        A developer, actively seeking an opportunity to contribute and shape the future.
                    </p>
                    <a download="" target="_blank" rel="noopener noreferrer"  href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-file-download-alt"></i>
                    </a>

                </div>
            </div>
        </section>
    )
};

export default About;
