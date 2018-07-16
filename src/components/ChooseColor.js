import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/bwPondsEdgeLogo.svg';
import './ChooseColor.css';
import { CirclePicker } from 'react-color';

class ChooseColor extends Component {
  state = {
    choice: { r: 51, g: 51, b: 51 },
    hex: '#4A494A',
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

    const circleSpacing = 35

    return (
      <section className="splash">
        <section className="splash__body">
          <CirclePicker
          width="415px"
          circleSpacing={circleSpacing}
          colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"]}
          className="splash__color-picker"
          color={ this.state.choice }
          onChangeComplete={ this.handleChangeComplete }/>

          <form onSubmit={this.onFormSubmit}>
            <div className="sumbit-form">
              <input style={buttonColor} className="sumbit-form__sumbit" type="submit" value="Change The Sign!" />
            </div>
          </form>
        </section>

        <footer className="splash__footer">
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
  history: PropTypes.object,
};
