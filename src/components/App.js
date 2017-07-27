import React, {Component} from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Form from './Form.js';
import Vehicles from './Vehicles.js';


class App extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Vehicles />
      </div>
    );
  }
}

export default App;
