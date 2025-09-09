
import CV from '../../pdf/JasurbekJovliyev.pdf'
import Info from '../../components/info'
import { MdOutlineFileDownload } from "react-icons/md";
import Skills from '../../components/Skills';
import { resume } from '../../Data';
import EducationItem from '../../components/EducationItem';
import { skill } from '../../Data';
import './about.css'
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          <span>Men</span> haqimda
        </h2>
        <div className="about-container">
          <div className="about-info">
            <h1 className="section-subtitle">Shaxsiy ma’lumotlar</h1>
            <ul className="info-list">
               <Info/>
            </ul>
            <a href={CV} download='' className='button cv-button'>
              Rezyume yuklab olish
              <span className='button-icon'><MdOutlineFileDownload/></span>
            </a>
          </div>
         
        </div>
      </section>
      <div className="seperator">
      </div>
      <section className="skills">
        <h3 className="section-subtitle subtitle-center">
            Mening ko‘nikmalarim
        </h3>
        <div className="skills-container ">
          <div className="skills-group">
              
              <div className="skills-items grid">
                {skill.map((data,index)=>{
                  return (
                        <Skills key={index} data={data}/>
                  )
                })}
              </div>  
             
          </div>
        </div>
      </section>
      <div className="seperator">
      </div>
      <section className="resume">
        <h3 className="section-subtitle subtitle-center">
           Ta’lim
        </h3>
        <div className="resume-container grid">
                <div className="education-group grid">
                  {resume.map((item)=>{
                    return (
                      <EducationItem data={item}/>
                    )
                  })}
                </div>
        </div>
      </section>
    </main>
  )
}

export default About