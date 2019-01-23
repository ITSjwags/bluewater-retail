import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const Styles = createGlobalStyle`
  html {
    box-sizing: border-box;

    --containerWidth: 900px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.navy};
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 1.3;
  }

  /* hack needed from fullpage.js overscroll */
  .iScrollVerticalScrollbar {
    display: none !important;
  }
`;

const GlobalStyles = () => (
  <>
    <Normalize />
    <Styles />
  </>
);

export default GlobalStyles;
