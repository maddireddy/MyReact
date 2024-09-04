import React, { useState } from "react";
function UpdateObjects() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event){

    setCar(c => ({...car, year: event.target.value}));

  }

  function handleMakeChange(event){

    setCar(c => ({...car, make: event.target.value}));

  }

  function handleModelChange(event){

    setCar(c => ({...car, model: event.target.value}));

  }

  return (
    <div>
      My Car Year : {car.year} Model : {car.model} and Make {car.make}<br/>
      <input value={car.year} type="number" onChange={handleYearChange}/><br/>
      <input value={car.make} type="text" onChange={handleMakeChange}/><br/>
      <input value={car.model} type="text" onChange={handleModelChange}/><br/>
    </div>
  );
}
export default UpdateObjects;
