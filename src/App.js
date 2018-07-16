import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ChooseColor from './components/ChooseColor.js';
import Countdown from './components/Countdown.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      color: {},
      hex:'#fff',
      countdown: '',
      error:''
    };
  }

  selectedColor = (set_color) => {
    this.setState({
      color: set_color.choice,
      hex: set_color.hex
    })

    let queue_color = JSON.stringify(set_color.choice)
    console.log(queue_color)
    axios.post('https://color-our-sign-api.herokuapp.com/queued_colors?color=' + queue_color)
      .then((response) => {
        console.log(response);
        this.setState({ countdown: response.data.countdown });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      })
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
        countdown={this.state.countdown}
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
