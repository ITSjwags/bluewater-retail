import React from 'react';
import styled from 'styled-components';
import Cover from './cover';
import BackgroundSrc from '../assets/bg.jpg';
import BackgroundLargeSrc from '../assets/bg-lg.jpg';

const Container = styled.section`
  background: ${({ theme }) => theme.colors.navy} url(${({ bg }) => bg}) top center;
  background-size: cover;
  position: relative;

  @media(min-width: 750px) {
    background: ${({ theme }) => theme.colors.navy} url(${({ bgL }) => bgL}) no-repeat top center;
    background-size: cover;
  }
`;

const Child = styled.div`
  color: white;
  padding: 24px;
  min-height: 200vh;
`;

const Content = () => (
  <>
    <Cover />
    <Container bg={BackgroundSrc} bgL={BackgroundLargeSrc} className="section">
      <Child>Add content here</Child>
      {/* <footer>
        Footer stuff
      </footer> */}
    </Container>
  </>
);

export default Content;
