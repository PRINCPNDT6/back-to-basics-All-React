import React from 'react'
import { useContext } from 'react'
import {countContext} from '../App'

function ChildC() {
    const count = useContext(countContext);
  return (
    <>
    <div>ChildC</div>
    <p>Count From ChildC :{count}</p></>
  )
}

export default ChildC