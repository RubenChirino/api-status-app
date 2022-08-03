import React from "react";
import ReactDOM from "react-dom/client";

// Global Sty;les
import "./styles/global.css";

// Pages
import App from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
