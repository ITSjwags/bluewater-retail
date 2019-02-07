import React from 'react';
import styled from 'styled-components';
import Headline from './common/headline';
import ChatSrc from '../assets/icon-chat.svg';
import PencilSrc from '../assets/icon-pencil.svg';
import TechSrc from '../assets/icon-tech.svg';
import ToolsSrc from '../assets/icon-tools.svg';

const Container = styled.article`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};

  @media(min-width: 769px) {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
  }
`;

const Block = styled.div`
  display: flex;
  margin-bottom: 56px;

  @media(min-width: 769px) {
    flex: 1;
    min-width: 250px;
    max-width: 425px;

    &:nth-of-type(odd) {
      margin-right: 72px;
    }
  }
`;

const Icon = styled.div`
  align-items: center;
  background:
    linear-gradient(to right, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 0 0,
    linear-gradient(to right, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 0 100%,
    linear-gradient(to left, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 100% 0,
    linear-gradient(to left, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 0 0,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 100% 0,
    linear-gradient(to top, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 0 100%,
    linear-gradient(to top, ${({ theme }) => theme.colors.retail} 1px, transparent 1px) 100% 100%;
  background-color: ${({ theme }) => theme.colors.retailMedium};
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: 6px 6px;
  border: 1px solid ${({ theme }) => theme.colors.retailLight};
  display: flex;
  flex-shrink: 0;
  height: 56px;
  justify-content: center;
  margin-right: 22px;
  width: 56px;
`;

const Copy = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  > h4 {
    margin: 0;
    text-transform: uppercase;
  }

  > p {
    line-height: 1.9;
  }
`;

const Process = () => (
  <Container>
    <Headline text="How we do it" />
    <Content>
      <Block data-aos="fade-down-right">
        <Icon>
          <img src={ChatSrc} alt="Consultation" />
        </Icon>
        <Copy>
          <h4>Consultation</h4>
          <p>
            Transforming the retail experience doesn’t occur by happenstance, & there’s certainly
            not any kind of one-size-fits-all approach. We’ve built a great process to help align
            around the desired outcomes.
          </p>
        </Copy>
      </Block>
      <Block data-aos="fade-down-left">
        <Icon>
          <img src={PencilSrc} alt="Design" />
        </Icon>
        <Copy>
          <h4>Design</h4>
          <p>
            You shouldn’t have to sacrifice store aesthetics to make an impact with the new shopper.
            Our technology forward design approach keeps things looking just as good as they work.
          </p>
        </Copy>
      </Block>
      <Block data-aos="fade-up-right">
        <Icon>
          <img src={TechSrc} alt="Technology" />
        </Icon>
        <Copy>
          <h4>Technology</h4>
          <p>
            It’s not much of a surprise that the new retail is heavily driven by technology. With so
            many options available it can be difficult to nagivate. We help retailers by taking the
            guess work out of tech.
          </p>
        </Copy>
      </Block>
      <Block data-aos="fade-up-left">
        <Icon>
          <img src={ToolsSrc} alt="Fabrication" />
        </Icon>
        <Copy>
          <h4>Fabrication</h4>
          <p>
            Technology & fabrication? Our roots happen to be in both. We’re setup to design,
            engineer, and manufature our own fixtures in house. From one off environments, to
            fixtures programs at scale.
          </p>
        </Copy>
      </Block>
    </Content>
  </Container>
);

export default Process;
