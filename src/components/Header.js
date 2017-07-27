import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="starwars-header">
        <h1>Star Wars</h1>
        <hr/>
        <p>The Vehicles of Star Wars</p>
      </div>
    )
  }
}
