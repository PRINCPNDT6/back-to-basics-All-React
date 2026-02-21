import { createContext, useState } from 'react'
 
import './App.css'
import ChildA from './component/ChildA';
 

// Step 1:createcontext
// const userContext = createContext();

//Step 2: wrap all the child inside a provider
//Step 3: Pass value
//step 4: consumer ke andr jake consume krna hai
//......Project One
const themeContext = createContext(); // step 1:

function App() {
//  const [user, setUser] = useState({name:'Prince'})// step 3:
//  const [userTwo, setUserTwo] = useState({name:'Prishu'})// step 3:
//.........................Project One
 
   
  const [theme, setTheme] = useState('light')
  console.log('theme from App()', theme);
  

  return (
    <>
    {/* <userContext.Provider value={user} >
      <ChildA />
    </userContext.Provider>
    <userContext.Provider value={userTwo} >
      <ChildB />
    </userContext.Provider> */}
    {/* //.............Project One  */}

      <themeContext.Provider value = {{theme, setTheme}} >
        <div className="container" style = {{backgroundColor:   theme === 'light' ? 'beige' : 'black'}}>
          <ChildA />
        </div>
      </themeContext.Provider>
      

    </>
  )
}

export default App
// export {userContext}
export {themeContext}
 
