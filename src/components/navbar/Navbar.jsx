import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky? 'dark-nav': ''}`}>
            <img src={logo} alt="logo image" className="logo" />
            <ul>
                <li>Insights</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Credentials</li>
                <li>
                    <button className="btn">Contact Us</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
