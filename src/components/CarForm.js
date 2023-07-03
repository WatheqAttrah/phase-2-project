import React, { useState } from "react";

function CarForm ({ onAddCar }) {
  const [formData, setFormData] = useState ({
    carMake:"",
    carModel:"",
    carYear:"", 
    carTrim:""
  })
// Function to Change event on the form 
  function handleChange(event) {
    setFormData({...formData,[event.target.name]: event.target.value,})
  }

  function handleSubmit(event) {
    // Used to prevent the form from refresh
    event.preventDefault();
    //Create Object from input form
    const itemData = { 
      make: formData.carMake, 
      model: formData.carModel, 
      year: formData.carYear, 
      trim: formData.carTrim
    }
    //Fetch POST request and state (onAddNewCar prop) update
    fetch("http://localhost:4000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then(response => response.json())
      .then(newCar=> onAddCar(newCar))

      // reset form
      setFormData({
        carMake:"", 
        carModel:"", 
        carYear:"", 
        carTrim:"" 
      });
}



  return (
    <div>
      <hr></hr>
      <h2>Add New Car:</h2>
      <form onSubmit={handleSubmit}>
        <h4>Car Make: <input type="text" name="carMake" onChange={handleChange} value={formData.carMake} placeholder="Enter Car Make" /></h4>
        <h4>Car Model: <input type="text" name="carModel" onChange={handleChange} value={formData.carModel} placeholder="enter Car Model"/></h4>
        <h4>Car Year: <input type="text" name="carYear" onChange={handleChange} value={formData.carYear} placeholder="enter car Year" /></h4>
        <h4>Car Trim: <input type="text" name="carTrim" onChange={handleChange} value={formData.carTrim} placeholder="enter car Trim" /></h4>
        <button type="submit">Add Car</button>
      </form>
      <hr></hr>
    </div>
   
  );
}

export default CarForm;