 
 
import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let bgref = useRef();
  const handleClick = ()=>{
  setCount(count + 1)
    console.log('count from useState(0):',count);
    bgref.current.style.backgroundColor = 'red'
    console.log(bgref.current.style.backgroundColor);
    
  }

  let countTwo = 0;
  useEffect(()=>{
    countTwo = countTwo+1;
    console.log('countTwo from let(0):',countTwo);
    
  },[count])

  let refThree = useRef(0);
  useEffect(()=>{
    refThree.current = refThree.current+1;
    console.log('refthree from useRef(0):',refThree.current);
    
  },[countTwo,count])
  return (
    <>
    <p ref={bgref}
    className='para' 
    >Count: ({count})</p>
    {/* <p>CountTwo: ({countTwo})</p> */}
    {/* <p>refThree: ({refThree})</p> */}
    <button 
    onClick={handleClick}
    >Click</button>
    </>
  )
}

export default App
