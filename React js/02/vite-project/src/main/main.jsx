import React from 'react'
import './main.css'
const main = (props) => {
    const name= [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
    ]
    const bilal ={
        name: 'Bilal',
        age: 20,
        city: 'Karachi',
    }
  return (
    <div className='main'>
      <h1> THis is the  {name}</h1>
      <h2> this is our data {bilal.name + " " + bilal.age}</h2>
      <p>{props.sameed + ""+props.fatherName}</p>
    </div>
  )
}

export default main
