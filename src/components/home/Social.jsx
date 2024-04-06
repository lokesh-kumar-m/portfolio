import React from "react";

const Social = () =>{
    return(
        <div className="home__social">
            <div className="linkedin__icon">
            <a href="https://www.linkedin.com/in/lokesh-mekala-648a761a5" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <i className="uil uil-linkedin"></i>
                
            </a>
            <p className="link__name">LinkedIn</p>
            </div>
            
            <div className="github__icon">
            <a href="https://github.com/lokesh-kumar-m" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <i className="uil uil-github"></i>
                
            </a>
            <p className="link__name">GitHub</p>
            </div>
            
            <div className="leetcode__icon">
            <a href="https://leetcode.com/dotme/" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <i className="uil uil-brackets-curly"></i>
                
            </a>
            <p className="link__name">Leetcode</p>
            </div>
            
        </div>
    )
}

export default Social;