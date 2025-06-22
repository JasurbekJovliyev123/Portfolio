import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Project from './pages/projects/Project'
import Contact from './pages/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Applayout from './components/Applayout'
import { Router } from 'react-router'
import Contact1 from './pages/contact1'
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        // {
        //   path:'/about',
        //   element:<About/>
        // },
        // {
        //   path:'/projects',
        //   element:<Project/>
        // },
        // {
        //   path:'/contact',
        //   element:<Contact/>
        // }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App