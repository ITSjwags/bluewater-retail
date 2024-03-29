import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-bottom: 16px;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  backdrop-filter: blur(16px);
  background:
    linear-gradient(to right, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 0,
    linear-gradient(to right, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 100%,
    linear-gradient(to left, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 0,
    linear-gradient(to left, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 0,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 0,
    linear-gradient(to top, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 100%,
    linear-gradient(to top, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 100%;
  background-color: rgba(0, 0, 0, 0.32);
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: 6px 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  height: 60px;
  line-height: 1.6;
  outline: 0;
  margin: 0;
  padding: 0 16px;
  position: relative;
  transition: all 0.3s ease;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.retail};
  }

  ${({ value }) => value && css`
    border-color: ${({ theme }) => theme.colors.white};
  `};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.retail};
  font-size: 8px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 16px;
  left: 16px;
  text-transform: uppercase;

  ${({ hasValue }) => hasValue && css`
    opacity: 1;
    top: 9px;
    transition: all 0.3s ease-in-out;
  `};
`;

const Input = ({
  label,
  name,
  type,
  inputValue,
  onInputChange,
  required,
}) => (
  <Container>
    <StyledInput
      onChange={e => onInputChange(e)}
      type={type}
      name={name}
      id={name}
      placeholder={label}
      value={inputValue || ''}
      required={required}
    />
    <Label htmlFor={name} hasValue={!!inputValue}>{label}</Label>
  </Container>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  inputValue: '',
  required: false,
};

export default Input;
