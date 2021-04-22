import React, { Component } from 'react'

export default class Bonds extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('You have submitted a bond to the counterparties: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value)
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter Bonds:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

//BELCO 3X DNVE