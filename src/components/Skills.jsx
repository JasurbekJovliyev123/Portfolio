import React from 'react'
function Skills({data}) {
  
  return (
    <div className='skills-data'>
      <div className="skills-blob">
        <img className='skills-img' loading='lazy' src={data.img} alt="" />
        </div>
        <h3 className="skills-name">
          {data.title}
        </h3>
        
      
    </div>
  )
}

export default Skills