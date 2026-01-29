 
import './App.css'
import Card from './components/Card'
import groupPhoto from './assets/groupPhoto.jpg'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }
  
  const decrement = () =>{
    //  if(count == 0) return
    //  setCount(count-1)

    count == 0 ? 0 : setCount(count-1)
  }
  return (
    <>
    
    <Button fncs = {increment} btnName= "Increment Me" />
    count:{count}
    <Button btnName= "Decrement Me"  fncs= {decrement} >
      count:{count}

    </Button>



      {/* <Card name = "prince" groupPhoto = {groupPhoto}> */}
        {/* (props.children) in card.jsx */}
          {/* <h1>Best Web dev</h1>
          <h1>Best Web dev</h1>
          <h1>Best Web dev</h1>
       </Card>
       <card children = "i am a inline children"> */}

        {/* i am a normal card */}
       {/* </card> */}
    </>
  )
}

export default App
