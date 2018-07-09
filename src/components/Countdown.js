import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/PondsEdgeLogo.svg';
import './Countdown.css';

class ChooseColor extends Component {


  render() {

    return (
      <section className="countdown">
        <section className="countdown__body">
        </section>

        <footer className="countdown__footer">
          <a href="http://www.thepondsedge.com/">
            <img src={logo} className="countdown-logo" alt="The Pond's Edge logo" />
          </a>
        </footer>
      </section>
    )
  }
}

export default ChooseColor;
