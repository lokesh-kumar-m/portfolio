import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact= () =>{

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nd8125a', 'template_dnvne49', form.current, {
        publicKey: '8i8zTbirFyM5wihSm',
      })
      e.target.reset();
    };

    return(
        <section className="contact" id="contact">
           <h2 className="section__title">Contact Me</h2> 
           <span className="section__subtext">Get in touch</span>
           <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                
                </h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="uil uil-fast-mail"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">mekalalokesh1999@gmail.com</span>
                        {/*
                            <a href="mailto:mekalalokesh1999@gmail.com.com" className="contact__button">
                            Write to me{" "} 
                            <i className="uil uil-arrow-right conact__button-icon"></i>
                        </a>
                        */}
                    </div>
                    
                    <div className="contact__card">
                        <i className="uil uil-outgoing-call"></i>

                        <h3 className="contact__card-title">Contact number</h3>
                        <span className="contact__card-data">9346135729</span>
                        
                    </div>
                </div>

            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write to me</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">

                    <div className="contact__form-div">
                        <label className="contact__form-tag">name</label>
                        <input 
                        type="text" 
                        name="name"
                        className="contact__form-input" 
                        placeholder="Your Name"/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input 
                        type="email" 
                        name="email" 
                        className="contact__form-input"
                        placeholder="Enter your mail id"/>
                    </div>
                    
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Message</label>
                        <textarea 
                        name="Message" 
                        cols="30" 
                        rows="10" 
                        className="contact__form-input">
                        </textarea>
                    </div>
                    <button className="button button--flex" type='submit'>
                        <span className="hello">Send</span>
                            {"  "}
                        <i className="uil uil-message button__icon"></i>
                    </button>
                </form>
            </div>

           </div>
        </section>
    )
}

export default Contact;
