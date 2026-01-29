import React from 'react'

function Button({BtnName, fncs}) {
  return (
    <>
        <button onClick={fncs}>{BtnName}</button>
    </>
  )
}

export default Button