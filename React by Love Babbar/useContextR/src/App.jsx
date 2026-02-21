 
 
import { useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA'
import { createContext } from 'react'

 const countContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [isIncrement, setIsIncrement] = useState(true)

  const handleClick = () =>{

    if (isIncrement) {
      if (count === 20) {
        alert('count is 20')
        setIsIncrement(false)   // switch mode
        setCount(count - 1)
        return
      }
      setCount(count + 1)
    } 
    
    else {
      if (count === 0) {
        setIsIncrement(true)    // switch back
        setCount(count + 1)
        return
      }
      setCount(count - 1)
    }


  }
  return (
    <>
        <div className="count">
          <button onClick={handleClick}>{isIncrement ? 'Increment' : 'Decrement'}</button>
          <p>Count from App.jsx : {count}</p>
        </div>
        < countContext.Provider value={count}>
        <ChildA /> 
        </countContext.Provider>
    </>
  )
}

export default App
export {createContext}
