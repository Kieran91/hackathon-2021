import React, { useReducer, useState } from 'react';
import axios from "axios"
const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

var baseUrlApi = "http://localhost:3001"

function Trades() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(formData))
    //{"trade":"HELLO","amount":"500000"}
    axios.post(baseUrlApi+"/bonds", formData)
    setSubmitting(true);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return(
    <div className="wrapper">
      <h1>Insight Investment</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Create Bond</p>
            <input name="name" onChange={handleChange} placeholder="Enter Bond Name"/>
            <input name="size" onChange={handleChange} placeholder="Enter Bond Size"/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {submitting &&
        <div>
        You are submitting the following:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default Trades;