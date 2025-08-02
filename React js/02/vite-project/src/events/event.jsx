import React from 'react'
import { useState } from 'react'
import './event.css'

function Abdullah() {
const [name,setName] = useState() 
    function handleClick() {
        alert("Hello from React!");
    }
  return (
    <div className='abdullah'>
      <button onClick={handleClick}>click Me </button>


      <h2>Two way bunding</h2>
      <h2>Name</h2>
     <input type="text"
     name={name}
     onChange={()=>setName(event.target.value)}
     /> 
     
     
    </div>
  )
}

export default Abdullah
