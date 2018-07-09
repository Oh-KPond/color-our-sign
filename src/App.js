import React, { Component } from 'react';
import './App.css';
import ChooseColor from './components/ChooseColor.js';
import Countdown from './components/Countdown';


class App extends Component {
  constructor() {
    super();
    this.state = {
      color: {},
    };
  }

  selectedColor = (color) => {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Color Our Sign</span></h1>
        </header>
        <ChooseColor colorSelectionCallback={this.selectedColor}/>
      </section>
    );
  }
}

export default App;
