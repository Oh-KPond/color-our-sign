import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './ChooseColor.css';
import { CirclePicker } from 'react-color';

class ChooseColor extends Component {

  render() {
    return (
      <section className="landing">
        <CirclePicker />
        <img src={logo} className="choose-logo" alt="The Pond's Edge logo" />
      </section>
    )
  }
}

export default ChooseColor;
