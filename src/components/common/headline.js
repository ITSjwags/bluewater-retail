import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import PlusIcon from '../../assets/plus';

const Text = styled.h3`
  color: ${({ color, theme }) => color || theme.colors.retail};
  font-size: 14px;
  margin-bottom: 46px;
  overflow: hidden;
  text-transform: uppercase;

  > span:first-of-type {
    background-color: ${({ theme }) => theme.colors.gray};
    display: inline-block;
    height: 1px;
    margin-right: 2px;
    vertical-align: middle;
    width: calc(100% - 9px);
  }
`;

const Headline = ({ color, text }) => (
  <Text color={color} data-aos="fade">
    {text}
    <span data-aos="slide-right" />
    <span data-aos="fade" data-aos-delay="500">
      <PlusIcon color={color} />
    </span>
  </Text>
);

Headline.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Headline.defaultProps = {
  color: undefined,
};

export default withTheme(Headline);
