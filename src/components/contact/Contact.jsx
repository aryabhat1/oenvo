import React from "react";
import "./Contact.css";
import message from "../../assets/message.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5dbf325b-0fa1-41fc-865b-a97f1c55e62a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send Us a message <img src={message} alt="image message" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our
                    contact information below. Your feedback, questions and
                    suggestions are important to us.  We strive to provide
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
                        Plot No. 3113/3423, Phase II, Pokhariput, <br></br>
                        Bhubaneswar, Orissa - 751020, INDIA
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    ></input>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your mobile phone number"
                        required
                    ></input>
                    <label>Write your message here</label>
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Enter your message here"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
