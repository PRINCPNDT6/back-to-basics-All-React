import { useMemo, useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState(0)

  const handleCount = () =>{
    setCount(count + 1)
  }

  function expensiveTask(num){
    console.log('Inside Expensive Task');
    for(let i = 0;i <= 1000000000;i++){}
    return num*2;
  }

  let doubleVal = useMemo(() => expensiveTask(inputVal),[inputVal]);// agr inputVal ki value phle wali hi hai to re render hone pr expensiveTask again run nahi hoga, or only last inputVal ki value hi memoaise krega , last value ki value ke lie hi use hota hai 
  
  return (
    <>
       Count: {count}
       <div className="btnBox">
        <button onClick={handleCount}>Click Me</button>
       </div>
       <input
        type="number"
        placeholder='Enter number'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
         />
         <br />
       double: {doubleVal}

    </>

  )
}

export default App
