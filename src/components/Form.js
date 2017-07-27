import React, { Component } from 'react';
import PilotName from './PilotName.js'

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      pilot: '',
      value: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event){
    this.setState({value: event.target.value});
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event){
    event.preventDefault();
    this.setState({pilot: this.state.value});
    this.setState({value: ''});
  }

  render(){
    return (
      <div id="starwars-form-container">
        <form id="starwars-form" onSubmit={this.handleSubmit}>
          <label for="yourName">What is your name, pilot?</label>

          <input onChange={this.handleNameChange} value={this.state.value} type="text" name="yourName" placeholder="Enter your name" />

          <input type="submit" value="Submit" />
          <PilotName name={this.state.pilot} />
        </form>

      </div>
    )
  }
}
