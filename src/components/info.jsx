import React from 'react'
import { personalInfo } from '../Data'
const Info = () => {
  return (
    <>
    {
      personalInfo.map(({title,description},index)=>{
            return (
              <li key={index} className="info-item">
                <span className="info-title">
                  {title}
                </span>
                <span className="info-description">
                  {description}
                </span>
              </li>
            )
      })
    }
    </>
  )
}

export default Info
