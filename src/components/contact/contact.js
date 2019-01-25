import React from 'react';
import styled from 'styled-components';
import Input from './input';
import LoaderMp4 from '../../assets/loader.mp4';
import LoaderWebM from '../../assets/loader.webm';

const Container = styled.article`
  overflow: hidden;
  position: relative;
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  @media (min-width: 769px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: normal;
  margin: 0 60px 0 0;

  @media (min-width: 769px) {
    margin: 0;
  }
`;

const TitleAlt = styled(Title)`
  color: ${({ theme }) => theme.colors.retail};
  display: inline-block;
  border-bottom: 4px solid ${({ theme }) => theme.colors.retail};
  margin-bottom: 75px;
`;

const Left = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;

  @media (min-width: 769px) {
    padding-left: 24px;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.retail};
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.retail} 50%,
    ${({ theme }) => theme.colors.retailDark} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  border: 0;
  cursor: pointer;
  margin: 16px 0 0 0;
  outline: 0;
  transition: all 300ms ease-out;
  width: 100%;

  &:hover {
    background-position: left bottom;
  }

  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 769px) {
    max-width: 192px;
  }
`;

const ButtonInner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  text-transform: uppercase;
`;

const Contact = () => (
  <Container>
    <Video autoPlay loop muted playsInline preload="auto">
      <source src={LoaderWebM} type="video/webm" />
      <source src={LoaderMp4} type="video/mp4" />
    </Video>
    <Wrapper>
      <Content>
        <Left>
          <Title>Want to learn more?</Title>
          <TitleAlt>Let&apos;s Talk.</TitleAlt>
        </Left>
        <Form>
          <Input
            type="text"
            label="First Name"
            name="firstName"
          />
          <Input
            type="text"
            label="Last Name"
            name="lastName"
          />
          <Input
            type="email"
            label="Email Address"
            name="email"
          />
          <Input
            type="tel"
            label="Phone Number"
            name="phone"
          />
          <Button>
            <ButtonInner>
              Submit my info
            </ButtonInner>
          </Button>
        </Form>
      </Content>
    </Wrapper>
  </Container>
);

export default Contact;
