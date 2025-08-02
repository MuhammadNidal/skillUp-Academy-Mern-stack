import React from 'react'
import './footer.css'

const footer = (props) => {
  return (
    <div className='footer'>
        <footer>
            <p>&copy; 2023 My Website. All rights reserved.</p>
        <p>{props.text}</p>
            </footer>
    </div>
  )
}

export default footer
