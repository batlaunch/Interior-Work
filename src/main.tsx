import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HomePage } from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);