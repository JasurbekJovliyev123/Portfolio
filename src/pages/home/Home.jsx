import React from 'react'
import { Link } from 'react-router'
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'
import About from '../about/about1';
import Contact1 from '../contact/Contact1';
import Project1 from '../projects/Project1';
import Navbar1 from '../../components/navbar/Navbar1';
import Contact2 from '../contact/Contact2';
import you from '../../assets/image.png'
const Home = () => {
  return (
    <div>
      <Navbar1/>
        <section className="home-container grid">
       {/* <img src={you} alt="" style={{marginLeft:'20'}} className='home-bg1'/> */}
       <img src='./bg.avif' alt="" tyle={{marginLeft:'20'}} className='home-bg'/>
       <div className="home-content">
         <h1 className="home-title">
          <span>I'm Jasurbek Jovliyev</span> <br /> Frontend Developer
         </h1>
         <p className="home-description">
              I am an Uzbekistan-based frontend developer passionate about creating modern and user-friendly web applications. I focus on building clean, responsive, and efficient websites that enhance user experience.
         </p>
         <a href='#about' className='button'> More About Me
         <span className="button-icon">
            <RiArrowRightLine/>
         </span>
         </a>
       </div>
       <div className="color-black">

       </div>
       
    </section>
    <section id='about'>
        <About/>
    </section>
    <section id='projects'>
        <Project1/>
    </section>
    <section id='contact'>
      <Contact1/>
    </section>
      {/* <Contact2/> */}
    </div>
  )
}

export default Home