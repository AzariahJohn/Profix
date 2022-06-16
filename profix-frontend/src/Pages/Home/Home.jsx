import React from 'react'
import './Home.css'
import About from "../../Components/About/About";
import Main from "../../Components/Main/Main"
import OurService from "../../Components/OurService/OurService";
import Partners from "../../Components/Partners/Partners";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
  return (
    <div className="home__container">
        <Main />
        <OurService />
        <About />
        <Partners />
        <Testimonial />
    </div>
  )
}

export default Home