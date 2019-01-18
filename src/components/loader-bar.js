import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import TypeIt from 'typeit';

const boxKeyframes = keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;

const Box = styled.div`
  animation: ${boxKeyframes} 1s ease-in-out 2s forwards;
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
  padding: 24px 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: 0%;
  max-width: 327px;
`;

class LoaderBar extends Component {
  componentDidMount() {
    new TypeIt('.typeit', {
      strings: ['GENERATING 1.21 GIGAWATTS...', 'ACCELERATING TO 88 MPH...'],
      speed: 50,
      lifeLike: true,
      cursor: false,
      breakLines: false,
      nextStringDelay: 2000,
      startDelay: 3000,
      waitUntilVisible: true,
    }).go();
  }

  render() {
    return (
      <Box>
        <p className="typeit">Initializing Flux Capacitor...</p>
      </Box>
    );
  }
}

export default LoaderBar;
