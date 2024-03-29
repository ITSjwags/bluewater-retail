import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import Carousel from 'nuka-carousel';
import Headline from '../common/headline';
import Arrow from '../../assets/arrow';
import SlideData from './slideData';

const Container = styled.article`
  --padding: 24px;
  margin: 0 auto;
  padding: var(--padding);
  max-width: calc(var(--containerWidth) + var(--padding));
`;

const Content = styled.div`
  margin-bottom: 104px; /* 40px plus carousel bottom padding for button of 64px*/

  @media(min-width: 769px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const Tagline = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  margin-bottom: 46px;

  > span {
    color: ${({ theme }) => theme.colors.retail};
  }

  @media(min-width: 769px) {
    font-size: 40px;
    max-width: 400px;
  }
`;

const CarouselContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.retail};
  margin: 0 auto;
  padding-top: 8px;
  max-width: 418px;

  .slider-control-bottomright {
    bottom: -64px !important;
  }

  @media(min-width: 769px) {
    margin: 0;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 104px;
`;

const Control = styled.button`
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
  margin: 0;
  outline: 0;
  padding: 0;
  transition: all 300ms ease;

  &:hover {
    background-position: left bottom;
  }

  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.white};
  }

  ${({ disabled }) => disabled && css`
    background: ${({ theme }) => theme.colors.retailMedium};
    cursor: not-allowed;
  `}
`;

const ControlInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;
`;

const Next = styled(ControlInner)`
  transform: rotate(-90deg);
`;

const Prev = styled(ControlInner)`
  transform: rotate(90deg);
`;

const Slide = styled.div`
  background-color: ${({ theme }) => theme.colors.retail};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 14px;
  min-height: 430px;

  > img {
    display: block;
    flex: 1;
    max-height: 418px;
    object-fit: cover;
    max-width: 418px;
  }
`;

const Infobar = styled.div`
  padding: 24px;
`;

const About = ({ theme }) => (
  <Container>
    <Headline text="We are bluewater" />
    <Content>
      <Tagline data-aos="fade-right">
        We create unforgettable
        <span> retail </span>
        experiences.
      </Tagline>
      <CarouselContainer data-aos="fade-left">
        <Carousel
          enableKeyboardControls
          heightMode="max"
          initialSlideHeight={430}
          initialSlideWidth={418}
          renderAnnounceSlideMessage={({ currentSlide, slideCount }) => `Slide ${currentSlide + 1} of ${slideCount}`
          }
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          renderBottomRightControls={({
            nextSlide,
            previousSlide,
            currentSlide,
            slideCount,
          }) => {
            const prevDisabled = currentSlide === 0;
            const nextDisabled = currentSlide === slideCount - 1;
            return (
              <Controls>
                <Control onClick={previousSlide} disabled={prevDisabled}>
                  <Prev>
                    <Arrow color={prevDisabled ? theme.colors.retailMedium : theme.colors.white} />
                  </Prev>
                </Control>
                <Control onClick={nextSlide} disabled={nextDisabled}>
                  <Next>
                    <Arrow color={nextDisabled ? theme.colors.retailMedium : theme.colors.white} />
                  </Next>
                </Control>
              </Controls>
            );
          }}
        >
          {SlideData.map(({ id, name, url }) => (
            <Slide key={id}>
              <img src={url} alt={name} />
              <Infobar>{name}</Infobar>
            </Slide>
          ))}
        </Carousel>
      </CarouselContainer>
    </Content>
  </Container>
);

About.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }).isRequired,
};

export default withTheme(About);
