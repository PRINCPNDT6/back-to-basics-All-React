import { useState } from 'react'
 import Card from './components/Card.jsx'
 import Count  from './components/Count.jsx'
import './App.css'

function App() {
   // create state
   //manage state
   // chnge state
   //sync in All child

   const [name, setName] = useState("")
   const [count, setCount] = useState(0)
   const [btnName, setBtnName] = useState("Direct Button From Count Card")

  return (
    <>
      <Card fullname = {name} setFullName = {setName} />
      <Count  count={count} setCount={setCount} btnName= {btnName}/>
       count:{count} 
    </>
  )
}

export default App
