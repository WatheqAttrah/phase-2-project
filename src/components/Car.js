import React from 'react'

function Car({ cars }) {


 
return (
    <li> 
        <p>Car Make: <b>{cars.make}</b></p>
        <p>Car Model: <b>{cars.model}</b></p>
        <p>Car Year: <b>{cars.year}</b></p>
        <p>Car Trim: <b>{cars.trim}</b></p>
        <p>Car id: <b>{cars.id}</b></p>
        <br></br>    
        <hr></hr>
    </li>
  )
}

export default Car;