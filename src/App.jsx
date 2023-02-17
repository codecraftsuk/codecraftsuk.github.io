import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css, ThemeProvider, useTheme } from 'styled-components';
import './App.css';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Router from './routing';
import { useStore } from './store';
import { darkTheme, lightTheme } from './theme';

const AppWrapper = styled.div`
  /* background-color: ${({ theme, isHome }) => (isHome ? theme.primary : theme.secondary)}; */
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
  transition: all 800ms ease;
  min-height: 100vh;
  position: relative;
  z-index: 100;

  p {
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.paragraphPrimary};
  }

  h1 {
    margin: 0 0 30px 0;
    font-size: 36px;
  }

  ${({ isHome }) =>
    isHome &&
    css`
      &::before {
        content: '';
        position: absolute;
        transition: all 800ms ease;
        background: ${({ theme }) => (theme.mode === 'light' ? 'rgb(146, 68, 190)' : 'background: rgb(97,80,106)')};
        background: ${({ theme }) =>
          theme.mode === 'light'
            ? 'linear-gradient(0deg, rgba(157,91,194,1) 0%, rgba(71,131,198,1) 64%, rgba(82,76,195,1) 100%)'
            : 'linear-gradient(90deg, #423947 0%, #353f49 70%, #403e5b 100%)'};

        height: ${({ height }) => height}px;
        width: 100%;
        top: 0px;
        z-index: -1;

        clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);

        ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
          clip-path: polygon(0 0, 100% 0%, 100% 89%, 0% 100%);
        }

        /* ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
          clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);
        } */

        background-size: 200% 200%;
        animation: gradient-bg 7s linear infinite;
      }

      @keyframes gradient-bg {
        0% {
          background-position: 50% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 50% 0%;
        }
      }
    `}

  ${({ isHome }) =>
    !isHome &&
    css`
      &::before {
        content: '';
        position: absolute;
        transition: all 800ms ease;

        background: ${({ theme }) => (theme.mode === 'light' ? 'rgb(146, 68, 190)' : 'background: rgb(97,80,106)')};
        background: ${({ theme }) =>
          theme.mode === 'light'
            ? 'linear-gradient(0deg, rgba(157,91,194,1) 0%, rgba(71,131,198,1) 64%, rgba(82,76,195,1) 100%)'
            : 'linear-gradient(90deg, #423947 0%, #353f49 70%, #403e5b 100%)'};

        height: 800px;
        width: 100%;
        top: 0px;
        /* transform: skewY(3deg); */
        z-index: -1;

        clip-path: polygon(0 0, 100% 0%, 100% 15%, 0 10%);

        background-size: 200% 200%;
        animation: gradient-bg 7s linear infinite;
      }
    `}
  zoom: 90%;
`;

function App() {
  const [theme] = useStore((state) => state.isDarkTheme);
  const { pathname } = useLocation();
  const [heroHeight, setHeroHeight] = useState(0);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="app">
        <AppWrapper isHome={pathname === '/'} height={heroHeight}>
          <Navigation isDarkTheme={theme} />
          <Router setHeroHeight={setHeroHeight} />
        </AppWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
