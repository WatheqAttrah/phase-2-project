import React,{ useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "../src/conponents/NavBar"
import CarsList from "../src/conponents/CarsList"
import CarForm from "../src/conponents/CarForm"


function App() {
  const [cars, setCars] = useState([])
  // Add useEffect hook for  FETCH JSON
  useEffect(()=>{
    fetch("http://localhost:4000/cars")
    .then(response => response.json())
    .then(car => setCars(car))
    //console.log(cars)
  }, [])
  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Form">
          <CarForm />
        </Route>
        <Route exact path="/">
          <CarsList cars={cars} setCars={setCars} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
