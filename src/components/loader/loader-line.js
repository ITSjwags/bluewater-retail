import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import CountUp from 'react-countup';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Bar = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  opacity: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Left = styled.span`
  ${({ bottom, theme }) => bottom && css`
    border-bottom: 1px solid ${theme.colors.gray};
  `};
  ${({ bottom, theme }) => !bottom && css`
    border-top: 1px solid ${theme.colors.gray};
  `};
  flex: 1;
  position: relative;

  &::after {
    ${({ bottom, theme }) => bottom && css`
      border-bottom: 1px solid ${theme.colors.white};
      bottom: -1px;
    `};
    ${({ bottom, theme }) => !bottom && css`
      border-top: 1px solid ${theme.colors.white};
      top: -1px;
    `};
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    content: "";
    height: 6px;
    position: absolute;
    left: 0;
    width: 6px;
  }
`;

const Center = styled.span`
  ${({ bottom, theme }) => bottom && css`
    border-top: 1px solid ${theme.colors.gray};
  `};
  ${({ bottom, theme }) => !bottom && css`
    border-bottom: 1px solid ${theme.colors.gray};
  `};
  color: ${({ theme }) => theme.colors.retail};
  font-size: 12px;
  font-weight: bold;
  min-height: 36px;
  margin: 0 21px;
  padding: 10px 24px;
  position: relative;
  text-align: center;
  min-width: 148px;

  &:before,
  &:after {
    background: ${({ theme }) => theme.colors.gray};
    content: "";
    display: block;
    height: calc(100% + 1px);
    position: absolute;
    top: 0;
    width: 1px;
  }

  &::before {
    left: -11px;

    ${({ bottom }) => bottom && css`
      transform: skew(-30deg);
    `};
    ${({ bottom }) => !bottom && css`
      transform: skew(30deg);
    `};
  }

  &::after {
    right: -11px;

    ${({ bottom }) => bottom && css`
      transform: skew(30deg);
    `};
    ${({ bottom }) => !bottom && css`
      transform: skew(-30deg);
    `};
  }
`;

const Right = styled.span`
  ${({ bottom, theme }) => bottom && css`
    border-bottom: 1px solid ${theme.colors.gray};
  `};
  ${({ bottom, theme }) => !bottom && css`
    border-top: 1px solid ${theme.colors.gray};
  `};
  flex: 1;
  position: relative;

  &::after {
    ${({ bottom, theme }) => bottom && css`
      border-bottom: 1px solid ${theme.colors.white};
      bottom: -1px;
    `};
    ${({ bottom, theme }) => !bottom && css`
      border-top: 1px solid ${theme.colors.white};
      top: -1px;
    `};
    border-right: 1px solid ${({ theme }) => theme.colors.white};
    content: "";
    height: 6px;
    position: absolute;
    right: 0;
    width: 6px;
  }
`;

const easing = (t, b, c, d) => -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;

const LoaderLine = ({ bottom, number }) => (
  <Bar bottom={bottom}>
    <Left bottom={bottom} />
    <Center bottom={bottom}>
      {number && (
        <>
          <CountUp
            start={0}
            end={number || 0}
            delay={1}
            duration={4}
            useEasing
            easingFn={easing}
          />
          <span> mph</span>
        </>
      )}
    </Center>
    <Right bottom={bottom} />
  </Bar>
);

LoaderLine.propTypes = {
  bottom: PropTypes.bool,
  number: PropTypes.number,
};

LoaderLine.defaultProps = {
  bottom: false,
  number: null,
};

export default LoaderLine;
