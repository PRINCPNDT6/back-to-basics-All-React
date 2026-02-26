 
 
import { useRef, useState } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  // let time = useRef(0) ko ham ui pr render ni kr skte
  // let time = 0;
  //  let timerRef = null; // is se islie stop ni hota qki ye time update pr render hota hai 
  let intervalId = useRef(null)// without useRef hr bar setTime() call hone pr whole Component ko re render krega or timerRef ko bhi fir se null krega or stop krne pr intervalId null hogi or setInterval clear hi ni hoga so useRef intervalId ko hold krta hai 

  const handleStart = () =>{
    if(intervalId.current !== null) return;

      intervalId.current = setInterval(() =>{
        setTime(time => time+1);
        // time = time + 1;
        // console.log(time);
        
      },1000);
    
  }
  const handleStop = () =>{
    clearInterval(intervalId.current);
    intervalId.current = null;
  } 
  const handleReset = () =>{
    handleStop();
     setTime(0);
    // time =0;
  } 
  return (
    <>
       <div className="container">

        <div className="timeBox">
          <p>StopWatch: {time} <span>seconds</span></p>
        </div>

        <div className="start">
          <button onClick={handleStart}>start</button>
        </div>

        <div className="stop">
          <button onClick={handleStop}>stop</button>
        </div>

        <div className="reset">
          <button onClick={handleReset}>reset</button>
        </div>

       </div>
    </>
  )
}

export default App
