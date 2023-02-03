import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';
import { Provider } from './store';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

const TRACKING_ID = 'G-Y259WSV5WW';
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider>
        <ScrollToTop />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
