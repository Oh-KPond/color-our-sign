import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PositionInQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postion: 0,
    };
  }

  render() {


    return (
      <section className="postion-in-queue">
        <p>There were { this.state.postion + 1} color changes in the queue before yours when the countdown started</p>
      </section>
    )
  }
}

export default PositionInQueue;

PositionInQueue.propTypes = {
  postionNum: PropTypes.number,
};
