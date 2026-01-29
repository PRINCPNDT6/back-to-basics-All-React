import { useState } from 'react'
 
 
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'


function App() {
 const [isLoggedIn, setIsLoggedIn]  = useState(false)
 function changeLogin(){
     setIsLoggedIn(!isLoggedIn)
 }

  return (
    <>
    <p>Login Status: {String(isLoggedIn)}</p>
        {isLoggedIn ? (
        <LoginBtn islogin={isLoggedIn} loginChange={setIsLoggedIn} /> 
        ):( 
        <LogoutBtn logoutChange ={changeLogin} />

        )}
      </>

  )
}

export default App
