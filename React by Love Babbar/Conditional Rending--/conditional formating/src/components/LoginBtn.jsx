import React from 'react'
import Button from './Button'

function LoginBtn({islogin,  loginChange}) {
    const login  = () =>{
        loginChange(!islogin)
    }
  return (
    <>
               {/* <Button BtnName= 'Login' fncs={loginChange}/> */}
  <Button BtnName= 'Logout' fncs={login}/>
   {/* {String(islogin)} */}
   <p>Login page render</p>
    </>
  )
}

export default LoginBtn