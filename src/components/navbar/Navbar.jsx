import React, { useState } from 'react'
import { links } from '../../Data'
import { NavLink } from 'react-router'
import { IoClose } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import './navbar.css'
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(true)
  return (
    <nav className="nav">
      <div className={` ${showMenu?'nav-menu show-menu':'nav-menu'}`}>
        <ul className="nav-list grid">
          {links.map(({name,icon,path},index)=>{
              return (
                <li className="nav-item" key={index}>
                    <a href={path} style={{display:'flex',alignItems:'center',gap:"3px"}} onClick={()=>setShowMenu(!showMenu)} className={({isActive})=>isActive ? 'nav-link active-nav':'nav-link'}>
                      <p>{icon}</p>
                      <h3 className="nav-name">
                        {name}
                      </h3>
                    </a>
                </li>
              )
          })}
        </ul>
        <IoClose className='nav-close' onClick={()=>setShowMenu(!showMenu)}/>
      </div>
      <div className="nav-toggle" onClick={()=>setShowMenu(!showMenu)}>
       <RiMenuLine/>
      </div>
    </nav>
  )
}

export default Navbar