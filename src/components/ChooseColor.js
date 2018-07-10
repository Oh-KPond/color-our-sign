import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/bwPondsEdgeLogo.svg';
import './ChooseColor.css';
import { CirclePicker } from 'react-color';

class ChooseColor extends Component {
  state = {
    choice: { r: 51, g: 51, b: 51 },
    hex: '#4A494A'
  };

  handleChangeComplete = (color) => {
    this.setState({ choice: color.rgb });
    this.setState({ hex: color.hex });
  };

  valid = () => {
    if( (typeof this.state.choice === "object") && (this.state.choice !== null) ){
    return true;
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.valid ()) {
      this.props.colorSelectionCallback(this.state);
      this.props.history.push('/response');
    }
  }

  render() {
    const buttonColor = {
      backgroundColor: this.state.hex,
    };

    return (
      <section className="start">
        <section className="start__body">
          <CirclePicker
          className="start__color-picker"
          color={ this.state.choice }
          onChangeComplete={ this.handleChangeComplete }/>

          <form onSubmit={this.onFormSubmit}>
            <div className="sumbit-form">
              <input style={buttonColor} className="sumbit-form__sumbit" type="submit" value="Change The Sign!" />
            </div>
          </form>
        </section>

        <footer className="start__footer">
          <a href="http://www.thepondsedge.com/" rel='noreferrer noopener' target="_blank">
            <img src={logo} className="choose-logo" alt="The Pond's Edge logo" />
          </a>
        </footer>
      </section>
    )
  }
}

export default withRouter(ChooseColor);

ChooseColor.propTypes = {
  colorSelectionCallback: PropTypes.func.isRequired,
};
