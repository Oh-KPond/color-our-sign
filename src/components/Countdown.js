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

    const Completionist = () => <span className="countdown__clock-response">
                                  <h2 style={countdownColor}>Check out the Sign!</h2>
                                  <h3>
                                    <a href="/">Choose a New Color!</a>
                                  </h3>
                                  <h4 className="countdown__thank-you">Thank you for helping us color our sign!</h4>
                                </span>;

    const renderer = ({  minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span style={countdownColor} className="countdown__clock">
                <h2>Color change in</h2>
                <h2>{minutes} min: {seconds}&nbsp;sec</h2>
              </span>;
      }
    };

    return (
      <section className="countdown">
        <section className="countdown__body">
          <Countdown
            date={Date.now() + 10000}
            renderer={renderer}
          />
        </section>

        <footer className="countdown__footer">
          <a className="countdown__find-out-link" href="http://www.thepondsedge.com/" rel='noreferrer noopener' target="_blank">
            <img src={logo} className="countdown-logo" alt="The Pond's Edge logo" />
            <p className="countdown__find-out">Find out more about us and our sign!</p>
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
