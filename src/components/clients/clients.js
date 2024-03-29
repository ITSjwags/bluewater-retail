import React from 'react';
import styled from 'styled-components';
import Headline from '../common/headline';
import images from './images';

const Container = styled.article`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));
`;

const Content = styled.div`
  color: white;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-bottom: 40px;
`;

const ImageBlock = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Clients = () => (
  <Container>
    <Headline text="Who we do it for" />
    <Content>
      {images.map(({ id, name, url }) => (
        <ImageBlock key={id} data-aos="fade-right" data-aos-delay={id * 50}>
          <img src={url} alt={name} />
        </ImageBlock>
      ))}
    </Content>
  </Container>
);

export default Clients;
