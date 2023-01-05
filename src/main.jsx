import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { Provider } from './store';

const breakPoints = {
  sm: '576px',
  md: '768px',
  lg: '1140px',
  down: (size) => `@media only screen and (max-width: ${breakPoints[size]})`,
  up: (size) => `@media only screen and (min-width: ${breakPoints[size]})`,
};

const theme = {
  primary: '',
  secondary: '',
  tertiary: '#b3b3d6',
  breakPoints,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
