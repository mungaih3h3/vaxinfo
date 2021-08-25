import { ThemeProvider, CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import MainView from "./views/MainView";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainView />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
