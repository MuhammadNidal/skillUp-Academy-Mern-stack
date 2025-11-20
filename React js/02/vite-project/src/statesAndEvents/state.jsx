import React from 'react'
import { useState } from 'react'
import './sate.css'
function State() {
    const [abdullah,setabdullah]=useState(110)
  return (
    <div className="state">
      
        <h1>This is the state component</h1>
        <h2>count :{abdullah}</h2>
        <button onClick={()=> setabdullah(abdullah*10)}> button</button>
    </div>
  )
}

export default State
