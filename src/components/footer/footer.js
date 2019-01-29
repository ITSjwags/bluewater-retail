import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Headline from '../common/headline';
import LogoSrc from '../../assets/logo-full.svg';
import WOSrc from '../../assets/women-owned.svg';

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.grayMedium};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 30px;
`;

const Content = styled.div`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));

  @media (min-width: 769px) {
    display: flex;
  }
`;

const Left = styled.div`
  @media (min-width: 769px) {
    order: 1;
    margin: 18px 49px 0 0;
  }
`;

const Right = styled.div`
  @media (min-width: 769px) {
    order: 2;
    flex: 1;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.78;
  margin: 0;
`;

const Logo = styled.img`
  display: none;

  @media(min-width: 769px) {
    display: block;
  }
`;

const ExitLink = styled.a`
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.04em;
  margin-top: 56px;
  text-decoration: none;
  text-transform: uppercase;
`;

const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  margin-top: 48px;
  padding: 48px 24px;
  text-align: center;

  @media(min-width: 550px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 32px;

    > img {
      order: 2;
    }
  }
`;

const Footer = ({ theme }) => (
  <Container>
    <Content>
      <Right>
        <Headline text="What we do" color={theme.colors.secondary} />
        <Text>
          We’ve built our house around creating better experiences. Bluewater is the only
          woman-owned (WBENC) organization of its kind, operating four industry-leading business
          units that support sensory storytelling through digital & physical canvases.
        </Text>
      </Right>
      <Left>
        <Logo src={LogoSrc} alt="Bluewater" />
        <ExitLink href="https://bluewatertech.com/">Check out our website</ExitLink>
      </Left>
    </Content>
    <BottomBar>
      <img src={WOSrc} alt="Women Owned Business" />
      <p>&copy; 2019 Bluewater. BlueWater Technologies Group, Inc.</p>
    </BottomBar>
  </Container>
);

Footer.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }).isRequired,
};

export default withTheme(Footer);
