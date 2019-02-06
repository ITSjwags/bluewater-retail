import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import TypeIt from 'typeit';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const loading = keyframes`
  0% {
    background-position: right bottom;
  }
  100% {
    background-position: left bottom;
  }
`;

const Box = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
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
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: bold;
  min-height: 100px;
  margin: 24px auto 0;
  opacity: 0;
  padding: 24px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  max-width: 327px;
`;

const LoadingStatus = styled.div`
  animation: ${loading} 4.9s linear forwards;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.gray} 50%,
    ${({ theme }) => theme.colors.retail} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  height: 8px;
  width: 100%;
`;

class LoaderBar extends Component {
  componentDidMount() {
    new TypeIt('.typeit', {
      strings: ['GENERATING 1.21 GIGAWATTS...'],
      speed: 50,
      lifeLike: true,
      cursor: false,
      breakLines: false,
      nextStringDelay: 1000,
    }).go();
  }

  render() {
    return (
      <Box>
        <p className="typeit">Initializing Flux Capacitor...</p>
        <LoadingStatus />
      </Box>
    );
  }
}

export default LoaderBar;
