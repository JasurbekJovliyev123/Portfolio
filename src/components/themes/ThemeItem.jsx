import React from 'react'

const ThemeItem = ({hue,img,changeColor}) => {
  return (
    <div>
        <img src={img} alt="" className='theme-img' onClick={()=>{changeColor(hue)}}/>
    </div>
  )
}

export default ThemeItem