import React from "react";
import "./About.css";
import aboutusimg from "../../assets/about1.jpg";

const About = () => {
    return (
        <div>
            {/* <h1>About Us - Purpose and Values</h1> */}
            <div className="aboutus">
                <div className="about-left">
                    <img
                        src={aboutusimg}
                        alt="aboutus image"
                        className="aboutusimg"
                    />
                </div>
                <div className="about-right">
                    <h3>
                        Oenvo (OPC) Private Limited is a globally recognized
                        consulting firm serving many high profile clients for
                        more than a decade.
                    </h3>
                    <br />
                    <h3>
                        We have served in multiple industry sectors where domain
                        specific expertise is very important.
                    </h3>
                    <br />
                    <h3>
                        Our mission is to build trust and deliver sustainable outcomes in businesses and society.
                    </h3>

                    <br />
                    <h3>
                        We believe in empowering our people and support them to bring their best selves to the table.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default About;
