
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Rank from './components/Rank';

const particlesParameters = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  inputHandler = (event) =>{
    this.setState({input: event.target.value});
    console.log(event.target.value);
  } 

  render(){
    return (
      <div className="App">
          <Particles className='particles'
            params={particlesParameters} />
        <Navigation/>
        <Rank />
        <Search inputChange = {this.inputHandler}/>
      </div>
    );
  }
  
}

export default App;
