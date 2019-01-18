import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import LoaderLine from './loader-line';
import LoaderBar from './loader-bar';
import LoaderMp4 from '../assets/loader.mp4';
import LoaderWebM from '../assets/loader.webm';
import CapacitorIcon from '../assets/capacitor.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 24px;
  position: relative;
`;

const VideoWrapper = styled.div`
  &::after {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const rotate = keyframes`
  0% {
    transform: rotate(19deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Capacitor = styled.img`
  animation: ${rotate} 1s ease-in-out 1s forwards;
  flex: 1;
  position: relative;
  transform: rotate(19deg);
`;

class Loader extends Component {
  render() {
    return (
      <Container>
        <VideoWrapper>
          <Video autoPlay loop muted playsInline>
            <source src={LoaderMp4} type="video/mp4" />
            <source src={LoaderWebM} type="video/webm" />
          </Video>
        </VideoWrapper>
        <LoaderLine text="88 MPH" />
        <Capacitor src={CapacitorIcon} alt="Loading" />
        <LoaderLine bottom />
        <LoaderBar />
      </Container>
    );
  }
}

// Loader.propTypes = {};

// Loader.defaultProps = {};

export default Loader;
