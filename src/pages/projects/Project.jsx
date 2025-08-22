import React from 'react'
import { RiLink } from "react-icons/ri";
import { portfolio } from '../../Data'
import './projects.css'
const Project1 = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio-container container grid">
          {portfolio.map(({id,img,title,description,skills,link})=>{
            return (
              <article className="portfolio-card" key={id}>
                <a href={link} className="portfolio-img-wrapper">
                  <img className='portfolio-img' src={img} alt={title} />
                </a>
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-description">{description}</p>
                <div className="portfolio-skill">
                  {skills.map((skill,index)=>{
                    return <img src={skill} alt="" key={index} className="portfolio-skill-img" />
                  })}
                </div>
                <a className='project-link' href={link}>
                  <RiLink className='link-icon'/>
                  Visit Project
                  </a>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default Project1