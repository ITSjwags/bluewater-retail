import React, { Component } from 'react';
import GridBG from './grid-bg';

class Content extends Component {
  render() {
    return (
      <>
        <main>
          <GridBG />
          Content
        </main>
        <footer>
          Footer stuff
        </footer>
      </>
    );
  }
}

// Content.propTypes = {};

// Content.defaultProps = {};

export default Content;
