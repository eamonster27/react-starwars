import React, { Component } from 'react';

export default class PilotName extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
