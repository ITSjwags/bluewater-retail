import React, { Component } from 'react';
import Dots from './utils';
import './grid-bg.css';

class GridBG extends Component {
  componentDidMount() {
    new Dots('[data-dots]'); // eslint-disable-line no-new
  }

  render() {
    return <div className="ui-layer-1" data-dots />;
  }
}

export default GridBG;
