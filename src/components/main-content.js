import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cover from './cover';
import BackgroundSrc from '../assets/bg.png';
import BackgroundLargeSrc from '../assets/bg-lg.png';
import LogoSrc from '../assets/logo-full.svg';
import Blurb from './blurb';
import About from './about';
import Process from './process';
import Clients from './clients';
import Contact from './contact';
import Footer from './footer';

const slideOut = keyframes`
  0% {
    transform: translateY(calc(100% - 8px));
  }
  25%, 75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150%);
  }
`;

const BottomBar = styled.span`
  background-color: ${({ theme }) => theme.colors.retail};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  transform: translateY(calc(100% - 8px));
  transition: all 250ms ease-out;
  width: 100%;

  ${({ animateUp }) => animateUp && css`
    animation: ${slideOut} 2s ease-in-out forwards;
  `}
`;

const Content = styled.section`
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

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateUp: false,
      showContent: false,
    };
  }

  componentDidMount() {
    AOS.init({
      useClassNames: false,
      mirror: true,
      offset: 100,
      duration: 500,
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  onCoverClick = () => {
    this.setState({ animateUp: true });
    setTimeout(() => this.setState({ showContent: true }), 1000);
  }

  render() {
    const { animateUp, showContent } = this.state;
    return (
      <>
        {!showContent ? (
          <Cover onActionClick={this.onCoverClick} />
        ) : (
          <Content bg={BackgroundSrc} bgL={BackgroundLargeSrc}>
            <Header>
              <img
                src={LogoSrc}
                alt="Bluewater"
                data-aos="fade-down"
                data-aos-offset="0"
              />
            </Header>
            <Blurb />
            <About />
            <Process />
            <Clients />
            <Contact />
            <Footer />
          </Content>
        )}
        <BottomBar ref={this.bar} animateUp={animateUp} />
      </>
    );
  }
}

export default MainContent;
