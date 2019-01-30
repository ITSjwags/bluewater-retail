import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.button`
  background: ${({ theme }) => theme.colors.retail};
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.retail} 50%,
    ${({ theme }) => theme.colors.retailDark} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  border: 0;
  cursor: pointer;
  margin: 16px 0 0 0;
  outline: 0;
  transition: all 300ms ease-out;
  width: 100%;

  ${({ fullWidth }) => !fullWidth && css`
    max-width: 179px;
  `}

  &:hover {
    background-position: left bottom;
  }

  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.white};
  }

  ${({ fullWidth }) => fullWidth && css`
    @media (min-width: 769px) {
      max-width: 192px;
    }
  `}
`;

const Inner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  text-transform: uppercase;
`;

const Button = ({
  fullWidth,
  onClick,
  text,
  type,
}) => (
  <Container onClick={() => onClick()} fullWidth={fullWidth} type={type}>
    <Inner>
      {text}
    </Inner>
  </Container>
);

Button.propTypes = {
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => {},
  type: '',
};

export default Button;
