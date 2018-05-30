import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }
// at each interval, startGame is updating state to this.getBinsState
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 800);
  }

// randomizing where the trash is placed at each interval
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = () => {
    let value = parseInt(this.state.points)
    this.setState({points: (value += 1) })
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`} isTrashVisible={bin.isTrashVisible} addPoints={this.onTrashClicked}
        id={index} />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
