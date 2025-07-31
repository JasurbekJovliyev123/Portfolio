import React from 'react'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Applayout from './components/Applayout'
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App