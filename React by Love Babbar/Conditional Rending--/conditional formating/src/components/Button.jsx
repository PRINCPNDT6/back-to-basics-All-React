import React from 'react'

function Button({fncs, BtnName}) {
  return (
     <button onClick={fncs}>{BtnName}</button>
  )
}

export default Button