import React, { useReducer, useState } from 'react';
import axios from "axios"


export default class CounterpartiesList extends React.Component {
  state = {
    users: []
  }

selectedCounterparties = []

  componentDidMount() {
    axios.get(`http://localhost:3001/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("Counter Parties selected")
    console.log(event.target.value)
  }

  render() {
    return (
      <ul>
        <form onSubmit={this.handleSubmit}>

          <label form="counterparty">Counterparties:</label>

          <select onChange={this.handleChange} multiple>
            {this.state.users.map(user => {
              return (
                <option key={user.id} value={user.company}> {user.company}</option>
              )
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </ul>


    )
  }
}