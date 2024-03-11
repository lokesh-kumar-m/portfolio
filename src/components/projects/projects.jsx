import React, { useState } from "react";

import './projects.css';

const Projects = () => {
    const [toggle, setState] = useState(0);
    const toggleTab = (index) => {
        setState(index)
    }

    return (
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
                    <span className="project__button" onClick={() => toggleTab(1)}>
                        Read More{" "}
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="project__modal-title">Webanno</h3>
                            <p className="project__modal-description">
                                Evaluate the maintainability of an open-source software, refactored 
                                the code, and improved the implementation of an existing feature.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-code-branch project__modal-icon">
                                    </i>
                                    <a href="https://github.com/lokesh-kumar-m/webanno" className="project__modal-info">
                                        GitHub code link
                                    </a>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">
                                    </i>
                                    <p className="project__modal-info">
                                        Team Lead, Lead Developer
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">
                                    </i>
                                    <p className="project__modal-info">
                                    Identified code smells,security issues ans bugs. Enhanced UI functionality for improved user experience.
                                    </p>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">
                                    </i>
                                    <p className="project__modal-info">
                                        Git, JavaScript, Java, SonarCloud
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
                            Things to do
                        </h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(2)}>
                        Read More{" "}
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="project__modal-title"> A Todo application</h3>
                            <p className="project__modal-description">
                                A task management application designed to help users keep track of their to-do
                                lists using virtual notes. The application provides users to create new notes,
                                update old ones and also delete a note.
                            </p>
                            <ul className="project__modal-services grid">

                                <li className="project__modal-service">
                                    <i className="uil uil-code-branch project__modal-icon">
                                    </i>
                                    <a href="https://github.com/lokesh-kumar-m/Springweb" className="project__modal-info">
                                        GitHub code link
                                    </a>
                                </li>

                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon">
                                    </i>
                                    <p className="project__modal-info">
                                        Spring boot, docker, MySql
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
                    <span className="project__button" onClick={() => toggleTab(3)}>
                        Read More{" "}
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="project__modal-title"> Catering Expenditure System</h3>
                            <p className="project__modal-description">
                                Developed an intelligent decision support system utilizing machine learning techniques to predict catering 
                                expenditure, estimate food wastage, and optimize food preparation quantities.
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
                    <span className="project__button" onClick={() => toggleTab(4)}>
                        Read More{" "}
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>

                    <div className={toggle === 4 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="project__modal-title">Banking Application</h3>
                            <p className="project__modal-description">
                                An application offering banking services including account balance retrieval, 
                                money withdrawal, and depositing, all secured with user authentication.
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-code-branch project__modal-icon">
                                    </i>
                                    <a href="https://github.com/lokesh-kumar-m/bank" className="project__modal-info">
                                        GitHub code link
                                    </a>
                                </li>
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