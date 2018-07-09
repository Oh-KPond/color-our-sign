import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import './ChooseColor.css';
import { CirclePicker } from 'react-color';

class ChooseColor extends Component {
  state = {
    choice: { r: 51, g: 51, b: 51 },
  };

  handleChangeComplete = (color) => {
    this.setState({ choice: color.rgb });
  };

  valid = () => {
    if( (typeof this.state.choice === "object") && (this.state.choice !== null) ){
    return true;
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.valid ()) {

      this.props.colorSelectionCallback(this.state.choice);
    }
  }

  render() {
    return (
      <section className="landing">
        <section>
          <CirclePicker
          color={ this.state.choice }
          onChangeComplete={ this.handleChangeComplete }/>

          <form onSubmit={this.onFormSubmit}>
            <div className="sumbit-form">
            <input className="sumbit-form__sumbit" type="submit" value="Change The Sign!" />
            </div>
          </form>
        </section>

        <footer className="landing__logo">
          <a href="http://www.thepondsedge.com/">
            <img src={logo} className="choose-logo" alt="The Pond's Edge logo" />
          </a>
        </footer>
      </section>
    )
  }
}

export default ChooseColor;

ChooseColor.propTypes = {
  colorSelectionCallback: PropTypes.func.isRequired,
};
