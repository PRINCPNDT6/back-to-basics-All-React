import React, { useContext } from 'react'
import { themeContext } from '../App'
 


const ChildB = () => {
  const {theme, setTheme} = useContext(themeContext);
  const toggleTheme = () =>{
    if(theme === 'light'){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }
  return (

    <button onClick = {toggleTheme}>
      ChildB
      </button>
   )
}

export default ChildB