import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "",
  secondary: "",
  tertiary: "#00c874",
};

ReactDOM.createRoot(document.getElementById("root")).render(
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
