import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background:
    linear-gradient(to right, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 0,
    linear-gradient(to right, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 100%,
    linear-gradient(to left, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 0,
    linear-gradient(to left, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 0,
    linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 0,
    linear-gradient(to top, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 0 100%,
    linear-gradient(to top, ${({ theme }) => theme.colors.white} 1px, transparent 1px) 100% 100%;
  background-color: rgba(0, 0, 0, 0.32);
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: 6px 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: bold;
  min-height: 100px;
  margin-top: 24px;
  padding: 24px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;

const LoaderBar = () => (
  <Box>
    Initializing Flux Capacitor...
  </Box>
);

export default LoaderBar;
