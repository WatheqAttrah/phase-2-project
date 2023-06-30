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
      <h1>My Cars </h1>
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