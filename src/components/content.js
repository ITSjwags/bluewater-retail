import React from 'react';
import styled from 'styled-components';
import Cover from './cover';
import BackgroundSrc from '../assets/bg.jpg';
import BackgroundLargeSrc from '../assets/bg-lg.jpg';
import LogoSrc from '../assets/logo-full.svg';
import Blurb from './blurb';

const Container = styled.section`
  background: ${({ theme }) => theme.colors.navy} url(${({ bg }) => bg}) top center;
  background-size: cover;
  position: relative;

  @media(min-width: 750px) {
    background: ${({ theme }) => theme.colors.navy} url(${({ bgL }) => bgL}) no-repeat top center;
    background-size: cover;
  }
`;

const Header = styled.header`
  padding: 24px;
`;

const Content = () => (
  <>
    <Cover />
    <div className="section">
      <Container
        bg={BackgroundSrc}
        bgL={BackgroundLargeSrc}
      >
        <Header><img src={LogoSrc} alt="Bluewater" /></Header>
        <Blurb />

        {/* <footer>
          Footer stuff
        </footer> */}
      </Container>
    </div>
  </>
);

export default Content;
