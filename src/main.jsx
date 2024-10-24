import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Title from "./components/title/Title";
import Awards from "./components/awards/Awards";
import Career from "./components/career/Career";
import Footer from "./components/footer/Footer";
import Insights from "./components/insights/Insights";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <Navbar />
        <Hero />
        <div className="container">
            <Title subTitle="Our Mission and Values" Title="About Us" />
            <About />
            <Title subTitle="" Title="Awards and Recognition" />
            <Awards />
            {/* <div className="container"> */}
            <Title subTitle="" Title="Services" />
            <Services />

            {/* </div> */}
            {/* <Title
                subTitle="Our Research and Insights on Policy"
                Title="Insights"
            />
            <Insights /> */}

            {/* <Title subTitle="Explore a bright future..." Title="Career" />
            <Career /> */}
            <Title subTitle="Contact Us" Title="Get in Touch" />
            <Contact />
            <Footer />
        </div>
    </StrictMode>
);
