import React from 'react'

function Button({fncs, btnName, children}) {
    // const fncs = () =>{

    // }
  return (
 
      <>
      {children}
      <button onClick={fncs}>
        {btnName}
      </button>
      </>
  )
}

export default Button