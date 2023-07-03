import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"; // NavBar Liks
import NavBar from "./components/NavBar"; //NavBar Component
import CarsList from './components/CarsList';
import CarForm from "./components/CarForm"; //CarForm Component
import ContactUs from './components/ContactUs'; //Contact form 

function App() {
  const [cars, setCars] = useState([])
//Useing Effect to fetch data from server as soon as the application is up
  useEffect(()=> {
    fetchCars("http://localhost:4000/cars");
  },[])
  const fetchCars = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cars`);
      const data = await response.json();
      setCars(data)
      }catch (error) { //Catching error 
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