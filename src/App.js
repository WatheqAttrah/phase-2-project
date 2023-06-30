import React from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "../src/conponents/NavBar"
import CarsList from "../src/conponents/CarsList"
import CarForm from "../src/conponents/CarForm"


function App() {





  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Form">
          <CarForm />
        </Route>
        <Route exact path="/">
          <CarsList />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
