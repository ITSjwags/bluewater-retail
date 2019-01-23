import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlusSrc from '../../assets/plus.svg';

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.retail};
  font-size: 14px;
  margin-bottom: 46px;
  text-transform: uppercase;

  > span {
    background-color: ${({ theme }) => theme.colors.gray};
    display: inline-block;
    height: 1px;
    margin-right: 2px;
    vertical-align: middle;
    width: calc(100% - 9px);
  }
`;

const Headline = ({ text }) => (
  <Text>
    {text}
    <span />
    <img src={PlusSrc} alt="" />
  </Text>
);

Headline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headline;
