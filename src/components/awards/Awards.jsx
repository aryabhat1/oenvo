import React from "react";
import "./Awards.css";
import gallery_1 from "../../assets/awards/o-hub-certificate.jpg";
import gallery_2 from "../../assets/awards/OENVO_certificate.jpg";
import startupimage from "../../assets/awards/startupimage.jpg";
import arrow from "../../assets/awards/arrow-white.png";

const Awards = () => {
    return (
        <div className="awards">
            <div className="gallery">
                <img src={gallery_1} alt="certificate image" />
                <img src={gallery_2} alt="recognition image" />
                <img src={startupimage} alt="recognition image" />
            </div>
            <button className="btn dark-btn">See more here...<img src={arrow} alt="arrow image"></img></button>
        </div>
    );
};

export default Awards;
