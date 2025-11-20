import React from 'react'
import {Link } from "react-router-dom"

const header = () => {
  return (
    <div style={{backgroundColor:"pink",color:"red" ,display:"flex",justifyContent:"center"}}>
      <h1>SkillUP Academy</h1>
      <nav style={{display:"flex" ,justifyContent:"space-between", marginleft:"30px"}}>
        <ul style={{display:"flex",justifyContent:"space-between" ,listStyle:"none" , padding:"20px",marginleft:"20px"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactUs">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default header
