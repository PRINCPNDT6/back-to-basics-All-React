import React, { useEffect, useState } from 'react'

function LoggerComponent() {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        console.log('Component rendered or Count changed:', count);
        
    })
  return (
     <>
        <h3>Count:{count}</h3>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
     </>
  )
}

export default LoggerComponent