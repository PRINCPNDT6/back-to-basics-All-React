import React from 'react'
import Button from './Button'

function LogoutBtn({logoutChange}) {
  return (
   <>
        <Button BtnName= 'Login' fncs={logoutChange}/>
   <p>Logut Page render</p>
   </>
  )
}

export default LogoutBtn    