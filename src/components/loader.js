import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import LoaderMp4 from '../assets/loader.mp4';
import LoaderWebM from '../assets/loader.webm';

const Container = styled.div`
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

const open = keyframes`
  0% {
    max-width: 145px;
  }
  100% {
    max-width: 100%;
  }
`;

const TopBar = styled.div`
  animation: ${open} 1s cubic-bezier(0.23, 1, 0.32, 1) 1s forwards;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: auto;
  max-width: 145px;
`;

const Left = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  flex: 1;
  position: relative;

  &::after {
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    content: "";
    height: 6px;
    position: absolute;
    top: -1px;
    left: 0;
    width: 6px;
  }
`;

const Center = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.retail};
  font-size: 12px;
  font-weight: bold;
  margin: 0 21px;
  padding: 10px 24px;
  position: relative;
  text-align: center;

  &:before,
  &:after {
    background: ${({ theme }) => theme.colors.gray};
    content: "";
    display: block;
    height: calc(100% + 1px);
    position: absolute;
    top: 0;
    width: 1px;
  }

  &::before {
    left: -11px;
    transform: skew(30deg);
  }

  &::after {
    right: -11px;
    transform: skew(-30deg);
  }
`;

const Right = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  flex: 1;
  position: relative;

  &::after {
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.white};
    content: "";
    height: 6px;
    position: absolute;
    top: -1px;
    right: 0;
    width: 6px;
  }
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

        <TopBar>
          <Left />
          <Center>88 MPH</Center>
          <Right />
        </TopBar>
      </Container>
    );
  }
}

// Loader.propTypes = {};

// Loader.defaultProps = {};

export default Loader;
