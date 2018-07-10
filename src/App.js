import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
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
            <h1 className="header__h1"><span className="header__text">Color Our Sign</span></h1>
          </header>
          <Switch>
            <Route path="/splash" component={Splash} />
            <Route path="/countdown" component={Response} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
