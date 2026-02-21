import React from 'react'

function Button({fncs, btnName, children}) {
    // const fncs = () =>{

    // }
  return (
 
      <>
      {children}
      <Button onClick={fncs}>
        {btnName}
      </Button>
      </>
  )
}

export default Button