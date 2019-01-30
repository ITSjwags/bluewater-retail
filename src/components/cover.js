import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridBG from './grid-bg';
import LogoSrc from '../assets/logo.svg';
import Button from './common/button';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: 520px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 100%;
`;

const PaddedWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
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
      <PaddedWrapper
        data-aos="fade-down"
        data-aos-delay="2000"
        data-aos-offset="0"
      >
        <img src={LogoSrc} alt="Bluewater" />
      </PaddedWrapper>
      <Content>
        <Title
          data-aos="fade"
          data-aos-delay="1500"
          data-aos-duration="1000"
        >
          Welcome to the
          <span>future</span>
          of retail
        </Title>
      </Content>
      <PaddedWrapper
        data-aos="fade-up"
        data-aos-delay="2000"
        data-aos-offset="-100"
      >
        <Button
          text="Show Me"
          onClick={() => onActionClick()}
        />
      </PaddedWrapper>
    </Container>
  </>
);

Cover.propTypes = {
  onActionClick: PropTypes.func.isRequired,
};

export default Cover;
