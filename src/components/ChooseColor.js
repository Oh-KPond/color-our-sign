import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/bwPondsEdgeLogo.svg';
import './ChooseColor.css';
import { CirclePicker } from 'react-color';

class ChooseColor extends Component {
  state = {
    choice: { r: 0, g: 0, b: 0 }, // rainbow easter egg to show rainbow colors
    hex: '#03a9f4',
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
    const circleSize = 50

    return (
      <section className="splash">
        <section className="splash__body">
          <CirclePicker
          className="splash__color-picker"
          width="415px"
          circleSpacing={circleSpacing}
          circleSize={circleSize}
          colors=
          {[
            "#ff0000", "#ffa500", "#ffeb3b",
            "#00ff00", "#006600", "#009688",
            "#03a9f4", "#0000ff", "#c268ba",
            "#551a8b", "#ff00ff",  "#e91e63"
          ]}
          color={ this.state.choice }
          onChangeComplete={ this.handleChangeComplete }/>

          <form onSubmit={this.onFormSubmit}>
            <div className="sumbit-form">
              <input style={buttonColor} className="sumbit-form__sumbit" type="submit" value="Change The Sign!" />
            </div>
          </form>
        </section>

        <section className="splash__logo-container">
          <a href="http://www.thepondsedge.com/" rel='noreferrer noopener' target="_blank">
            <img src={logo} className="choose-logo" alt="The Pond's Edge logo" />
          </a>
        </section>
      </section>
    )
  }
}

export default withRouter(ChooseColor);

ChooseColor.propTypes = {
  colorSelectionCallback: PropTypes.func.isRequired,
  history: PropTypes.object,
};
