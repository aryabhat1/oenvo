import React from "react";
import "./Contact.css";
import message from "../../assets/message.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send Us a message <img src={message} alt="image message" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our
                    contact information below. Your feedback, questions and
                    suggestions are important to us we strive to provide
                    exceptional services to our valued customers.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="mail image" />
                        oenvo@outlook.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="phone icon" /> +91
                        741-014-7125
                    </li>
                    <li>
                        <img src={location_icon} alt="location icon" />
                        Plot No. 3113/3423, Phase II, Pokhariput, Bhubaneswar -
                        751020, Orissa - 751020, INDIA
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
