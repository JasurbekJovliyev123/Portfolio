import React, { useState,useEffect } from 'react'
import { FaCog } from "react-icons/fa";
import { BsMoon,BsSun } from "react-icons/bs";
import { themes } from '../../Data';
import ThemeItem from './ThemeItem';
import './themes.css'
import { IoCloseSharp } from "react-icons/io5";
const Themes = () => {
  const getStorageColor=()=>{
    let color='2';
    if(localStorage.getItem('color')){
     return  color=localStorage.getItem('color')
    }
    return color
  }
  const getTheme=()=>{
    let 
    theme='light';
    if(localStorage.getItem('theme')){
     return  theme=localStorage.getItem('theme')
    }
    return theme
  }

  const [showSwitcher,setShowSwitcher]=useState(false)
  const [color,setColor]=useState(getStorageColor())
  const [theme,setTheme]=useState(getTheme())
  const changeColor=(color)=>{
    setColor(color)
  }
   const toggleTheme=()=>{
      if(theme==='light-theme'){
        setTheme('dark-theme')
      }else{
        setTheme('light-theme')
      }
   }

   
  useEffect(()=>{
    document.documentElement.style.setProperty('--hue',color)
    localStorage.setItem('color',color)
  },[color])

  useEffect(()=>{
    document.documentElement.className=theme
    localStorage.setItem('theme',theme)
  },[theme])
 
  return (
    <div className={`${showSwitcher ? 'showSwitcher':''} style-switcher`}>
      <div className="switcher-toggle" onClick={()=>{setShowSwitcher(!showSwitcher)}}>
        <FaCog/>
      </div>
      <div className="theme-toggler" onClick={toggleTheme}>
        {theme==='light-theme'?<BsMoon/>:<BsSun/>}
        
      </div>
      <h3 className="switcher-title">
        Style Switcher
      </h3>
      <div className="switcher-items grid">
          {themes.map((theme,index)=>{
            return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
          })}
      </div>
      <div className="switcher-close" onClick={()=>{setShowSwitcher(!showSwitcher)}}>
          <IoCloseSharp/>
      </div>
    </div>
  )
}

export default Themes