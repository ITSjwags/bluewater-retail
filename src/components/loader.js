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

const rotate = keyframes`
  0% {
    transform: rotate(19deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(19deg);
  }
  75% {
    transform: rotate(38deg);
  }
  100% {
    transform: rotate(19deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Capacitor = styled.img`
  animation:
    ${rotate} 4s linear 2s infinite,
    ${fadeIn} 1s linear 1s forwards;
  flex: 1;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  transform: rotate(19deg);
  max-width: 300px;
`;

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoLoaded: false,
    };
  }

  setLoadingStatus = (e) => {
    const player = e.target;
    const b = setInterval(() => {
      if (player.readyState >= 3) {
        this.setState({ isVideoLoaded: true });
        clearInterval(b);
      }
    }, 500);
  }

  render() {
    const { isVideoLoaded } = this.state;

    return (
      <>
        <Video autoPlay loop muted playsInline preload="auto" onLoadedData={this.setLoadingStatus}>
          <source src={LoaderWebM} type="video/webm" />
          <source src={LoaderMp4} type="video/mp4" />
        </Video>
        {isVideoLoaded && (
          <Container>
            <LoaderLine number={88} />
            <Capacitor src={CapacitorIcon} alt="Loading" />
            <LoaderLine bottom />
            <LoaderBar />
          </Container>
        )}
      </>
    );
  }
}

export default Loader;
