import React, { Component } from 'react';
import '../styles/App.css';

export default class Vehicles extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);
    this.state = {vehicles: []};
  };

  componentWillMount(){
    console.log("componentWillMount");
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  // componentDidMount(){
  //   fetch("https://swapi.co/api/vehicles/")
  //   .then(function(response){
  //     return response.json
  //   })
  //   .then(function(json){
  //     this.setState({vehicles: json.results});
  //   })
  // }
  componentDidMount(){
    console.log("componentDidMount");
    fetch("https://swapi.co/api/vehicles/")
    .then(response => response.json())
    .then(json => {
      this.setState({vehicles: json.results});
    })
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

    // RENDER
    // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
    // Map over the data.
    // Don't forget to set the 'key'. In this case, use the vehicle name.
    // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
    // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
    // Enter your code below:

    render() {
      /*
      Store vehicles state in a variable.
      Map over this variable to access the values needed to render.
      */
      return (
        <div id="vehicles-container">
          {this.state.vehicles.map((vehicle) => {
            return <div className="vehicle" key={vehicle.url}>
              <h5>Vehicle: {vehicle.name}</h5>
              <h6>Model: {vehicle.model}</h6>
              <div class="specs">
                <ul>
                  <li>Manufacturer: {vehicle.manufacturer}</li>
                  <li>Class: {vehicle.vehicle_class}</li>
                  <li>Passengers: {vehicle.passengers}</li>
                  <li>Crew: {vehicle.crew}</li>
                  <li>Length: {vehicle.length}</li>
                  <li>Max Speed: {vehicle.max_atmosphering_speed}</li>
                  <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
                </ul>
              </div>
            </div>
          })}
        </div>
      );
    }
}
