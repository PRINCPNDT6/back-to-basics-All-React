 
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './component/Home';
import About from './component/About';
import Dasboard from './component/Dasboard';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Login from './component/Login';
import Signin from './component/Signin';
const routerr = createBrowserRouter(
  [
    
    {path: '/about',
     element: <div>
        <About />
        <Navbar />
      </div>
    },
    {path: '/contact',
     element: <div>
        <Contact />
        <Navbar />
      </div>
    },
    {path: '/dasboard',
     element: <div>
        <Dasboard />
        <Navbar />
      </div>
    },
    {path:'/home',
      
      element: <div>
        <Home />
        <Navbar />
      </div>
    },
    {path: '/login',
     element: <div>
        <Login />
        <Navbar />
      </div>
    },
    {path: '/signin',
     element: <div>
        <Signin />
        <Navbar />
      </div>
    }
  ]
)

function App() {
 

  return (
    <>
      <RouterProvider router={routerr}/>
      {/* <div>FirstPage</div> */}
      
       
    </>
  )
}

export default App
