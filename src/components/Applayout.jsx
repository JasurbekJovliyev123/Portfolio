import React from 'react'
import Navbar from './navbar/Navbar'
import Themes from './themes/Themes'
import { Outlet } from 'react-router'
const Applayout = () => {
  return <>
    <Navbar/>
    <Outlet/>
    <Themes/>
  </>
}

export default Applayout