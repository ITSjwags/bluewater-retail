import React from 'react';
import styled from 'styled-components';
import Cover from './cover';
import BackgroundSrc from '../assets/bg.jpg';
import BackgroundLargeSrc from '../assets/bg-lg.jpg';
import LogoSrc from '../assets/logo-full.svg';
import Blurb from './blurb';
import About from './about';
import Process from './process';

const Container = styled.section`
  background: ${({ theme }) => theme.colors.navy} url(${({ bg }) => bg}) no-repeat top center;
  background-size: contain;
  position: relative;

  @media(min-width: 768px) {
    background: ${({ theme }) => theme.colors.navy} url(${({ bgL }) => bgL}) no-repeat top center;
    background-size: contain;
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
        <About />
        <Process />

        {/* <footer>
          Footer stuff
        </footer> */}
      </Container>
    </div>
  </>
);

export default Content;
