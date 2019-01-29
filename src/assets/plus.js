import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';

const Plus = ({ color }) => (
  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4 0H3V3H0V4H3V7H4V4H7V3H4V0Z" fill={color} />
  </svg>
);

Plus.propTypes = {
  color: PropTypes.string,
};

Plus.defaultProps = {
  color: theme.colors.retail,
};

export default Plus;
