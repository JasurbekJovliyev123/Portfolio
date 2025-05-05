import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import parse from 'html-react-parser'
const EducationItem = ({data}) => {
    console.log(data);
    
  return (
    <div className='resume-item'>
        <div className="resume-icon"><RiGraduationCapFill/></div>
        <span className="resume-date">{data.year}</span>
        <h3 className="resume-title">{parse(data.title)}</h3>
        <p className="resume-description">
            {data.desc}
        </p>
    </div>
  )
}

export default EducationItem