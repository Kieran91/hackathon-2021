import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Bonds() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(formData))
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
            <p>Trades</p>
            <input name="trade" onChange={handleChange}/>
            <input name="size" onChange={handleChange}/>

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

export default Bonds;