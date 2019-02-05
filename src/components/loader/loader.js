import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import LoaderLine from './loader-line';
import LoaderBar from './loader-bar';
import LoaderMp4 from '../../assets/loader.mp4';
import LoaderWebM from '../../assets/loader.webm';
import CapacitorIcon from '../../assets/capacitor.svg';
import CapacitorAlignmentIcon from '../../assets/capacitor-alignment.svg';

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

  ${({ hide }) => hide && css`
    animation: ${fadeIn} 250ms linear reverse forwards;
  `}
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CapacitorContainer = styled.div`
  align-items: center;
  animation: ${fadeIn} 1s linear forwards;
  display: flex;
  flex: 1;
  opacity: 0;
  position: relative;
`;

const Capacitor = styled.img`
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto;
  position: relative;
  transform: rotate(19deg);
  max-width: 300px;
`;

const CapacitorAlignment = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
`;

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideContent: false,
      isVideoPlaying: false,
    };
    this.player = React.createRef();
  }

  componentDidMount() {
    this.player.current.addEventListener('playing', () => {
      this.setState({ isVideoPlaying: true });
    });
    this.setLoadingStatus();
  }

  setLoadingStatus = () => {
    const b = setInterval(() => {
      console.info(this.player.current.currentTime);
      if (this.player.current.currentTime >= 4.9) {
        this.setState({ hideContent: true });
        clearInterval(b);
      }
    }, 250);
  }

  render() {
    const { hideContent, isVideoPlaying } = this.state;

    return (
      <>
        <Video autoPlay muted playsInline preload="auto" ref={this.player}>
          <source src={LoaderWebM} type="video/webm" />
          <source src={LoaderMp4} type="video/mp4" />
        </Video>
        {isVideoPlaying && (
          <Container hide={hideContent}>
            <LoaderLine number={88} />
            <CapacitorContainer>
              <Capacitor src={CapacitorIcon} alt="Loading" />
              <CapacitorAlignment src={CapacitorAlignmentIcon} alt="" />
            </CapacitorContainer>
            <LoaderLine bottom />
            <LoaderBar />
          </Container>
        )}
      </>
    );
  }
}

export default Loader;
