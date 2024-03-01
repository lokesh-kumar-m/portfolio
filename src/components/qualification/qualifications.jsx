import React from "react";

import './qualifications.css'

const Qualifications = () =>{
    return(
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Experience
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Education
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master's Thesis</h3>
                                <span className="qualification__subtitle">
                                    Vulnerability Managemnet of open source library
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan, 2022 - Sept, 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">
                                    Blekinge Institute of Technology
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan, 2021 - Feb, 2023 
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Robot Developer</h3>
                                <span className="qualification__subtitle">
                                    Path Creators
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct, 2017 - Nov, 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"> Computer Science and Engineering</h3>
                                <span className="qualification__subtitle">
                                    Jawaharlal Nehru Technological University
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2017 - Dec, 2020
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;