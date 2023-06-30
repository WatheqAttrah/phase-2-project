import React from 'react'

function Car({ cars, onDeleteCar }) {
  // fetch DELETE and update state thru onDeleteCar prop
  function handleDeleteClick(){
    fetch(`http://localhost:4000/cars/${cars.id}`,{
      method: "DELETE",
    })
      .then(response => response.json())
      .then(()=>onDeleteCar(cars))
  };



 
return (
    <li> 
        <p>Car Make: <b>{cars.make}</b></p>
        <p>Car Model: <b>{cars.model}</b></p>
        <p>Car Year: <b>{cars.year}</b></p>
        <p>Car Trim: <b>{cars.trim}</b></p>
        <p>Car id: <b>{cars.id}</b></p>
        <br></br>
        <button onClick={handleDeleteClick}>Remove</button>    
        <hr></hr>
    </li>
  )
}

export default Car;