import React, { useState } from "react";

import './projects.css';

const Projects=()=>{
    const[toggle,setState]=useState(0);
    const toggleTab= (index) =>{
        setState(index)
    }

    return(
        <section className="projects section" id="projects">
           <h2 className="section__title">Projects</h2> 
           <span className="section__subtext">My personal Projects</span>

           <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-folder-open project__icon"></i>
                        <h3 className="project__title">
                            Webanno
                        </h3>
                    </div>
                    <span className="project__button" onClick={()=>toggleTab(1)}>
                        Read More{" "} 
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle===1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="project__modal-title">One</h3>
                            <p className="project__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo, laboriosam nesciunt animi voluptate dignissimos natus possimus asperiores ea! Aperiam minima perferendis repellendus. Magnam rem quia nobis illum libero nihil.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Webanno
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Video Rental Service
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Banking Application 
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Catering Expenditure
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-folder-open project__icon"></i>
                        <h3 className="project__title">
                            Video Rental Service
                        </h3>
                    </div>
                    <span className="project__button" onClick={()=>toggleTab(2)}>
                        Read More{" "} 
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle===2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="project__modal-title"> Two</h3>
                            <p className="project__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo, laboriosam nesciunt animi voluptate dignissimos natus possimus asperiores ea! Aperiam minima perferendis repellendus. Magnam rem quia nobis illum libero nihil.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Webanno
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Video Rental Service
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Banking Application 
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Catering Expenditure
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-folder-open project__icon"></i>
                        <h3 className="project__title">
                            Banking Application
                        </h3>
                    </div>
                    <span className="project__button" onClick={()=>toggleTab(3)}>
                        Read More{" "} 
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle===3 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="project__modal-title">Three</h3>
                            <p className="project__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo, laboriosam nesciunt animi voluptate dignissimos natus possimus asperiores ea! Aperiam minima perferendis repellendus. Magnam rem quia nobis illum libero nihil.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Webanno
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Video Rental Service
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Banking Application 
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Catering Expenditure
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 

           </div>
        </section>
    );
}

export default Projects;