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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacus quis ex
            malesuada tincidunt. Sed tristique dolor quis sapien efficitur, at mollis dui auctor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacus quis ex
            malesuada tincidunt. Sed tristique dolor quis sapien efficitur, at mollis dui auctor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacus quis ex
            malesuada tincidunt. Sed tristique dolor quis sapien efficitur, at mollis dui auctor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacus quis ex
            malesuada tincidunt. Sed tristique dolor quis sapien efficitur, at mollis dui auctor.
          </p>
        </Copy>
      </Block>
    </Content>
  </Container>
);

export default Process;
