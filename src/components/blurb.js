import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.article`
  margin: 0 auto;
  padding: 24px;
  max-width: var(--containerWidth);
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: normal;
  margin: 0;

  ${({ alt, theme }) => alt && css`
  color: ${theme.colors.retail};
  `}
`;

const Copy = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.9;
  margin: 40px 0;
`;

const Blurb = () => (
  <Container>
    <Title>Brick & mortar isn’t dying.</Title>
    <Title alt>It’s evolving.</Title>
    <Copy>
      The way consumers engage, and what they value has fundamentally changed. Online & mobile
      strategies alone aren’t enough. Today’s retailers must leverage technology forward design to
      create the digitally integrated in-store experiences that appeal to this new type of retail
      customer.
    </Copy>
  </Container>
);

export default Blurb;
