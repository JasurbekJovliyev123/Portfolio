import React from 'react'
import { Link } from 'react-router'
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'
const Home = () => {
  return (
    <section className="home-container grid">
       <img src="./home.jpg" alt="" className='home-bg'/>
       <div className="home-content">
         <h1 className="home-title">
          <span>I'm Jasurbek Jovliyev</span> <br /> Frontend Developer
         </h1>
         <p className="home-description">
              I am an Uzbekistan-based frontend developer passionate about creating modern and user-friendly web applications. I focus on building clean, responsive, and efficient websites that enhance user experience.
         </p>
         <Link to={'/about'} className='button'> More About Me
         <span className="button-icon">
            <RiArrowRightLine/>
         </span>
         </Link>
       </div>
       <div className="color-black">

       </div>
    </section>
  )
}

export default Home