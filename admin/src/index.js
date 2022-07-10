import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContext_Provider } from "./context/authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContext_Provider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContext_Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
