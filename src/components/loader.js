import React, { Component } from 'react';
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
  min-height: 520px;
  margin: 0 auto;
  padding: 24px;
  position: relative;
  max-width: 915px;
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const capacitorKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: rotate(19deg);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

const Capacitor = styled.img`
  animation: ${capacitorKeyframes} 1s ease-in-out 1s forwards;
  flex: 1;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  transform: rotate(19deg);
  max-width: 300px;
`;

class Loader extends Component {
  render() {
    return (
      <Container>
        <Video autoPlay loop muted playsInline>
          <source src={LoaderMp4} type="video/mp4" />
          <source src={LoaderWebM} type="video/webm" />
        </Video>
        <LoaderLine text="88 MPH" />
        <Capacitor src={CapacitorIcon} alt="Loading" />
        <LoaderLine bottom />
        <LoaderBar />
      </Container>
    );
  }
}

export default Loader;
