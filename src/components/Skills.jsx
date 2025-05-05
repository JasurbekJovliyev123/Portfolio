import React from 'react'
function Skills({data}) {
  
  return (
    <div className='skills-data'>
      <div className="skills-blob">
        <img className='skills-img' src={data.img} alt="" />
        </div>
        <h3 className="skills-name">
          {data.title}
        </h3>
        <h3 className="skills-level">
          {data.level}
        </h3>
      
    </div>
  )
}

export default Skills