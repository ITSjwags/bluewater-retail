import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme';

const Arrow = ({ color }) => (
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.666103 0L0 0.61546L7.99323 8.00098L8.27573 7.73995L15.9999 0.615393L15.3333 0.000479027L7.99358 6.77038L0.666103 0Z" fill={color} />
  </svg>
);

Arrow.propTypes = {
  color: PropTypes.string,
};

Arrow.defaultProps = {
  color: theme.colors.retail,
};

export default withTheme(Arrow);
