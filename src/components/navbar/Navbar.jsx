import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="logo image" className="logo" />
            <ul>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="about" smooth={true} offset={0} duration={500}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="services"
                        smooth={true}
                        offset={100}
                        duration={500}
                    >
                        Services
                    </Link>
                </li>
                {/* <li>
                    <Link to="insights" smooth={true} offset={0} duration={500}>
                        Insights
                    </Link>
                </li>
                <li>
                    <Link to="career" smooth={true} offset={0} duration={500}>
                        Career
                    </Link>
                </li> */}
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="btn"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
