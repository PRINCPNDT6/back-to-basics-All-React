import React from 'react'
import Button from './Button'

function Count({ btnName, count, setCount}) {
    const increment = () =>{
        setCount(count +1)
    }
  return (
<>   
   <Button BtnName= "Button Card from Button" fncs={increment} />
    <button onClick={increment}> {btnName}</button>
   
   
</>
  )
}

export default Count