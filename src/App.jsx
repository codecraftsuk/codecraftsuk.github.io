import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Router from './routing';
import { useStore } from './store';
import { darkTheme, lightTheme } from './theme';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
  transition: all 1000ms ease;
  min-height: 100vh;
  position: relative;
  z-index: 100;

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
`;

function App() {
  const [theme] = useStore((state) => state.isDarkTheme);

  return (
    <div className="app">
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <AppWrapper>
          <Navigation isDarkTheme={theme} />
          <Router />
        </AppWrapper>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
