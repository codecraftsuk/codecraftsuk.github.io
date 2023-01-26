import React from 'react';
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
        background-color: ${({ theme }) => theme.secondary};
        transition: all 800ms ease;

        height: 100vh;
        width: 100%;
        top: -180px;
        transform: skewY(-10deg);
        z-index: -1;
      }
    `}

  ${({ isHome }) =>
    !isHome &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.secondary};
        transition: all 800ms ease;

        height: 30vh;
        width: 100%;
        top: -175px;
        transform: skewY(3deg);
        z-index: -1;

        ${({ theme }) => theme.breakPoints.down('sm')} {
          top: -185px;
        }
      }
      zoom: 90%;
    `}
`;

function App() {
  const [theme] = useStore((state) => state.isDarkTheme);
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="app">
        <AppWrapper isHome={pathname === '/'}>
          <Navigation isDarkTheme={theme} />
          <Router />
        </AppWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
