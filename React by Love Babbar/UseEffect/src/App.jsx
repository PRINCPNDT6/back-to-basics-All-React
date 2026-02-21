import { useState } from 'react'
 
import './App.css'
import { useEffect } from 'react'
import TimeComponent from './components/TimeComponent'
import LoggerComponent from './components/LoggerComponent'
// import LoggerComponent from './components/LoggerComponent'

function App() {
  // const [count, setCount] = useState(0)
  // const [item, setItem] = useState(0)
  // const [total, setTotal] = useState(0)
  // const [value, setValue] = useState(0)

  // const Increment = () =>{
  //   setCount(count+1)
  // }
  // const handleItem = () =>{
  //   setItem(item+1)
  // }
  // const handleTotal = ()=>{
  //   setTotal(total+1)
  // }
  // //Varient 1:
  // useEffect(() =>{
  //   alert('Heyy I am runs on every rendering')
  // }, [])

  // // Varient 2:
  // useEffect(() =>{
  //   alert('i am runs on first render')
  // }, [ ])

  // // Varient 3:
  // useEffect(() =>{
  //   alert('Count is Changed')
  // }, [count])

  // // Varient 4:
  // useEffect(() =>{
  //   alert('item and total changed')
  // }, [item, total])

  // //Varient 5:
  // useEffect(()=>{
  //   setValue(value + 2)
  //   alert('count, item, tatal, change: change Value')
  // }, [item, count, total, value])




  return (
    <>
    {/* <TimeComponent /> */}
    {/* <LoggerComponent /> */}
    
    {/* <button onClick={Increment}>Count:</button>{count}
    <button onClick={handleItem}>Item:</button>{item}
    <button onClick={handleTotal}>Total:</button>{total}
    <br />
    <span>Value:</span>{value} */}

      
    </>
  )
}

export default App
