import React from "react";
import "./Services.css";
import cleantech from "../../assets/clean-tech.jpg";
import finservice from "../../assets/finance-service.jpg";
import learnservice from "../../assets/learning-work.jpg";
import infotech from "../../assets/info_tech.jpg";
import eyeicon from "../../assets/eye-icon.png";

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <img src={finservice} alt="finance-services image" />
                <div className="caption">
                    <img src={eyeicon} alt="eye icon image" />
                    <p>Financial Services</p>
                </div>
            </div>
            <div className="service">
                <img src={cleantech} alt="clean tech image" />
                <div className="caption">
                    <img src={eyeicon} alt="eye icon image" />
                    <p>Clean Tech Services</p>
                </div>
            </div>

            <div className="service">
                <img src={infotech} alt="info tech service image" />
                <div className="caption">
                    <img src={eyeicon} alt="eye icon image" />
                    <p>Information Technology Services</p>
                </div>
            </div>

            <div className="service">
                <img src={learnservice} alt="learnservices image" />
                <div className="caption">
                    <img src={eyeicon} alt="eye icon image" />
                    <p>Training and Education</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
