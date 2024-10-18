import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx'
import Contact from './components/contact/Contact.jsx'
import Hero from './components/hero/Hero.jsx'
import Title from './components/title/Title'
import Awards from './components/awards/Awards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Hero />
    <div className='container'>
    <Title subTitle='Our Mission and Values' Title='About Us'/>
    <About />
    <Title subTitle='' Title='Awards and Recognition'/>
    <Awards />
    <Services />
    <Contact />

    </div>
  </StrictMode>,
)
