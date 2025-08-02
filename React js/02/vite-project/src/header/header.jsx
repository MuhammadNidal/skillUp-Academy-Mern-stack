import React from 'react'
import './header.css'

const Header = (props) => {
  return (
    <header  className='header'>
      <h1>Welcome to My Website</h1>
      <p>{props.message}</p>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}   
export default Header
