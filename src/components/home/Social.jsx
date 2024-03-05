import React from "react";

const Social = () =>{
    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/lokesh-mekala-648a761a5" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github"></i>
            </a>
            <a href="https://leetcode.com/dotme/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-brackets-curly"></i>
            </a>
        </div>
    )
}

export default Social;