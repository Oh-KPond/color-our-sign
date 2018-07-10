import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/PondsEdgeLogo.svg';
import './Countdown.css';
import Countdown from 'react-countdown-now';

class ChooseColor extends Component {

  render() {
    const countdownColor = {
      color: this.props.selectedColor,
    };

    const Completionist = () => <span><h2>Check out the Sign!</h2> <h3><a href="localhost:3000">And/Or Choose a new color!</a></h3></span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span><h2>Color change in</h2> <h2 style={countdownColor}>{hours} hours: {minutes} min: {seconds} sec</h2></span>;
      }
    };

    return (
      <section className="countdown">
        <section className="countdown__body">
          <Countdown
            date={Date.now() + 20000}
            renderer={renderer}
          />
          <h3>Thank you for helping us color our sign!!</h3>
        </section>

        <footer className="countdown__footer">
          <a href="http://www.thepondsedge.com/">
            <p>Find out more about us and our sign @</p>
            <img src={logo} className="countdown-logo" alt="The Pond's Edge logo" />
          </a>
        </footer>
      </section>
    )
  }
}

export default ChooseColor;

Countdown.propTypes = {
  selectedColor: PropTypes.string,
};
