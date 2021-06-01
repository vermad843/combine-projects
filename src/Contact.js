import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className = "contact">
            <h1>Contact</h1>
            <p>Let us know and we will get back to you ASAP﻿﻿</p>
            <form className = "form">
                <div className = "form__firstLine">
                   <label>
                       Name
                       <br/>
                       <input/>
                   </label>
                   <label>
                       Email
                       <br/>
                       <input/>
                   </label>
                </div>
                <div className = "form__secondLine">
                    <label>
                        Phone Number
                        <br/>
                        <input/>
                    </label>
                </div>
                <div className = "form__textarea">
                    <label>
                        Message
                        <br/>
                        <textarea/>
                    </label>
                </div>
                <button>
                    <h2>Send</h2>
                </button>
            </form>
        </div>
    )
}

export default Contact;
