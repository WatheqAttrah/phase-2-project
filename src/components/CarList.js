import React from "react"
import Car from "./Car"

function CarsList({ cars, setCars }){


return (
    <div>
      <h1>My Cars </h1>
      <ul>
        { cars.map(car => 
          ( <Car key={car.id} 
                  cars={car} 
                  /> ) 
            )}
      </ul>
    </div>
  )
}

export default CarsList