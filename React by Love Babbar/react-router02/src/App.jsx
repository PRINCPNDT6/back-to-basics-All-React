 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Children } from 'react'
import Layout from './components/Layout'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'


const router =   createBrowserRouter([
   {
      path: '/',
     element:  <Layout />,
     children : [
          {
            path: 'home',
            element : <Home />
          },
          {
            path: 'about',
            element : <About />
          },
          {
            path: 'service',
            element: <Service />
          }
     ]
   }
 ])
function App() {
  return (
    <>
       <RouterProvider router = {router}/>
        
    </>
  )
}

export default App                                                
