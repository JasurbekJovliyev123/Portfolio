
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'
import About from '../about/about';
import Contact from '../contact/Contact';
import Project from '../projects/Project';
import Navbar from '../../components/navbar/Navbar';
import you from '../../assets/image.png'
const Home = () => {
  return (
    <div>
      <Navbar/>
        <section className="home-container grid">
       <img src={you} alt="" style={{marginLeft:'20'}} className='home-bg1'/>
       <img src='./bg.avif' alt="" style={{marginLeft:'20'}} className='home-bg'/>
       <div className="home-content">
         <h1 className="home-title">
          <span>Men Jasurbek Jovliyevman</span> <br /> Frontend dasturchi
         </h1>
         <p className="home-description">
              Men frontend dasturchiman. Zamonaviy, qulay va samarali veb-ilovalar yaratish bilan birga, frontend bo‘yicha o‘rgatish va tajriba ulashishga ham qiziqaman. Foydalanuvchi uchun oddiy, responsiv va estetik dizaynli saytlar ishlab chiqishga intilaman.
         </p>
         <a href='#about' className='button'>Men haqimda batafsil
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
        <Project/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
   
    </div>
  )
}

export default Home