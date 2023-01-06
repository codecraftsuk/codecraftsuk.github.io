import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation';
import Router from './routing';
import { useStore } from './store';
import { darkTheme, lightTheme } from './theme';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
  transition: all 1000ms ease;
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
      </ThemeProvider>
    </div>
  );
}

export default App;
