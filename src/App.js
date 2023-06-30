import React,{ useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import CarsList from "../src/components/CarsList";
import CarForm from "../src/components/CarForm";


function App() {
  const [cars, setCars] = useState([])
  // Add useEffect hook for  FETCH JSON
  useEffect(()=>{
    fetch("http://localhost:4000/cars")
    .then(response => response.json())
    .then(car => setCars(car))
    //console.log(cars)
  }, [])
  
    //Add car cb + state update
    function handleAddCar(newCar) {
      setCars([...cars, newCar])
    }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Form">
          <CarForm onAddCar={handleAddCar} />
        </Route>
        <Route exact path="/">
          <CarsList cars={cars} setCars={setCars} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
