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
                            <h3 className="project__modal-title">Webanno</h3>
                            <p className="project__modal-description">
                                Evaluated the maintainablity of an open-source software and refactored 5% code. 
                                Enhanced the implementation of an existing feature.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Lead Developer
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Git, JavaScript, Java, SonarCloud
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                       Used a static code analysis tool called sonarCloud to find bugs code smells, 
                                       security threats and bad coding practices. We hand-picked few bugs,code smells,
                                       security threats and evaluated them for false positives. We improved the 
                                       functionality of a feature which improves the user interface of the application.
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
                            Catering Expenditure System
                        </h3>
                    </div>
                    <span className="project__button" onClick={()=>toggleTab(2)}>
                        Read More{" "} 
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle===2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="project__modal-title"> Catering Expenditure System</h3>
                            <p className="project__modal-description">
                                An intelligent decisions support system to predict the 
                                catering expenditure by using machine learning technoques. 
                                Estimates the overall food wastage and the amount of food to be prepared less.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Scrum Master, Developer
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        PowerBI, Machine learning, Trello board
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
                            <h3 className="project__modal-title">Banking Application</h3>
                            <p className="project__modal-description">
                                Application that provides banking services such as fetching account balance, 
                                withdrawing money, and depositing money with user-authentication.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">   
                                    </i>
                                    <p className="project__modal-info">
                                        Java Swings, MySql, Docker
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