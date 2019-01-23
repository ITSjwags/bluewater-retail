import React from 'react';
import styled, { keyframes } from 'styled-components';
import GridBG from './grid-bg';
import LogoSrc from '../assets/logo.svg';
import ArrowSrc from '../assets/arrow.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(3px);
  }
`;

const Container = styled.section`
  animation: ${fadeIn} 1.5s ease-in-out 1s forwards;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: 520px;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  text-align: center;
  width: 100%;
`;

const PaddedWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: calc(24px + 1vw);
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;

  > span {
    display: block;
    font-size: calc(70px + 5vw);
    font-weight: bold;
  }
`;

const ScrollText = styled.span`
  color: ${({ theme }) => theme.colors.retail};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ScrollImg = styled.img`
  animation: ${bounce} 1s ease-out alternate infinite;
  display: block;
  margin: 5px auto 0;
`;

const BottomBar = styled.span`
  background-color: ${({ theme }) => theme.colors.retail};
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 250ms ease-out;
  transform: scaleY(0.01);
  transform-origin: bottom;
  width: 100%;
`;

const Cover = () => (
  <div className="section">
    <GridBG />
    <Container>
      <PaddedWrapper>
        <img src={LogoSrc} alt="Bluewater" />
      </PaddedWrapper>
      <Content>
        <Title>
          Welcome to the
          <span>future</span>
          of retail
        </Title>
      </Content>
      <PaddedWrapper>
        <ScrollText>Scroll</ScrollText>
        <ScrollImg src={ArrowSrc} alt="Scroll down" />
      </PaddedWrapper>
      <BottomBar />
    </Container>
  </div>
);

export default Cover;
