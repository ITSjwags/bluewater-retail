import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: normal;
  margin: 0;

  @media(min-width: 768px) {
    font-size: 64px;
  }
`;

const TitleAlt = styled(Title)`
  color: ${({ theme }) => theme.colors.retail};
`;

const Copy = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.9;
  margin: 40px 0;
`;

const Blurb = () => (
  <Container>
    <Title>Brick & mortar isn’t dying.</Title>
    <TitleAlt>It’s evolving.</TitleAlt>
    <Copy>
      The way consumers engage, and what they value has fundamentally changed. Online & mobile
      strategies alone aren’t enough. Today’s retailers must leverage technology forward design to
      create the digitally integrated in-store experiences that appeal to this new type of retail
      customer.
    </Copy>
  </Container>
);

export default Blurb;
