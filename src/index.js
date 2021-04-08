import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
