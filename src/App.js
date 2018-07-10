import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ChooseColor from './components/ChooseColor.js';
import Countdown from './components/Countdown.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      color: {},
      hex:'#fff'
    };
  }

  selectedColor = (color) => {
    this.setState({
      color: color.choice,
      hex: color.hex
    });
  }

  render() {
    const Splash = () => (
      <ChooseColor
        colorSelectionCallback={this.selectedColor}
      />
    )

    const Response = () => (
      <Countdown
        selectedColor={this.state.hex}
      />
    )

    return (
      <Router>
        <section>
          <header className="header">
            <h1 className="header__h1">
              <Link to="/"><span className="header__text">Color Our Sign</span></Link>
            </h1>
          </header>
          <Route exact path="/" component={Splash} />
          <Route path="/response" component={Response} />
        </section>
      </Router>
    );
  }
}

export default App;
