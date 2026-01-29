import React from 'react'

function card({fullname, setFullName}) {
    return (
        <>
         
    <input type="text" 
    onChange={(val) => setFullName(val.target.value)}
    />

       my name: {fullname} 
    </>
  )
}

export default card