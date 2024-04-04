import React, { useState } from "react";
import Project from "./project";
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

                <Project
                    title={"Webanno"}
                    toggleTab={toggleTab}
                    num={1}
                    toggle={toggle}
                    desc={"Evaluate the maintainability of an open-source software, refactored the code, and improved the implementation of an existing feature."}
                    link={"https://github.com/lokesh-kumar-m/webanno"}
                    ponits={[" Team Lead, Lead Developer","Identified code smells,security issues ans bugs. Enhanced UI functionality for improved user experience.","Git, JavaScript, Java, SonarCloud, Maven"]}
                />

                <Project
                    title={"Bills and Expense Manager"}
                    toggleTab={toggleTab}
                    num={2}
                    toggle={toggle}
                    desc={"Application with user Authentication to manage expenses, share bills between people and record transactions"}
                    link={"https://github.com/lokesh-kumar-m/projectX"}
                    ponits={["Registser new users and Authenticate users with JWT","Split your bills and maintain debts","Git, Spring, MySql, Docker, React, RESTApi, Postman"]}
                />


                <Project
                    title={"Catering Expenditure System"}
                    toggleTab={toggleTab}
                    num={3}
                    toggle={toggle}
                    desc={" Developed an intelligent decision support system utilizing machine learning techniques to predict catering expenditure, estimate food wastage, and optimize food preparation quantities."}
                    link={""}
                    ponits={[" Scrum Master, Developer","Data Visualisation","PowerBI, Machine learning, Trello board"]}
                />
                {/* title,toggleTab,num,toggle,desc,link,ponits */}
                <Project
                    title={"Banking Application"}
                    toggleTab={toggleTab}
                    num={4}
                    toggle={toggle}
                    desc={"An application offering banking services including account balance retrieval, money withdrawal, and depositing, all secured with user authentication."}
                    link={"https://github.com/lokesh-kumar-m/bank"}
                    ponits={["Java Swings, MySql, Docker"]}
                />

            </div>
        </section>
    );
}

export default Projects;