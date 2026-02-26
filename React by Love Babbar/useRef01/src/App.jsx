// npm audit fix --force
 
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  //  // useCase 1)
  // let [val, setVal] = useState(1) // state change hone pr component re render hota hai

   //useCase 2)
    let valOne = 1; // is se val kuchh bhi update hone pr  hamesha re render hoga or every render pr val = 1 hoga and increment pr val = 2 fir fncs call hoga or fir se component re render hoga or val = 1 fir val = val+1 se val = 2 hoga hr baar esa hi hota rahega
   
    useEffect(() =>{
      valOne  = valOne  + 1;  
    console.log('value of normal Variable: from valOne ', valOne);
    },[count1, count2]);

  // useCase 3)
  let val = useRef(1); // yaha val ke andr ek obj hai current jiski val ab 1 hai to 1 ko acess krne ke lie val.current krne pdega , or component ke re render hone pr variable ko re render/change ni hone deta  or haan useRef se UI pr kuchh bhi re render nahi hoga but useState() se hota hai


  const handleIncrement = () =>{
    //  //useCase 1)
    // setVal(val+1)

    // useCase 3)
    val.current = val.current + 1;
    // console.log('value fo val ', val); // value fo val {current: 2}
    console.log('value of useRef: from val ', val.current); 
    
    setCount1(count1 => count1+1)
  }
  const handleDecrement = () =>{
    setCount2(count2 => count2+1)
  }

  useEffect(()=>{
    console.log('count1 Increment sucessFullly from useState',count1);
    
  },[count1])
  useEffect(()=>{
    console.log('count2 Increment sucessFullly from useState',count2);
    
  },[count2])
  useEffect(()=>{
    console.log('run on every render');
    
  })
  
  return (
    <>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     <br />
     Count:1-:({count1})
     <br />
     Count:2-:({count2})
     <br />
      
     {/* valOne-:{valOne}
     <br />
     val-:{val} */}
    </>
  )
}

export default App
