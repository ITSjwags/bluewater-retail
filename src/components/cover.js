import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import GridBG from './grid-bg';
import LogoSrc from '../assets/logo.svg';
import Button from './common/button';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

const Cover = ({ onActionClick }) => (
  <>
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
        <Button text="Show Me" onClick={() => onActionClick()} />
      </PaddedWrapper>
    </Container>
  </>
);

Cover.propTypes = {
  onActionClick: PropTypes.func.isRequired,
};

export default Cover;
