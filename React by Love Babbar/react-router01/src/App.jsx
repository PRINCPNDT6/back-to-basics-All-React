 import React from 'react'
 import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashbord from './components/Dashbord'
import Service from './components/Service'
import Navbar from './components/NavBar/Navbar'
 const router =  createBrowserRouter(
  [
    {
      path: 'home',
      element: <div>
        <Navbar />
        <Home />
      </div>
      },
    {
      path: 'about',
      element:  <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: 'dashbord',
      element:  <div>
        <Navbar />
        <Dashbord />
      </div>
    },
    {
      path: 'service',
      element:  <div>
        <Navbar />
        <Service />
      </div>
    }
  ]
 )
 function App() {
   return (
     <>
      <RouterProvider router={router} />
      
     </>
     
   )
 }
 
 export default App