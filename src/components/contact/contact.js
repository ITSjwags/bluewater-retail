import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Input from './input';
import Button from '../common/button';
import FormMp4 from '../../assets/form-bg.mp4';
import FormWebM from '../../assets/form-bg.webm';

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

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 100%;

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

const ErrorMessage = styled.p`
  color: red;
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Confirmation = styled.p`
  animation: ${fadeOut} 250ms ease-out reverse forwards;
  opacity: 0;

  ${({ sent }) => sent && css`
    animation: ${fadeOut} 250ms ease-out forwards;
  `}
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isSending: false,
      sent: false,
      error: null,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
    } = this.state;

    this.setState({
      isSending: true,
      sent: false,
    });

    fetch('/.netlify/functions/retail-leads', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
      }),
    })
      .then((res) => {
        const json = res.json();
        if (!res.ok) {
          throw new Error(`unable to submit form: ${json.message || ''}`);
        }
        return json;
      })
      .then(() => {
        this.setState({
          isSending: false,
          sent: true,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          error: '',
        });
        setTimeout(() => this.setState({ sent: false }), 4000);
      })
      .catch((err) => {
        // alert(err.message);
        console.error(err);
        this.setState({
          error: err.messsage,
          isSending: false,
          sent: false,
        });
      });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      isSending,
      sent,
      error,
    } = this.state;
    return (
      <Container>
        <Video autoPlay loop muted playsInline preload="auto">
          <source src={FormWebM} type="video/webm" />
          <source src={FormMp4} type="video/mp4" />
        </Video>
        <Wrapper>
          <Content>
            <Left data-aos="fade-right">
              <Title>Want to learn more?</Title>
              <TitleAlt>Let&apos;s Talk.</TitleAlt>
            </Left>
            <Form
              data-aos="fade-left"
              name="retail-contact"
              onSubmit={this.handleFormSubmit}
            >
              {error && (
                <ErrorMessage>
                  Great Scott! There was an error submitting the form. Please try again.
                </ErrorMessage>
              )}
              <Input
                type="text"
                label="First Name"
                name="firstName"
                inputValue={firstName}
                onInputChange={this.handleInputChange}
                required
              />
              <Input
                type="text"
                label="Last Name"
                name="lastName"
                inputValue={lastName}
                onInputChange={this.handleInputChange}
                required
              />
              <Input
                type="email"
                label="Email Address"
                name="email"
                inputValue={email}
                onInputChange={this.handleInputChange}
                required
              />
              <Input
                type="tel"
                label="Phone Number"
                name="phone"
                inputValue={phone}
                onInputChange={this.handleInputChange}
                required
              />
              <Button text={isSending ? 'Submitting...' : 'Submit my info'} type="submit" fullWidth />
              <Confirmation sent={sent}>
                Good news! Your info has successfully been sent from the future.
                You’ll be hearing from us soon.
              </Confirmation>
            </Form>
          </Content>
        </Wrapper>
      </Container>
    );
  }
}

export default Contact;
