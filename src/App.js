import React, { Component } from 'react';
import Circle from './components/Circle';
let colors = ["blue", "red", "yellow", "green"];
let interval = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      gameOver: false,
      activeCircle: 0,
      timer: 1000
    }
  }
  startGame = () => {
    interval = setInterval(this.setActiveCircle ,this.state.timer)
  }
  endGame = () => {

  }
  clickHandler = (id) => {
    console.log(id);
  } 


  setActiveCircle = () => {
    this.setState({
      activeCircle: (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
    });
  }
  render() {
    let circleList = colors.map((color, index) => {
      return (
        <Circle circleId={(index + 1)} clickHandler={this.clickHandler} key={index} bgColor={color} active={this.state.activeCircle === (index + 1) ? "active" : ""} />
      );
    });

    return (
      <div className="App">
       {circleList}
       <div>
         <button onClick={this.startGame}>Start Game</button>
       </div>
      </div>
    );
  }
}

export default App;
