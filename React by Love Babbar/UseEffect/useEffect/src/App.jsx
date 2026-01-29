 
 
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma seprated dep list 
  //  useEffect(() =>{
  //   first 

  //   return () =>{
  //     second 
  //   }
  //  }, [third]) // ye dp list  
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [count, setCount] = useState(0)
  const [total, setTotal]  = useState(1)
  const [val, setVal] = useState(0)
  const [item, setItem] = useState(0)
  // used for rendering 
  let handleCount =   () =>{ // useEffect() , increment on every render
    setCount(count + 1)
    }
  let handleTotal = () =>{
    setTotal(total + 1)
  }


  //variation: 1
  //runs on every render ,, just before
  // useEffect(()=>{
  //   alert('I will run on each render')
  // })

   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //variation: 2
  // runs on only first render // phli baar browser render hone pr chlta hai 

  useEffect(() =>{
    alert('i will run on only first render')
  }, [])

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // variation: 3

  useEffect(() =>{
    alert('i will run every time when count will updated')
    setVal(val + 1)
  }, [count])// dp update hone pr call hota hai

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // variation: 4
  //multiple dependencies
  useEffect(() =>{
    // alert('run when count/total is update')
    setItem(item + 1)
  },[count, total])

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //variation: 5
  // let's add a cleanup function
  useEffect(()=>{
      alert('val is updated')
      return () =>{
        alert('val is unmounted from ui')// purana count ht ggyaa ui se nya add hua
      }
  }, [val])

   

  return (
    <>
        <button onClick={handleCount}>Update Count: </button>
        <span>Count is: {count}</span>
        <div>Val Update only when count is update:{val}</div>
        <br />
        <button onClick={handleTotal}>Update total: </button>
        <span> Total is: {total}</span>
        <div>Item update when total/count is update: {item}</div>
    </>
  )
}

export default App
