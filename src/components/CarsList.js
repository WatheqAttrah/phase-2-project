import React from "react"
import Car from "./Car"

function CarsList({ cars, setCars }){

  //delete car cb + state update
  function handleDeleteCar(deletedCar){
    const updatedCar = cars.filter(car=> car.id !== deletedCar.id)
    setCars(updatedCar)
    }

return (
    <div>
      <h1>Welcome to my phase-2-project</h1>
      <hr></hr>
      <h2>Cars Fetched </h2>
      <ul>
        { cars.map(car => 
          ( <Car key={car.id} 
                  cars={car} 
                  onDeleteCar={handleDeleteCar} 
                  /> ) 
            )}
      </ul>
    </div>
  )
}

export default CarsList