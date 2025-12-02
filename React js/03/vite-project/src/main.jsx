import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App name="file.js" />
    <App name="app.js" />
    <App name="02.js" />
    <App name="03.js" />
  </StrictMode>
);
