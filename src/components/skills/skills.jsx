import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills= () =>{
return(
    <section className="skills section" id="skill">
        <h2 className="section__title">Skills</h2>
        <span className="skill__text">My Technical Skills</span>
        <div className="skill__container container grid">
            <Frontend />
            <Backend/>
        </div>

    </section>
)
}

export default Skills;
