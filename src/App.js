import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../src/conponents/NavBar";
import CarsList from "../src/conponents/CarsList";
import CarForm from "../src/conponents/CarForm";
import ContactUs from './conponents/ContactUs';

function App() {
  const [cars, setCars] = useState([])

  useEffect(()=> {
    fetchCars("http://localhost:4000/cars");
  },[])
  const fetchCars = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cars`);
      const data = await response.json();
      setCars(data)
      }catch (error) {
        console.log(`Error fetching cars: `, error);
      }
    };
//Add Car Function Update State
  function handleAddCar(newCar) {
    setCars([...cars, newCar])
  }
//App.js return value
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
        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>

      </Switch>
    </div>
  )
};
export default App;