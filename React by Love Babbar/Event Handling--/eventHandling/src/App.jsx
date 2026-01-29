import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState("")

    let handleClick = () =>{
      alert('I am Clicked')
    }
    let mouseOver = () =>{
      alert('Hover on para')
    }

    function hndleInput(e){
     return setInputVal(e.target.value)
    }

    let hndleSubmit = (e) =>{
      // e.preventDefault()
      alert('form Submited')

    }
  return (
    <>
       <button onClick={handleClick}>Click Me</button>
       <p onMouseOver={mouseOver} style={{border: "1px solid"}}>Hover me</p>
      
      
       <form  onSubmit={hndleSubmit}>
        <input type="text" value={inputVal} onChange={hndleInput }  />
        <br />
        inputValue  : {inputVal}
        <button type='submit'>Submit</button>
       </form>
       
    </>
  )
}

export default App
