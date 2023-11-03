import React, { useState } from "react";

function App() {
  let [formObject, setFormObject] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "Male",
  });
  const inputOnChange = (property, value) => {
    setFormObject((prevObj) => ({
      ...prevObj,
      [property]:value
    }));
  };

  const formOnSubmit=(e)=>{
    e.preventDefault()
    // console.log(formObject)
    alert(JSON.stringify(formObject))
  }
  return (
    <div className="container">
      <form onSubmit={formOnSubmit}>
        <input onChange={(e)=>{inputOnChange("fName",e.target.value)}} value={formObject.fName} placeholder="firstName" />
        <br />
        <input onChange={(e)=>{inputOnChange("lName",e.target.value)}} value={formObject.lName} placeholder="lastName" />
        <br />
        <select onChange={(e)=>{inputOnChange("city",e.target.value)}} value={formObject.city}>
          <option value="">chose city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="">Rangpur</option>
        </select>
        <br />
        <input onChange={()=>{inputOnChange("gender","Male")}}
          checked={formObject.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input onChange={()=>{inputOnChange("gender","Female")}}
          checked={formObject.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
