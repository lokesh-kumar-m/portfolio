import React from "react";
import './contact.css'

const Contact= () =>{
    return(
        <section className="contact" id="contact">
           <h2 className="section__title">Contact Me</h2> 
           <span className="section__subtitle">Get in touch</span>
           <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">

                </h3>
                <div className="contact__infor">
                    <div className="contact__card">
                        <i className="uil uil-fast-mail"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">mekalalokesh1999@gmail.com</span>
                        <a href="mailto:mekalalokesh1999@gmail.com.com" className="contact__button">
                            Write to me{" "} 
                            <i className="uil uil-arrow-right conact__button-icon"></i>
                        </a>
                    </div>
                    
                    <div className="contact__card">
                        <i className="uil uil-outgoing-call"></i>

                        <h3 className="contact__card-title">Contact number</h3>
                        <span className="contact__card-data">0793573521</span>
                        
                    </div>
                </div>

            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write to me</h3>
                <form action="" className="contact__form">

                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">name</label>
                        <input 
                        type="text" 
                        className="contact__form-input" 
                        placeholder="Your Name"/>
                    </div>

                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Mail</label>
                        <input 
                        type="email" 
                        name="email" 
                        className="contact__form-input"
                        placeholder="Enter your mail id"/>
                    </div>
                    
                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Message</label>
                        <textarea name="Message" id="" cols="30" rows="10"></textarea>
                    </div>
                    
                </form>
            </div>

           </div>
        </section>
    )
}

export default Contact;