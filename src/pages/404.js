import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LogoSrc from '../assets/logo.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: 520px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
  width: 100%;
  max-width: 360px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 90px;
  margin: 0;
  text-shadow: -1px 0 rgba(0, 0, 0, .16), 0 1px rgba(0, 0, 0, .16), 1px 0 rgba(0, 0, 0, .16), 0 -1px rgba(0, 0, 0, .16);
`;

const Headline = styled.h2`
  font-size: 40px;
  margin: 15px 0 0 0;
`;

const Text = styled.p`
  line-height: 1.95;
  margin: 10px 0 0 0;
`;

const Button = styled(Link)`
  background: ${({ theme }) => theme.colors.retail};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  margin: 50px auto 0;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  width: 179px;
`;

class NotFoundPage extends Component {
  componentDidMount() {
    this.setViewportHeight();
    window.addEventListener('resize', () => this.setViewportHeight());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setViewportHeight());
  }

  setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  render() {
    return (
      <Layout>
        <SEO title="Page Not found - Bluewater" />
        <Container>
          <img src={LogoSrc} alt="Bluewater" />
          <Content>
            <Title>404</Title>
            <Headline>Great Scott!</Headline>
            <Text>
              Looks like you traveled too far and the page you’re trying to visit doesn’t exist yet.
            </Text>
            <Button to="/">Take me back!</Button>
          </Content>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;
