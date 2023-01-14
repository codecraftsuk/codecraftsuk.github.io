import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css, ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Router from './routing';
import { useStore } from './store';
import { darkTheme, lightTheme } from './theme';

const AppWrapper = styled.div`
  background-color: ${({ theme, isHome }) => (isHome ? theme.primary : theme.secondary)};
  color: ${({ theme }) => theme.primaryText};
  transition: all 1000ms ease;
  min-height: 100vh;
  position: relative;
  z-index: 100;

  p {
    line-height: 30px;
    letter-spacing: 1.1px;
  }

  ${({ isHome }) =>
    isHome &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.secondary};
        transition: all 1000ms ease;

        height: 100vh;
        width: 100%;
        top: -180px;
        transform: skewY(-10deg);
        z-index: -1;
      }
    `}
`;

function App() {
  const [theme] = useStore((state) => state.isDarkTheme);
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="app">
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <AppWrapper isHome={pathname === '/'}>
          <Navigation isDarkTheme={theme} />
          <Router />
        </AppWrapper>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
