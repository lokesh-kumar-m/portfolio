import React from "react";
import './footer.css'
const Footer= () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Lokesh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/lokesh-mekala-648a761a5" className="home__social-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://dribbble.com/theunfilleddot" className="home__social-icon footer-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-dribbble"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;