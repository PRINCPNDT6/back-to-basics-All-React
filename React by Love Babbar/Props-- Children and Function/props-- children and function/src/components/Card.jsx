import React from 'react'
import    './Card.css'
function Card({name, groupPhoto, children}) {
  return (
     <>
       my name is  {name} and Group photo is <img src={groupPhoto} alt=""  /> 
       {children}
     </>
  )
}

export default Card 